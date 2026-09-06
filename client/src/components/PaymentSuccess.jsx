import { useNavigate } from "react-router-dom";

export default function PaymentSuccess() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center text-white px-4">
      <div className="text-center bg-bg-card border border-terminal-green/20 rounded-xl p-10 max-w-md w-full">

        <div className="inline-flex items-center gap-2 bg-black/30 border border-terminal-green/30 rounded-full px-3 py-1 mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-terminal-green animate-pulse" />
          <span className="text-[11px] font-mono-terminal tracking-widest text-terminal-green uppercase">
            [OK] Transaction Verified
          </span>
        </div>

        <div className="text-5xl mb-4">
          🎉
        </div>

        <h1 className="text-2xl md:text-3xl font-extrabold text-terminal-green">
          Payment Successful!
        </h1>

        <p className="text-gray-400 mt-3">
          Your payment has been completed successfully.
        </p>

        <button
          onClick={() => navigate("/")}
          className="mt-8 bg-cyan-bright hover:bg-cyan-glow text-bg-primary px-8 py-3 rounded-lg text-sm font-bold uppercase tracking-wide transition-colors cursor-pointer w-full"
        >
          Continue
        </button>

      </div>
    </div>
  );
}