import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

import PaymentSuccess from "./PaymentSuccess";
import PaymentFail from "./PaymentFail";

const stripePromise = loadStripe(
  import.meta.env.VITE_STRIPE_PUBLIC_KEY
);

export default function PaymentResult() {
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const checkPaymentStatus = async () => {
      try {
        const stripe = await stripePromise;

        const clientSecret = new URLSearchParams(
          window.location.search
        ).get("payment_intent_client_secret");

        if (!clientSecret) {
          setStatus("failed");
          return;
        }

        const { paymentIntent, error } =
          await stripe.retrievePaymentIntent(clientSecret);

        if (error || !paymentIntent) {
          setStatus("failed");
          return;
        }

        if (paymentIntent.status === "succeeded") {
          setStatus("success");
        } else {
          setStatus("failed");
        }
      } catch (error) {
        console.error("Payment status error:", error);
        setStatus("failed");
      }
    };

    checkPaymentStatus();
  }, []);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Checking payment status...
      </div>
    );
  }

  if (status === "success") {
    return <PaymentSuccess />;
  }

  return <PaymentFail />;
}