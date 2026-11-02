import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo } from '@/data/personal';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <p className="font-bold text-white">Parth Jain<span className="text-cyan-400">.</span></p>
          <p className="text-xs text-zinc-500 mt-1">
            Built with Next.js · Tailwind CSS · Framer Motion
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
            className="p-2 text-zinc-500 hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
            className="p-2 text-zinc-500 hover:text-white transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href={`mailto:${personalInfo.email}`}
            className="p-2 text-zinc-500 hover:text-white transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <p className="text-xs text-zinc-600 flex items-center gap-1">
          © {year} Parth Jain · Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" />
        </p>
      </div>
    </footer>
  );
}

