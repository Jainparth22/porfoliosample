'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    } catch (e) {
      // ignore storage errors
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="font-mono text-xs uppercase tracking-widest text-mute hover:text-ink transition-colors"
    >
      {dark ? 'Light' : 'Dark'}
    </button>
  );
}
