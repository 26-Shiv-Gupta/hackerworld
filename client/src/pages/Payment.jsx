// client/src/pages/payment.jsx
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useAuth } from '@clerk/clerk-react';

// In client/.env: VITE_STRIPE_PUBLIC_KEY=pk_test_...
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
        return_url: window.location.origin + "/payment-result",
      },
    });

    if (error) setStatus(error.message);
    else setStatus("Processing... You will be redirected.");
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-8 bg-bg-card border border-border-subtle rounded-xl shadow-lg">
      <PaymentElement />
      <button
        disabled={loading || !stripe}
        className="bg-cyan-bright hover:bg-cyan-glow text-bg-primary px-6 py-3 rounded-lg text-sm font-bold uppercase tracking-wide w-full mt-6 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
      >
        {loading ? "Processing..." : "Pay"}
      </button>
      {status && (
        <div className="text-center text-cyan-bright text-sm mt-3 font-mono-terminal">
          {status}
        </div>
      )}
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
        const res = await fetch("https://hackerworld.onrender.com/api/payment/create-intent", {
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

  if (error) {
    return (
      <main className="bg-bg-primary min-h-screen flex items-center justify-center px-4">
        <div className="text-center text-red-400 bg-bg-card border border-red-500/20 rounded-xl p-6 max-w-md">
          {error}
        </div>
      </main>
    );
  }

  if (!clientSecret) {
    return (
      <main className="bg-bg-primary min-h-screen flex items-center justify-center px-4">
        <div className="text-center text-gray-400 font-mono-terminal">
          <span className="text-terminal-green">[...]</span> Loading payment info...
        </div>
      </main>
    );
  }

  const appearance = {
    theme: 'night',
    variables: {
      colorPrimary: '#38bdf8',
      colorBackground: '#0f1524',
      colorText: '#ffffff',
      colorDanger: '#f87171',
      fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
      borderRadius: '8px',
    },
  };
  const options = { clientSecret, appearance };

  return (
    <main className="bg-bg-primary min-h-screen py-16 px-4">
      <h2 className="text-2xl font-extrabold text-white mb-8 text-center">
        Complete Your <span className="text-gradient-cyan">Payment</span>
      </h2>
      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm clientSecret={clientSecret} />
      </Elements>
    </main>
  );
}