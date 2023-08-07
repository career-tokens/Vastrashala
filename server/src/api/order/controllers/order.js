"use strict";

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
console.log(process.env.STRIPE_SECRET_KEY)

/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

// Declare lineItems as a global variable outside the create function
let lineItems,session;

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

      // Create a stripe session
       session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        customer_email: email,
        mode: "payment",
        success_url: "http://localhost:3000/checkout/success",
        cancel_url: "http://localhost:3000",
        line_items: lineItems,
      });

      // Create the item
      await strapi
        .service("api::order.order")
        .create({ data: { userName, products, stripeSessionId: session.id } });

      // Return the session id
      return { id: session.id };
    } catch (error) {
      // In case of an error, add the lineItems to the error message
      ctx.response.status = 500;
      return {
        error: {
          message: `There was a problem creating the charge. lineItems: ${JSON.stringify(session)}`,
        },
      };
    }
  },
}));
