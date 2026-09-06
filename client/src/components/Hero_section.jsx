import React, { useState, useEffect } from "react";
import { PlayIcon } from "@heroicons/react/solid";
import { useNavigate } from 'react-router-dom';

const CODE_LINES = [
  { n: 1, jsx: <><span className="text-purple-400">const</span> <span className="text-cyan-bright">crypto</span> = <span className="text-purple-400">require</span>(<span className="text-terminal-green">'crypto'</span>);</> },
  { n: 2, jsx: <span className="text-gray-500">// ...auth token</span> },
  { n: 3, jsx: <><span className="text-purple-400">function</span> <span className="text-cyan-bright">SecureToken</span>(user) {'{'}</> },
  { n: 4, jsx: <>&nbsp;&nbsp;crypto.createHash(<span className="text-terminal-green">'sha256'</span>);</> },
  { n: 5, jsx: <>&nbsp;&nbsp;hash.update(user.id + Date.now());</> },
  { n: 6, jsx: <>&nbsp;&nbsp;<span className="text-purple-400">const</span> token = ha</> },
];

const Hero_section = () => {
  const navigate = useNavigate();
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines >= CODE_LINES.length) return;
    const timer = setTimeout(() => {
      setVisibleLines((v) => v + 1);
    }, 450);
    return () => clearTimeout(timer);
  }, [visibleLines]);

  // Restart the typing loop once finished
  useEffect(() => {
    if (visibleLines !== CODE_LINES.length) return;
    const reset = setTimeout(() => setVisibleLines(0), 2500);
    return () => clearTimeout(reset);
  }, [visibleLines]);

  return (
    <section className="relative bg-bg-primary py-12 md:py-16 overflow-hidden">
      {/* Animated ambient glow accents */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-cyan-glow/10 rounded-full blur-3xl pointer-events-none animate-blob" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-cyan-bright/10 rounded-full blur-3xl pointer-events-none animate-blob-delay" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left column - content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-bg-card border border-border-subtle rounded-full px-3 py-1 mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-bright animate-pulse" />
              <span className="text-[11px] font-mono-terminal tracking-widest text-gray-300 uppercase">
                System Secure // Enrollment 2026
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
              Master <span className="text-white">Ethical Hacking</span>
              <br />
              <span className="text-gradient-cyan">&amp; Cybersecurity Skills</span>
            </h1>

            <p className="text-base text-gray-400 mb-6 max-w-xl">
              Join thousands of students learning cutting-edge cybersecurity
              techniques through hands-on courses, real-world labs, and
              industry-certified programs.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <button
                className="bg-cyan-bright hover:bg-cyan-glow text-bg-primary px-6 py-3 rounded-lg text-sm font-bold tracking-wide uppercase transition-colors shadow-lg shadow-cyan-bright/20 cursor-pointer"
                onClick={() => navigate('/courses')}
              >
                Start Learning Today
              </button>
              <button className="border border-border-subtle hover:border-cyan-bright text-white px-6 py-3 rounded-lg text-sm font-bold tracking-wide uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer">
                Watch Demo
                <PlayIcon className="h-4 w-4" />
              </button>
            </div>

            <div className="bg-bg-card border border-border-subtle rounded-lg p-4 font-mono-terminal text-xs max-w-xl">
              <p className="text-gray-400 mb-1.5">
                <span className="text-terminal-green">[OK]</span> Validating alumni database...{" "}
                <span className="text-white font-semibold">10,000+ Verified</span>
              </p>
              <p className="text-gray-400 mb-1.5">
                <span className="text-terminal-green">[OK]</span> Checking placement rate...{" "}
                <span className="text-white font-semibold">94% Placed</span>
              </p>
              <p className="text-cyan-bright">
                root@thw:~$ <span className="text-gray-300">Awaiting command</span>
                <span className="inline-block w-1.5 h-3 bg-cyan-bright ml-1 cursor-blink align-middle" />
              </p>
            </div>
          </div>

          {/* Right column - animated code editor mockup */}
          <div className="relative hidden lg:block">
            <div className="bg-bg-card border border-border-subtle rounded-xl overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-border-subtle bg-black/20">
                <span className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
                </span>
                <div className="flex items-center gap-2 text-xs font-mono-terminal text-gray-400">
                  <span className="text-yellow-400">JS</span>
                  ~/exploits/js_payload
                </div>
                <PlayIcon className="h-4 w-4 text-gray-500" />
              </div>

              <div className="p-4 font-mono-terminal text-xs leading-relaxed relative min-h-[240px]">
                {CODE_LINES.slice(0, visibleLines).map((line) => (
                  <div key={line.n} className="text-gray-500 flex gap-3">
                    <span className="w-4 text-right text-gray-600 select-none">{line.n}</span>
                    <span>{line.jsx}</span>
                  </div>
                ))}
                {visibleLines < CODE_LINES.length && (
                  <span className="inline-block w-1.5 h-3 bg-cyan-bright ml-7 cursor-blink" />
                )}

                <div className="absolute top-14 left-8 bg-bg-primary border border-cyan-bright/30 rounded-lg px-3 py-2.5 flex items-center gap-3 shadow-lg glow-cyan">
                  <div className="h-7 w-7 rounded-md bg-cyan-bright/10 flex items-center justify-center text-cyan-bright text-base">
                    🛡
                  </div>
                  <div>
                    <p className="text-white text-xs font-semibold">Threat Shield</p>
                    <p className="text-terminal-green text-[10px] font-mono-terminal">ACTIVE</p>
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 text-6xl font-extrabold text-white/5 select-none">
                  JS
                </div>
              </div>
            </div>

            {/* CPU usage floating card */}
            <div className="absolute -bottom-5 -right-5 bg-bg-card border border-border-subtle rounded-lg px-4 py-3 shadow-xl">
              <div className="flex items-center justify-between gap-5 mb-1.5">
                <span className="text-[10px] font-mono-terminal text-gray-400 tracking-widest">CPU USAGE</span>
                <span className="text-cyan-bright font-bold text-xs">92%</span>
              </div>
              <div className="flex items-end gap-1 h-6">
                {[40, 55, 35, 90, 60, 45, 30].map((h, i) => (
                  <div
                    key={i}
                    className={`w-1.5 rounded-sm transition-all duration-500 ${i === 3 ? "bg-cyan-bright" : "bg-cyan-bright/30"}`}
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero_section;