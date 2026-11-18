import { personalInfo } from '@/data/personal';

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
    <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur border-b border-rule">
      <nav className="mx-auto max-w-6xl px-5 h-14 flex items-center justify-between">
        <a href="#top" className="font-serif text-lg tracking-tight">
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
        <a
          href={`mailto:${personalInfo.email}`}
          className="text-sm border border-ink px-3 py-1.5 hover:bg-ink hover:text-paper transition-colors"
        >
          Get in touch
        </a>
      </nav>
    </header>
  );
}
