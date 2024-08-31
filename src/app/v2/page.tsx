import FloatingDock from '@/components/v2/FloatingDock';
import About from '@/components/v2/section/About';
import Experience from '@/components/v2/section/Experience';
import Intro from '@/components/v2/section/Intro';

export default function Home() {
  return (
    <div className="flex justify-center pt-24">
      <FloatingDock />
      <div className="w-[40rem] space-y-10">
        <div></div>
        <Intro />
        <About />
        <Experience />
      </div>
    </div>
  );
}
