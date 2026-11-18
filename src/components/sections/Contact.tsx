import { personalInfo } from '@/data/personal';

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-28">
      <p className="font-mono text-xs text-accent">08</p>
      <h2 className="mt-3 font-serif text-[clamp(2.5rem,7vw,5.5rem)] leading-[1] tracking-tight max-w-4xl">
        Hiring for backend or ML? Let&apos;s talk.
      </h2>
      <div className="mt-10 flex flex-col gap-3 text-lg">
        <a href={`mailto:${personalInfo.email}`} className="underline decoration-accent underline-offset-4 w-fit">
          {personalInfo.email}
        </a>
        <a href={`tel:${personalInfo.phone.replace(/-/g, '')}`} className="w-fit hover:text-accent">
          {personalInfo.phone}
        </a>
        <div className="flex gap-6 text-base mt-2">
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="underline decoration-rule hover:decoration-accent">
            LinkedIn
          </a>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="underline decoration-rule hover:decoration-accent">
            GitHub
          </a>
        </div>
      </div>
      <p className="mt-24 pt-6 rule-top font-mono text-xs text-mute">
        Parth Jain / Bhopal and Chennai, India / Built with Next.js and Tailwind
      </p>
    </section>
  );
}
