// ============================================================
// SKILLS DATA — Edit this file to update skill badges
// ============================================================

export interface SkillCategory {
  title: string;
  icon: string;          // Emoji icon for the category
  color: string;         // Tailwind color class for accent
  bgColor: string;       // Tailwind bg class for badge
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    icon: '💻',
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-400/10 border-cyan-400/20 text-cyan-300',
    skills: ['Python', 'C++', 'TypeScript', 'JavaScript', 'SQL', 'HTML/CSS'],
  },
  {
    title: 'Backend & Frameworks',
    icon: '⚙️',
    color: 'text-blue-400',
    bgColor: 'bg-blue-400/10 border-blue-400/20 text-blue-300',
    skills: [
      'FastAPI', 'Flask', 'Next.js', 'Vue.js', 'Node.js',
      'REST APIs', 'SQLAlchemy', 'Prisma ORM',
      'JWT', 'RBAC', 'Celery', 'Event-Driven Architecture',
    ],
  },
  {
    title: 'Machine Learning & NLP',
    icon: '🤖',
    color: 'text-violet-400',
    bgColor: 'bg-violet-400/10 border-violet-400/20 text-violet-300',
    skills: [
      'PyTorch', 'Scikit-learn', 'Hugging Face Transformers',
      'Sentence-Transformers', 'BGE / SBERT', 'LightGBM', 'XGBoost',
      'TF-IDF', 'Semantic Search', 'RAG', 'FAISS (Vector DB)',
      'Prompt Engineering', 'k-fold CV', 'Bayesian Hyperparameter Tuning',
    ],
  },
  {
    title: 'Databases & Infrastructure',
    icon: '🗄️',
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-400/10 border-emerald-400/20 text-emerald-300',
    skills: [
      'PostgreSQL', 'SQLite', 'Redis', 'Docker',
      'Linux', 'AWS', 'Vercel', 'Supabase', 'Render',
      'Hugging Face Spaces', 'Google Colab',
    ],
  },
  {
    title: 'Core CS & System Design',
    icon: '📐',
    color: 'text-orange-400',
    bgColor: 'bg-orange-400/10 border-orange-400/20 text-orange-300',
    skills: [
      'Data Structures & Algorithms', 'OOP', 'DBMS',
      'Operating Systems', 'Computer Networks',
      'Software Engineering', 'System Design (HLD/LLD)',
      'Distributed Systems',
    ],
  },
];

