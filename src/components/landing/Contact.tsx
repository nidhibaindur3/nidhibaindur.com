import { ArrowUpRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { CONTACT_EMAIL } from '@/data/_base';

const ctas = [
  {
    label: 'Email',
    href: `mailto:${CONTACT_EMAIL}`,
    description: CONTACT_EMAIL,
  },
  {
    label: 'Schedule',
    href: 'https://cal.com/',
    description: 'Book a discovery chat',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-main-theme py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,var(--color-main-theme)_0%,transparent_60%)] opacity-10" />
      <div className="section-container relative z-10 max-w-5xl">
        <div className="relative overflow-hidden rounded-[3.5rem] border border-neutral-200 bg-main-theme/80 px-10 py-16 text-center shadow-[0_35px_120px_-70px_rgba(15,23,42,0.55)] backdrop-blur">
          <div className="absolute -top-24 left-1/2 h-52 w-52 -translate-x-1/2 rounded-full bg-[var(--color-main-theme)]/15 blur-3xl" />
          <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center gap-6">
            <span className="rounded-full border border-neutral-200 bg-main-theme px-4 py-1 text-sm font-medium text-neutral-600">
              Let&apos;s collaborate
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-pretty text-neutral-900 sm:text-4xl">
              Ready to build something purposeful and beautiful together?
            </h2>
            <p className="text-sm text-neutral-600 sm:text-base">
              Tell me about the problems you&apos;re exploring, the outcomes you&apos;re chasing,
              and the people you&apos;re designing for. I&apos;ll bring structure, empathy, and a
              calm confidence to the process.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {ctas.map((cta) => (
                <Button
                  key={cta.label}
                  asChild
                  size="lg"
                  variant={cta.label === 'Email' ? 'default' : 'secondary'}
                  className={`group gap-2 rounded-full px-7 py-3 text-base font-semibold ${
                    cta.label === 'Email'
                      ? 'bg-[var(--color-main-theme)] text-white shadow-[var(--color-main-theme)]/35 shadow-lg hover:-translate-y-0.5 hover:bg-[var(--color-main-theme)]/85'
                      : 'border border-neutral-200 bg-main-theme text-neutral-700 transition hover:bg-main-theme'
                  }`}
                >
                  <a
                    href={cta.href}
                    target={cta.label === 'Schedule' ? '_blank' : undefined}
                    rel="noreferrer"
                  >
                    <span className="flex items-center gap-2">
                      {cta.description}
                      <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                    </span>
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
