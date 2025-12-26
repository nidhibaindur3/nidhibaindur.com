'use client';

import Image from 'next/image';
import sections from '@/data/splitsScreen';

export function AppleTimelineThemed() {
  return (
    <section className="relative w-full bg-neutral-50">
      <div className="max-w-10xl relative mx-auto grid grid-cols-1 gap-20 lg:grid-cols-[1fr_1fr]">
        {/* LEFT — THEMED CONTENT */}
        <div className="space-y-32 px-20">
          {sections.map((item, i) => {
            // AUTO-GENERATE BULLETS FROM DESCRIPTION
            const autoBullets = item.description
              .split('.')
              .map((s) => s.trim())
              .filter((s) => s.length > 0);

            return (
              <div key={i} className="max-w-xl">
                {/* Tag */}
                <span className="rounded-full border border-neutral-200 bg-white px-4 py-1 text-sm font-medium text-neutral-600">
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Title */}
                <h2 className="mt-4 text-4xl leading-tight font-semibold text-neutral-900">
                  {item.title}
                </h2>

                {/* Description */}
                <p className="mt-3 text-lg leading-relaxed text-neutral-600">{item.description}</p>

                {/* CARD WITH AUTO BULLETS */}
                <div className="mt-10 rounded-3xl border border-neutral-200 bg-white/80 p-8 shadow-[0_25px_80px_-55px_rgba(15,23,42,0.55)] backdrop-blur-xl">
                  <p className="text-neutral-700">Key insights from this section:</p>

                  <ul className="mt-6 space-y-4 text-sm text-neutral-700">
                    {autoBullets.map((bullet) => (
                      <li key={bullet} className="flex gap-4">
                        {/* Gradient Accent Line */}
                        <span className="mt-[10px] h-[2px] w-6 flex-shrink-0 rounded-full bg-gradient-to-r from-[var(--color-main-theme)] to-[var(--color-main-theme)]/30" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT — FIXED IMAGE */}
        <div className="relative sticky top-0 h-screen w-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            alt="Hero Image"
            fill
            sizes="70vw"
            className="rounded-l-2xl object-cover shadow-[0_25px_80px_-40px_rgba(0,0,0,0.55)]"
          />

          {/* Accent Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-main-theme)]/20 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
