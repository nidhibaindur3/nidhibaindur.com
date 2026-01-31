import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiPython,
  SiFastapi,
  SiPostgresql,
  SiDocker,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiPandas,
  SiWolframmathematica,
  SiLatex,
  SiPlotly,
  SiNumpy,
} from 'react-icons/si';
import { TbMathFunction, TbVariable } from 'react-icons/tb';

export const aboutContent = {
  badge: 'About',

  headline: 'Designer, facilitator, and systems nerd focused on creating calm, resilient products.',

  paragraphs: [
    'I partner closely with product and engineering leads to turn ambiguous ideas into aligned roadmaps. My work blends research, strategy, and meticulous craft so we can deliver experiences that feel effortless and inclusive.',

    "Outside of the design desk you'll find me mentoring early career designers, illustrating wild interface concepts, and writing about building mindful digital experiences.",
  ],
};

export const quickFacts = [
  { label: 'Based in', value: 'DFW' },
  { label: 'Working style', value: 'Remote-first, async-friendly' },
  { label: 'Collaborations', value: 'Fintech, Health, SaaS' },
];

export const pillars = [
  {
    title: 'Systems thinking',
    description:
      'I love creating frameworks that make collaboration easier. Design systems, rituals, and documentation keep teams aligned and shipping confidently.',
  },
  {
    title: 'Evidence-led decisions',
    description:
      'Qualitative research, quant insights, and purposeful experiments guide my work—every design choice is rooted in outcomes.',
  },
  {
    title: 'Inclusive craft',
    description:
      'Accessibility, localization, and inclusive storytelling are built into my process from day zero, not retrofitted later.',
  },
];
export const toolkitIcons = [
  { id: 1, color: 'bg-[#FFD900]', icon: 'M' },
  { id: 2, color: 'bg-[#4353FF]', icon: 'W' },
  { id: 3, color: 'bg-[#000000]', icon: '●' },
  { id: 4, color: 'bg-[#F24E1E]', icon: 'F' },
  { id: 5, color: 'bg-[#FF3366]', icon: 'A' },
];

export const CAT_CARDS = [
  { id: 1, color: 'bg-blue-400', title: 'Sketching' },
  { id: 2, color: 'bg-orange-400', title: 'Cooking' },
  { id: 3, color: 'bg-pink-400', title: 'Cafes' },
  { id: 4, color: 'bg-purple-400', title: 'Music' },
];

export const RESOURCES = [
  {
    id: '01',
    title: 'AWARDS',
    label: 'AWARDS',
    color: 'bg-[#F9F6EE]', // Cream background
    tabColor: 'bg-main-theme',
    description: 'To add.',
    linkText: 'WATCH NOW',
  },
  {
    id: '02',
    title: 'INVOLVEMENT',
    label: 'COMMUNITY INVOLVEMENT',
    color: 'bg-main-theme',
    tabColor: 'bg-[#FFC0CB]', // Pink
    description: 'the business of being a  SWE.',
    linkText: 'READ MORE',
  },
  {
    id: '03',
    title: 'HOBBIES',
    label: 'HOBBIES',
    color: 'bg-main-theme',
    tabColor: 'bg-[#FFB347]', // Orange
    description: 'One-on-one sessions.',
    linkText: 'BOOK SESSION',
  },
];

export const FAQ_DATA = [
  { q: 'How do you say your name?', a: "It's pronounced Nee-dhee!" },
  { q: 'Where are you from?', a: "I'm based in Dallas, TX." },
  {
    q: 'Where did you study?',
    a: 'I studied Computational mathematics, with a minor in Computer Science and Creative Writing.',
  },
  { q: 'Are you open to work?', a: 'I NEED A JOB PLEASE!' },
];

export const aboutData = {
  header: {
    title: 'Let’s know\nmore about\nme',
    dotColor: 'bg-[#3333FF]',
  },
  // Categorized Toolkit
  toolkit: {
    title: 'Toolkit',
    description: 'Bridging the gap between rigorous mathematics and scalable software engineering.',
    categories: [
      {
        name: 'Frontend',
        icons: [
          { icon: SiReact, color: 'bg-[#61DAFB]' },
          { icon: SiNextdotjs, color: 'bg-black' },
          { icon: SiTypescript, color: 'bg-[#3178C6]' },
          { icon: SiTailwindcss, color: 'bg-[#06B6D4]' },
        ],
      },
      {
        name: 'Backend & Infra',
        icons: [
          { icon: SiPython, color: 'bg-[#3776AB]' },
          { icon: SiFastapi, color: 'bg-[#05998B]' },
          { icon: SiPostgresql, color: 'bg-[#4169E1]' },
          { icon: SiDocker, color: 'bg-[#2496ED]' },
        ],
      },
      {
        name: 'ML & Data',
        icons: [
          { icon: SiPytorch, color: 'bg-[#EE4C2C]' },
          { icon: SiPandas, color: 'bg-[#150458]' },
          { icon: SiScikitlearn, color: 'bg-[#F7931E]' },
          { icon: SiNumpy, color: 'bg-[#013243]' },
        ],
      },
      {
        name: 'Comp Math',
        icons: [
          { icon: TbMathFunction, color: 'bg-[#6366F1]' },
          { icon: SiLatex, color: 'bg-[#008080]' },
          { icon: SiWolframmathematica, color: 'bg-[#DD1100]' },
          { icon: TbVariable, color: 'bg-[#4F46E5]' },
        ],
      },
    ],
  },
  skills: {
    title: 'Expertise',
    description: 'Specialized in numerical analysis and distributed systems.',
    items: [
      'Numerical Analysis',
      'Distributed Systems',
      'Statistical Modeling',
      'UI/UX Design',
      'Optimization',
      'Cloud Architecture',
      'Linear Algebra',
    ],
  },
  location: {
    city: '/images/About/location.png',
  },
  portfolio: {
    title: 'Portfolio',
    subtitle: 'Check my work here:',
    displayLink: 'view-work.com/portfolio',
    url: '#',
    accentColor: 'bg-blue-50',
  },
};
