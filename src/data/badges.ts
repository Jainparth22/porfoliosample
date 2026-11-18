// ============================================================
// BADGES & CODING PROFILES
// Source of truth: CS Record/Consolidated Data/05_badges_and_profiles.md
// Figures are from screenshots taken on 18 Nov 2026 — update when they change.
// ============================================================

export interface Badge {
  title: string;
  issuer: string;
  date: string;       // e.g. 'Apr 2026'
  icon: string;
  color: string;      // tailwind text color class
  border: string;     // tailwind border color class
  url?: string;       // public badge URL (add when available)
}

export const badges: Badge[] = [
  {
    title: 'AWS Educate: Getting Started with Databases',
    issuer: 'Amazon Web Services Training and Certification',
    date: 'Apr 2026',
    icon: '🗄️',
    color: 'text-orange-400',
    border: 'border-orange-400/20',
  },
  {
    title: 'AWS Educate: Getting Started with Networking',
    issuer: 'Amazon Web Services Training and Certification',
    date: 'Feb 2026',
    icon: '🌐',
    color: 'text-orange-400',
    border: 'border-orange-400/20',
  },
  {
    title: 'AWS Educate: Getting Started with Serverless',
    issuer: 'Amazon Web Services Training and Certification',
    date: 'Feb 2026',
    icon: '⚡',
    color: 'text-orange-400',
    border: 'border-orange-400/20',
  },
  {
    title: 'AWS Educate: Getting Started with Storage',
    issuer: 'Amazon Web Services Training and Certification',
    date: 'Feb 2026',
    icon: '📦',
    color: 'text-orange-400',
    border: 'border-orange-400/20',
  },
  {
    title: 'ServiceNow Administration Fundamentals',
    issuer: 'ServiceNow University',
    date: 'May 2026',
    icon: '🛠️',
    color: 'text-emerald-400',
    border: 'border-emerald-400/20',
  },
  {
    title: 'Academic Partnerships Participant',
    issuer: 'ServiceNow University',
    date: 'Oct 2026',
    icon: '🤝',
    color: 'text-emerald-400',
    border: 'border-emerald-400/20',
  },
  {
    title: 'Python — 5 Star, Gold Level',
    issuer: 'HackerRank (495 points)',
    date: '2026',
    icon: '🐍',
    color: 'text-yellow-400',
    border: 'border-yellow-400/20',
  },
  {
    title: 'LeetCode 100 Days Badge 2026',
    issuer: 'LeetCode',
    date: '2026',
    icon: '🏅',
    color: 'text-amber-400',
    border: 'border-amber-400/20',
  },
];

export interface CodingProfile {
  platform: string;
  handle: string;
  icon: string;
  color: string;
  border: string;
  headline: string;      // big number
  headlineLabel: string;
  facts: string[];
  url?: string;
}

export const codingProfiles: CodingProfile[] = [
  {
    platform: 'GeeksforGeeks',
    handle: 'Daily streak',
    icon: '🔥',
    color: 'text-orange-400',
    border: 'border-orange-400/20',
    headline: '969',
    headlineLabel: 'day coding streak',
    facts: ['Active streak as of 18 Nov 2026', '808+ problems and Institute Rank #23 on GfG (older snapshot on GitHub profile)'],
  },
  {
    platform: 'LeetCode',
    handle: 'jain22parth',
    icon: '⚡',
    color: 'text-yellow-400',
    border: 'border-yellow-400/20',
    headline: '212',
    headlineLabel: 'problems solved',
    facts: [
      'Easy 57 · Medium 107 · Hard 48',
      '162 active days in the past year, best streak 45 days',
      '100 Days Badge 2026',
    ],
    url: 'https://leetcode.com/u/jain22parth/',
  },
  {
    platform: 'HackerRank',
    handle: 'jain22parth',
    icon: '🟩',
    color: 'text-green-400',
    border: 'border-green-400/20',
    headline: '5★',
    headlineLabel: 'Python, Gold level',
    facts: ['495 Python points', 'SQL Advanced and Intermediate certified', 'Problem Solving certified'],
    url: 'https://www.hackerrank.com/profile/jain22parth',
  },
];
