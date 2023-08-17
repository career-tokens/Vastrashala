"use strict";

/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

// Declare lineItems as a global variable outside the create function
let lineItems, productIds;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    const { products, userName, email } = ctx.request.body;
     productIds = products.map(product => product.id);

    try {
      // Retrieve item information
      lineItems = await Promise.all(
        products.map(async (product) => {
          const item = await strapi
            .service("api::item.item")
            .findOne(product.id);

          return {
            price_data: {
              currency: "inr",
              product_data: {
                name: item.name,
              },
              unit_amount: item.price*100,
            },
            quantity: product.count,
          };
        })
      );

      // Send lineItems to the backend server for stripe session creation
      const response = await fetch('http://localhost:8080/api/create-stripe-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ lineItems,email,userName }),
      });

      const responseData = await response.json();

          //preparing the checked items for standby in case the buyout is successful
          const response2 = await fetch(`http://localhost:8080/api/users/${email}`);
          const data = await response2.json();
          const body = {
            _id: data.data._id,
            title: data.data._id,
            body: data.data.body,
            change:productIds,
            lastCreatedAt: Date.now(),
            
    };
    console.log(body)
          await fetch(`http://localhost:8080/api/users/${email}`, {
            method: "PUT",
            body: JSON.stringify(body),
            headers: {
              "Content-Type": "application/json",
            },
          });
      
      // Create the item
      await strapi
        .service("api::order.order")
        .create({ data: { userName, products, stripeSessionId: responseData.id } });

      // Return the session id from the backend server
      return { id: responseData.id };
    } catch (error) {
      // In case of an error, add the lineItems to the error message
      ctx.response.status = 500;
      return {
        error: {
          message: `There was a problem creating the charge. lineItems: ${JSON.stringify(lineItems)}`,
        },
      };
    }
  },
}));
