type Item = { label: string; value: number; highlight?: boolean };

export default function BarChart({
  title,
  items,
  min,
  max,
  mark,
  inverse = false,
}: {
  title?: string;
  items: Item[];
  min: number;
  max: number;
  mark?: { label: string; value: number };
  inverse?: boolean;
}) {
  const pct = (v: number) => Math.max(0, Math.min(100, ((v - min) / (max - min)) * 100));
  const mute = inverse ? 'text-invmute' : 'text-mute';
  const track = inverse ? 'bg-invfg/10' : 'bg-ink/10';
  const bar = inverse ? 'bg-invfg/40' : 'bg-ink/35';

  return (
    <div className="mt-8">
      {title && <p className={`font-mono text-xs uppercase tracking-widest mb-4 ${mute}`}>{title}</p>}
      <ul className="space-y-2.5">
        {items.map((it) => (
          <li key={it.label} className="grid grid-cols-12 items-center gap-3 text-sm">
            <span className={`col-span-5 md:col-span-4 leading-tight ${it.highlight ? 'font-medium' : mute}`}>{it.label}</span>
            <div className={`relative col-span-5 md:col-span-6 h-2.5 ${track}`}>
              <div
                className={`h-full ${it.highlight ? 'bg-accent' : bar}`}
                style={{ width: pct(it.value) + '%' }}
              />
              {mark && (
                <div
                  className="absolute top-[-4px] bottom-[-4px] w-px bg-accent"
                  style={{ left: pct(mark.value) + '%' }}
                />
              )}
            </div>
            <span className={`col-span-2 text-right font-mono text-xs ${it.highlight ? 'text-accent' : mute}`}>
              {it.value.toFixed(3)}
            </span>
          </li>
        ))}
      </ul>
      {mark && (
        <p className={`mt-3 font-mono text-[11px] ${mute}`}>
          <span className="text-accent">|</span> {mark.label}
        </p>
      )}
    </div>
  );
}
