import FloatingDock from '@/components/v2/FloatingDock';
import About from '@/components/v2/section/About';
import Education from '@/components/v2/section/Education';
import Experience from '@/components/v2/section/Experience';
import Intro from '@/components/v2/section/Intro';
import Projects from '@/components/v2/section/Projects';
import Skills from '@/components/v2/section/Skills';

export default function Home() {
  return (
    <div className="flex justify-center sm:py-24 py-16 px-4">
      <FloatingDock />
      <div className="sm:w-[56rem] w-full space-y-10">
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
