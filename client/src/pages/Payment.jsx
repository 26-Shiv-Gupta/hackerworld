// client/src/pages/payment.jsx
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useAuth } from '@clerk/clerk-react';

// set this in client/.env: VITE_STRIPE_PUBLIC_KEY=pk_test_...
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

function CheckoutForm({ clientSecret }) {
  const stripe = useStripe();
  const elements = useElements();
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    if (!stripe || !elements) {
      setLoading(false);
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: window.location.origin + "/payment-success",
      },
    });

    if (error) setStatus(error.message);
    else setStatus("Processing... You will be redirected.");
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-8 bg-gray-900 rounded-lg shadow">
      <PaymentElement />
      <button disabled={loading || !stripe} className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded font-semibold w-full mt-6">
        {loading ? "Processing..." : "Pay"}
      </button>
      {status && <div className="text-center text-red-300 mt-2">{status}</div>}
    </form>
  );
}

export default function PaymentPage() {
  const { courseId } = useParams();
  const [clientSecret, setClientSecret] = useState("");
  const [error, setError] = useState("");
  const { getToken } = useAuth();

  useEffect(() => {
    const createIntent = async () => {
      try {
        const token = await getToken(); // Clerk session token
        const res = await fetch("http://localhost:5000/api/payment/create-intent", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ courseId }),
        });
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setClientSecret(data.clientSecret);
      } catch (err) {
        setError(err.message);
      }
    };
    createIntent();
  }, [courseId, getToken]);

  if (error) return <div className="text-center text-red-500 mt-6">{error}</div>;
  if (!clientSecret) return <div className="text-center text-white">Loading payment info...</div>;

  const appearance = { theme: 'stripe' };
  const options = { clientSecret, appearance };

  return (
    <Elements stripe={stripePromise} options={options}>
      <h2 className="text-2xl font-bold text-white mb-4 text-center">Complete Your Payment</h2>
      <CheckoutForm clientSecret={clientSecret} />
    </Elements>
  );
}
