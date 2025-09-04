// server/src/routes/stripeWebhook.js
const express = require('express');
const router = express.Router();
const User = require('../models/User'); // change to the actual filename (user.js or User.js)
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

router.post('/webhook/stripe', express.raw({ type: 'application/json' }), async (req, res) => {
  if (!endpointSecret) {
    console.error('STRIPE_WEBHOOK_SECRET is not configured');
    return res.status(500).send('Webhook secret not configured');
  }

  const sig = req.headers['stripe-signature'];
  let event;

  try {
    // req.body is a Buffer because of express.raw()
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err) {
    console.error('Stripe webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  try {
    if (event.type === 'payment_intent.succeeded') {
      const paymentIntent = event.data.object;
      const { userId, courseId } = paymentIntent.metadata || {};

      if (userId && courseId) {
        await User.findByIdAndUpdate(
          userId,
          { $addToSet: { enrolledCourses: courseId } },
          { new: true }
        );
      } else {
        console.warn('Missing userId or courseId in paymentIntent.metadata', paymentIntent.metadata);
      }
    }
  } catch (err) {
    console.error('Error processing webhook event:', err);
  }

  res.status(200).json({ received: true });
});

module.exports = router;
