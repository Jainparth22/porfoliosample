import { personalInfo, stats, pullQuote } from '@/data/personal';
import { projects } from '@/data/projects';

export default function Hero() {
  const live = projects.filter((p) => p.live);
  return (
    <section id="top" className="mx-auto max-w-6xl px-5 pt-16 md:pt-28 pb-20">
      <p className="font-mono text-xs uppercase tracking-widest text-mute">
        Backend and ML engineer / VIT Bhopal + IIT Madras / open to roles
      </p>

      <h1 className="mt-6 font-serif text-[clamp(3rem,9vw,7.5rem)] leading-[0.95] tracking-tight">
        Parth Jain<span className="text-accent">.</span>
      </h1>

      <p className="mt-8 max-w-3xl font-serif text-2xl md:text-4xl leading-snug">{pullQuote}</p>

      <p className="mt-6 max-w-2xl text-mute leading-relaxed">
        I build services that stay correct under concurrency and keep running when dependencies fail,
        and ML systems whose results I can defend. Below is proof, not a list of technologies.
      </p>

      <dl className="mt-14 grid grid-cols-2 md:grid-cols-4 border-t border-rule">
        {stats.map((s) => (
          <div key={s.label} className="py-6 pr-4 md:border-r border-rule last:border-r-0">
            <dt className="font-serif text-5xl md:text-6xl tracking-tight">
              {s.value}
              <span className="text-2xl text-mute">{s.suffix}</span>
            </dt>
            <dd className="mt-2 text-sm text-mute leading-snug">{s.label}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
        <span className="font-mono text-xs uppercase tracking-widest text-mute">Live now</span>
        {live.map((p) => (
          <a
            key={p.title}
            href={p.live}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-rule hover:decoration-accent hover:text-accent"
          >
            {p.title.split(':')[0].split('(')[0].trim()}
          </a>
        ))}
        <a href={personalInfo.github} className="underline decoration-rule hover:decoration-accent" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={personalInfo.linkedin} className="underline decoration-rule hover:decoration-accent" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </section>
  );
}
