// ============================================================
// CERTIFICATIONS DATA — Edit this file to update cert cards
// Source of truth: CS Record/Consolidated Data/04_certificates.md
// ============================================================

export type CertCategory = 'iitm' | 'workshop' | 'course' | 'hackerrank';

export interface Certification {
  title: string;
  issuer: string;
  platform?: string;      // e.g. 'Coursera', 'NPTEL', etc.
  year?: string;          // e.g. 'Jul 2026'
  category: CertCategory;
  color: string;          // Tailwind color class
  verifyUrl?: string;     // Link to certificate verification
  skills?: string[];      // Skills the cert covers
}

export const certCategories: { id: CertCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'iitm', label: 'IIT Madras' },
  { id: 'workshop', label: 'Workshops' },
  { id: 'course', label: 'Courses' },
  { id: 'hackerrank', label: 'HackerRank' },
];

export const certifications: Certification[] = [
  // ───────── IIT Madras BS program ─────────
  {
    title: 'Diploma in Data Science',
    issuer: 'IIT Madras',
    platform: 'BS in Data Science and Applications',
    year: 'Sep 2026',
    category: 'iitm',
    color: 'text-violet-400',
    skills: ['Machine Learning', 'Business Data Management', 'Statistics'],
  },
  {
    title: 'Diploma in Programming',
    issuer: 'IIT Madras',
    platform: 'BS in Data Science and Applications',
    year: 'May 2026',
    category: 'iitm',
    color: 'text-violet-400',
    skills: ['Programming', 'Databases', 'Application Development'],
  },
  {
    title: 'Advanced Certificate: Machine Learning and Data Science',
    issuer: 'IIT Madras',
    platform: 'IITM BS Program',
    category: 'iitm',
    color: 'text-violet-400',
    skills: ['Machine Learning', 'Data Science'],
  },
  {
    title: 'Advanced Certificate: Programming and Application Development',
    issuer: 'IIT Madras',
    platform: 'IITM BS Program',
    category: 'iitm',
    color: 'text-violet-400',
    skills: ['Programming', 'Application Development'],
  },
  {
    title: 'Foundational Level: Programming and Data Science',
    issuer: 'IIT Madras',
    platform: 'Centre for Outreach and Digital Education',
    year: 'May 2024',
    category: 'iitm',
    color: 'text-violet-400',
    skills: ['Python', 'Statistics', 'Mathematics'],
  },

  // ───────── Internship completion ─────────
  {
    title: 'Internship in AI/ML',
    issuer: 'MPOnline Limited (Govt. of MP & TCS JV)',
    platform: 'Certificate of Completion · 20 May – 31 Jul 2026',
    year: 'Jul 2026',
    category: 'course',
    color: 'text-cyan-400',
    skills: ['Machine Learning', 'NLP', 'Feature Engineering'],
  },
  {
    title: 'Advanced Software Engineering and Development Internship',
    issuer: 'MPOnline Limited (Govt. of MP & TCS JV)',
    platform: 'Certificate of Completion · 20 May – 31 Jul 2026',
    year: 'Jul 2026',
    category: 'course',
    color: 'text-cyan-400',
    skills: ['MVC', 'REST APIs', 'SQL'],
  },

  // ───────── IITM workshops ─────────
  {
    title: 'Introduction to LangChain: Chains, Retrieval and RAG',
    issuer: 'IIT Madras',
    platform: 'IITM Workshop',
    year: 'Oct 2026',
    category: 'workshop',
    color: 'text-cyan-400',
    skills: ['LangChain', 'RAG', 'Retrieval'],
  },
  {
    title: 'Getting Started with ML in Production',
    issuer: 'IIT Madras',
    platform: 'IITM Workshop',
    year: 'Oct 2026',
    category: 'workshop',
    color: 'text-cyan-400',
    skills: ['MLOps', 'Model Serving', 'Deployment'],
  },
  {
    title: 'Introduction to HuggingFace and Hugging Face Spaces',
    issuer: 'IIT Madras',
    platform: 'IITM Workshop',
    year: 'Jan 2026',
    category: 'workshop',
    color: 'text-cyan-400',
    skills: ['Model Hosting', 'Gradio', 'Spaces Deployment'],
  },
  {
    title: 'NLP with Transformers using Hugging Face',
    issuer: 'IIT Madras',
    platform: 'IITM Workshop',
    year: 'Jan 2025',
    category: 'workshop',
    color: 'text-cyan-400',
    skills: ['Transformers', 'BERT', 'Fine-tuning', 'NLP Pipelines'],
  },

  // ───────── Online courses ─────────
  {
    title: 'Supervised Machine Learning: Regression and Classification',
    issuer: 'DeepLearning.AI & Stanford Online (Andrew Ng)',
    platform: 'Coursera',
    year: 'Jul 2026',
    category: 'course',
    color: 'text-emerald-400',
    verifyUrl: 'https://coursera.org/verify/71DAGQ41ONHW',
    skills: ['Regression', 'Classification', 'Gradient Descent'],
  },
  {
    title: 'Introduction to FastAPI Framework',
    issuer: 'Duke University',
    platform: 'Coursera (guided project)',
    year: 'Nov 2024',
    category: 'course',
    color: 'text-emerald-400',
    verifyUrl: 'https://coursera.org/verify/SFQ87EO4XDCW',
    skills: ['FastAPI', 'REST APIs', 'Python'],
  },
  {
    title: 'Introduction to Machine Learning',
    issuer: 'IIT Madras',
    platform: 'NPTEL Elite (Jan–Apr 2025), score 62%',
    year: 'Apr 2025',
    category: 'course',
    color: 'text-emerald-400',
    skills: ['Classical ML', 'Model Evaluation'],
  },
  {
    title: 'Marketing Analytics',
    issuer: 'IIT Kharagpur',
    platform: 'NPTEL Elite (Jan–Apr 2026), score 94%',
    year: 'Apr 2026',
    category: 'course',
    color: 'text-orange-400',
    skills: ['Data Analytics', 'Customer Analytics'],
  },
  {
    title: 'The Bits and Bytes of Computer Networking',
    issuer: 'Google',
    platform: 'Google Career Certificates',
    category: 'course',
    color: 'text-blue-400',
    skills: ['TCP/IP', 'DNS', 'Network Protocols'],
  },
  {
    title: 'Introduction to Java',
    issuer: 'SoloLearn',
    platform: 'Course certificate',
    year: 'Mar 2026',
    category: 'course',
    color: 'text-amber-400',
    skills: ['Java', 'OOP'],
  },
  {
    title: 'Java Intermediate',
    issuer: 'SoloLearn',
    platform: 'Course certificate',
    year: 'Mar 2026',
    category: 'course',
    color: 'text-amber-400',
    skills: ['Java', 'Collections', 'OOP'],
  },
  {
    title: 'Introduction to Cloud Computing',
    issuer: 'Course certificate',
    year: 'Jul 2026',
    category: 'course',
    color: 'text-sky-400',
    skills: ['Cloud Computing'],
  },

  // ───────── HackerRank skill certifications ─────────
  {
    title: 'SQL (Advanced)',
    issuer: 'HackerRank',
    platform: 'Skill certification',
    year: 'Jul 2026',
    category: 'hackerrank',
    color: 'text-green-400',
    skills: ['SQL', 'Joins', 'Window Functions'],
  },
  {
    title: 'SQL (Intermediate)',
    issuer: 'HackerRank',
    platform: 'Skill certification',
    year: 'Jul 2026',
    category: 'hackerrank',
    color: 'text-green-400',
    skills: ['SQL', 'Aggregation'],
  },
  {
    title: 'Python (Basic)',
    issuer: 'HackerRank',
    platform: 'Skill certification',
    category: 'hackerrank',
    color: 'text-green-400',
    skills: ['Python'],
  },
  {
    title: 'Problem Solving (Intermediate)',
    issuer: 'HackerRank',
    platform: 'Skill certification',
    category: 'hackerrank',
    color: 'text-green-400',
    skills: ['Algorithms', 'Data Structures'],
  },
  {
    title: 'Problem Solving (Basic)',
    issuer: 'HackerRank',
    platform: 'Skill certification',
    category: 'hackerrank',
    color: 'text-green-400',
    skills: ['Algorithms'],
  },
  {
    title: 'Software Engineer Intern',
    issuer: 'HackerRank',
    platform: 'Role certification',
    category: 'hackerrank',
    color: 'text-green-400',
    skills: ['Problem Solving', 'Software Engineering'],
  },
];
