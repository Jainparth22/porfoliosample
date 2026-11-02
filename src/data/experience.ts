// ============================================================
// EXPERIENCE DATA — Edit this file to update experience cards
// ============================================================

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;          // 'Internship' | 'Open Source' | 'Full-time' etc.
  logo?: string;         // emoji fallback logo
  color: string;         // accent color class
  bullets: string[];
  tech?: string[];
}

export const experiences: ExperienceItem[] = [
  {
    company: 'MPOnline Limited',
    role: 'AI/ML & Software Engineering Intern',
    period: 'May 2026 – Jul 2026',
    location: 'Bhopal, India',
    type: 'Internship',
    logo: '🏛️',
    color: 'cyan',
    bullets: [
      'Completed an intensive, structured training program covering full-stack development, MVC architecture, REST APIs, relational database design, and SQL/ER modeling.',
      'Built comprehensive project work applying full-stack concepts and ML workflows, including feature engineering, model evaluation, and neural networks for NLP tasks.',
      'Worked within a Government of Madhya Pradesh & TCS Joint Venture environment, gaining exposure to enterprise software delivery processes.',
    ],
    tech: ['Python', 'ML', 'REST APIs', 'SQL', 'NLP', 'Full-Stack'],
  },
  {
    company: 'Hugging Face',
    role: 'Open Source Contributor',
    period: '2025 – Present',
    location: 'Remote',
    type: 'Open Source',
    logo: '🤗',
    color: 'violet',
    bullets: [
      'Designed and deployed a production-grade, two-tier semantic matching engine on Hugging Face Spaces, combining exact O(N) taxonomy mapping via FlashText with dynamic semantic gap-filling using KeyBERT and BGE-small embeddings.',
      'Reduced inference memory footprint by 50% by sharing a single global SentenceTransformer instance between the embedding encoder and KeyBERT, preventing duplicate model loading in RAM.',
      'Implemented hybrid retrieval scoring using asymmetric semantic similarity with BGE query prefixes, two-tier skill coverage with BFS cycle protection, and heuristic quality scoring — outperforming standard regex-based parsers.',
    ],
    tech: ['Python', 'Hugging Face Spaces', 'KeyBERT', 'BGE Embeddings', 'FlashText', 'Semantic Search'],
  },
];

