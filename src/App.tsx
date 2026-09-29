/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LoadingScreen } from './components/LoadingScreen';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Sidebar } from './components/Sidebar';
import { NavbarMobile } from './components/NavbarMobile';
import { HomeSection } from './components/HomeSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { LiveDemoModal } from './components/LiveDemoModal';
import { CvModal } from './components/CvModal';
import { Footer } from './components/Footer';
import { PROJECTS } from './data/portfolioData';
import { Project } from './types';

function PortfolioContent() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>('beranda');
  const [isOpenMobile, setIsOpenMobile] = useState<boolean>(false);
  const [isCollapsedDesktop, setIsCollapsedDesktop] = useState<boolean>(false);
  
  // Modals state
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [liveDemoProject, setLiveDemoProject] = useState<Project | null>(null);
  const [isCvModalOpen, setIsCvModalOpen] = useState<boolean>(false);

  const selectedProject = selectedProjectId
    ? PROJECTS.find((p) => p.id === selectedProjectId) || null
    : null;

  // Active section title lookup
  const sectionTitles: Record<string, string> = {
    beranda: 'Beranda',
    tentang: 'Tentang Saya',
    portofolio: 'Portofolio',
    kontak: 'Kontak',
  };

  // Scroll spy with scroll position
  useEffect(() => {
    if (isLoading) return;

    const sections = ['beranda', 'tentang', 'portofolio', 'kontak'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading]);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReplayLoading = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setIsLoading(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-sky-500 selection:text-white font-sans antialiased transition-colors duration-150">
      {/* 0. Top Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* 1. Initial Loading Screen State */}
      {isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      )}

      {/* 2. Responsive Navigation Sidebar */}
      <Sidebar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        isOpenMobile={isOpenMobile}
        onCloseMobile={() => setIsOpenMobile(false)}
        isCollapsedDesktop={isCollapsedDesktop}
        onToggleCollapseDesktop={() => setIsCollapsedDesktop((prev) => !prev)}
        onOpenCvModal={() => setIsCvModalOpen(true)}
      />

      {/* 3. Mobile Top Navigation Header */}
      <NavbarMobile
        onToggleMobileMenu={() => setIsOpenMobile(true)}
        onOpenCvModal={() => setIsCvModalOpen(true)}
        activeSectionTitle={sectionTitles[activeSection] || 'Portofolio'}
      />

      {/* 4. Main Content Area */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          isCollapsedDesktop ? 'lg:pl-20' : 'lg:pl-72'
        }`}
      >
        <main className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 pt-6 sm:pt-10">
          {/* Section 1: Beranda (Home) */}
          <HomeSection
            onNavigate={handleNavigate}
            onOpenCvModal={() => setIsCvModalOpen(true)}
            onSelectProject={(projectId) => setSelectedProjectId(projectId)}
          />

          {/* Hairline Divider */}
          <div className="my-16 border-t border-slate-200 dark:border-slate-800/80" />

          {/* Section 2: Tentang (About) */}
          <AboutSection
            onOpenCvModal={() => setIsCvModalOpen(true)}
            onNavigate={handleNavigate}
          />

          {/* Hairline Divider */}
          <div className="my-16 border-t border-slate-200 dark:border-slate-800/80" />

          {/* Section 3: Portofolio (Projects) */}
          <ProjectsSection
            onSelectProject={(projectId) => setSelectedProjectId(projectId)}
            onOpenLiveDemo={(project) => setLiveDemoProject(project)}
          />

          {/* Hairline Divider */}
          <div className="my-16 border-t border-slate-200 dark:border-slate-800/80" />

          {/* Section 4: Kontak (Contact) */}
          <ContactSection />
        </main>

        {/* 5. Footer */}
        <Footer
          onNavigate={handleNavigate}
          onReplayLoading={handleReplayLoading}
        />
      </div>

      {/* 6. Interactive Modals */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProjectId(null)}
        onOpenLiveDemo={(project) => {
          setSelectedProjectId(null);
          setLiveDemoProject(project);
        }}
      />

      <LiveDemoModal
        project={liveDemoProject}
        onClose={() => setLiveDemoProject(null)}
      />

      <CvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}
