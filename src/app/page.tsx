import Hero from '@/components/landing/Hero';
import About from '@/components/landing/About';
import Skills from '@/components/landing/Skills';
import Projects from '@/components/landing/Projects';
import Experience from '@/components/landing/Experience';
import Achievements from '@/components/landing/Achievements';

import Contact from '@/components/landing/Contact';
import Header from '@/components/landing/Header';
import StickyCards from '@/components/landing/StickyCards';

import { AppleTimelineThemed as SplitScroll } from '@/components/land/splitscreen';

export default function page() {
  return (
    <main className="bg-main-theme text-neutral-900">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      {/* <Experience /> */}

      {/* <SplitScroll /> */}
      {/* <Achievements /> */}
      <Contact />

      {/* <StickyCards/> */}
    </main>
  );
}
