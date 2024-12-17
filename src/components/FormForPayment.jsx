import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51QX8J8H2VHxHqwNVVEVWLLDzvDBRtGxsIIKKIZIQaai2spcpm4Hx066T0jls0TNuJqwEYrPUIGfgNcP6cULxWjWn00HMOuAH9O"
);

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("Payment Error:", error.message);
      alert("Error: " + error.message);
    } else {
      console.log("Payment Success:", paymentMethod);
      alert("Payment successful!");
    }
  };

  return (
    <div className="card-element-container">
      <CardElement options={{ hidePostalCode: true }} />
    </div>
  );
};

const FormForPayment = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
);

export default FormForPayment;
