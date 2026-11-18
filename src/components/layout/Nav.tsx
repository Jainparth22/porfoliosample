import { personalInfo } from '@/data/personal';
import ThemeToggle from './ThemeToggle';

const links = [
  { label: 'Shipped', href: '#shipped' },
  { label: 'Research', href: '#research' },
  { label: 'Experience', href: '#experience' },
  { label: 'All work', href: '#all-work' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 bg-paper/85 backdrop-blur border-b border-rule">
      <nav className="mx-auto max-w-6xl px-5 h-14 flex items-center justify-between gap-6">
        <a href="#top" className="font-serif text-lg tracking-tight shrink-0">
          Parth Jain
        </a>
        <ul className="hidden md:flex gap-6 text-sm text-mute">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-ink transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-5 shrink-0">
          <ThemeToggle />
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-sm border border-ink px-3 py-1.5 hover:bg-ink hover:text-paper transition-colors"
          >
            Get in touch
          </a>
        </div>
      </nav>
      <ul className="md:hidden flex gap-5 overflow-x-auto px-5 pb-2 text-sm text-mute whitespace-nowrap">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="hover:text-ink">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
