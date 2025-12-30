
import { Project, Experience, Metric, SkillCategory } from './types';

export const METRICS: Metric[] = [
  { label: 'Manual Effort Reduction', value: 90, suffix: '%' },
  { label: 'Internal Users Served', value: 500, suffix: '+' },
  { label: 'Brokerage Validation Time', value: 30, suffix: 'm' },
  { label: 'Daily ETL Data Prep', value: 5, suffix: 'm' },
];

export const EXPERIENCE: Experience[] = [
  {
    id: 'zuari',
    role: 'Senior Developer',
    company: 'Zuari Industries Ltd.',
    location: 'Gurgaon, India',
    period: 'Feb 2024 - Present',
    bullets: [
      'Automated brokerage-data pipeline validating 35+ AMC Excel files, cutting turnaround from 24 hrs to <30 mins.',
      'Built Python ETL merging Shilpi, Meon, Redoos CRM exports; reduced daily prep from 2.5 hours to <5 mins.',
      'Developed Flask + JS call-retrieval dashboard to search recordings, saving ~2 hours weekly.',
      'Shipped MERN travel management app with dynamic itineraries for 600+ employees.',
      'Collaborated across 5 business units and 2 vendors using data-driven status metrics.'
    ]
  },
  {
    id: 'egniol',
    role: 'Application Developer',
    company: 'Egniol Services Pvt. Ltd.',
    location: 'Ahmedabad, India',
    period: 'May 2023 - Feb 2024',
    bullets: [
      'Developed Node.js + MongoDB modules, trimming form processing time by ~30%.',
      'Shipped real-time dashboards for startup funding performance tracking.',
      'Integrated automation workflows to streamline proposal preparation for multiple startup engagements.',
      'Trained 60+ staff on AI tools (ChatGPT, Tableau) to lift team productivity.'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'nfo',
    title: 'NFO Approval Workflow',
    category: 'Backend Architecture',
    description: 'Role-based web application with multi-level approvals, chat, and PDF reporting.',
    tags: ['Flask', 'RBAC', 'Python', 'PostgreSQL'],
  },
  {
    id: 'ganna',
    title: 'Ganna Operations Platform',
    category: 'Platform',
    description: 'Migrated multi-tenant app from local storage to Node API + PostgreSQL with JWT auth and RBAC.',
    tags: ['Node.js', 'PostgreSQL', 'JWT', 'RBAC'],
    link: 'https://github.com/TejasRai09/GannaApp'
  },
  {
    id: 'crm',
    title: 'CRM Data ETL Pipeline',
    category: 'Data Engineering',
    description: 'Automated Python pipelines cutting data prep time by 97% with audit-ready outputs.',
    tags: ['Python', 'Pandas', 'SQL', 'Automation'],
    link: 'https://github.com/TejasRai09/CRM-Processing'
  },
  {
    id: 'brokerage',
    title: 'Automated Brokerage Tool',
    category: 'Automation',
    description: 'Reduced quarterly Excel processing from 24 hours to minutes using resilient workflows.',
    tags: ['Python', 'Pandas', 'MySQL'],
    link: 'https://github.com/TejasRai09/Excel-Automation-Tool' // if private, replace with live/demo link
  },
  {
    id: 'travel',
    title: 'Travel Management System',
    category: 'Full-Stack',
    description: 'MERN stack app with dynamic itineraries and automated email workflows for 600+ staff.',
    tags: ['React', 'Node.js', 'MongoDB', 'MERN'],
    link: 'https://github.com/TejasRai09/Travel-Management'
  },
  {
    id: 'claims',
    title: 'Claim Reimbursement Platform',
    category: 'Workflow',
    description: 'Role-based claims intake, approvals, tracking, and audit-ready exports.',
    tags: ['JavaScript', 'RBAC', 'Workflow'],
    link: 'https://github.com/TejasRai09/Claim-Reimbursement'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: 'Backend & Automation',
    skills: ['Python', 'Flask', 'Node.js', 'REST APIs', 'ETL Pipelines', 'Automation', 'SQL', 'PostgreSQL']
  },
  {
    name: 'Frontend & Full-Stack',
    skills: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'MERN Stack']
  },
  {
    name: 'Data Engineering',
    skills: ['Pandas', 'Excel Automation', 'Data Validation', 'Audit Logging', 'Reporting']
  }
];
