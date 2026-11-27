// ============================================================
// PERSONAL INFO & ACHIEVEMENTS DATA
// Edit this single file to update personal details everywhere
// Education now lives in education.ts; badges/profiles in badges.ts
// ============================================================

export const personalInfo = {
  name: 'Parth Jain',
  tagline: 'Building Systems That Scale.',
  email: 'parthjain0722@gmail.com',
  phone: '+91-9479735365',
  github: 'https://github.com/jainparth22',
  linkedin: 'https://linkedin.com/in/jainparth22',
  portfolio: 'https://porfoliosample-zeta.vercel.app',
  location: 'India',
  openToWork: true,

  // Animated role titles in hero
  roles: [
    'Backend Engineer',
    'ML / NLP Engineer',
    'Full-Stack Developer',
    'Open-Source Contributor',
    'CS Graduate, Data Science Student',
  ],

  summary: `B.Tech CSE graduate of VIT Bhopal (provisional degree), also completing a BS in Data Science at IIT Madras, building
  backend systems, full-stack applications and deployable ML/NLP pipelines. I work with Flask, FastAPI,
  Redis, Celery and PostgreSQL, ship a resume analyzer on Hugging Face Spaces, and practise
  data structures daily: a 950+ day GeeksforGeeks streak and 200+ LeetCode problems solved.`,
};

export const achievements = [
  {
    title: '950+ Day Coding Streak',
    description: 'Daily problem solving on GeeksforGeeks, still running as of Nov 2026.',
    color: 'text-orange-400',
    border: 'border-orange-400/20',
  },
  {
    title: '200+ LeetCode Problems',
    description: 'Easy, medium and hard problems; 100 Days Badge 2026.',
    color: 'text-yellow-400',
    border: 'border-yellow-400/20',
  },
  {
    title: 'Kaggle MAP@3: 0.75084',
    description: 'Smart MCQ Solver finished 2.8% above the competition cutoff on the private leaderboard.',
    color: 'text-violet-400',
    border: 'border-violet-400/20',
  },
  {
    title: 'Two IITM Diplomas',
    description: 'Diploma in Programming and Diploma in Data Science, plus two Advanced Certificates.',
    color: 'text-cyan-400',
    border: 'border-cyan-400/20',
  },
  {
    title: 'HackerRank Python 5 Gold',
    description: 'Gold level with 495 points, plus SQL (Advanced) certification.',
    color: 'text-green-400',
    border: 'border-green-400/20',
  },
  {
    title: '2nd Rank — State Level NCSC',
    description: 'National Children\'s Science Congress, State Level medal.',
    color: 'text-slate-300',
    border: 'border-slate-400/20',
  },
];

// Hero stats: things only your own work can claim (not generic counts)
export const stats = [
  { label: 'Kaggle MAP@3 (LLM logit scoring beat fine-tuning)', value: '0.75', suffix: '', color: 'text-violet-400' },
  { label: 'Double-bookings in concurrent race tests', value: '0', suffix: '', color: 'text-cyan-400' },
  { label: 'Less RAM on my Hugging Face matcher', value: '50%', suffix: '', color: 'text-emerald-400' },
  { label: 'Automated tests in my Placement Portal', value: '223', suffix: '', color: 'text-orange-400' },
];

// ------------------------------------------------------------
// ABOUT TEXT (merged from your LinkedIn About). Edit freely.
// pullQuote = large line in the hero.
// aboutIntro = opening paragraphs; aboutSections = titled blocks;
// aboutClosing = last paragraph; aboutStack = the stack lines.
// ------------------------------------------------------------
export const pullQuote =
  'Most students build for the happy path. I build for edge cases, race conditions, and partial failures.';

export const aboutIntro: string[] = [
  'I am a CS graduate (VIT Bhopal, provisional degree), also completing a BS in Data Science at IIT Madras, bridging advanced Machine Learning with production-grade backend systems. I do not just write CRUD APIs; I engineer resilient, scalable architectures that behave correctly under real-world constraints.',
];

export const aboutSections: { title: string; text: string }[] = [
  {
    title: 'Architecture and distributed systems',
    text: 'I build decoupled, event-driven backends using a modular monolith approach. This avoids premature microservices complexity while maintaining strict separation of concerns. By leveraging asynchronous message brokers, I ensure heavy background processing never blocks the core user flow.',
  },
  {
    title: 'Concurrency and data integrity',
    text: 'I design compare-and-set state machines to handle high concurrency. They prevent double-bookings and remove check-then-act race conditions, keeping state changes atomic and consistent across concurrent requests without relying on heavy database locks.',
  },
  {
    title: 'Resilience',
    text: 'I build applications that survive partial failures through graceful degradation. If an async broker or cache drops, rate limiters and queues fall back to synchronous or in-memory execution so the core flow keeps working instead of failing. I also build stateful JWT authentication with JTI blacklisting for immediate token revocation.',
  },
  {
    title: 'Open source and applied AI (Hugging Face)',
    text: 'I contributed a semantic matching engine to Hugging Face Spaces. I cut inference memory by 50% with a shared global SentenceTransformer instance, and built a multi-tier NLP pipeline (FlashText taxonomy, then KeyBERT, then BGE embeddings) to replace fragile regex parsers.',
  },
  {
    title: 'Rigorous ML experimentation',
    text: 'I treat ML as a science, not a script. I reached 0.75 MAP@3 on a constrained 2,000-row dataset by showing that zero-shot logit extraction outperforms fine-tuning, which overfit badly, and I deliberately rejected SMOTE for high-dimensional sparse matrices.',
  },
];

export const aboutStack: { label: string; items: string }[] = [
  { label: 'Backend and infra', items: 'Python, FastAPI, Flask, PostgreSQL, Redis, Celery, SQLAlchemy, Docker, AWS, Fly.io, GitHub Actions' },
  { label: 'ML and AI', items: 'PyTorch, Hugging Face, Scikit-learn, LightGBM, Sentence-Transformers, WandB, TF-IDF' },
  { label: 'Tools', items: 'Linux, Git, Jupyter, VS Code' },
];

export const aboutClosing =
  'I am available to join immediately and am looking for SDE, backend, or ML-focused engineering roles at companies that value engineering rigor, system design, and production-ready code. If you are building systems that need to scale, handle concurrency, or deploy ML models reliably, let us connect.';
