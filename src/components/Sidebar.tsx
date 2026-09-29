import React from 'react';
import { 
  Home, 
  User, 
  FolderGit2, 
  Mail, 
  FileText, 
  Github, 
  Linkedin, 
  Send, 
  ChevronLeft,
  ChevronRight,
  X
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ThemeSwitcher } from './ThemeSwitcher';

interface SidebarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
  isCollapsedDesktop: boolean;
  onToggleCollapseDesktop: () => void;
  onOpenCvModal: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeSection,
  onNavigate,
  isOpenMobile,
  onCloseMobile,
  isCollapsedDesktop,
  onToggleCollapseDesktop,
  onOpenCvModal,
}) => {
  const navItems = [
    { id: 'beranda', label: 'Beranda', icon: Home, subtitle: 'Pengenalan & Sorotan' },
    { id: 'tentang', label: 'Tentang Saya', icon: User, subtitle: 'Profil & Keahlian' },
    { id: 'portofolio', label: 'Portofolio', icon: FolderGit2, subtitle: 'Daftar Proyek Terpilih' },
    { id: 'kontak', label: 'Kontak', icon: Mail, subtitle: 'Kirim Pesan & Diskusi' },
  ];

  const handleItemClick = (id: string) => {
    onNavigate(id);
    onCloseMobile();
  };

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {isOpenMobile && (
        <div
          role="button"
          tabIndex={0}
          aria-label="Tutup menu navigasi"
          onClick={onCloseMobile}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onCloseMobile();
            }
          }}
          className="fixed inset-0 z-40 bg-slate-950/70 backdrop-blur-sm lg:hidden transition-opacity cursor-pointer"
        />
      )}

      {/* Main Sidebar Container */}
      <aside
        aria-label="Navigasi Utama"
        className={`fixed top-0 bottom-0 left-0 z-40 flex flex-col bg-white/95 lg:bg-white/90 dark:bg-slate-900/95 dark:lg:bg-slate-900/90 border-r border-slate-200 dark:border-slate-800 backdrop-blur-xl transition-all duration-300 ease-in-out ${
          /* Mobile positioning */
          isOpenMobile ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } ${
          /* Desktop width */
          isCollapsedDesktop ? 'lg:w-20' : 'lg:w-72'
        } w-72 max-w-[85vw] shadow-xl lg:shadow-none`}
      >
        {/* Header Profile Brand Zone */}
        <div className="p-5 border-b border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
          <div className="flex items-center gap-3 overflow-hidden">
            {/* Avatar with bright blue ring */}
            <div className="relative shrink-0">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-sky-600 via-sky-500 to-cyan-400 p-0.5 shadow-md shadow-sky-500/20">
                <div className="w-full h-full bg-slate-100 dark:bg-slate-950 rounded-[10px] flex items-center justify-center text-sky-600 dark:text-sky-400 font-bold text-sm tracking-wider">
                  INM
                </div>
              </div>
              {/* Online status indicator */}
              <span 
                title="Tersedia untuk proyek baru"
                className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full"
              >
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
              </span>
            </div>

            {/* Profile Info - hidden when collapsed */}
            <div className={`transition-opacity duration-200 ${isCollapsedDesktop ? 'lg:hidden' : 'block'}`}>
              <h2 className="text-sm font-bold text-slate-900 dark:text-white tracking-tight leading-tight truncate">
                {PERSONAL_INFO.name}
              </h2>
              <p className="text-xs text-sky-600 dark:text-sky-400 truncate mt-0.5 font-medium">
                Software Engineer
              </p>
            </div>
          </div>

          {/* Mobile close button */}
          <button
            onClick={onCloseMobile}
            aria-label="Tutup navigasi"
            className="lg:hidden p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Desktop collapse toggle */}
          <button
            onClick={onToggleCollapseDesktop}
            aria-label={isCollapsedDesktop ? "Perluas Sidebar" : "Perkecil Sidebar"}
            className="hidden lg:flex p-1.5 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {isCollapsedDesktop ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>
        </div>

        {/* Status Banner (Compact) */}
        {!isCollapsedDesktop && (
          <div className="mx-4 mt-4 px-3 py-2 rounded-lg bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800/40 text-xs text-sky-800 dark:text-sky-300 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500 dark:bg-sky-400 shrink-0" />
            <span className="truncate font-medium">{PERSONAL_INFO.availability}</span>
          </div>
        )}

        {/* Navigation Links */}
        <nav className="flex-1 px-3 py-4 space-y-1.5 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                aria-current={isActive ? 'page' : undefined}
                className={`w-full flex items-center gap-3.5 px-3.5 py-3 rounded-xl text-left transition-all duration-150 group cursor-pointer ${
                  isActive
                    ? 'bg-sky-50 dark:bg-sky-950/60 text-sky-900 dark:text-white border border-sky-200 dark:border-sky-500/40 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100/80 dark:hover:bg-slate-800/60'
                }`}
                title={isCollapsedDesktop ? item.label : undefined}
              >
                <div
                  className={`p-1.5 rounded-lg transition-colors shrink-0 ${
                    isActive
                      ? 'bg-sky-500 text-white shadow-sm shadow-sky-400/30'
                      : 'bg-slate-100 dark:bg-slate-800/80 text-slate-500 dark:text-slate-400 group-hover:text-sky-600 dark:group-hover:text-sky-400 group-hover:bg-slate-200 dark:group-hover:bg-slate-800'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>

                {/* Text details */}
                <div className={`overflow-hidden transition-all duration-200 ${isCollapsedDesktop ? 'lg:hidden' : 'block'}`}>
                  <div className={`text-sm font-semibold truncate ${isActive ? 'text-sky-900 dark:text-white font-bold' : 'text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white'}`}>
                    {item.label}
                  </div>
                  <div className="text-[11px] text-slate-400 group-hover:text-slate-500 dark:group-hover:text-slate-400 truncate">
                    {item.subtitle}
                  </div>
                </div>

                {/* Active indicator bar */}
                {isActive && (
                  <span className="ml-auto w-1.5 h-4 bg-sky-500 dark:bg-sky-400 rounded-full shrink-0 shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Theme Switcher in Sidebar */}
        <div className="px-3 py-2 border-t border-slate-200 dark:border-slate-800/80">
          {!isCollapsedDesktop ? (
            <ThemeSwitcher variant="toggle-pill" />
          ) : (
            <div className="flex justify-center">
              <ThemeSwitcher variant="button" />
            </div>
          )}
        </div>

        {/* Quick Action: CV Button */}
        <div className="p-3 border-t border-slate-200 dark:border-slate-800/80">
          <button
            onClick={() => {
              onOpenCvModal();
              onCloseMobile();
            }}
            type="button"
            className={`w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-500 hover:to-cyan-500 text-white font-semibold text-xs shadow-md shadow-sky-500/20 transition-all active:scale-[0.98] cursor-pointer ${
              isCollapsedDesktop ? 'lg:px-2' : ''
            }`}
            title="Lihat & Unduh CV Lengkap"
          >
            <FileText className="w-4 h-4 shrink-0" />
            <span className={`whitespace-nowrap ${isCollapsedDesktop ? 'lg:hidden' : 'block'}`}>
              Pratinjau CV
            </span>
          </button>
        </div>

        {/* Social Links Footer */}
        <div className={`p-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between ${isCollapsedDesktop ? 'lg:justify-center' : ''}`}>
          <div className={`flex items-center gap-1.5 ${isCollapsedDesktop ? 'lg:flex-col' : ''}`}>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              aria-label="Profil GitHub Irfan"
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="Profil LinkedIn Irfan"
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="Kirim Email ke Irfan"
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.whatsapp}
              target="_blank"
              rel="noreferrer"
              aria-label="Chat WhatsApp Irfan"
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Send className="w-4 h-4" />
            </a>
          </div>

          {!isCollapsedDesktop && (
            <div className="text-[11px] text-slate-400 font-mono">
              v2026.09
            </div>
          )}
        </div>
      </aside>
    </>
  );
};
