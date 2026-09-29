import React from 'react';
import { Menu, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ThemeSwitcher } from './ThemeSwitcher';

interface NavbarMobileProps {
  onToggleMobileMenu: () => void;
  onOpenCvModal: () => void;
  activeSectionTitle: string;
}

export const NavbarMobile: React.FC<NavbarMobileProps> = ({
  onToggleMobileMenu,
  onOpenCvModal,
  activeSectionTitle,
}) => {
  return (
    <header className="sticky top-0 z-30 flex lg:hidden items-center justify-between px-4 py-3 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      {/* Brand & Active Pill */}
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleMobileMenu}
          aria-label="Buka menu navigasi"
          className="p-2 -ml-1 rounded-lg text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors"
        >
          <Menu className="w-5 h-5 text-sky-600 dark:text-sky-400" />
        </button>

        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-sky-600 to-cyan-400 flex items-center justify-center text-slate-950 font-bold text-xs">
            IN
          </div>
          <div>
            <h1 className="text-sm font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-[10px] text-sky-600 dark:text-sky-400 font-medium leading-none capitalize">
              {activeSectionTitle}
            </p>
          </div>
        </div>
      </div>

      {/* Action Buttons: Theme Switcher & Quick CV */}
      <div className="flex items-center gap-2">
        <ThemeSwitcher variant="button" />

        <button
          onClick={onOpenCvModal}
          type="button"
          aria-label="Lihat CV"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-50 dark:bg-sky-500/10 hover:bg-sky-100 dark:hover:bg-sky-500/20 text-sky-700 dark:text-sky-400 border border-sky-200 dark:border-sky-500/30 text-xs font-semibold transition-colors"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>CV</span>
        </button>
      </div>
    </header>
  );
};
