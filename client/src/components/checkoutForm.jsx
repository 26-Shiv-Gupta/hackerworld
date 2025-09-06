import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckoutForm = ({ courseId, onSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [upiId, setUpiId] = useState(""); // ✅ new state for UPI

  const handleCardPayment = async (e) => {
    e.preventDefault();
    setStatus("");
    setLoading(true);

    // 1. Call backend to create a PaymentIntent
    const res = await fetch("/api/payment/create-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ courseId }),
      credentials: "include",
    });
    const { clientSecret } = await res.json();

    // 2. Confirm payment with Card
    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    // 3. Handle result
    if (error) setStatus(error.message);
    else if (paymentIntent.status === "succeeded") {
      setStatus("Payment successful! Course access will be granted soon.");
      if (onSuccess) onSuccess();
    }
    setLoading(false);
  };

  const handleUpiPayment = async (e) => {
    e.preventDefault();
    setStatus("");
    setLoading(true);

    // 1. Call backend to create a PaymentIntent for UPI
    const res = await fetch("/api/payment/create-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ courseId }),
      credentials: "include",
    });
    const { clientSecret } = await res.json();

    // 2. Confirm payment with UPI
    const { error, paymentIntent } = await stripe.confirmPayment({
      clientSecret,
      payment_method: {
        type: "upi",
        upi: { vpa: upiId }, // ✅ user entered UPI ID
      },
    });

    // 3. Handle result
    if (error) setStatus(error.message);
    else if (paymentIntent.status === "succeeded") {
      setStatus("UPI Payment successful! Course access will be granted soon.");
      if (onSuccess) onSuccess();
    }
    setLoading(false);
  };

  return (
    <form className="space-y-4 bg-gray-800 p-6 rounded">
      {/* Card Payment */}
      <CardElement className="bg-white p-3 rounded" />
      <button
        disabled={!stripe || loading}
        className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded font-semibold w-full"
        type="button"
        onClick={handleCardPayment}
      >
        {loading ? "Processing..." : "Pay with Card"}
      </button>

      {/* Divider */}
      <div className="text-center text-gray-400">OR</div>

      {/* UPI Payment */}
      <input
        type="text"
        value={upiId}
        onChange={(e) => setUpiId(e.target.value)}
        placeholder="Enter your UPI ID (e.g., name@upi)"
        className="w-full p-3 rounded bg-white"
      />
      <button
        disabled={!stripe || loading || !upiId}
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded font-semibold w-full"
        type="button"
        onClick={handleUpiPayment}
      >
        {loading ? "Processing..." : "Pay with UPI"}
      </button>

      {status && <div className="text-center mt-2 text-green-500">{status}</div>}
    </form>
  );
};

export default CheckoutForm;
