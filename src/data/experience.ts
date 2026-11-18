// ============================================================
// EXPERIENCE DATA — Edit this file to update experience cards
// Source of truth: CS Record/Consolidated Data/02_internships_and_experience.md
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
    company: 'MPOnline Limited (Govt. of MP & TCS Joint Venture)',
    role: 'AI/ML & Software Engineering Intern',
    period: '20 May 2026 – 31 Jul 2026',
    location: 'Bhopal, India',
    type: 'Internship',
    logo: '🏛️',
    color: 'cyan',
    bullets: [
      'Completed two internship tracks (AI/ML, and Advanced Software Engineering & Development), each with a certificate of completion, covering full-stack development, MVC architecture, REST APIs, relational database design, SQL and ER modelling.',
      'Built the capstone Smart Retail & Customer Intelligence Platform: OpenCV face recognition, product image classification, sentiment analysis and an FAQ chatbot behind a FastAPI gateway with a Streamlit dashboard.',
      'Worked through end-to-end ML pipelines: feature engineering, model evaluation and neural networks for NLP tasks.',
    ],
    tech: ['Python', 'FastAPI', 'Streamlit', 'OpenCV', 'scikit-learn', 'REST APIs', 'SQL'],
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
      'Built and deployed a two-tier Resume Analyzer & Matcher on Hugging Face Spaces: exact O(N) taxonomy mapping with FlashText, plus semantic gap-filling with KeyBERT and BGE-small embeddings.',
      'Cut inference memory by 50% by sharing one SentenceTransformer instance between the embedding encoder and KeyBERT.',
      'Implemented hybrid retrieval scoring: asymmetric semantic similarity with BGE query prefixes, two-tier skill coverage with BFS cycle protection, and heuristic quality scoring.',
      'Deployed a custom BERT-based NER tool and exposed model endpoints as REST APIs.',
    ],
    tech: ['Python', 'Hugging Face Spaces', 'Sentence Transformers', 'KeyBERT', 'FlashText', 'Gradio'],
  },
];
