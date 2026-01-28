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
