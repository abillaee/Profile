import React, { useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  ArrowUpRight
} from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenLiveDemo: (project: Project) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onOpenLiveDemo,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Detail Proyek ${project.title}`}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div 
        tabIndex={0}
        role="button"
        aria-label="Tutup modal"
        onClick={onClose}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClose();
          }
        }}
        className="fixed inset-0 cursor-pointer"
      />

      <div className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl flex flex-col transition-colors">
        {/* Modal Header Banner */}
        <div className="relative p-6 sm:p-8 bg-gradient-to-br from-sky-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-sky-950/50 border-b border-slate-200 dark:border-slate-800">
          <button
            onClick={onClose}
            aria-label="Tutup detail proyek"
            className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors cursor-pointer border border-slate-200 dark:border-slate-700"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-2 pr-10">
            <div className="flex items-center gap-2 text-xs font-mono text-sky-600 dark:text-sky-400">
              <span className="px-2.5 py-0.5 rounded bg-sky-100 dark:bg-sky-950/80 border border-sky-200 dark:border-sky-800/40 font-semibold">
                {project.category}
              </span>
              {project.metrics && (
                <>
                  <span className="text-slate-300 dark:text-slate-600">·</span>
                  <span className="text-slate-700 dark:text-slate-300 font-semibold">{project.metrics}</span>
                </>
              )}
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {project.title}
            </h2>

            <p className="text-sm text-sky-700 dark:text-sky-300 font-medium">
              {project.tagline}
            </p>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8 space-y-6 flex-1">
          {/* Overview */}
          <div className="space-y-2">
            <h3 className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 font-semibold">
              Ikhtisar & Latar Belakang
            </h3>
            <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
              {project.fullOverview}
            </p>
          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 font-semibold">
              Fitur Utama & Keunggulan
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                  <span className="leading-snug">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture & Tech Stack */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-slate-200 dark:border-slate-800">
            <div className="space-y-2">
              <h3 className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 font-semibold">
                Teknologi yang Digunakan
              </h3>
              <div className="text-xs text-slate-700 dark:text-slate-300 font-mono flex flex-wrap gap-x-2 gap-y-1">
                {project.technologies.map((t, idx) => (
                  <span key={idx} className="bg-slate-100 dark:bg-slate-800/80 px-2 py-1 rounded text-sky-700 dark:text-sky-300 border border-slate-200 dark:border-slate-700">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 font-semibold">
                Pola Arsitektur
              </h3>
              <div className="text-xs text-slate-700 dark:text-slate-300 font-mono flex flex-wrap gap-x-2 gap-y-1">
                {project.architecture.map((arch, idx) => (
                  <span key={idx} className="bg-slate-100 dark:bg-slate-800/80 px-2 py-1 rounded text-cyan-700 dark:text-cyan-300 border border-slate-200 dark:border-slate-700">
                    {arch}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="p-6 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">
            Kode Repository & Demo
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white text-xs font-semibold border border-slate-300 dark:border-slate-700 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Lihat di GitHub</span>
              </a>
            )}

            <button
              onClick={() => {
                onClose();
                onOpenLiveDemo(project);
              }}
              type="button"
              className="flex items-center gap-1.5 px-5 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-bold transition-all shadow-md shadow-sky-500/20 cursor-pointer"
            >
              <span>Uji Coba Demo</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
