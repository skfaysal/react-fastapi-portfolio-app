export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  profileImage: string;
  bio: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    cv?: string;
    email?: string;
  };
}

export interface Education {
  degree: string;
  institution: string;
  startDate: string;
  endDate: string;
  location: string;
  thesis?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  iconUrl: string;
  url?: string;
  date?: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  dateRange?: string;
  description: string[];
  logoUrl: string;
  websiteUrl: string;
}

export interface SkillItem {
  iconSrc: string;
  iconAlt: string;
  name: string;
}

export interface SkillGroup {
  title: string;
  skills: SkillItem[];
}

export interface Project {
  title: string;
  description: string;
  websiteUrl?: string;
  githubUrl?: string;
  reportUrl?: string;
  listItems: string[];
}

export interface Blog {
  title: string;
  url: string;
  description: string;
  thumbnailUrl?: string;
  date?: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  education: Education[];
  certifications: Certification[];
  experiences: Experience[];
  skillGroups: SkillGroup[];
  projects: Project[];
  blogs: Blog[];
}

export interface ChatRequest {
  query: string;
}

export interface ChatResponse {
  response: string;
}
