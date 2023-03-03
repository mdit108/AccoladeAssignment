const express = require('express');
const stripe = require('stripe')('YOUR_STRIPE_SECRET_KEY');

const app = express();
const port = 3000;

//Route to create Payment
app.post('/create-payment-intent', async (req, res) => {
  const { amount, currency } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
    });

    res.json({ client_secret: paymentIntent.client_secret });
  } catch (e) {
    res.status(400).send(`Payment failed: ${e.message}`);
  }
});

//Route to confirm payment
app.post('/confirm-payment', async (req, res) => {
  const { paymentMethodId, paymentIntentId } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.confirm(paymentIntentId, {
      payment_method: paymentMethodId,
    });

    res.json({ success: true });
  } catch (e) {
    res.status(400).send(`Payment confirmation failed: ${e.message}`);
  }
});

