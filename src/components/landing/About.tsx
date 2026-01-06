import { aboutContent, quickFacts, pillars } from '@/data/aboutData';

export default function About() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="section-container max-w-6xl space-y-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)]">
          {/* LEFT */}
          <div className="space-y-6">
            {/* Badge + Headline */}
            <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-1 text-sm font-medium text-neutral-600">
              <span className="inline-block h-2 w-2 rounded-full bg-[var(--color-main-theme)]" />
              {aboutContent.badge}
            </span>

            <h2 className="text-pretty text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
              {aboutContent.headline}
            </h2>

            {/* Paragraphs */}
            {aboutContent.paragraphs.map((text) => (
              <p
                key={text}
                className="text-base leading-relaxed text-neutral-600 sm:text-lg"
              >
                {text}
              </p>
            ))}

            {/* Quick Facts */}
            <div className="grid gap-4 sm:grid-cols-3">
              {quickFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-5 text-sm"
                >
                  <p className="text-neutral-500">{fact.label}</p>
                  <p className="mt-1 font-medium text-neutral-800">{fact.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="grid gap-5 rounded-3xl border border-neutral-200 bg-neutral-50/80 p-8 shadow-[0_16px_60px_-45px_rgba(15,23,42,0.5)] backdrop-blur">
            {pillars.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-neutral-100 bg-white/80 p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-neutral-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
