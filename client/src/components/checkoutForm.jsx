import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState, useEffect } from "react";

const CheckoutForm = ({ courseId, onSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  // 1. Fetch clientSecret from backend when component mounts
  useEffect(() => {
    const createIntent = async () => {
      try {
        const res = await fetch("/api/payment/create-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ courseId }),
          credentials: "include", // keep auth cookies/session
        });
        const data = await res.json();
        if (data.clientSecret) {
          setClientSecret(data.clientSecret);
        } else {
          setStatus(data.error || "Failed to create payment intent");
        }
      } catch (err) {
        setStatus("Server error: " + err.message);
      }
    };
    createIntent();
  }, [courseId]);

  // 2. Handle payment submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    if (!stripe || !elements) {
      setLoading(false);
      return;
    }

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: window.location.origin + "/payment-success",
      },
    });

    if (error) {
      setStatus(error.message);
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      setStatus("✅ Payment successful! Course access granted.");
      if (onSuccess) onSuccess();
    } else {
      setStatus("Processing payment...");
    }
    setLoading(false);
  };

  // 3. Render payment UI
  if (!clientSecret) return <div className="text-white">Loading payment form...</div>;

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-gray-800 p-6 rounded">
      <PaymentElement /> {/* This shows card, UPI, wallets, netbanking automatically */}
      <button
        disabled={!stripe || loading}
        className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded font-semibold w-full"
        type="submit"
      >
        {loading ? "Processing..." : "Pay"}
      </button>
      {status && <div className="text-center mt-2 text-green-500">{status}</div>}
    </form>
  );
};

export default CheckoutForm;
