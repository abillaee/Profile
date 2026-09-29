import React from 'react';
import { X, Printer, Mail, MapPin } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATIONS } from '../data/portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Dokumen Curriculum Vitae Irfan Nabil Makarim"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-md"
    >
      <div 
        tabIndex={0}
        role="button"
        aria-label="Tutup pratinjau CV"
        onClick={onClose}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClose();
          }
        }}
        className="fixed inset-0 cursor-pointer"
      />

      <div className="relative z-10 w-full max-w-3xl max-h-[92vh] flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden transition-colors">
        {/* Header Bar */}
        <div className="p-4 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-slate-900 dark:text-white">Curriculum Vitae</span>
            <span className="text-xs text-sky-600 dark:text-sky-400 font-mono">· {PERSONAL_INFO.name}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              type="button"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-bold transition-colors cursor-pointer shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Cetak / Simpan PDF</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Tutup"
              className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors cursor-pointer border border-slate-200 dark:border-slate-700"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* CV Document Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-200 space-y-8 font-sans">
          {/* Header Contact */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6 space-y-3">
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-base text-sky-600 dark:text-sky-400 font-semibold">
              {PERSONAL_INFO.title}
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                <span>{PERSONAL_INFO.email}</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                <span>{PERSONAL_INFO.location}</span>
              </span>
              <span>·</span>
              <span>GitHub: @irfannabilmakarim</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
              Ringkasan Profesional
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              Software Engineer berdedikasi tinggi dengan rekam jejak lebih dari 5 tahun dalam pengembangan aplikasi web dan ekosistem digital. Ahli dalam arsitektur React, Next.js, TypeScript, Tailwind CSS, dan sistem backend berbasis Node.js dan Go. Terbiasa memimpin tim teknis, memelihara performa tinggi (Core Web Vitals), serta menerapkan Clean Architecture.
            </p>
          </div>

          {/* Work Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
              Pengalaman Kerja
            </h2>
            <div className="space-y-4">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <span className="text-sm font-bold text-slate-900 dark:text-white">{exp.role}</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">{exp.period}</span>
                  </div>
                  <div className="text-xs text-sky-700 dark:text-sky-300 font-medium">
                    {exp.company} · {exp.location}
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    {exp.description}
                  </p>
                  <ul className="list-disc list-inside text-xs text-slate-600 dark:text-slate-400 space-y-1 pl-1">
                    {exp.responsibilities.map((r, rIdx) => (
                      <li key={rIdx}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
              Pendidikan & Sertifikasi
            </h2>
            <div className="space-y-3">
              {EDUCATIONS.map((edu) => (
                <div key={edu.id} className="space-y-1">
                  <div className="flex justify-between items-baseline">
                    <span className="text-sm font-bold text-slate-900 dark:text-white">{edu.degree}</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">{edu.period}</span>
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-300">{edu.institution} {edu.grade ? `(${edu.grade})` : ''}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Technical Competencies */}
          <div className="space-y-3 pt-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
              Keahlian Teknis Utama
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 dark:text-slate-300">
              <div>
                <span className="font-semibold text-slate-900 dark:text-white">Frontend:</span> React 19, Next.js, TypeScript, Tailwind CSS, Zustand, Redux Toolkit, Webpack, Vite.
              </div>
              <div>
                <span className="font-semibold text-slate-900 dark:text-white">Backend & Database:</span> Node.js, Express, Go, PostgreSQL, Redis, RESTful API, GraphQL.
              </div>
              <div>
                <span className="font-semibold text-slate-900 dark:text-white">DevOps & Cloud:</span> Docker, Git, CI/CD Actions, Google Cloud Platform (GCP), Linux.
              </div>
              <div>
                <span className="font-semibold text-slate-900 dark:text-white">Prinsip Rekayasa:</span> Clean Architecture, TDD, Agile/Scrum, WCAG AA Accessibility.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
