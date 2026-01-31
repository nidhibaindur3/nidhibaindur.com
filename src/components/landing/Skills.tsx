const capabilities = [
  {
    title: 'Strategic craft',
    description:
      'Translating product vision into roadmaps, aligning stakeholders, and spotting leverage points that move metrics.',
    items: ['Product strategy', 'Narrative design', 'Workshop facilitation', 'Design leadership'],
  },
  {
    title: 'Experience design',
    description:
      'Designing journeys that balance delight with usability, anchored by research and iterative validation.',
    items: ['Interaction design', 'Rapid prototyping', 'Design systems', 'Accessibility'],
  },
  {
    title: 'Build & deliver',
    description:
      'Partnering with engineering to ship polished interfaces, documenting details, and keeping quality high.',
    items: ['Frontend engineering', 'Design QA', 'Storybook', 'Design-to-dev handoff'],
  },
];

const tools = [
  'Figma',
  'FigJam',
  'Framer',
  'Notion',
  'Linear',
  'React',
  'TypeScript',
  'Tailwind CSS',
  'Storybook',
  'Jest',
  'Mixpanel',
  'Maze',
];

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden bg-main-theme py-24">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white via-transparent to-transparent" />
      <div className="section-container relative z-10 max-w-6xl space-y-14">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <span className="rounded-full border border-neutral-200 bg-main-theme px-4 py-1 text-sm font-medium text-neutral-600">
            Skills &amp; toolkit
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-balance text-neutral-900 sm:text-4xl">
            Strategy, craft, and execution working in harmony.
          </h2>
          <p className="text-sm text-neutral-600 sm:text-base">
            I thrive in multidisciplinary teams—connecting insight to delivery and making sure the
            experience feels intentional from first touch to final detail.
          </p>
        </div>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
          <div className="grid gap-6">
            {capabilities.map((capability) => (
              <div
                key={capability.title}
                className="rounded-3xl border border-neutral-200 bg-main-theme/80 p-8 shadow-[0_16px_60px_-45px_rgba(15,23,42,0.5)] backdrop-blur"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-neutral-900">{capability.title}</h3>
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[var(--color-main-theme)]" />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {capability.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2 text-xs text-neutral-600">
                  {capability.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-neutral-200 bg-main-theme px-3 py-1"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-6 rounded-3xl border border-neutral-200 bg-main-theme/80 p-8 shadow-[0_16px_60px_-45px_rgba(15,23,42,0.5)] backdrop-blur">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-neutral-900">Tools I rely on</h3>
              <p className="text-sm text-neutral-600">
                A mix of strategy, design, and development tools that keep projects moving smoothly.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {tools.map((tool) => (
                <div
                  key={tool}
                  className="flex items-center justify-center rounded-2xl border border-neutral-100 bg-main-theme px-4 py-3 text-sm font-medium text-neutral-700 shadow-sm"
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
