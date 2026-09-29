import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Terminal, 
  Code2, 
  Layers, 
  ShieldCheck, 
  Mail, 
  FileText,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';

interface HomeSectionProps {
  onNavigate: (sectionId: string) => void;
  onOpenCvModal: () => void;
  onSelectProject: (projectId: string) => void;
}

export const HomeSection: React.FC<HomeSectionProps> = ({
  onNavigate,
  onOpenCvModal,
  onSelectProject,
}) => {
  const featuredProjects = PROJECTS.filter((p) => p.featured).slice(0, 3);

  const coreStrengths = [
    {
      title: 'Performa Tinggi & Zero Clutter',
      desc: 'Optimasi Web Vitals, code-splitting cerdas, dan visual yang bersih tanpa beban berlebih.',
      icon: Layers,
    },
    {
      title: 'Full-Stack Type-Safe',
      desc: 'Pengembangan end-to-end dengan TypeScript, React, Node.js, dan skema database relasional.',
      icon: Code2,
    },
    {
      title: 'Arsitektur Teruji & Aman',
      desc: 'Menerapkan Clean Architecture, pengujian otomatis, dan kepatuhan standar industri modern.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="beranda" className="space-y-16 py-4">
      {/* Hero Banner Grid */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-sky-50/70 via-white to-slate-50 dark:from-slate-900/90 dark:to-slate-950 border border-slate-200 dark:border-slate-800/80 p-6 md:p-10 lg:p-12 shadow-xl shadow-slate-200/50 dark:shadow-sky-950/20 transition-colors">
        {/* Ambient subtle blue glows */}
        <div 
          aria-hidden="true" 
          className="absolute -top-24 -right-24 w-96 h-96 bg-sky-500/10 dark:bg-sky-500/15 rounded-full blur-3xl pointer-events-none"
        />
        <div 
          aria-hidden="true" 
          className="absolute -bottom-24 -left-24 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top kicker badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-100 dark:bg-sky-950/60 border border-sky-300 dark:border-sky-500/30 text-xs text-sky-800 dark:text-sky-300">
              <span className="w-2 h-2 rounded-full bg-sky-500 dark:bg-sky-400 animate-pulse" />
              <span className="font-semibold tracking-wide">Selamat Datang di Portofolio Resmi</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                Halo, saya <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-500 dark:from-sky-400 dark:via-cyan-300 dark:to-blue-500">
                  {PERSONAL_INFO.name}
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-700 dark:text-slate-300">
                {PERSONAL_INFO.title}
              </p>
            </div>

            {/* Summary paragraph */}
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl">
              {PERSONAL_INFO.shortBio}
            </p>

            {/* Quick CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('portofolio')}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm shadow-lg shadow-sky-500/25 transition-all hover:shadow-sky-500/40 active:scale-95 cursor-pointer"
              >
                <span>Lihat Portofolio</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('kontak')}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-100 dark:bg-slate-800/90 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white border border-slate-300 dark:border-slate-700 font-semibold text-sm transition-colors cursor-pointer"
              >
                <Mail className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                <span>Hubungi Saya</span>
              </button>

              <button
                onClick={onOpenCvModal}
                className="flex items-center gap-2 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-300 font-medium text-sm transition-colors cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>Unduh CV</span>
              </button>
            </div>

            {/* Clean metadata separator */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800/80">
              <span className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                <span>Tersedia untuk Kontrak & Full-Time</span>
              </span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">·</span>
              <span>Domisili: Jakarta & Bandung</span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">·</span>
              <span>Zona Waktu: WIB (UTC+7)</span>
            </div>
          </div>

          {/* Right Column: Code Window */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-slate-950 border border-slate-800 p-5 shadow-2xl font-mono text-xs overflow-hidden text-slate-200">
              {/* Window Header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/80 text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-[11px] text-slate-400">engineer-profile.ts</span>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-sky-400 font-semibold bg-sky-950/60 px-2 py-0.5 rounded border border-sky-800/40">
                  <Sparkles className="w-3 h-3" />
                  <span>TypeScript 5.x</span>
                </div>
              </div>

              {/* Code Snippet */}
              <div className="space-y-1.5 text-slate-300 leading-relaxed overflow-x-auto pb-2">
                <p>
                  <span className="text-sky-400">const</span>{' '}
                  <span className="text-cyan-300">softwareEngineer</span>:{' '}
                  <span className="text-yellow-400">EngineerProfile</span> = {'{'}
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">name:</span>{' '}
                  <span className="text-emerald-300">"{PERSONAL_INFO.name}"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">coreStack:</span> [
                  <span className="text-sky-300">"React"</span>,{' '}
                  <span className="text-sky-300">"TypeScript"</span>,{' '}
                  <span className="text-sky-300">"Tailwind"</span>,{' '}
                  <span className="text-sky-300">"Node.js"</span>
                  ],
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">focus:</span>{' '}
                  <span className="text-emerald-300">"Clean UI & Scalable Architecture"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">qualityCommitment:</span> {'{'}
                </p>
                <p className="pl-8">
                  <span className="text-slate-400">cleanCode:</span>{' '}
                  <span className="text-amber-400">true</span>,
                </p>
                <p className="pl-8">
                  <span className="text-slate-400">responsiveDesign:</span>{' '}
                  <span className="text-amber-400">true</span>,
                </p>
                <p className="pl-8">
                  <span className="text-slate-400">targetLighthouse:</span>{' '}
                  <span className="text-purple-400">99</span>
                </p>
                <p className="pl-4">{'}'},</p>
                <p className="pl-4">
                  <span className="text-slate-400">status:</span>{' '}
                  <span className="text-sky-400">"Ready for New Challenges"</span>
                </p>
                <p>{'};'}</p>
              </div>

              {/* Terminal Output Bar */}
              <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Build passing · 0 errors · 100% tests</span>
                </div>
                <span className="text-sky-400 font-semibold">Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Numbers & Impact Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {PERSONAL_INFO.stats.map((stat, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 hover:border-sky-500/40 transition-colors group shadow-sm dark:shadow-none"
          >
            <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white font-mono tabular-nums tracking-tight group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
              {stat.value}
            </div>
            <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-1">
              {stat.label}
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              {stat.sub}
            </div>
          </div>
        ))}
      </div>

      {/* Core Strengths Pillars */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              Standar Rekayasa & Prinsip Kerja
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Komitmen kualitas pada setiap produk perangkat lunak yang dibangun.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {coreStrengths.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-sky-500/40 transition-all group shadow-sm dark:shadow-none"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-500/10 border border-sky-200 dark:border-sky-500/20 text-sky-600 dark:text-sky-400 flex items-center justify-center mb-4 group-hover:bg-sky-500 group-hover:text-white dark:group-hover:text-slate-950 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-300 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Featured Projects Highlight */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-widest text-sky-600 dark:text-sky-400 font-semibold mb-1">
              Karya Unggulan
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              Sorotan Portofolio Proyek
            </h2>
          </div>
          <button
            onClick={() => onNavigate('portofolio')}
            className="flex items-center gap-1.5 text-sm font-semibold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition-colors self-start sm:self-auto cursor-pointer"
          >
            <span>Buka Semua Proyek</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-sky-500/50 transition-all overflow-hidden group shadow-md dark:shadow-lg"
            >
              {/* Card visual banner mockup */}
              <div className="relative h-44 bg-gradient-to-tr from-slate-900 via-slate-950 to-sky-950/60 border-b border-slate-200 dark:border-slate-800/80 p-5 flex flex-col justify-between overflow-hidden text-slate-200">
                <div 
                  aria-hidden="true" 
                  className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-xl group-hover:bg-sky-500/20 transition-all pointer-events-none"
                />

                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-sky-400 font-semibold">{project.category}</span>
                  {project.metrics && (
                    <span className="text-[11px] text-slate-300 truncate max-w-[140px]">
                      {project.metrics}
                    </span>
                  )}
                </div>

                {/* Minimalist Graphic Element */}
                <div className="space-y-1.5 py-2">
                  <div className="w-12 h-1.5 rounded-full bg-sky-500/60" />
                  <div className="w-20 h-1.5 rounded-full bg-slate-700/60" />
                  <div className="w-16 h-1.5 rounded-full bg-slate-800/60" />
                </div>

                <div className="text-[11px] text-slate-400 font-mono truncate">
                  {project.architecture.join(' · ')}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Unboxed tech metadata */}
                <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  {project.technologies.slice(0, 3).join(' · ')}
                </div>

                {/* Action button */}
                <button
                  onClick={() => onSelectProject(project.id)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-100 hover:bg-sky-500 hover:text-slate-950 dark:bg-slate-800/80 dark:hover:bg-sky-600 dark:hover:text-white text-slate-800 dark:text-slate-300 text-xs font-semibold transition-all cursor-pointer"
                >
                  <span>Eksplorasi Detail Proyek</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
