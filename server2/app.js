require("dotenv").config()
const mongoose = require("mongoose");
const express = require("express")
const app = express()

const userRouter = require("./routes/UserRoutes");


const cors = require("cors")
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: [ 'e-commerce-b4f2toq0t-mainakkaniam.vercel.app', 'https://vastra-backend-node.onrender.com'],
  })
)
//stripe-ingg
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

app.post('/api/create-stripe-session', async (req, res) => {
    const { lineItems,email,userName } = req.body;
  
    try {
      // Create a stripe session
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        customer_email: email, // Set a default email or get it from the client-side
        mode: "payment",
        allow_promotion_codes: true,
        success_url: "http://localhost:3000/checkout/success", // Adjust the URL accordingly
        cancel_url: "http://localhost:3000", // Adjust the URL accordingly
        line_items: lineItems,
      });
  
      // Return the session id
      res.json({ id: session.id });
    } catch (error) {
      console.error("Error creating stripe session:", error);
      res.status(500).json({ error: "There was an error creating the stripe session." });
    }
});
  

//user/admin panel

app.use("/api/users", userRouter);
mongoose.connect(process.env.MONGODB_URI);
  
  app.listen(8080, () => {
    console.log('Express server listening on port 8080');
  });
  
  
  