export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  github?: string;
  category: 'web' | 'ai' | 'automation' | 'all';
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  companyType: string;
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  duration: string;
  location: string;
}

export interface Skill {
  id: number;
  name: string;
  category: 'technical' | 'soft' | 'language';
}

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  text: string;
  image: string;
}

export interface SocialLink {
  id: number;
  name: string;
  url: string;
  icon: string;
}
