import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        paper: '#f3efe6',
        sheet: '#faf8f3',
        ink: '#141414',
        mute: '#6b665c',
        rule: '#d6d0c2',
        accent: '#c2410c',
      },
    },
  },
  plugins: [],
};
export default config;
