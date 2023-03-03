const paymentForm = document.querySelector('#payment-form');
const stripe = Stripe('YOUR_STRIPE_PUBLIC_KEY');
const elements = stripe.elements();
const card = elements.create('card');

paymentForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const { paymentIntent } = await stripe.confirmCardPayment(
    clientSecret,
    {
      payment_method: {
        card: cardElement,
      },
    }
  );

  if (paymentIntent.status === 'succeeded') {
    // Payment was successful, update your UI or redirect to a success page
  } else {
    // Payment failed, display an error message to the user
  }
});