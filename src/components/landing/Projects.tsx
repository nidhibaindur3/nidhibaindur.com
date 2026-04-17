// import Image from 'next/image';

// import { Badge } from '@/components/ui/badge';
// import { Button } from '@/components/ui/button';
// import { Card, CardDescription, CardTitle } from '@/components/ui/card';

// const projects = [
//   {
//     title: 'Compass Housing',
//     description:
//       'Guided international students to secure verified housing and supportive roommates through one calm, end-to-end journey.',
//     year: '2024',
//     impact: '63% faster onboarding',
//     image:
//       'https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1600&q=80',
//     stack: ['UX research', 'Service blueprint', 'Design system'],
//     link: 'https://dribbble.com/',
//   },
//   {
//     title: 'Aura Productivity',
//     description:
//       'Built an AI-assisted rituals hub for distributed teams to align decisions, document learnings, and keep momentum high.',
//     year: '2023',
//     impact: '18 enterprise teams onboarded',
//     image:
//       'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1600&q=80',
//     stack: ['Product vision', 'Experience design', 'React'],
//     link: 'https://www.behance.net/',
//   },
//   {
//     title: 'Glow Telehealth',
//     description:
//       'Reimagined global virtual care with modular journeys and compassionate touchpoints for patients and clinicians alike.',
//     year: '2022',
//     impact: 'CSAT rose to 4.8/5',
//     image:
//       'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2072',
//     stack: ['Design ops', 'Prototype', 'Accessibility'],
//     link: 'https://medium.com/',
//   },
// ];

// export default function Projects() {
//   return (
//     <section id="projects" className="bg-main-theme py-24">
//       <div className="section-container max-w-6xl space-y-16">
//         <div className="mx-auto flex max-w-2xl flex-col gap-4 text-center">
//           <span className="self-center rounded-full border border-neutral-200 bg-main-theme px-4 py-1 text-sm font-medium text-neutral-600">
//             Selected work
//           </span>
//           <h2 className="text-3xl font-semibold tracking-tight text-balance text-neutral-900 sm:text-4xl">
//             Product stories that pair measurable outcomes with beautiful craft.
//           </h2>
//           <p className="text-sm text-neutral-600 sm:text-base">
//             Each case study represents deep partnerships with teams to untangle complexity, ground
//             ideas in insight, and ship experiences people love using.
//           </p>
//         </div>
//         <div className="grid gap-8">
//           {projects.map((project, index) => (
//             <Card
//               key={project.title}
//               className="group relative overflow-hidden rounded-[2.75rem] border border-neutral-200 bg-main-theme/70 shadow-[0_30px_90px_-60px_rgba(15,23,42,0.45)] transition hover:-translate-y-1 hover:shadow-[0_40px_120px_-70px_rgba(15,23,42,0.55)]"
//             >
//               <div className="grid gap-10 p-10 lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] lg:items-center">
//                 <div className="space-y-6">
//                   <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-neutral-500">
//                     <Badge
//                       className="rounded-full bg-main-theme/15 px-3 py-1 text-[var(--color-main-theme)]"
//                       variant="secondary"
//                     >
//                       {project.year}
//                     </Badge>
//                     <span className="rounded-full border border-neutral-200 px-3 py-1 text-neutral-600">
//                       {project.impact}
//                     </span>
//                   </div>
//                   <CardTitle className="text-2xl text-neutral-900 sm:text-[1.65rem]">
//                     {project.title}
//                   </CardTitle>
//                   <CardDescription className="text-base leading-relaxed text-neutral-600">
//                     {project.description}
//                   </CardDescription>
//                   <div className="flex flex-wrap gap-2 text-xs font-medium text-neutral-600">
//                     {project.stack.map((item) => (
//                       <span
//                         key={item}
//                         className="rounded-full border border-neutral-200 bg-main-theme px-3 py-1"
//                       >
//                         {item}
//                       </span>
//                     ))}
//                   </div>
//                   <Button
//                     asChild
//                     variant="link"
//                     className="h-auto w-fit p-0 text-sm font-semibold text-[var(--color-main-theme)] transition hover:text-[var(--color-main-theme)]/80"
//                   >
//                     <a href={project.link} target="_blank" rel="noreferrer">
//                       View full case study →
//                     </a>
//                   </Button>
//                 </div>
//                 <div className="relative overflow-hidden rounded-3xl border border-neutral-100 bg-main-theme">
//                   <Image
//                     src={project.image}
//                     alt={project.title}
//                     width={960}
//                     height={700}
//                     className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
//                   />
//                   <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/40 opacity-0 transition group-hover:opacity-100" />
//                   <div className="pointer-events-none absolute inset-x-6 bottom-6 flex items-center justify-between rounded-2xl border border-white/60 bg-main-theme/80 px-4 py-2 text-xs font-medium text-neutral-500 shadow-sm">
//                     <span>Case 0{index + 1}</span>
//                     <span>Role: End-to-end owner</span>
//                   </div>
//                 </div>
//               </div>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

'use client';

import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

function Media({ className, imgClassName }: { className?: string; imgClassName?: string }) {
  return (
    <div
      className={cn(
        'absolute top-6 right-6 h-[160px] w-[220px] overflow-hidden rounded-3xl bg-main-theme/70 shadow-md ring-1 ring-black/5',
        className
      )}
    >
      <div className="relative h-full w-full">
        <Image
          src="/images/hero.jpeg"
          alt=""
          fill
          className={cn('object-cover', imgClassName)}
          sizes="240px"
          priority
        />
      </div>
    </div>
  );
}

function Tile({
  title,
  description,
  className,
  surface,
  children,
}: {
  title: string;
  description: string;
  className: string;
  surface: string;
  children?: React.ReactNode;
}) {
  return (
    <Card
      className={cn(
        'relative overflow-hidden rounded-[28px] border-0 shadow-sm',
        surface,
        className
      )}
    >
      <div className="p-7">
        <h3 className="text-2xl font-semibold tracking-tight text-black/90">{title}</h3>
        <p className="mt-2 max-w-[34ch] text-sm leading-relaxed text-black/60">{description}</p>
      </div>

      {children}
    </Card>
  );
}

export default function BentoGrid() {
  return (
    <section className="w-full py-14">
      {/* width matches a normal marketing site container */}
      <div className="mx-auto w-full max-w-6xl px-6">
        <div
          className={cn(
            'grid gap-6',
            'grid-cols-1',
            // desktop blueprint
            'lg:[grid-auto-rows:230px] lg:grid-cols-12'
          )}
        >
          {/* 1) Left tall (spans 2 rows) */}
          <Tile
            title="Customization"
            description="Use a pre-designed template or personalize with video, stickers, fonts, and more."
            surface="bg-[#C9B7FF]"
            className="lg:col-span-5 lg:row-span-2"
          >
            {/* place “content” lower like the reference */}
            <div className="absolute right-7 bottom-7 left-7 h-14 rounded-2xl bg-main-theme/70 shadow-sm ring-1 ring-black/5" />
            <Media className="top-16 right-10 rotate-[-8deg]" />
            <Media className="top-10 right-24 h-[150px] w-[200px] rotate-[10deg] opacity-90" />
          </Tile>

          {/* 2) Top-right horizontal */}
          <Tile
            title="Scheduling"
            description="Schedule all your cards and gifts now and we’ll send them later."
            surface="bg-[#F28AA8]"
            className="lg:col-span-7 lg:row-span-1"
          >
            <Media className="top-10 right-8 rotate-[6deg]" />
            <Media className="top-6 right-40 h-[150px] w-[200px] rotate-[-10deg] opacity-90" />
          </Tile>

          {/* 3) Middle-right: Wallet (square-ish) */}
          <Tile
            title="Wallet"
            description="Access all your gifts and save up your Givingli Cash."
            surface="bg-[#BFE57A]"
            className="lg:col-span-4 lg:row-span-1"
          >
            {/* mimic the dark wallet bar */}
            <div className="absolute top-24 left-7 h-16 w-[260px] rounded-2xl bg-black/80 shadow-md ring-1 ring-black/10" />
            <div className="absolute top-28 left-10 text-sm text-white/90">$132.00</div>
          </Tile>

          {/* 3) Middle-right: Inbox (square) */}
          <Tile
            title="Inbox"
            description="Track your gifts, group chats, and sent cards."
            surface="bg-[#F2D06B]"
            className="lg:col-span-3 lg:row-span-1"
          >
            <div className="absolute right-7 bottom-7 left-7 space-y-2">
              <div className="h-10 rounded-2xl bg-main-theme/70 ring-1 ring-black/5" />
              <div className="h-10 rounded-2xl bg-main-theme/70 ring-1 ring-black/5" />
              <div className="h-10 rounded-2xl bg-main-theme/70 ring-1 ring-black/5" />
            </div>
          </Tile>

          {/* 4) Bottom: wide rectangle (Send Gifts) — spans left + wallet width */}
          <Tile
            title="Send Gifts"
            description="Send as a group with friends or individually."
            surface="bg-[#F3A15F]"
            className="lg:col-span-9 lg:row-span-1"
          >
            <div className="absolute top-12 right-7 grid w-[520px] grid-cols-4 gap-3">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="h-14 rounded-2xl bg-main-theme/70 ring-1 ring-black/5" />
              ))}
            </div>
          </Tile>

          {/* 4) Bottom: narrow rectangle (Reminders) — same width as Inbox */}
          <Tile
            title="Reminders"
            description="Never miss a birthday or special occasion again."
            surface="bg-[#BFD3EA]"
            className="lg:col-span-3 lg:row-span-1"
          >
            <div className="absolute right-7 bottom-7 left-7 h-24 overflow-hidden rounded-2xl bg-main-theme/60 ring-1 ring-black/5">
              <div className="relative h-full w-full">
                <Image
                  src="/images/hero.jpeg"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="300px"
                  priority
                />
              </div>
            </div>
          </Tile>
        </div>
      </div>
    </section>
  );
}
