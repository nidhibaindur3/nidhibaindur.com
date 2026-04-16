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

export const cards = [
  {
    id: 1,
    image: '/images/About/hobbies/thebean.jpeg',
    title: 'Going on spontaneous trips',
    color: 'border-neutral-200',
    description: 'This is the first card description.',
  },
  {
    id: 2,
    image: '/images/About/hobbies/cooking_bday.jpeg',
    title: 'Cooking',
    color: 'border-neutral-200',
    description: 'This is the second card description.',
  },
  {
    id: 3,
    image: '/images/About/hobbies/elliotbay.jpeg',
    title: 'Reflecting',
    color: 'border-neutral-200',
  },
  {
    id: 4,
    image: '/images/About/hobbies/explorenid.jpeg',
    title: 'Exploring new citites',
    color: 'border-neutral-200',
  },
  {
    id: 5,
    image: '/images/About/hobbies/nidhenna.jpeg',
    title: 'Scribbling',
    color: 'border-neutral-200',
  },

  {
    id: 6,
    image: '/images/About/hobbies/painting_grapevine.jpeg',
    title: 'Painting',
    color: 'border-neutral-200',
  },
];

export const awards = [
  { year: "2024", title: "Advanced Certificate of Achievement - RIT Undergraduate Research Scholar" },
  { year: "2024", title: "Undergraduate Research Scholar" },
  { year: "2024", title: "Legacy Award" },
  { year: "2024", title: "SMS Citizens of the Year - Bernoulli Award" },
  { year: "2024", title: "SMS Graduating Research Scholars Award" },
  { year: "2023", title: "Mildred Feinbloom Scholarship" },
  { year: "2023", title: "RIT Emerson Fellowship 2023" },
  { year: "2023", title: "RIT SMS Euler Award for Excellence" },
  { year: "2022", title: "College of Science Student Financial Award" },
  { year: "2022", title: "Nathaniel Rochester Society Scholarship" },
  { year: "2022", title: "RIT Honors Emerson Summer Undergraduate Research Fellowship 2022" },
  { year: "2022", title: "Martin Setto Memorial Scholarship Award" },
  { year: "2022", title: "Outstanding International Student Service Award" },
  { year: "2021", title: "Fellow - Inclusive Excellence Undergraduate Summer Research Fellowship" },
  { year: "2021", title: "Fellow - Newman Civic Fellowship" },
  { year: "2021", title: "RIT Honors Program" },
  { year: "2020", title: "Dean's List" },
  { year: "2020", title: "RIT Founders Scholarships for International Students" },
];

export const RESOURCES = [
  {
    id: '01',
    title: 'AWARDS',
    label: 'AWARDS',
    color: 'bg-[#F9F6EE]', // Cream background
    tabColor: 'bg-white',
    description: 'To add.',
    linkText: 'WATCH NOW',
  },
  {
    id: '02',
    title: 'WORK EXPERIENCE',
    label: 'WORK EXPERIENCE',
    color: 'bg-white',
    tabColor: 'bg-[#F9F6EE]', // Orange
    description: 'One-on-one sessions.',
    linkText: 'BOOK SESSION',
  },
  {
    id: '03',
    title: 'INVOLVEMENT',
    label: 'COMMUNITY INVOLVEMENT',
    color: 'bg-white',
    tabColor: 'bg-[#FFC0CB]', // Pink
    description: 'the business of being a  SWE.',
    linkText: 'READ MORE',
  },
  {
    id: '04',
    title: 'COURSEWORK',
    label: 'COURSEWORK',
    color: 'bg-white',
    tabColor: 'bg-[#FFB347]', // Orange
    description: 'One-on-one sessions.',
    linkText: 'BOOK SESSION',
  },
  
];

export const Work_Experience = [
    {
      title: 'Software Engineer - Ecolab',
      startDate: 'July 2024',
      endDate: 'Present',
    },
    {
      title: 'Undergraduate Student Researcher - Rochester Institute of Technology',
      startDate: 'May 2022',
      endDate: 'July 2024',
    },
    {
      title: 'Notetaker - Rochester Institute of Technology',
      startDate: 'September 2023',
      endDate: 'June 2024',
    },
    {
      title: 'Event Coordinator and Department Assistant - International Hospitality and Service Innovation Dept',
      startDate: 'September 2023',
      endDate: 'June 2024',
    },
    {
      title: 'Research Assistant - Rochester Institute of Technology',
      startDate: 'March 2023',
      endDate: 'June 2024',
    },
    {
      title: 'Hospitality & Events Support - Student Employee - College of Science Dean\'s Office, RIT',
      startDate: 'September 2022',
      endDate: 'June 2024',
    },
    {
      title: 'Resident Assistant - Rochester Institute of Technology',
      startDate: 'August 2021',
      endDate: 'June 2024',
    },
    {
      title: 'COS Scheduling Office Student Employee - Dean\'s Office, RIT',
      startDate: 'May 2023',
      endDate: 'June 2023',
    },
    {
      title: 'Undergraduate Research - Rochester Institute of Technology',
      startDate: 'January 2021',
      endDate: 'May 2022',
    },
    {
      title: 'Peer Facilitator - Culture Talk with Toni and Nidhi - Rochester Institute of Technology',
      startDate: 'August 2021',
      endDate: 'April 2022',
    },
    {
      title: 'RIT 365 Peer Facilitator - Rochester Institute of Technology',
      startDate: 'August 2021',
      endDate: 'December 2021',
    },
    {
      title: 'Enrollment Marketing Content Creator - Admissions Office, RIT',
      startDate: 'September 2020',
      endDate: 'August 2021',
    },
    {
      title: 'Student Researcher - Michel Lab, United States',
      startDate: 'June 2021',
      endDate: 'July 2021',
    },
    {
      title: 'Goldman Sachs Possibilities Summit Participant - Goldman Sachs',
      startDate: 'January 2023',
      endDate: 'March 2023',
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
