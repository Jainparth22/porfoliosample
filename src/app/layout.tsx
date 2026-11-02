import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Parth Jain | Backend & ML Engineer Portfolio',
  description:
    'Computer Science & Data Science student specializing in production backend systems, distributed architectures, and deployable ML/NLP pipelines. 900+ day streak, 34 GitHub repos.',
  keywords: [
    'Parth Jain',
    'Backend Engineer',
    'Machine Learning',
    'NLP',
    'Distributed Systems',
    'FastAPI',
    'Flask',
    'PyTorch',
    'Portfolio',
  ],
  authors: [{ name: 'Parth Jain', url: 'https://github.com/Jainparth22' }],
  creator: 'Parth Jain',
  openGraph: {
    title: 'Parth Jain | Portfolio',
    description:
      'Backend & ML Engineer | Dual Degree CS + Data Science | Distributed Systems Builder',
    url: 'https://jainparth22.github.io',
    siteName: 'Parth Jain Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark`}>
      <body className="min-h-screen bg-zinc-950 font-sans text-zinc-100 antialiased selection:bg-cyan-500/20 selection:text-cyan-300">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

