import Link from 'next/link';
import { getAllProjects } from '@/lib/projects';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <main className="relative mx-auto max-w-7xl px-8 py-28">
      {/* ================= HEADER ================= */}
      <header className="mb-20 max-w-2xl space-y-6">
        <Badge
          variant="outline"
          className="border-[color:var(--color-main-theme)]/40 text-[color:var(--color-main-theme)]"
        >
          Selected Work
        </Badge>

        <h1 className="text-5xl font-semibold tracking-tight text-balance">Projects</h1>

        <p className="text-muted-foreground text-lg leading-relaxed">
          A curated set of projects spanning product design, frontend engineering, and
          infrastructure — focused on clarity, craft, and calm execution.
        </p>
      </header>

      {/* ================= GRID ================= */}
      <ul className="grid gap-10 sm:grid-cols-2">
        {projects.map((project) => (
          <li key={project.slug}>
            <Link href={`/projects/${project.slug}`} className="group block h-full">
              <Card className="border-border/70 bg-background/70 relative h-full overflow-hidden rounded-3xl border p-8 backdrop-blur transition hover:-translate-y-1 hover:border-[color:var(--color-main-theme)]/50 hover:shadow-[0_25px_80px_-40px_rgba(0,0,0,0.25)]">
                {/* Glow */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                  <div className="absolute -top-24 left-1/2 h-48 w-72 -translate-x-1/2 rounded-full bg-[color:var(--color-main-theme)]/10 blur-3xl" />
                </div>

                <div className="relative flex h-full flex-col">
                  {/* Title */}
                  <h2 className="text-xl font-semibold tracking-tight">{project.name}</h2>

                  {/* Description */}
                  <p className="text-muted-foreground mt-3 flex-1 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags (optional) */}
                  {project.tags?.length && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-muted-foreground rounded-full border px-3 py-1 text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* CTA */}
                  <div className="mt-8">
                    <Button
                      variant="ghost"
                      className="group/cta flex items-center gap-2 px-0 text-sm font-medium text-[color:var(--color-main-theme)]"
                    >
                      View project
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/cta:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
