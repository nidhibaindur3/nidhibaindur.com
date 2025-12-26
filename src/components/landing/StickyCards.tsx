'use client';

import { motion, useScroll, useTransform, useSpring, type MotionValue } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

type CardData = { title: string; subtitle: string; body: string; image: string };

const CARDS: CardData[] = [
  {
    title: 'Salzburg University of Applied Sciences',
    subtitle: 'Senior Lecturer for Human-Centred Design',
    body: 'Fostering a design-driven mindset for responsible, ethical digital products.',
    image: '/images/salzburg.jpg',
  },
  {
    title: 'Experience Design Workshops',
    subtitle: 'Gestalt Theory & UX',
    body: 'Hands-on workshops on perception, composition, and systems thinking.',
    image: '/images/workshop.jpg',
  },
  {
    title: 'Digital Product Strategy',
    subtitle: 'Product Innovation',
    body: 'Helping teams ship purposeful, inclusive technology.',
    image: '/images/strategy.jpg',
  },
];

export default function StickyCards() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  // Cards closer together → slightly shorter height (90vh * count)
  return (
    <section
      ref={sectionRef}
      style={{ height: `${CARDS.length * 90}vh` }}
      className="relative bg-neutral-50 dark:bg-neutral-950"
    >
      {/* Background */}
      <div className="fixed inset-0 -z-10 bg-[url('/your-bg.jpg')] bg-cover bg-center" />

      {/* Sticky viewport */}
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <div className="relative w-full max-w-3xl px-4">
          {CARDS.map((data, i) => (
            <AnimatedCard key={i} index={i} total={CARDS.length} data={data} progress={progress} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimatedCard({
  index,
  total,
  data,
  progress,
}: {
  index: number;
  total: number;
  data: CardData;
  progress: MotionValue<number>;
}) {
  // tighter transitions → very small gap
  const segment = 1 / total;
  const GAP = 0.02;

  const windowStart = index * segment;
  const windowEnd = (index + 1) * segment;
  const enterStart = windowStart + GAP;
  const enterEnd = windowStart + segment * 0.25;
  const leaveStart = windowEnd - segment * 0.25;
  const leaveEnd = windowEnd - GAP;

  const y = useTransform(
    progress,
    [enterStart, enterEnd, leaveStart, leaveEnd],
    ['16%', '0%', '0%', '-16%']
  );
  const opacity = useTransform(
    progress,
    [enterStart, enterEnd, leaveStart, leaveEnd],
    [0, 1, 1, 0]
  );
  const scale = useTransform(
    progress,
    [enterStart, enterEnd, leaveStart, leaveEnd],
    [0.97, 1, 1, 0.97]
  );
  const visibility = useTransform(progress, (v) =>
    v < enterStart || v > leaveEnd ? 'hidden' : 'visible'
  );

  return (
    <motion.div
      style={{ y, opacity, scale, visibility, zIndex: total - index }}
      className="absolute inset-x-0 top-0 will-change-transform"
    >
      <Card className="overflow-hidden border border-white/30 bg-white/75 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-neutral-900/70">
        {/* Image at top */}
        <div className="relative h-56 w-full">
          <Image
            src={data.image}
            alt={data.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 700px"
          />
        </div>
        <CardHeader>
          <CardTitle className="text-2xl">{data.title}</CardTitle>
          <CardDescription className="text-neutral-600 dark:text-neutral-400">
            {data.subtitle}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-neutral-800 dark:text-neutral-100">{data.body}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
