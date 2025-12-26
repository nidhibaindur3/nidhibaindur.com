// types/landing.ts
import type { Project } from '@/data/projects';

export type LandingProject = Pick<
  Project,
  'slug' | 'name' | 'description' | 'url' | 'eyebrow' | 'hero'
>;
