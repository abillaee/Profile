export interface Project {
  id: string;
  title: string;
  category: 'Web App' | 'Full Stack' | 'Mobile App' | 'API & Backend' | 'UI/UX';
  tagline: string;
  description: string;
  fullOverview: string;
  features: string[];
  technologies: string[];
  metrics?: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  colorAccent: string;
  architecture: string[];
}

export interface SkillItem {
  name: string;
  level: number; // 0 - 100
  experience: string;
  iconName?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
  techStack: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  grade?: string;
  highlights: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarText: string;
  quote: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
