import React, { useState } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Heart, 
  FileText, 
  MapPin, 
  Calendar,
  Layers,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { 
  PERSONAL_INFO, 
  SKILL_CATEGORIES, 
  EXPERIENCES, 
  EDUCATIONS, 
  TESTIMONIALS 
} from '../data/portfolioData';

interface AboutSectionProps {
  onOpenCvModal: () => void;
  onNavigate: (sectionId: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenCvModal,
  onNavigate,
}) => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);

  return (
    <section id="tentang" className="space-y-16 py-4">
      {/* Header Introduction */}
      <div className="space-y-4">
        <div className="text-xs uppercase tracking-widest text-sky-600 dark:text-sky-400 font-semibold">
          Profil & Latar Belakang
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Tentang Irfan Nabil Makarim
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
          Membangun jembatan antara kebutuhan bisnis, pengalaman pengguna yang menyenangkan, dan keunggulan arsitektur teknis modern.
        </p>
      </div>

      {/* Narrative & Bio Card */}
      <div className="rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 p-6 md:p-10 space-y-6 shadow-sm dark:shadow-none transition-colors">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
          {/* Avatar representation with clean initials and badge */}
          <div className="shrink-0 flex flex-col items-center">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-tr from-sky-600 via-sky-500 to-cyan-400 p-1 shadow-xl shadow-sky-500/20">
              <div className="w-full h-full bg-slate-50 dark:bg-slate-950 rounded-[14px] flex flex-col items-center justify-center text-center p-3">
                <span className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-500 dark:from-sky-400 dark:to-cyan-300">
                  INM
                </span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono mt-1">
                  Jakarta / Bandung
                </span>
              </div>
            </div>
            
            <button
              onClick={onOpenCvModal}
              className="mt-4 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-50 dark:bg-sky-500/10 hover:bg-sky-100 dark:hover:bg-sky-500/20 text-sky-700 dark:text-sky-400 border border-sky-200 dark:border-sky-500/30 text-xs font-semibold transition-colors cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Buka Dokumen CV</span>
            </button>
          </div>

          {/* Narrative text */}
          <div className="space-y-4 flex-1">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
              Dedikasi pada Kualitas Kode & Desain Antarmuka
            </h2>
            <div className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed space-y-3 whitespace-pre-line">
              {PERSONAL_INFO.aboutDetailed}
            </div>

            {/* Quick badges / metadata without pill boxes */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 flex flex-wrap items-center gap-x-3 gap-y-1.5">
              <span className="text-slate-800 dark:text-slate-300 font-medium">Spesialisasi Utama:</span>
              <span>React 19 & Next.js</span>
              <span aria-hidden="true">·</span>
              <span>Tailwind CSS</span>
              <span aria-hidden="true">·</span>
              <span>TypeScript</span>
              <span aria-hidden="true">·</span>
              <span>Node.js / Go Backend</span>
              <span aria-hidden="true">·</span>
              <span>PostgreSQL</span>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Skills Matrix */}
      <div className="space-y-6">
        <div>
          <div className="text-xs uppercase tracking-widest text-sky-600 dark:text-sky-400 font-semibold mb-1">
            Kompetensi Teknis
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            Keahlian & Penguasaan Teknologi
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Evaluasi keahlian teknis teruji di lingkungan produksi nyata.
          </p>
        </div>

        {/* Interactive Category Tabs */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-2xl">
          {SKILL_CATEGORIES.map((category, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategoryIndex(idx)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                activeCategoryIndex === idx
                  ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/20'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-200/70 dark:hover:bg-slate-800/60'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Selected Category Skill Bars */}
        <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 space-y-6 shadow-sm dark:shadow-none">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              {SKILL_CATEGORIES[activeCategoryIndex].title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              {SKILL_CATEGORIES[activeCategoryIndex].description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILL_CATEGORIES[activeCategoryIndex].skills.map((skill, sIdx) => (
              <div key={sIdx} className="space-y-2">
                <div className="flex justify-between items-baseline text-xs sm:text-sm">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{skill.name}</span>
                  <div className="flex items-center gap-2 font-mono text-xs">
                    <span className="text-slate-500 dark:text-slate-400">{skill.experience}</span>
                    <span className="text-sky-600 dark:text-sky-400 font-bold tabular-nums">{skill.level}%</span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-slate-200 dark:bg-slate-950 rounded-full h-2 overflow-hidden border border-slate-300 dark:border-slate-800">
                  <div
                    className="h-full bg-gradient-to-r from-sky-500 to-cyan-400 rounded-full transition-all duration-500 ease-out shadow-[0_0_8px_rgba(14,165,233,0.5)]"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Experience & Career Journey */}
      <div className="space-y-6">
        <div>
          <div className="text-xs uppercase tracking-widest text-sky-600 dark:text-sky-400 font-semibold mb-1">
            Jejak Langkah Profesional
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            Pengalaman Kerja
          </h2>
        </div>

        <div className="space-y-6 relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 pl-6 md:pl-8">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Bullet node */}
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-950 border-2 border-sky-500 dark:border-sky-400 group-hover:scale-125 transition-transform" />

              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 hover:border-sky-500/40 transition-colors space-y-4 shadow-sm dark:shadow-none">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <div className="text-sky-600 dark:text-sky-400 font-semibold text-sm">
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{exp.period}</span>
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {exp.description}
                </p>

                {/* Key responsibilities */}
                <div className="space-y-1.5">
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Pencapaian & Tanggung Jawab:
                  </div>
                  <ul className="space-y-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400 list-disc list-inside">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="leading-relaxed">
                        <span className="text-slate-800 dark:text-slate-300">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech badges as clean unboxed text */}
                <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 font-mono">
                  Stack: {exp.techStack.join(' · ')}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education & Certifications */}
      <div className="space-y-6">
        <div>
          <div className="text-xs uppercase tracking-widest text-sky-600 dark:text-sky-400 font-semibold mb-1">
            Akademik & Akreditasi
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            Pendidikan & Sertifikasi
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EDUCATIONS.map((edu) => (
            <div
              key={edu.id}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm dark:shadow-none"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <div className="text-xs text-sky-600 dark:text-sky-400 font-semibold mt-0.5">
                    {edu.institution}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-1">
                    {edu.period} {edu.grade ? `· ${edu.grade}` : ''}
                  </div>
                </div>
              </div>

              <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 list-disc list-inside">
                {edu.highlights.map((item, hIdx) => (
                  <li key={hIdx} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials / Rekomendasi Rekan Kerja */}
      <div className="space-y-6">
        <div>
          <div className="text-xs uppercase tracking-widest text-sky-600 dark:text-sky-400 font-semibold mb-1">
            Testimoni & Reputasi
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            Apa Kata Mereka Tentang Irfan
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 flex flex-col justify-between space-y-4 shadow-sm dark:shadow-none"
            >
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 italic leading-relaxed">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-3 pt-3 border-t border-slate-200 dark:border-slate-800">
                <div className="w-9 h-9 rounded-xl bg-sky-100 dark:bg-sky-500/20 text-sky-700 dark:text-sky-400 flex items-center justify-center font-bold text-xs">
                  {t.avatarText}
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">{t.name}</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">
                    {t.role}, {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
