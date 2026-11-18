// ============================================================
// SKILLS DATA — Edit this file to update skill badges
// ============================================================

export interface SkillCategory {
  title: string;
  color: string;         // Tailwind color class for accent
  bgColor: string;       // Tailwind bg class for badge
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-400/10 border-cyan-400/20 text-cyan-300',
    skills: ['Python', 'C++', 'C', 'Java', 'TypeScript', 'JavaScript', 'SQL', 'HTML/CSS'],
  },
  {
    title: 'Backend & APIs',
    color: 'text-blue-400',
    bgColor: 'bg-blue-400/10 border-blue-400/20 text-blue-300',
    skills: [
      'FastAPI', 'Flask', 'Next.js', 'Vue.js', 'REST APIs', 'SQLAlchemy', 'Prisma ORM',
      'MVC', 'Layered architecture', 'Business logic',
    ],
  },
  {
    title: 'Auth & Security',
    color: 'text-rose-400',
    bgColor: 'bg-rose-400/10 border-rose-400/20 text-rose-300',
    skills: ['JWT', 'Authentication', 'Authorization', 'RBAC', 'Token blacklisting', 'CSRF protection'],
  },
  {
    title: 'Databases & Data Modeling',
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-400/10 border-emerald-400/20 text-emerald-300',
    skills: ['PostgreSQL', 'SQLite', 'Relational database design', 'SQL queries', 'Schema design', 'Alembic migrations'],
  },
  {
    title: 'Performance & Distributed Processing',
    color: 'text-orange-400',
    bgColor: 'bg-orange-400/10 border-orange-400/20 text-orange-300',
    skills: [
      'Redis', 'Caching', 'Celery', 'Background jobs', 'Task queues', 'Asynchronous processing',
      'Concurrency handling', 'Idempotency', 'Event-driven architecture', 'WebSockets',
    ],
  },
  {
    title: 'Data Engineering & ML',
    color: 'text-violet-400',
    bgColor: 'bg-violet-400/10 border-violet-400/20 text-violet-300',
    skills: [
      'Data preprocessing', 'Data transformation', 'Feature engineering', 'TF-IDF', 'Scikit-learn',
      'PyTorch', 'LightGBM', 'XGBoost', 'NLP', 'Ensemble learning', 'Model evaluation', 'Cross-validation',
    ],
  },
  {
    title: 'AI / NLP',
    color: 'text-fuchsia-400',
    bgColor: 'bg-fuchsia-400/10 border-fuchsia-400/20 text-fuchsia-300',
    skills: [
      'Hugging Face (Transformers, Spaces)', 'Sentence-Transformers', 'KeyBERT', 'FlashText',
      'Semantic matching', 'Gradio', 'Prompt engineering',
    ],
  },
  {
    title: 'AI / RAG',
    color: 'text-pink-400',
    bgColor: 'bg-pink-400/10 border-pink-400/20 text-pink-300',
    skills: [
      'LangChain', 'LangGraph', 'Vector databases (FAISS)', 'Document chunking', 'Hybrid retrieval (BM25 + dense)',
      'Retrieval evaluation (RAGAS)', 'LLM integration',
    ],
  },
  {
    title: 'Tools & Platforms',
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-400/10 border-yellow-400/20 text-yellow-300',
    skills: [
      'Git', 'Docker', 'Linux', 'GitHub Actions', 'Weights & Biases', 'Hugging Face Spaces',
      'Vercel', 'Railway', 'Fly.io', 'Render', 'AWS (Educate)', 'Supabase',
    ],
  },
  {
    title: 'Core CS',
    color: 'text-teal-400',
    bgColor: 'bg-teal-400/10 border-teal-400/20 text-teal-300',
    skills: [
      'Data structures & algorithms', 'OOP', 'DBMS', 'Operating systems', 'Computer networks',
      'System design (HLD/LLD)',
    ],
  },
];
