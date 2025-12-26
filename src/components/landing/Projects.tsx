import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';

const projects = [
  {
    title: 'Compass Housing',
    description:
      'Guided international students to secure verified housing and supportive roommates through one calm, end-to-end journey.',
    year: '2024',
    impact: '63% faster onboarding',
    image:
      'https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1600&q=80',
    stack: ['UX research', 'Service blueprint', 'Design system'],
    link: 'https://dribbble.com/',
  },
  {
    title: 'Aura Productivity',
    description:
      'Built an AI-assisted rituals hub for distributed teams to align decisions, document learnings, and keep momentum high.',
    year: '2023',
    impact: '18 enterprise teams onboarded',
    image:
      'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1600&q=80',
    stack: ['Product vision', 'Experience design', 'React'],
    link: 'https://www.behance.net/',
  },
  {
    title: 'Glow Telehealth',
    description:
      'Reimagined global virtual care with modular journeys and compassionate touchpoints for patients and clinicians alike.',
    year: '2022',
    impact: 'CSAT rose to 4.8/5',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2072',
    stack: ['Design ops', 'Prototype', 'Accessibility'],
    link: 'https://medium.com/',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-24">
      <div className="section-container max-w-6xl space-y-16">
        <div className="mx-auto flex max-w-2xl flex-col gap-4 text-center">
          <span className="self-center rounded-full border border-neutral-200 bg-neutral-50 px-4 py-1 text-sm font-medium text-neutral-600">
            Selected work
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-balance text-neutral-900 sm:text-4xl">
            Product stories that pair measurable outcomes with beautiful craft.
          </h2>
          <p className="text-sm text-neutral-600 sm:text-base">
            Each case study represents deep partnerships with teams to untangle complexity, ground
            ideas in insight, and ship experiences people love using.
          </p>
        </div>
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group relative overflow-hidden rounded-[2.75rem] border border-neutral-200 bg-neutral-50/70 shadow-[0_30px_90px_-60px_rgba(15,23,42,0.45)] transition hover:-translate-y-1 hover:shadow-[0_40px_120px_-70px_rgba(15,23,42,0.55)]"
            >
              <div className="grid gap-10 p-10 lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] lg:items-center">
                <div className="space-y-6">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-neutral-500">
                    <Badge
                      className="rounded-full bg-[var(--color-main-theme)]/15 px-3 py-1 text-[var(--color-main-theme)]"
                      variant="secondary"
                    >
                      {project.year}
                    </Badge>
                    <span className="rounded-full border border-neutral-200 px-3 py-1 text-neutral-600">
                      {project.impact}
                    </span>
                  </div>
                  <CardTitle className="text-2xl text-neutral-900 sm:text-[1.65rem]">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed text-neutral-600">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 text-xs font-medium text-neutral-600">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-neutral-200 bg-white px-3 py-1"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <Button
                    asChild
                    variant="link"
                    className="h-auto w-fit p-0 text-sm font-semibold text-[var(--color-main-theme)] transition hover:text-[var(--color-main-theme)]/80"
                  >
                    <a href={project.link} target="_blank" rel="noreferrer">
                      View full case study →
                    </a>
                  </Button>
                </div>
                <div className="relative overflow-hidden rounded-3xl border border-neutral-100 bg-white">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={960}
                    height={700}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/40 opacity-0 transition group-hover:opacity-100" />
                  <div className="pointer-events-none absolute inset-x-6 bottom-6 flex items-center justify-between rounded-2xl border border-white/60 bg-white/80 px-4 py-2 text-xs font-medium text-neutral-500 shadow-sm">
                    <span>Case 0{index + 1}</span>
                    <span>Role: End-to-end owner</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
