// ============================================================
// PROJECTS DATA — Edit this file to update all project cards
// ============================================================
// category options: 'featured' | 'ml' | 'backend' | 'distributed' | 'coursework'
// You can add a project to multiple categories by repeating it
// or adding multiple entries.

export type ProjectCategory = 'featured' | 'ml' | 'backend' | 'distributed' | 'coursework';

export interface Project {
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];           // Tech stack badges
  github: string;           // GitHub repo URL
  live?: string;            // Live demo URL (leave undefined if not deployed)
  category: ProjectCategory[];
  featured?: boolean;       // Shows star badge + larger card
  highlights?: string[];    // Key bullet points shown on hover/expand
  status?: 'production' | 'demo' | 'learning' | 'archived';
}

export const projects: Project[] = [
  // ─────────────── ⭐ FEATURED PROJECTS ───────────────
  {
    title: 'Placement Portal System',
    description:
      'Scalable, event-driven multi-role platform (student, recruiter, admin) with 40+ REST APIs and layered architecture. Reduced p95 API latency by 40% with Redis + async Celery.',
    tech: ['Flask', 'Vue.js', 'PostgreSQL', 'SQLAlchemy', 'Redis', 'Celery', 'JWT', 'PyPDF2'],
    github: 'https://github.com/Jainparth22/PlacementPortalApp',
    category: ['featured', 'backend'],
    featured: true,
    status: 'production',
    highlights: [
      '40+ REST APIs with RBAC middleware',
      'Stateless JWT auth + secure data isolation',
      'p95 latency reduced 40% via Redis cache-aside',
      'AI-powered resume scoring via Gradio Client',
      'Resume parsing (PyPDF2) + PDF export',
    ],
  },
  {
    title: 'Healthcare Appointment Manager',
    description:
      'Full-stack healthcare platform with patient, doctor, and admin workflows. Atomic CAS state transitions prevent double-booking. Google Calendar integration + AI-assisted summaries.',
    tech: ['FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Redis', 'Celery', 'Docker', 'Google Calendar API'],
    github: 'https://github.com/Jainparth22/Healthcare-Appointment-Follow-up-Manager',
    category: ['featured', 'backend'],
    featured: true,
    status: 'production',
    highlights: [
      'Atomic CAS state transitions for concurrency-safe booking',
      'Idempotency keys to prevent double-booking',
      'Async Celery for notifications & reminders',
      'Google Calendar sync + graceful service fallbacks',
      'AI-assisted summaries for appointments',
    ],
  },
  {
    title: 'InventoryPro (Enterprise SaaS)',
    description:
      'Cloud-deployed SaaS application covering product, sales, purchasing, and manufacturing workflows with automated inventory reconciliation. PWA-enabled, Vercel-deployed.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'JWT', 'Recharts', 'SWR', 'Vercel'],
    github: 'https://github.com/Jainparth22/Inventory-app',
    category: ['featured', 'backend'],
    featured: true,
    status: 'production',
    highlights: [
      'Atomic inventory state engine for order-state transitions',
      'Edge Middleware JWT auth',
      'Interactive analytics dashboards with Recharts',
      'CSV exports + PWA support',
      'SWR for client-side cache revalidation',
    ],
  },
  {
    title: 'Smart MCQ Solver (Deep Learning Ensemble)',
    description:
      'LightGBM stacking meta-learner over EmbeddingNN, RoBERTa, and BiLSTM models. Achieved Kaggle private MAP@3 score of 0.75084 — 2.8% above the cutoff.',
    tech: ['PyTorch', 'Hugging Face', 'LightGBM', 'RoBERTa', 'BiLSTM', 'Weights & Biases'],
    github: 'https://github.com/Jainparth22/SmartMCQsolver',
    category: ['featured', 'ml'],
    featured: true,
    status: 'production',
    highlights: [
      'Kaggle MAP@3: 0.75084 (2.8% above cutoff)',
      'BiLSTM with attention pooling over 768-dim RoBERTa embeddings',
      '10+ model architectures evaluated with W&B',
      'Ensemble weights tuned via validation-to-test distribution-shift analysis',
    ],
  },
  {
    title: 'High-Concurrency Ticket Booking',
    description:
      'Engineered with Optimistic Concurrency Control (OCC), expiring seat holds, Saga Orchestrator pattern, and Stripe/Razorpay webhook integration for reliable payment flows.',
    tech: ['OCC', 'Saga Pattern', 'Stripe', 'Razorpay', 'Redis', 'PostgreSQL'],
    github: 'https://github.com/Jainparth22/high-concurrency-ticket-booking',
    category: ['featured', 'distributed'],
    featured: true,
    status: 'production',
    highlights: [
      'Optimistic Concurrency Control (OCC) for seat locking',
      'Expiring seat holds to prevent ghost bookings',
      'Saga Orchestrator for distributed transaction management',
      'Stripe & Razorpay webhook integration',
    ],
  },
  {
    title: 'HLD Distributed Systems Portfolio',
    description:
      'Comprehensive high-level design case studies for distributed systems. Covers architecture patterns, trade-off analysis, and production-grade system blueprints.',
    tech: ['System Design', 'HLD', 'Distributed Systems', 'Architecture'],
    github: 'https://github.com/Jainparth22/hld-distributed-systems-portfolio',
    category: ['featured', 'distributed'],
    featured: true,
    status: 'production',
  },

  // ─────────────── 🤖 ML & NLP PROJECTS ───────────────
  {
    title: 'ML Text Classification Pipeline',
    description:
      'End-to-end pipeline for a 200,000+ record dataset with 60,000-dimensional sparse feature space. Achieved 0.826 Macro F1 using multi-model linear stacking ensemble.',
    tech: ['Python', 'Scikit-learn', 'TF-IDF', 'Stacking', 'Logistic Regression', 'k-fold CV'],
    github: 'https://github.com/Jainparth22/MLtextclassificationpipeline',
    category: ['ml'],
    status: 'production',
    highlights: [
      '0.826 Macro F1 on 200k records',
      '60,000-dim sparse feature space with char + word n-grams',
      'OOF stratified 3-fold cross-validation',
      '21:1 class imbalance handled via class-weight optimization',
    ],
  },
  {
    title: 'ML Genome Pipeline',
    description:
      'Machine learning pipeline for genomic data analysis. Feature engineering on biological sequences with predictive modeling for genome-level classification tasks.',
    tech: ['Python', 'Scikit-learn', 'Bioinformatics', 'ML Pipeline'],
    github: 'https://github.com/Jainparth22/MLgenomepipeline',
    category: ['ml'],
    status: 'demo',
  },
  {
    title: 'Resume Analyser',
    description:
      'AI-powered resume parsing and scoring tool. Extracts skills, education, and experience from PDF resumes and provides structured feedback for candidates.',
    tech: ['Python', 'NLP', 'PyPDF2', 'Hugging Face', 'FastAPI'],
    github: 'https://github.com/Jainparth22/Resumeanalyser',
    category: ['ml', 'backend'],
    status: 'demo',
  },
  {
    title: 'Smart Retail Customer Intelligence Platform',
    description:
      'Customer intelligence platform for retail that combines sales data analytics, customer segmentation, and predictive modeling to drive business insights.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'ML', 'Analytics'],
    github: 'https://github.com/Jainparth22/Smart-Retail-Customer-Intelligence-Platform-',
    category: ['ml'],
    status: 'demo',
  },
  {
    title: 'MayaCardio',
    description:
      'Cardiovascular disease prediction and analysis tool using machine learning models trained on clinical datasets. Focuses on early detection patterns.',
    tech: ['Python', 'Scikit-learn', 'Healthcare ML', 'Classification'],
    github: 'https://github.com/Jainparth22/MayaCardio',
    category: ['ml'],
    status: 'demo',
  },
  {
    title: 'Cerebal Ross Store Sales Prediction',
    description:
      'Store sales forecasting model inspired by the Rossmann Store Sales dataset. Time-series analysis with feature engineering for retail sales prediction.',
    tech: ['Python', 'XGBoost', 'Time-series', 'Feature Engineering', 'Pandas'],
    github: 'https://github.com/Jainparth22/Cerebal-ross-store-sales-problem',
    category: ['ml'],
    status: 'demo',
  },
  {
    title: 'JAR (AI Research Tool)',
    description:
      'AI-assisted research and knowledge management tool. Combines NLP-driven document parsing with semantic search for efficient information retrieval.',
    tech: ['Python', 'NLP', 'Semantic Search', 'FAISS'],
    github: 'https://github.com/Jainparth22/JAR',
    category: ['ml'],
    status: 'demo',
  },
  {
    title: 'ML Workshop Project',
    description:
      'Workshop project exploring classical and deep learning techniques. Covers model evaluation, data preprocessing, and hyperparameter optimization.',
    tech: ['Python', 'Scikit-learn', 'Deep Learning', 'PyTorch'],
    github: 'https://github.com/Jainparth22/MLworkshopProj',
    category: ['ml'],
    status: 'learning',
  },

  // ─────────────── 🏗️ BACKEND & FULL-STACK ───────────────
  {
    title: 'Campus Cart',
    description:
      'E-commerce platform tailored for campus communities. Multi-vendor marketplace with cart management, order tracking, and student-specific features.',
    tech: ['Flask', 'Python', 'SQLite', 'HTML/CSS', 'JavaScript'],
    github: 'https://github.com/Jainparth22/Campus-Cart',
    category: ['backend'],
    status: 'demo',
  },
  {
    title: 'Hospital Management App (HMA)',
    description:
      'Comprehensive hospital management system covering patient registration, doctor scheduling, billing, and inventory. Multi-role access with admin dashboards.',
    tech: ['Python', 'Flask', 'SQLAlchemy', 'PostgreSQL', 'Bootstrap'],
    github: 'https://github.com/Jainparth22/Hospital-Management-App-HMA',
    category: ['backend'],
    status: 'demo',
  },
  {
    title: 'Household Services Application (HSA)',
    description:
      'Service marketplace for connecting household service providers with customers. Booking, payment, and rating system with provider dashboards.',
    tech: ['Flask', 'Vue.js', 'SQLite', 'Celery', 'Redis'],
    github: 'https://github.com/Jainparth22/Household-Services-Application-HSA',
    category: ['backend'],
    status: 'demo',
  },
  {
    title: 'Library Management System',
    description:
      'Digital library catalog and management system with book borrowing workflows, fine calculation, member management, and reporting features.',
    tech: ['Python', 'Flask', 'SQLAlchemy', 'SQLite', 'Jinja2'],
    github: 'https://github.com/Jainparth22/Library_Management_System',
    category: ['backend'],
    status: 'demo',
  },
  {
    title: 'Vehicle Parking App (VPA)',
    description:
      'Smart parking management system with slot booking, real-time availability, QR check-in/check-out, and payment integration for parking lots.',
    tech: ['Python', 'Flask', 'SQLite', 'QR Code', 'REST API'],
    github: 'https://github.com/Jainparth22/Vehicle-Parking-App-VPA',
    category: ['backend'],
    status: 'demo',
  },
  {
    title: 'Task Management App',
    description:
      'Kanban-style task management application with drag-and-drop, priority tagging, due dates, team collaboration, and progress tracking.',
    tech: ['Python', 'Flask', 'JavaScript', 'SQLite'],
    github: 'https://github.com/Jainparth22/Task-management-app',
    category: ['backend'],
    status: 'demo',
  },

  // ─────────────── ⚡ DISTRIBUTED SYSTEMS ───────────────
  {
    title: 'Scalable Real-time Chat',
    description:
      'Horizontally scalable chat application with WebSockets, Redis Pub/Sub cluster backplane, Transactional Outbox pattern, and monotonic message sequencing.',
    tech: ['WebSockets', 'Redis Pub/Sub', 'Transactional Outbox', 'PostgreSQL', 'Node.js'],
    github: 'https://github.com/Jainparth22/scalable-realtime-chat',
    category: ['distributed'],
    status: 'production',
    highlights: [
      'Horizontally scalable via Redis Pub/Sub backplane',
      'Transactional Outbox pattern for message durability',
      'Monotonic sequencing for correct message ordering',
    ],
  },
  {
    title: 'Distributed Rate Limiter',
    description:
      'Production-grade rate limiter implementing 5 algorithms: Token Bucket, Leaky Bucket, Fixed Window, Sliding Window Log, Sliding Window Counter — with Redis + hot-key sharding.',
    tech: ['Redis', 'Python', 'Token Bucket', 'Sliding Window', 'Distributed Systems'],
    github: 'https://github.com/Jainparth22/distributed-rate-limiter',
    category: ['distributed'],
    status: 'production',
    highlights: [
      '5 rate limiting algorithms implemented',
      'Redis integration with hot-key sharding',
      'Configurable per-user, per-IP, per-endpoint limits',
    ],
  },
  {
    title: 'Scalable Newsfeed System',
    description:
      'Dynamic social news feed engine with hybrid fan-out (write for normal users, read for celebrities), O(1) cursor-based pagination, and ranking algorithms.',
    tech: ['Redis', 'PostgreSQL', 'Fan-out', 'Pagination', 'Python', 'FastAPI'],
    github: 'https://github.com/Jainparth22/scalable-newsfeed-system',
    category: ['distributed'],
    status: 'production',
    highlights: [
      'Hybrid fan-out strategy for normal vs celebrity users',
      'O(1) cursor-based pagination',
      'Custom ranking algorithm for feed relevance',
    ],
  },
  {
    title: 'Distributed URL Shortener',
    description:
      'High-throughput URL shortener with Base62 encoding, LRU cache with Single-Flight stampede prevention, SQLite persistence, and JWT Bearer auth.',
    tech: ['Python', 'FastAPI', 'Redis', 'Base62', 'LRU Cache', 'JWT', 'SQLite'],
    github: 'https://github.com/Jainparth22/distributed-url-shortener',
    category: ['distributed'],
    status: 'production',
    highlights: [
      'Base62 encoding for short URL generation',
      'LRU cache with Single-Flight for stampede prevention',
      'JWT Bearer auth for API security',
    ],
  },

  // ─────────────── 📚 COURSEWORK & LEARNING ───────────────
  {
    title: 'Algorithms Coursework',
    description:
      'Implementations of classic algorithms and data structures with detailed complexity analysis. Covers sorting, graph algorithms, dynamic programming, and more.',
    tech: ['C++', 'Python', 'Algorithms', 'DSA'],
    github: 'https://github.com/Jainparth22/AlgorithmsCoursework',
    category: ['coursework'],
    status: 'learning',
  },
  {
    title: 'CS Notes',
    description:
      'Curated, well-organized notes covering Computer Science fundamentals: DBMS, OS, CN, System Design, DSA — perfect for interview prep and revision.',
    tech: ['Markdown', 'CS Theory', 'System Design', 'Interview Prep'],
    github: 'https://github.com/Jainparth22/CS-Notes',
    category: ['coursework'],
    status: 'learning',
  },
  {
    title: 'Langchain Workshop',
    description:
      'Hands-on exploration of LangChain for building LLM-powered applications, RAG pipelines, and agent workflows with various language models.',
    tech: ['Python', 'LangChain', 'RAG', 'LLM', 'OpenAI'],
    github: 'https://github.com/Jainparth22/Langchain-Workshop',
    category: ['coursework', 'ml'],
    status: 'learning',
  },
  {
    title: 'FastAPI Coursework',
    description:
      'Progressive FastAPI learning projects from routing and dependency injection to async database access, middleware, and background tasks.',
    tech: ['Python', 'FastAPI', 'Pydantic', 'SQLAlchemy', 'Async'],
    github: 'https://github.com/Jainparth22/FastAPI-Coursework',
    category: ['coursework'],
    status: 'learning',
  },
  {
    title: 'Flask Coursework',
    description:
      'Flask learning projects covering blueprints, ORM integration, authentication patterns, REST API design, and deployment best practices.',
    tech: ['Python', 'Flask', 'Jinja2', 'SQLAlchemy', 'REST API'],
    github: 'https://github.com/Jainparth22/Flask-Coursework',
    category: ['coursework'],
    status: 'learning',
  },
  {
    title: 'Git Coursework',
    description:
      'Deep dive into Git internals, branching strategies, merge vs rebase, cherry-pick, git hooks, and collaborative workflow best practices.',
    tech: ['Git', 'Version Control', 'CLI'],
    github: 'https://github.com/Jainparth22/GitCoursework',
    category: ['coursework'],
    status: 'learning',
  },
  {
    title: 'ION Interview Resources',
    description:
      'Curated collection of interview preparation resources, problem-solving patterns, and company-specific study guides for technical interviews.',
    tech: ['DSA', 'System Design', 'Interview Prep'],
    github: 'https://github.com/Jainparth22/ION_interview_helpful',
    category: ['coursework'],
    status: 'learning',
  },
];

// ─────── HELPER: filter projects by category ───────
export const getProjectsByCategory = (category: ProjectCategory) =>
  projects.filter((p) => p.category.includes(category));

export const featuredProjects = projects.filter((p) => p.featured);

