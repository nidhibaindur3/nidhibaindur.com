const experience = [
  {
    role: 'Lead Product Designer',
    company: 'BrightScale',
    time: '2022 — Present',
    summary:
      'Guiding a squad through complex fintech journeys—crafting multi-platform experiences that convert, retain, and earn trust.',
    bullets: [
      'Scaled a design system that cut delivery debt by 32% across three product lines.',
      'Partnered with research to define AI-assisted workflows that increased activation 2.1x.',
    ],
  },
  {
    role: 'Senior Product Designer',
    company: 'Lumen Labs',
    time: '2019 — 2022',
    summary:
      'Shipped telehealth experiences that centered empathy, accessibility, and measurable patient outcomes.',
    bullets: [
      'Led experience strategy and prototyping for an omni-channel care platform.',
      'Built rituals that helped product, data, and engineering teams align faster.',
    ],
  },
  {
    role: 'Product Designer',
    company: 'Gather Studio',
    time: '2017 — 2019',
    summary:
      'Partnered with early-stage founders to validate ideas quickly—wearing hats from research to motion design.',
    bullets: [
      'Designed and coded marketing sites that helped founders tell their story with conviction.',
      'Facilitated design sprints that led to three funded MVP launches.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-main-theme py-24">
      <div className="section-container max-w-6xl space-y-16">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="rounded-full border border-neutral-200 bg-main-theme px-4 py-1 text-sm font-medium text-neutral-600">
            Experience
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-balance text-neutral-900 sm:text-4xl">
            Leading with clarity, collaboration, and a bias for outcomes.
          </h2>
          <p className="max-w-2xl text-sm text-neutral-600 sm:text-base">
            Every role has sharpened my ability to nurture ideas, align teams, and deliver polished
            work that ships on time.
          </p>
        </div>
        <div className="relative">
          <div className="absolute inset-y-0 left-5 hidden w-px bg-gradient-to-b from-[var(--color-main-theme)] via-transparent to-transparent sm:block" />
          <div className="space-y-10">
            {experience.map((role) => (
              <div key={role.company} className="relative sm:pl-16">
                <div className="absolute top-3 left-0 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-main-theme shadow-sm sm:block" />
                <div className="rounded-3xl border border-neutral-200 bg-main-theme/80 p-8 shadow-[0_25px_80px_-55px_rgba(15,23,42,0.55)] backdrop-blur">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-neutral-900">{role.role}</h3>
                      <p className="text-sm font-medium text-[var(--color-main-theme)]">
                        {role.company}
                      </p>
                    </div>
                    <span className="text-sm text-neutral-500">{role.time}</span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-neutral-600">{role.summary}</p>
                  <ul className="mt-5 space-y-3 text-sm text-neutral-600">
                    {role.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-main-theme" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
