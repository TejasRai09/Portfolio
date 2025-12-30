
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  link?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface Metric {
  label: string;
  value: number;
  suffix: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}
