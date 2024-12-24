import About from '@/components/section/About';
import Intro from '@/components/section/Intro';

export default function Home() {
  return (
    <div className="max-w-[40rem] w-full space-y-10">
      <Intro />
      <About />
    </div>
  );
}
