const items = [
  'Python', 'FastAPI', 'Flask', 'PostgreSQL', 'Redis', 'Celery', 'Docker', 'Next.js', 'Vue',
  'PyTorch', 'Hugging Face', 'LangGraph', 'FAISS', 'Scikit-learn', 'LightGBM', 'WebSockets', 'GitHub Actions',
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="border-y border-rule overflow-hidden py-4" aria-hidden="true">
      <div className="marquee-track gap-10 font-mono text-xs uppercase tracking-widest text-mute">
        {row.map((t, i) => (
          <span key={t + i} className="shrink-0 pr-10">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
