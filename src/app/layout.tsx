import type { Metadata } from 'next';
import { Inter, Fraunces, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Nav from '@/components/layout/Nav';

const sans = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const serif = Fraunces({ subsets: ['latin'], variable: '--font-serif', display: 'swap' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' });

export const metadata: Metadata = {
  title: 'Parth Jain | Backend and ML engineer',
  description:
    'Backend and ML engineer. Three live apps, a 0.75 Kaggle MAP@3 result, and a Hugging Face semantic matcher. B.Tech CSE (VIT Bhopal) and BS Data Science (IIT Madras).',
  authors: [{ name: 'Parth Jain', url: 'https://github.com/Jainparth22' }],
  openGraph: {
    title: 'Parth Jain | Backend and ML engineer',
    description: 'I build for edge cases, race conditions and partial failures.',
    type: 'website',
  },
};

// Runs before paint so the saved theme applies without a flash.
const themeScript = `try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${sans.variable} ${serif.variable} ${mono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans bg-paper text-ink">
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
