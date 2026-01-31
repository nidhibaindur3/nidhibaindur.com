export type Project = {
  slug: string;
  name: string;
  description: string;
  url: string;
  tags: string[];

  hero?: string;
  eyebrow?: string;

  team?: string[];
  role?: string[];

  tools?: string[];

  timeline?: string;
  solutionAnchorLabel?: string;
};

const projects: Project[] = [
  {
    slug: 'nbwebsite',
    name: 'NIDHI BAINDUR',
    description: 'Personal portfolio website showcasing creative and technical work.',
    url: 'https://servera.dev',
    tags: ['Next.js', 'Cloudflare', 'Infra'],

    hero: '/images/p1.jpg',
    eyebrow: 'Personal Website',

    team: ['Nidhi Baindur', 'Jhon Paul the Second', 'Leo XVI'],
    role: ['Design', 'Frontend Development', 'Deployment & Infrastructure'],

    tools: ['Next.js', 'Tailwind CSS'],

    timeline: 'Ongoing',
    solutionAnchorLabel: 'View Project',
  },

  {
    slug: 'canhomes',
    name: 'CanHomes',
    description: 'Housing assistance platform for international students relocating to Canada.',
    url: 'https://canhomes.vicilabs.dev',
    tags: ['EdTech', 'Startup', 'UX', 'Web App'],

    hero: '/images/p2.jpg',
    eyebrow: 'Startup Project',

    team: ['Aditya Baindur', 'Jane The First', 'Randy The Second'],
    role: ['Product Strategy', 'UX Research', 'Interface Design', 'Full-Stack Development'],

    tools: ['Next.js', 'Supabase', 'Figma'],

    timeline: '2024',
    solutionAnchorLabel: 'Jump to Solution',
  },


  {
    slug: 'canhomes1',
    name: 'CanHomes',
    description: 'Housing assistance platform for international students relocating to Canada.',
    url: 'https://canhomes.vicilabs.dev',
    tags: ['EdTech', 'Startup', 'UX', 'Web App'],

    hero: '/images/p2.jpg',
    eyebrow: 'Startup Project',

    team: ['Aditya Baindur', 'Jane The First', 'Randy The Second'],
    role: ['Product Strategy', 'UX Research', 'Interface Design', 'Full-Stack Development'],

    tools: ['Next.js', 'Supabase', 'Figma'],

    timeline: '2024',
    solutionAnchorLabel: 'Jump to Solution',
  },


  {
    slug: 'canhomes2',
    name: 'CanHomes',
    description: 'Housing assistance platform for international students relocating to Canada.',
    url: 'https://canhomes.vicilabs.dev',
    tags: ['EdTech', 'Startup', 'UX', 'Web App'],

    hero: '/images/p2.jpg',
    eyebrow: 'Startup Project',

    team: ['Aditya Baindur', 'Jane The First', 'Randy The Second'],
    role: ['Product Strategy', 'UX Research', 'Interface Design', 'Full-Stack Development'],

    tools: ['Next.js', 'Supabase', 'Figma'],

    timeline: '2024',
    solutionAnchorLabel: 'Jump to Solution',
  },




  {
    slug: 'canhomes3',
    name: 'CanHomes',
    description: 'Housing assistance platform for international students relocating to Canada.',
    url: 'https://canhomes.vicilabs.dev',
    tags: ['EdTech', 'Startup', 'UX', 'Web App'],

    hero: '/images/p2.jpg',
    eyebrow: 'Startup Project',

    team: ['Aditya Baindur', 'Jane The First', 'Randy The Second'],
    role: ['Product Strategy', 'UX Research', 'Interface Design', 'Full-Stack Development'],

    tools: ['Next.js', 'Supabase', 'Figma'],

    timeline: '2024',
    solutionAnchorLabel: 'Jump to Solution',
  },


];

export default projects;
