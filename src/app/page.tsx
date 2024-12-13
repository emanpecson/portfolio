import FloatingDock from '@/components/FloatingDock';
import About from '@/components/section/About';
import Education from '@/components/section/Education';
import Experience from '@/components/section/Experience';
import Intro from '@/components/section/Intro';
import Projects from '@/components/section/Projects';
import Skills from '@/components/section/Skills';

export default function Home() {
  return (
    <div className="flex justify-center sm:py-24 py-16 px-4">
      <FloatingDock />
      <div className="max-w-[44rem] w-full space-y-10">
        <Intro />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
      </div>
    </div>
  );
}
