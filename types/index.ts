/**
 * TypeScript Type Definitions for Portfolio Application
 *
 * Contains all interface and type definitions used throughout the portfolio.
 * Organized by domain:
 * - UI Component Props
 * - Data Models (portfolio items, skills, experience, etc.)
 * - Application Configuration
 * - State Management Types
 *
 * This file serves as the single source of truth for data structure validation
 * and provides full IDE autocomplete across the application.
 */

/**
 * Props interface for the Button component
 * Defines all customizable button properties
 */
export interface ButtonProps {
  text: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  logo?: string;
  images?: string[];
  link: string;
  githubLink?: string;
  tags?: string[];
  featured?: boolean;
  technologies?: string[];
  year?: number;
}

// Alias for backward compatibility
export type Project = PortfolioItem;

export interface Skill {
  id?: string;
  name: string;
  category?: 'core' | 'web3' | 'tools';
  proficiency?: number;
  icon?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  startDate?: string;
  endDate?: string;
  description: string;
  responsibilities?: string[];
  technologies?: string[];
  location?: string;
  current?: boolean;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field?: string;
  duration: string;
  startDate?: string;
  endDate?: string;
  description?: string;
  achievements?: string[];
  location?: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  message: string;
}

export interface ContactFormErrors {
  fullName?: string;
  email?: string;
  message?: string;
}

export interface NavLink {
  label: string;
  href: string;
  ariaLabel?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  ariaLabel: string;
}

// API Response wrapper types
export interface ApiResponse<T> {
  data?: T;
  error?: string;
  message?: string;
  status?: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

// Loading states
export interface LoadingState {
  isLoading: boolean;
  error: string | null;
}

/**
 * Portfolio Data Types
 * These types match the portfolio JSON structure
 */

export interface HeroData {
  name: string;
  nameWords: string[];
  designation: string;
  summary: string;
  yearsOfExperience: number;
  projectsCompleted: number;
  clientSatisfactionRate: number;
  resumeLink: string;
  profileImage: string;
  technicalSkills: string[];
  availabilityStatus: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  colorScheme: 'primary' | 'secondary' | 'accent';
  gradientFrom: string;
  gradientTo: string;
}

export interface SkillHighlight {
  title: string;
  description: string;
  icon: string;
}

export interface SkillsData {
  categories: SkillCategory[];
  highlights: SkillHighlight[];
}

export interface CareerProgression {
  title: string;
  startDate: string;
  endDate: string;
}

export interface ExperienceItem {
  company: string;
  location: string;
  currentlyWorking: boolean;
  startDate: string;
  careerProgression: CareerProgression[];
  keyAchievements: string[];
  techStack: string[];
}

export interface EducationItem {
  title: string;
  major: string;
  institutionName: string;
  location: string;
  startDate: string;
  endDate: string;
  status: 'in-progress' | 'completed' | 'dropped' | 'freeze';
  gpa?: string;
  gpaScale?: string;
  summary: string[];
}

export interface LearningItem {
  title: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  startYear?: number;
  endYear?: number;
  startDate?: number;
  endDate?: number;
  images: string[];
  usedSkills: string[];
  isFeatured: boolean;
  link: string;
  allowLinkPreview?: boolean;
}

export interface ContactData {
  email: string;
  location: string;
  responseTime: string;
  socialLinks: Array<{
    name: string;
    url: string;
    icon: string;
  }>;
}

export interface FormField {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  required: boolean;
  validation?: {
    minLength?: number;
    pattern?: RegExp;
    errorMessage: string;
  };
}

export interface ContactFormConfig {
  fields: FormField[];
  submitButton: {
    text: string;
    loadingText: string;
  };
}

export interface PortfolioDataStructure {
  hero: HeroData;
  skills: SkillsData;
  experience: ExperienceItem[];
  education: EducationItem[];
  continuousLearning: LearningItem[];
  projects: ProjectItem[];
  contact: ContactData;
  contactForm: ContactFormConfig;
  testimonials: TestimonialItem[];
}

/**
 * Testimonial Item Interface
 * Represents a client or colleague testimonial/review
 */
export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  testimonial: string;
  gender?: 'male' | 'female';
}
