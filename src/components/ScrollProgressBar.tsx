import React, { useEffect, useState } from 'react';

export const ScrollProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    let ticking = false;

    const updateScrollProgress = () => {
      const scrollY = window.scrollY;
      const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (totalScrollHeight <= 0) {
        setScrollProgress(0);
      } else {
        const progress = Math.min(Math.max((scrollY / totalScrollHeight) * 100, 0), 100);
        setScrollProgress(progress);
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollProgress);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    // Initial check
    updateScrollProgress();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div
      role="progressbar"
      aria-label="Kemajuan membaca portofolio"
      aria-valuenow={Math.round(scrollProgress)}
      aria-valuemin={0}
      aria-valuemax={100}
      className="fixed top-0 left-0 right-0 z-50 h-[3px] pointer-events-none bg-slate-200/30 dark:bg-slate-800/30 backdrop-blur-xs"
    >
      <div
        className="h-full relative bg-gradient-to-r from-sky-500 via-cyan-400 to-blue-600 transition-[width] duration-100 ease-out shadow-[0_0_8px_rgba(56,189,248,0.6)]"
        style={{ width: `${scrollProgress}%` }}
      >
        {/* Glow bead on leading edge when scrolling */}
        {scrollProgress > 0 && scrollProgress < 100 && (
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_6px_rgba(56,189,248,0.9)] opacity-90" />
        )}
      </div>
    </div>
  );
};
