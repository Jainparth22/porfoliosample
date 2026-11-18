// ============================================================
// EDUCATION DATA
// Source of truth: CS Record/Consolidated Data/01_education.md
// (CGPA and school marks are intentionally NOT shown publicly.)
// ============================================================

export interface Degree {
  institution: string;
  degree: string;
  location: string;
  period: string;
  mode: string;
  color: 'cyan' | 'violet';
  details: string;
}

export interface Milestone {
  title: string;
  date?: string;
}

export const degrees: Degree[] = [
  {
    institution: 'Vellore Institute of Technology, Bhopal',
    degree: 'B.Tech, Computer Science and Engineering',
    location: 'Bhopal, Madhya Pradesh',
    period: '2023 – Expected Jun 2027',
    mode: 'Full-time, on campus',
    color: 'cyan',
    details:
      'Core CS: DSA, DBMS, Operating Systems, Computer Architecture, Machine Learning, Deep Learning, Big Data Management.',
  },
  {
    institution: 'Indian Institute of Technology Madras',
    degree: 'BS, Data Science and Applications (Online)',
    location: 'Chennai, Tamil Nadu',
    period: 'May 2023 – Expected May 2027',
    mode: 'Part-time, online',
    color: 'violet',
    details:
      'Statistics, machine learning, programming and application development, with workshops on Hugging Face, ML in production and LangChain.',
  },
];

// Progress through the IITM BS program
export const iitmMilestones: Milestone[] = [
  { title: 'Foundational Level — Programming and Data Science', date: 'May 2024' },
  { title: 'Diploma in Programming', date: 'May 2026' },
  { title: 'Diploma in Data Science', date: 'Sep 2026' },
  { title: 'Advanced Certificate — Programming and Application Development' },
  { title: 'Advanced Certificate — Machine Learning and Data Science' },
];

export const campusActivities: string[] = [
  'Event volunteer at AdVITya\'24, VIT Bhopal\'s annual technical fest.',
  'Helped organise an Institution\'s Innovation Council (IIC) event with 130 active participants.',
  '2nd Rank Medal at State Level, National Children\'s Science Congress (NCSC).',
];
