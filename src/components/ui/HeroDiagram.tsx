// A small diagram of how my systems are built: a request fans out to cache, queue and database,
// and each dependency has a fallback. Pure SVG, colors follow the theme.
export default function HeroDiagram() {
  const box = 'fill-sheet stroke-ink';
  const label = 'fill-ink font-mono';
  const sub = 'fill-mute font-mono';
  return (
    <figure className="w-full">
      <svg viewBox="0 0 480 300" className="w-full h-auto" role="img" aria-label="Request flow with fallbacks: client to API, then Redis cache, Celery queue and database, each with a fallback">
        {/* connectors */}
        <g className="stroke-accent flow-line" fill="none" strokeWidth="1.5">
          <path d="M120 150 H150" />
          <path d="M260 150 H285 V62 H310" />
          <path d="M260 150 H310" />
          <path d="M260 150 H285 V238 H310" />
        </g>

        {/* client */}
        <rect x="10" y="128" width="110" height="44" rx="3" strokeWidth="1.2" className={box} />
        <text x="65" y="155" textAnchor="middle" fontSize="12" className={label}>Client</text>

        {/* api */}
        <rect x="150" y="128" width="110" height="44" rx="3" strokeWidth="1.8" className={box} />
        <text x="205" y="155" textAnchor="middle" fontSize="12" className={label}>API</text>

        {/* cache */}
        <rect x="310" y="40" width="160" height="44" rx="3" strokeWidth="1.2" className={box} />
        <text x="390" y="67" textAnchor="middle" fontSize="12" className={label}>Redis cache</text>
        <text x="390" y="100" textAnchor="middle" fontSize="10" className={sub}>down? use in-memory</text>

        {/* queue */}
        <rect x="310" y="128" width="160" height="44" rx="3" strokeWidth="1.2" className={box} />
        <text x="390" y="155" textAnchor="middle" fontSize="12" className={label}>Celery queue</text>
        <text x="390" y="188" textAnchor="middle" fontSize="10" className={sub}>down? run synchronously</text>

        {/* db */}
        <rect x="310" y="216" width="160" height="44" rx="3" strokeWidth="1.2" className={box} />
        <text x="390" y="243" textAnchor="middle" fontSize="12" className={label}>PostgreSQL</text>
        <text x="390" y="276" textAnchor="middle" fontSize="10" className={sub}>local? use SQLite</text>

        {/* caption */}
        <text x="10" y="40" fontSize="10" className={sub}>compare-and-set booking</text>
        <text x="10" y="56" fontSize="10" className={sub}>idempotency keys</text>
      </svg>
      <figcaption className="mt-3 font-mono text-[11px] text-mute">
        How my services are built: every dependency has a fallback.
      </figcaption>
    </figure>
  );
}
