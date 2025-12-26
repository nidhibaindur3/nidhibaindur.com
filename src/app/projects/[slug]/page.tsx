import { notFound } from 'next/navigation';
import Image from 'next/image';
import Header from '@/components/landing/Header';
import BrandIcon from '@/components/project/BrandIcon';
import { getProjectBySlug } from '@/lib/projects';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

export const dynamic = 'force-dynamic';

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectSlugPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <>
      <Header />

      <main className="mx-auto max-w-7xl px-8">
        {/* ================= HERO ================= */}
        <section className="grid min-h-[calc(100svh-5rem)] grid-cols-1 items-center gap-20 pt-28 lg:grid-cols-2">
          {/* LEFT */}
          <div className="space-y-8">
            {project.eyebrow && (
              <Badge
                variant="outline"
                className="border-[color:var(--color-main-theme)]/40 text-[color:var(--color-main-theme)]"
              >
                {project.eyebrow}
              </Badge>
            )}

            <h1 className="text-5xl leading-tight font-semibold tracking-tight text-balance">
              {project.name}
            </h1>

            <p className="text-muted-foreground max-w-xl text-lg leading-relaxed">
              {project.description}
            </p>

            {project.solutionAnchorLabel && (
              <Button
                asChild
                size="lg"
                className="rounded-full bg-[color:var(--color-main-theme)] px-6 text-white shadow-lg shadow-[color:var(--color-main-theme)]/25"
              >
                <a href="#solution">{project.solutionAnchorLabel}</a>
              </Button>
            )}
          </div>

          {/* RIGHT */}
          {project.hero && (
            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute -inset-6 rounded-[3rem] bg-[color:var(--color-main-theme)]/10 blur-2xl" />
              <Image
                src={project.hero}
                alt={project.name}
                width={900}
                height={900}
                priority
                className="bg-background relative rounded-[2.75rem] border shadow-[0_30px_80px_-40px_rgba(15,23,42,0.35)]"
              />
            </div>
          )}
        </section>

        {/* ================= META ================= */}
        <section className="mt-24">
          <Card className="bg-background/80 border-[color:var(--color-main-theme)]/30 backdrop-blur">
            <div className="grid gap-10 p-10 md:grid-cols-4">
              {/* TEAM */}
              {project.team?.length && (
                <MetaBlock title="The Team">
                  {project.team.map((member) => (
                    <p key={member}>{member}</p>
                  ))}
                </MetaBlock>
              )}

              {/* ROLE */}
              {project.role?.length && (
                <MetaBlock title="My Role">
                  {project.role.map((role) => (
                    <p key={role}>{role}</p>
                  ))}
                </MetaBlock>
              )}

              {/* TOOLS */}
              {project.tools?.length && (
                <MetaBlock title="Tools">
                  <div className="flex flex-wrap gap-3">
                    {project.tools.map((tool) => (
                      <div
                        key={tool}
                        className="flex items-center gap-2 rounded-full border px-3 py-1 text-sm"
                      >
                        <BrandIcon name={tool} className="h-4 w-4" />
                        {tool}
                      </div>
                    ))}
                  </div>
                </MetaBlock>
              )}

              {/* TIMELINE */}
              {project.timeline && (
                <MetaBlock title="Timeline">
                  <p>{project.timeline}</p>
                </MetaBlock>
              )}
            </div>
          </Card>
        </section>

        {/* ================= CONTENT SLOT ================= */}
        <section id="solution" className="mt-32 max-w-3xl">
          {/* Your future case-study sections go here */}
        </section>
      </main>
    </>
  );
}

/* ================= META BLOCK ================= */

function MetaBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-4">
      <h3 className="text-xs font-semibold tracking-wide text-[color:var(--color-main-theme)] uppercase">
        {title}
      </h3>

      <Separator className="bg-[color:var(--color-main-theme)]/30" />

      <div className="text-muted-foreground space-y-1 text-sm">{children}</div>
    </div>
  );
}
