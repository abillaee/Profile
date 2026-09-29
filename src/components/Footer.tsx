import React from 'react';
import { ArrowUp, RotateCw, Heart, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ThemeSwitcher } from './ThemeSwitcher';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onReplayLoading: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onReplayLoading }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-20 border-t border-slate-200 dark:border-slate-800/80 bg-white/90 dark:bg-slate-950/90 py-10 px-4 sm:px-8 text-xs text-slate-600 dark:text-slate-400 transition-colors">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="w-8 h-8 rounded-lg bg-sky-50 dark:bg-sky-500/20 border border-sky-200 dark:border-sky-500/30 flex items-center justify-center font-bold text-sky-600 dark:text-sky-400 text-xs">
            INM
          </div>
          <div>
            <div className="font-bold text-slate-900 dark:text-slate-200">
              {PERSONAL_INFO.name}
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400">
              © {new Date().getFullYear()} Hak Cipta Dilindungi. Dibangun dengan React.js & Tailwind CSS.
            </div>
          </div>
        </div>

        {/* Quick Nav Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium">
          <button
            onClick={() => onNavigate('beranda')}
            className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors cursor-pointer"
          >
            Beranda
          </button>
          <span className="text-slate-300 dark:text-slate-700">·</span>
          <button
            onClick={() => onNavigate('tentang')}
            className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors cursor-pointer"
          >
            Tentang
          </button>
          <span className="text-slate-300 dark:text-slate-700">·</span>
          <button
            onClick={() => onNavigate('portofolio')}
            className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors cursor-pointer"
          >
            Portofolio
          </button>
          <span className="text-slate-300 dark:text-slate-700">·</span>
          <button
            onClick={() => onNavigate('kontak')}
            className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors cursor-pointer"
          >
            Kontak
          </button>
        </div>

        {/* Action Controls: Theme Switcher, Replay, Scroll to Top */}
        <div className="flex items-center gap-2.5">
          <ThemeSwitcher variant="button" />

          <button
            onClick={onReplayLoading}
            type="button"
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-300 border border-slate-300 dark:border-slate-800 transition-colors cursor-pointer"
            title="Tampilkan kembali layar loading awal"
          >
            <RotateCw className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            <span className="hidden sm:inline">Tes Loading</span>
          </button>

          <button
            onClick={scrollToTop}
            aria-label="Kembali ke atas"
            className="p-2 rounded-xl bg-slate-100 hover:bg-sky-500 hover:text-white dark:bg-slate-900 dark:hover:bg-sky-500 dark:hover:text-slate-950 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-800 transition-all cursor-pointer shadow-sm"
            title="Kembali ke bagian paling atas"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
