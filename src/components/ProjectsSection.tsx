import React, { useState, useMemo } from 'react';
import { 
  Search, 
  ExternalLink, 
  Github, 
  Layers, 
  SlidersHorizontal,
  ChevronRight,
  Code2,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

interface ProjectsSectionProps {
  onSelectProject: (projectId: string) => void;
  onOpenLiveDemo: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSelectProject,
  onOpenLiveDemo,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['Semua', 'Full Stack', 'Web App', 'Mobile App', 'API & Backend', 'UI/UX'];

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchesCategory =
        selectedCategory === 'Semua' || project.category === selectedCategory;
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="portofolio" className="space-y-12 py-4">
      {/* Header */}
      <div className="space-y-4">
        <div className="text-xs uppercase tracking-widest text-sky-600 dark:text-sky-400 font-semibold">
          Karya & Proyek Terpilih
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Portofolio Rekayasa Perangkat Lunak
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl mt-1 leading-relaxed">
              Daftar proyek sistem nyata dengan fokus pada kehandalan arsitektur, kecepatan antarmuka, dan pengalaman pengguna optimal.
            </p>
          </div>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400">
            Menampilkan <span className="text-sky-600 dark:text-sky-400 font-bold tabular-nums">{filteredProjects.length}</span> dari{' '}
            <span className="text-slate-900 dark:text-white font-bold tabular-nums">{PROJECTS.length}</span> proyek
          </div>
        </div>
      </div>

      {/* Filter Tabs & Search Controls */}
      <div className="space-y-4">
        <div className="flex flex-col lg:flex-row gap-4 justify-between items-stretch lg:items-center">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1.5 bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-2xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-sky-500 text-slate-950 shadow-sm shadow-sky-500/20'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input Bar */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari proyek, teknologi, atau fitur..."
              className="w-full pl-9 pr-4 py-2 bg-white dark:bg-slate-900/90 border border-slate-300 dark:border-slate-800 rounded-xl text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors shadow-sm dark:shadow-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700 dark:hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col rounded-3xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-sky-500/50 transition-all overflow-hidden group shadow-sm hover:shadow-md dark:shadow-lg"
            >
              {/* Card Banner with Stylized Fallback Container */}
              <div className="relative h-52 bg-gradient-to-br from-slate-900 via-slate-950 to-sky-950/60 border-b border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between overflow-hidden text-slate-200">
                {/* Decorative electric glow */}
                <div 
                  aria-hidden="true" 
                  className="absolute -top-12 -right-12 w-48 h-48 bg-sky-500/10 rounded-full blur-2xl group-hover:bg-sky-500/20 transition-all pointer-events-none"
                />

                {/* Top bar inside mockup */}
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="px-2.5 py-1 rounded-md bg-slate-900/80 border border-slate-800 text-sky-400 font-semibold">
                    {project.category}
                  </span>
                  {project.metrics && (
                    <span className="text-slate-300 font-medium">
                      {project.metrics}
                    </span>
                  )}
                </div>

                {/* Graphic UI Representation */}
                <div className="space-y-2 py-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-sky-500/20 border border-sky-500/30 flex items-center justify-center text-sky-400">
                      <Code2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors">
                        {project.title}
                      </div>
                      <div className="text-[11px] text-slate-400 truncate">
                        {project.architecture[0]}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Micro tech indicators */}
                <div className="text-[11px] text-slate-400 font-mono truncate">
                  {project.technologies.slice(0, 4).join(' · ')}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <div>
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-300 transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-xs text-sky-600 dark:text-sky-400 font-medium mt-0.5">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 pt-1">
                    {project.features.slice(0, 2).map((feat, fIdx) => (
                      <div key={fIdx} className="text-xs text-slate-500 dark:text-slate-400 flex items-start gap-2">
                        <span className="text-sky-600 dark:text-sky-400 font-bold">›</span>
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Bar: Action Buttons */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectProject(project.id)}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-sky-50 hover:bg-sky-500 hover:text-white dark:bg-sky-500/10 dark:hover:bg-sky-500 text-sky-700 dark:text-sky-400 dark:hover:text-slate-950 border border-sky-200 dark:border-sky-500/30 text-xs font-bold transition-all cursor-pointer"
                  >
                    <span>Studi Kasus Detail</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  {project.demoUrl && (
                    <button
                      onClick={() => onOpenLiveDemo(project)}
                      className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white border border-slate-300 dark:border-slate-700 text-xs transition-colors cursor-pointer"
                      title="Pratinjau Demo Interaktif"
                    >
                      <ArrowUpRight className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                    </button>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white border border-slate-300 dark:border-slate-700 text-xs transition-colors"
                      title="Lihat Kode di GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="p-12 text-center rounded-3xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 space-y-4">
          <SlidersHorizontal className="w-10 h-10 text-slate-400 mx-auto" />
          <h3 className="text-base font-bold text-slate-900 dark:text-white">Tidak ada proyek yang sesuai</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 max-w-sm mx-auto">
            Tidak ditemukan proyek dengan kata kunci atau filter saat ini. Coba kata kunci lain atau reset filter.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('Semua');
              setSearchQuery('');
            }}
            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-sky-700 dark:text-sky-400 text-xs font-semibold transition-colors cursor-pointer border border-slate-300 dark:border-slate-700"
          >
            Reset Semua Filter
          </button>
        </div>
      )}
    </section>
  );
};
