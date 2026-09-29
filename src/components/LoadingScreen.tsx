import React, { useEffect, useState } from 'react';
import { Sparkles, Terminal, ArrowRight } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState<number>(0);
  const [stageIndex, setStageIndex] = useState<number>(0);
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false);

  const loadingStages = [
    'Menginisialisasi portofolio Irfan Nabil Makarim...',
    'Menyiapkan modul React & arsitektur komponen...',
    'Memuat gaya visual tema biru cerah modern...',
    'Mengoptimasi antarmuka responsif...',
    'Selamat datang di portofolio!'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        // Smooth progressive increment
        const increment = prev < 60 ? Math.floor(Math.random() * 12) + 8 : Math.floor(Math.random() * 8) + 4;
        const nextVal = Math.min(prev + increment, 100);
        
        // Update stage based on progress
        if (nextVal > 85) setStageIndex(4);
        else if (nextVal > 65) setStageIndex(3);
        else if (nextVal > 40) setStageIndex(2);
        else if (nextVal > 15) setStageIndex(1);
        
        return nextVal;
      });
    }, 120);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const exitTimer = setTimeout(() => {
        setIsFadingOut(true);
        const finishTimer = setTimeout(() => {
          onComplete();
        }, 500);
        return () => clearTimeout(finishTimer);
      }, 400);

      return () => clearTimeout(exitTimer);
    }
  }, [progress, onComplete]);

  const handleSkip = () => {
    setIsFadingOut(true);
    setTimeout(onComplete, 200);
  };

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Layar memuat portofolio"
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 text-slate-100 transition-opacity duration-500 ease-out select-none ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background ambient decorative glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-500/15 rounded-full blur-3xl pointer-events-none"
      />
      <div 
        aria-hidden="true" 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-400/10 rounded-full blur-2xl pointer-events-none"
      />

      <div className="relative z-10 w-full max-w-md px-6 flex flex-col items-center text-center">
        {/* Modern Branded Monogram with Electric Ring Spinner */}
        <div className="relative mb-8 flex items-center justify-center">
          {/* Dual concentric rotating spinners */}
          <div 
            aria-hidden="true" 
            className="w-24 h-24 rounded-2xl border-2 border-slate-800 border-t-sky-400 border-r-cyan-400 animate-spin"
            style={{ animationDuration: '2.5s' }}
          />
          <div 
            aria-hidden="true" 
            className="absolute inset-1.5 rounded-xl border border-sky-500/20 border-b-sky-300 animate-spin"
            style={{ animationDuration: '1.8s', animationDirection: 'reverse' }}
          />
          
          {/* Monogram Box */}
          <div className="absolute inset-3 bg-slate-900/90 backdrop-blur-md rounded-lg flex flex-col items-center justify-center shadow-lg shadow-sky-500/20 border border-sky-500/30">
            <span className="text-xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-500">
              INM
            </span>
          </div>
        </div>

        {/* Title & Identity */}
        <h1 className="text-2xl font-bold tracking-tight text-white mb-1">
          Irfan Nabil Makarim
        </h1>
        <p className="text-xs uppercase tracking-widest text-sky-400 font-semibold mb-6 flex items-center justify-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Software Engineer & Full-Stack Developer</span>
        </p>

        {/* Progress Bar Container */}
        <div className="w-full bg-slate-900 border border-slate-800 rounded-full h-2 p-0.5 mb-3 overflow-hidden shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-sky-500 via-cyan-400 to-blue-500 rounded-full transition-all duration-150 ease-out shadow-[0_0_12px_rgba(56,189,248,0.6)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Status Text & Numerical Counter */}
        <div className="w-full flex items-center justify-between text-xs text-slate-400 mb-6 font-mono tabular-nums">
          <div className="flex items-center gap-1.5 truncate max-w-[280px] text-left">
            <Terminal className="w-3.5 h-3.5 text-sky-400 shrink-0" />
            <span className="truncate text-slate-300">{loadingStages[stageIndex]}</span>
          </div>
          <span className="font-semibold text-sky-400">{progress}%</span>
        </div>

        {/* Quick Skip Button */}
        <button
          onClick={handleSkip}
          type="button"
          className="text-xs text-slate-400 hover:text-sky-300 flex items-center gap-1 py-1.5 px-3 rounded-md hover:bg-slate-900/60 transition-colors border border-transparent hover:border-slate-800 cursor-pointer"
        >
          <span>Masuk Langsung</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};
