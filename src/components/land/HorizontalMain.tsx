// components/HorizontalMain.tsx
'use client';

import projects from '@/data/projects';
import type { LandingProject } from '@/types/landing';
import HorizontalProjects from './ProjectsHorizontal';

export default function HorizontalMain() {
  const landingProjects: LandingProject[] = projects.map((p) => ({
    slug: p.slug,
    name: p.name,
    description: p.description,
    url: p.url,
    eyebrow: p.eyebrow,
    hero: p.hero,
  }));

  return (
    <section className="relative">
      <div className="bg-main-theme absolute inset-x-0 top-0 h-px" />

      <HorizontalProjects projecting={landingProjects} />
    </section>
  );
}
