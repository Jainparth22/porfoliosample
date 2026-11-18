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
  portfolio: 'https://jainparth22.github.io',
  location: 'India',
  openToWork: true,

  // Animated role titles in hero
  roles: [
    'Backend Engineer',
    'ML / NLP Engineer',
    'Full-Stack Developer',
    'Open-Source Contributor',
    'CS + Data Science Student',
  ],

  summary: `Dual-degree student (B.Tech CSE at VIT Bhopal and BS Data Science at IIT Madras) building
  backend systems, full-stack applications and deployable ML/NLP pipelines. I work with Flask, FastAPI,
  Redis, Celery and PostgreSQL, run live apps on Fly.io, Railway and Vercel, ship semantic-search models on Hugging Face Spaces, and practise
  data structures daily: a 950+ day GeeksforGeeks streak and 200+ LeetCode problems solved.`,
};

export const achievements = [
  {
    icon: '🔥',
    title: '950+ Day Coding Streak',
    description: 'Daily problem solving on GeeksforGeeks, still running as of Nov 2026.',
    color: 'text-orange-400',
    border: 'border-orange-400/20',
  },
  {
    icon: '⚡',
    title: '200+ LeetCode Problems',
    description: 'Easy, medium and hard problems; 100 Days Badge 2026.',
    color: 'text-yellow-400',
    border: 'border-yellow-400/20',
  },
  {
    icon: '📊',
    title: 'Kaggle MAP@3: 0.75084',
    description: 'Smart MCQ Solver finished 2.8% above the competition cutoff on the private leaderboard.',
    color: 'text-violet-400',
    border: 'border-violet-400/20',
  },
  {
    icon: '🎓',
    title: 'Two IITM Diplomas',
    description: 'Diploma in Programming and Diploma in Data Science, plus two Advanced Certificates.',
    color: 'text-cyan-400',
    border: 'border-cyan-400/20',
  },
  {
    icon: '🐍',
    title: 'HackerRank Python 5★ Gold',
    description: 'Gold level with 495 points, plus SQL (Advanced) certification.',
    color: 'text-green-400',
    border: 'border-green-400/20',
  },
  {
    icon: '🥈',
    title: '2nd Rank — State Level NCSC',
    description: 'National Children\'s Science Congress, State Level medal.',
    color: 'text-slate-300',
    border: 'border-slate-400/20',
  },
];

export const stats = [
  { label: 'GfG Coding Streak', value: '950+', suffix: ' days', color: 'text-orange-400' },
  { label: 'LeetCode Solved', value: '200+', suffix: '', color: 'text-yellow-400' },
  { label: 'Live Deployed Apps', value: '3', suffix: '', color: 'text-cyan-400' },
  { label: 'Degrees, in parallel', value: '2', suffix: ' (CS + DS)', color: 'text-violet-400' },
];
