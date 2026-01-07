'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { fadeUp } from '@/lib/animation';
import { useTypingEffect } from '@/hooks/useTypingEffect';
import { stats, focusAreas } from '@/data/hero';
import { HeroStats } from '../HeroStats';

export default function Hero() {
  const nameText = "Hello! I'm Nidhi Baindur";
  const typedName = useTypingEffect(nameText, 65);
  const typingFinished = typedName === nameText;

  return (
    <section id="home" className="relative isolate overflow-hidden bg-white pt-32 pb-24">
      {/* Background Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.35, scale: 1 }}
        transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1] }}
        className="pointer-events-none absolute inset-x-0 -top-52 flex justify-center"
      >
        <div className="h-64 w-208 rounded-full bg-[radial-gradient(circle,var(--color-main-theme)_0%,transparent_60%)] blur-3xl" />
      </motion.div>

      <div className="section-container relative z-10 grid max-w-6xl items-center gap-16 lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)]">
        {/* LEFT */}
        <div className="space-y-10">
          {/* Typing */}
          <motion.div
            variants={fadeUp(0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-5"
          >
            <h1 className="relative inline-flex items-baseline pt-1 text-4xl leading-[1.15] font-semibold tracking-tight text-neutral-900 sm:text-5xl lg:text-[3.35rem]">
              <span>{typedName}</span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="ml-1 inline-block h-[1.1em] w-[2px] bg-neutral-800"
              />
            </h1>

            <p className="text-lg text-neutral-600 lg:text-xl">
              A Software Engineer based in Dallas 101
            </p>
          </motion.div>

          {/* Focus Areas */}
          <motion.div
            variants={fadeUp(0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap items-center gap-2 text-sm text-neutral-500"
          >
            <span className="font-medium text-neutral-700">Currently exploring</span>

            {focusAreas.map((item) => (
              <motion.span
                key={item}
                whileHover={{ y: -2, backgroundColor: '#f5f5f5' }}
                className="rounded-full border border-neutral-200 px-3 py-1 transition"
              >
                {item}
              </motion.span>
            ))}
          </motion.div>

          <HeroStats stats={stats} />
        </div>

        {/* RIGHT */}
        <motion.div
          variants={fadeUp(0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Floating blobs */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="bg-main-theme/20 absolute -top-10 -left-10 hidden h-40 w-40 rounded-full blur-2xl lg:block"
          />
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -right-6 -bottom-14 hidden h-32 w-32 rounded-full bg-amber-200/40 blur-xl lg:block"
          />

          <div className="relative mx-auto flex max-w-sm flex-col items-center gap-6">
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 120 }}
              className="relative w-full overflow-hidden rounded-[2.75rem] border border-neutral-100 bg-white shadow-[0_25px_80px_-40px_rgba(15,23,42,0.4)]"
            >
              <Image
                src="/images/hero.jpeg"
                alt="Portrait of Nidhi Baindur"
                priority
                width={720}
                height={900}
                className="h-auto w-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
