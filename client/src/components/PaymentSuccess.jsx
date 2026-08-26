import { useNavigate } from "react-router-dom";

export default function PaymentSuccess() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center text-white">
      <div className="text-center">

        <div className="text-6xl">
          🎉
        </div>

        <h1 className="text-3xl font-bold text-green-500 mt-4">
          Payment Successful!
        </h1>

        <p className="text-gray-400 mt-3">
          Your payment has been completed successfully.
        </p>

        <button
          onClick={() => navigate("/")}
          className="mt-6 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg"
        >
          Continue
        </button>

      </div>
    </div>
  );
}