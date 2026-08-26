import { useNavigate } from "react-router-dom";

export default function PaymentFail() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center text-white">
      <div className="text-center">

        <div className="text-6xl">
          ❌
        </div>

        <h1 className="text-3xl font-bold text-red-500 mt-4">
          Payment Failed
        </h1>

        <p className="text-gray-400 mt-3">
          Your payment could not be completed.
          Please try again.
        </p>

        <button
          onClick={() => navigate(-1)}
          className="mt-6 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg"
        >
          Try Again
        </button>

      </div>
    </div>
  );
}