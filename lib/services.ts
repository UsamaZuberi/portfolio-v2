/**
 * API service functions for portfolio data
 */

import { get, post } from './api';
import type { Project, Skill, Experience, Education, ContactFormData } from '@/types';

// API Response types
export interface ProfileData {
  name: string;
  title: string;
  bio: string;
  location: string;
  email: string;
  phone?: string;
  availability: boolean;
  stats: {
    yearsExperience: number;
    projectsCompleted: number;
    satisfaction: number;
  };
  techStack: string[];
  socialLinks: {
    platform: string;
    url: string;
  }[];
}

export interface ApiProjectsResponse {
  projects: Project[];
  featured: Project[];
}

export interface ApiSkillsResponse {
  coreSkills: Skill[];
  web3Skills: Skill[];
  toolsAndOthers: Skill[];
}

/**
 * Fetch profile/hero data
 */
export async function fetchProfile() {
  return await get<ProfileData>('/profile');
}

/**
 * Fetch all projects
 */
export async function fetchProjects() {
  return await get<ApiProjectsResponse>('/projects');
}

/**
 * Fetch single project by ID
 */
export async function fetchProject(id: string) {
  return await get<Project>(`/projects/${id}`);
}

/**
 * Fetch skills data
 */
export async function fetchSkills() {
  return await get<ApiSkillsResponse>('/skills');
}

/**
 * Fetch work experience
 */
export async function fetchExperience() {
  return await get<Experience[]>('/experience');
}

/**
 * Fetch education
 */
export async function fetchEducation() {
  return await get<Education[]>('/education');
}

/**
 * Submit contact form
 */
export async function submitContactForm(data: ContactFormData) {
  return await post<{ message: string }>('/contact', data);
}

/**
 * Fetch resume URL
 */
export async function fetchResumeUrl() {
  return await get<{ url: string }>('/resume');
}
