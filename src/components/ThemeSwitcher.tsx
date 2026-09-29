import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeSwitcherProps {
  variant?: 'button' | 'compact' | 'toggle-pill';
  showLabel?: boolean;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
  variant = 'button',
  showLabel = false,
}) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  if (variant === 'toggle-pill') {
    return (
      <button
        onClick={toggleTheme}
        type="button"
        role="switch"
        aria-checked={isDark}
        aria-label={isDark ? 'Beralih ke mode terang' : 'Beralih ke mode gelap'}
        className="w-full flex items-center justify-between p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
        title={isDark ? 'Ganti ke Mode Terang' : 'Ganti ke Mode Gelap'}
      >
        <div className="flex items-center gap-2.5">
          <div className="p-1 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400">
            {isDark ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-amber-500" />}
          </div>
          <span className="text-xs font-semibold">
            {isDark ? 'Mode Gelap' : 'Mode Terang'}
          </span>
        </div>

        {/* Mini Switch Pill */}
        <div className="relative w-9 h-5 bg-slate-300 dark:bg-slate-700 rounded-full transition-colors p-0.5">
          <div
            className={`w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-200 flex items-center justify-center ${
              isDark ? 'translate-x-4 bg-sky-400' : 'translate-x-0 bg-amber-400'
            }`}
          />
        </div>
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={isDark ? 'Beralih ke mode terang' : 'Beralih ke mode gelap'}
      title={isDark ? 'Ganti ke Mode Terang' : 'Ganti ke Mode Gelap'}
      className="flex items-center justify-center gap-2 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/90 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 transition-all cursor-pointer group shadow-sm"
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform duration-300" />
        ) : (
          <Moon className="w-4 h-4 text-sky-600 group-hover:-rotate-12 transition-transform duration-300" />
        )}
      </div>

      {showLabel && (
        <span className="text-xs font-semibold whitespace-nowrap">
          {isDark ? 'Mode Terang' : 'Mode Gelap'}
        </span>
      )}
    </button>
  );
};
