import type { Config } from 'tailwindcss';

const c = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        paper: c('paper'),
        sheet: c('sheet'),
        ink: c('ink'),
        mute: c('mute'),
        rule: c('rule'),
        accent: c('accent'),
        inv: c('inv'),
        invfg: c('invfg'),
        invmute: c('invmute'),
        invrule: c('invrule'),
      },
    },
  },
  plugins: [],
};
export default config;
