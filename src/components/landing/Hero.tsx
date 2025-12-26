'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Download } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const stats = [
  { label: 'Years crafting products', value: '5+' },
  { label: 'Products launched', value: '12' },
  { label: 'Teams partnered', value: '18' },
];

const focusAreas = ['Design systems', 'Product vision', 'Human-centered research'];

// ✅ Type-safe fade variant
const fadeUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay },
  },
});

// ✅ Typing animation hook
function useTypingEffect(text: string, speed = 70) {
  const [displayed, setDisplayed] = useState('');
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, index + 1));
      index++;
      if (index === text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return displayed;
}

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
        {/* LEFT SIDE */}
        <div className="space-y-10">
          <motion.div
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 rounded-full border border-neutral-200 bg-white/70 px-5 py-2 text-sm font-medium text-neutral-600 shadow-sm backdrop-blur-md"
          >
            <span className="bg-main-theme inline-flex h-2 w-2 rounded-full" />
            Nidhi Baindur · Product Designer & Frontend Engineer
          </motion.div>

          {/* Typing Section */}
          <motion.div
            variants={fadeUp(0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-5"
          >
            <div className="flex flex-col items-start sm:items-center lg:items-start">
              <h1 className="relative inline-flex items-baseline pt-1 text-4xl leading-[1.15] font-semibold tracking-tight whitespace-nowrap text-neutral-900 sm:text-5xl lg:text-[3.35rem]">
                <span className="block translate-y-[0.05em]">{typedName}</span>
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                  className="ml-1 inline-block h-[1.1em] w-[2px] bg-neutral-800"
                />
              </h1>
            </div>
            <p className="text-lg leading-relaxed text-pretty text-neutral-600 lg:text-xl">
              A Software Engineer based in Dallas, TX
            </p>
          </motion.div>

          {/* Buttons - fade in after typing */}
          <motion.div
            variants={fadeUp(typingFinished ? 0.4 : 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap items-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Button
                asChild
                size="lg"
                className="bg-main-theme shadow-main-theme/30 gap-2 rounded-full px-6 py-3 text-base font-semibold text-white shadow-lg transition"
              >
                <Link href="#projects">
                  View work
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="hover:border-main-theme/40 gap-2 rounded-full border-neutral-200 bg-white/80 px-6 py-3 text-base font-semibold text-neutral-700 shadow-sm backdrop-blur transition hover:text-neutral-900"
              >
                <Link href="/Nidhi-Baindur-Resume.pdf">
                  Download resume
                  <Download className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
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

          {/* Stats */}
          <motion.dl
            variants={fadeUp(0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-6 rounded-3xl border border-neutral-200/70 bg-white/70 p-6 shadow-sm backdrop-blur-md sm:grid-cols-3"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 150 }}
                className="space-y-2 text-center sm:text-left"
              >
                <dd className="text-3xl font-semibold text-neutral-900">{stat.value}</dd>
                <dt className="text-sm text-neutral-500">{stat.label}</dt>
              </motion.div>
            ))}
          </motion.dl>
        </div>

        {/* RIGHT SIDE */}
        <motion.div
          variants={fadeUp(0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative"
        >
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

            <motion.div
              variants={fadeUp(0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="shadow-main-theme/15 grid w-full gap-3 rounded-3xl border border-neutral-100 bg-white/80 p-5 text-sm text-neutral-600 shadow-lg backdrop-blur"
            >
              <div className="flex items-center justify-between text-neutral-500">
                <span className="text-xs font-medium tracking-wide uppercase">Focus</span>
                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </div>
              <p className="text-base font-medium text-neutral-800">
                Designing calm experiences that help teams move faster with confidence.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                {focusAreas.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-neutral-100 px-3 py-1 text-neutral-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
