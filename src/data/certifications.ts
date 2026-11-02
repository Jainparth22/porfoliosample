// ============================================================
// CERTIFICATIONS DATA — Edit this file to update cert cards
// ============================================================

export interface Certification {
  title: string;
  issuer: string;
  platform?: string;      // e.g. 'Coursera', 'NPTEL', etc.
  year?: string;
  icon: string;           // emoji icon
  color: string;          // Tailwind color class
  verifyUrl?: string;     // Link to certificate verification
  skills?: string[];      // Skills the cert covers
}

export const certifications: Certification[] = [
  {
    title: 'Machine Learning Specialization',
    issuer: 'DeepLearning.AI / Andrew Ng',
    platform: 'Coursera',
    icon: '🧠',
    color: 'text-violet-400',
    skills: ['Supervised Learning', 'Neural Networks', 'Unsupervised Learning', 'Best Practices'],
  },
  {
    title: 'NLP with Transformers using Hugging Face',
    issuer: 'IIT Madras',
    platform: 'IITM Online',
    icon: '🤗',
    color: 'text-cyan-400',
    skills: ['Transformers', 'BERT', 'Fine-tuning', 'NLP Pipelines'],
  },
  {
    title: 'Introduction to HuggingFace and Hugging Face Spaces',
    issuer: 'IIT Madras',
    platform: 'IITM Online',
    icon: '🚀',
    color: 'text-cyan-400',
    skills: ['Model Hosting', 'Gradio', 'Spaces Deployment', 'Inference API'],
  },
  {
    title: 'Machine Learning',
    issuer: 'IIT Kharagpur',
    platform: 'NPTEL',
    icon: '📊',
    color: 'text-emerald-400',
    skills: ['Classical ML', 'Statistics', 'Feature Engineering', 'Model Evaluation'],
  },
  {
    title: 'Marketing Analytics',
    issuer: 'IIT Kharagpur',
    platform: 'NPTEL',
    icon: '📈',
    color: 'text-orange-400',
    skills: ['Data Analytics', 'Business Intelligence', 'Customer Analytics'],
  },
  {
    title: 'The Bits and Bytes of Computer Networking',
    issuer: 'Google',
    platform: 'Google Career Certificates',
    icon: '🌐',
    color: 'text-blue-400',
    skills: ['TCP/IP', 'DNS', 'Network Protocols', 'Troubleshooting'],
  },
];

