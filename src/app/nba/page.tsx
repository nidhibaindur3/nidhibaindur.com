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
import HorizontalMain from '@/components/land/HorizontalMain';

export default function page() {
  return (
    <main className="bg-white text-neutral-900">
      {/* Keep */}
      <Header />
      <Hero />

      {/* New additions */}
      <SplitScroll />
      <Experience />
            <section className="relative min-h-[200vh]">
        <HorizontalMain />
      </section>


      <Contact />
      {/* <About />
        <Skills /> */}
      {/* Changing */}
      {/* <Achievements /> */}
      {/* <StickyCards/> */}
    </main>
  );
}
