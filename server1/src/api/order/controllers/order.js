"use strict";

/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

// Declare lineItems as a global variable outside the create function
let lineItems;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    const { products, userName, email } = ctx.request.body;
    try {
      // Retrieve item information
      lineItems = await Promise.all(
        products.map(async (product) => {
          const item = await strapi
            .service("api::item.item")
            .findOne(product.id);

          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: item.name,
              },
              unit_amount: item.price * 100,
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
        body: JSON.stringify({ lineItems }),
      });

      const responseData = await response.json();

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
