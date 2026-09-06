import { useNavigate } from "react-router-dom";

export default function PaymentFail() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center text-white px-4">
      <div className="text-center bg-bg-card border border-red-500/20 rounded-xl p-10 max-w-md w-full">

        <div className="inline-flex items-center gap-2 bg-black/30 border border-red-500/30 rounded-full px-3 py-1 mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
          <span className="text-[11px] font-mono-terminal tracking-widest text-red-400 uppercase">
            [ERROR] Transaction Failed
          </span>
        </div>

        <div className="text-5xl mb-4">
          ❌
        </div>

        <h1 className="text-2xl md:text-3xl font-extrabold text-red-400">
          Payment Failed
        </h1>

        <p className="text-gray-400 mt-3">
          Your payment could not be completed. Please try again.
        </p>

        <button
          onClick={() => navigate(-1)}
          className="mt-8 border border-border-subtle hover:border-cyan-bright text-white px-8 py-3 rounded-lg text-sm font-bold uppercase tracking-wide transition-colors cursor-pointer w-full"
        >
          Try Again
        </button>

      </div>
    </div>
  );
}