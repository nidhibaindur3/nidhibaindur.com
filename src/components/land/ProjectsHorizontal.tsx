'use client';

import { useLayoutEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import type { LandingProject } from '@/types/landing';

type Props = {
  projecting: LandingProject[];
};

export default function HorizontalProjects({ projecting }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!containerRef.current || !projecting.length) return;

    let ctx: gsap.Context | undefined;
    (async () => {
      const { default: gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');

      gsap.registerPlugin(ScrollTrigger);

      const container = containerRef.current!;

      ctx = gsap.context(() => {
        const panels = gsap.utils.toArray<HTMLElement>('.panel');

        const mm = gsap.matchMedia();

        mm.add(
          {
            desktop: '(min-width: 768px)',
            mobile: '(max-width: 767px)',
          },
          ({ conditions }) => {
            if (!conditions?.desktop) return;

            const horiz = gsap.to(panels, {
              xPercent: -100 * (panels.length - 1),
              ease: 'none',
              scrollTrigger: {
                trigger: container,
                pin: true,
                scrub: 1.15,
                end: () => `+=${window.innerWidth * (panels.length - 1)}`,
                snap: {
                  snapTo: 1 / (panels.length - 1),
                  duration: 0.4,
                  delay: 0.1,
                  ease: 'power2.out',
                },
              },
            });

            panels.forEach((panel) => {
              const content = panel.querySelector('.panel-content');
              if (!content) return;

              gsap.fromTo(
                content,
                { y: 24, opacity: 0 },
                {
                  y: 0,
                  opacity: 1,
                  scrub: true,
                  scrollTrigger: {
                    trigger: panel,
                    containerAnimation: horiz,
                    start: 'left 70%',
                    end: 'left 30%',
                  },
                }
              );
            });
          }
        );
      }, container);
    })();

    return () => ctx?.revert();
  }, [projecting.length]);

  return (
    <div className="bg-white">
      <div ref={containerRef} className="flex flex-col md:h-screen md:flex-row md:overflow-hidden">
        {projecting.map((project) => (
          <section
            key={project.slug}
            className="panel flex min-h-[85vh] w-full shrink-0 items-center px-6 md:h-screen md:w-screen md:px-16"
          >
            <div className="panel-content mx-auto max-w-3xl text-center">
              {project.eyebrow && (
                <p className="mb-3 text-sm tracking-wide text-black/40 uppercase">
                  {project.eyebrow}
                </p>
              )}

              <h2 className="text-4xl font-semibold md:text-6xl">{project.name}</h2>

              <p className="text-secondary-theme/70 mx-auto mt-4 max-w-xl">{project.description}</p>

              <motion.a
                href={`/projects/${project.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex rounded-xl border border-black/10 bg-black/10 px-5 py-3 text-sm font-semibold hover:bg-black/15"
                whileHover={{ y: -1, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                Visit →
              </motion.a>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
