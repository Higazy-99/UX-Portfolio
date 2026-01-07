// Home page layout - imports CaseStudies from component
// This file was cleaned up to remove duplicate project data
// Projects are now managed in client/src/data/projects.ts

import { Hero } from '@/components/Hero';
import { CaseStudies } from '@/components/CaseStudies';
import { Experience } from '@/components/Experience';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';

export function Home() {
  return (
    <main className="bg-[#0B0C10]">
      <Hero />
      <CaseStudies />
      <Experience />
      <About />
      <Contact />
    </main>
  );
}
