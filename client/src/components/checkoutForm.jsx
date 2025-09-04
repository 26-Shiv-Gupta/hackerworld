import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckoutForm = ({ courseId, onSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setLoading(true);

    // 1. Call backend to create a PaymentIntent
    const res = await fetch("/api/payment/create-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ courseId }),
      credentials: "include", // include session cookies (for Clerk/your auth)
    });
    const { clientSecret } = await res.json();

    // 2. Collect card details and confirm payment
    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    // 3. Handle result
    if (error) {
      setStatus(error.message);
    } else if (paymentIntent.status === "succeeded") {
      setStatus("Payment successful! Course access will be granted soon.");
      if (onSuccess) onSuccess();
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-gray-800 p-6 rounded">
      <CardElement className="bg-white p-3 rounded" />
      <button
        disabled={!stripe || loading}
        className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded font-semibold"
        type="submit"
      >
        {loading ? "Processing..." : "Pay"}
      </button>
      {status && <div className="text-center mt-2 text-green-500">{status}</div>}
    </form>
  );
};

export default CheckoutForm;
