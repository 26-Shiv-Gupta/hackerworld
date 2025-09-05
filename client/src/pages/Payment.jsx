import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../components/checkoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

export default function PaymentPage({ courseId }) {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm courseId={courseId} />
    </Elements>
  );
}
