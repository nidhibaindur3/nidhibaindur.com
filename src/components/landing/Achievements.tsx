import Image from 'next/image';

import achievements from '@/data/achivments.json';
import { Card, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

export default function Achivements() {
  return (
    <section
      id="achievements"
      className="relative border-t border-neutral-100 bg-main-theme/60 py-24"
    >
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-white via-white/80 to-transparent" />
      <div className="section-container relative z-10 max-w-6xl space-y-14">
        <div className="flex flex-col gap-6 text-center">
          <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-main-theme px-4 py-1 text-sm font-medium text-neutral-600">
            <span className="inline-block h-2 w-2 rounded-full bg-[var(--color-main-theme)]" />
            Recent highlights
          </span>
          <div className="mx-auto max-w-2xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
              Celebrating momentum
            </h2>
            <p className="text-base text-neutral-600">
              Recognition, impact, and community work that reflects the values I bring into every
              partnership.
            </p>
          </div>
          <div className="mx-auto flex flex-wrap justify-center gap-3 text-xs font-medium text-neutral-500">
            <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200/80 px-3 py-1">
              <span className="inline-block h-2 w-2 rounded-full bg-[var(--color-main-theme)]" />
              Design excellence
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200/80 px-3 py-1">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
              Measurable impact
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200/80 px-3 py-1">
              <span className="inline-block h-2 w-2 rounded-full bg-amber-400" />
              Community
            </span>
          </div>
          <Separator className="mx-auto w-20" />
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {achievements.map((item) => (
            <Card
              key={item.title}
              className="group relative overflow-hidden rounded-[2.5rem] border border-neutral-200 bg-main-theme/80 shadow-[0_25px_80px_-55px_rgba(15,23,42,0.55)] transition hover:-translate-y-1 hover:shadow-[0_35px_120px_-65px_rgba(15,23,42,0.6)]"
            >
              <div className="grid gap-6 p-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,4fr)] lg:items-center">
                <div className="space-y-5">
                  <div className="flex items-center justify-between text-xs font-medium text-neutral-500">
                    <Badge
                      variant="secondary"
                      className="rounded-full bg-[var(--color-main-theme)]/15 px-3 py-1 text-[var(--color-main-theme)]"
                    >
                      {item.category}
                    </Badge>
                    <span>
                      {new Date(item.date).toLocaleDateString(undefined, {
                        month: 'short',
                        year: 'numeric',
                      })}
                    </span>
                  </div>
                  <CardTitle className="text-xl text-neutral-900">{item.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed text-neutral-600">
                    {item.description}
                  </CardDescription>
                  <Button
                    variant="link"
                    className="h-auto w-fit p-0 text-sm font-semibold text-[var(--color-main-theme)] transition hover:text-[var(--color-main-theme)]/80"
                    asChild
                  >
                    <a href={item.link}>Explore the story →</a>
                  </Button>
                </div>
                <div className="relative aspect-video overflow-hidden rounded-3xl border border-neutral-100 bg-neutral-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/30 opacity-0 transition group-hover:opacity-100" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
