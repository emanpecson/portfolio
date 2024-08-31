import { Dock, DockIcon } from '@/components/magicui/dock';
import About from '@/components/v2/section/About';
import Experience from '@/components/v2/section/Experience';
import Intro from '@/components/v2/section/Intro';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex justify-center pt-24">
      <Dock className="fixed bottom-4" direction="middle">
        <DockIcon>
          <Link href="https://github.com/emanpecson">
            <Image src="/github-mark-white.png" alt="GitHub" width="24" height="24" />
          </Link>
        </DockIcon>
        <DockIcon>
          <Link href="https://linkedin.com/in/emanuel-pecson">
            <Image src="/LI-In-Bug.png" alt="GitHub" width="24" height="24" />
          </Link>
        </DockIcon>
      </Dock>
      <div className="w-[40rem] space-y-10">
        <Intro />
        <About />
        <Experience />
      </div>
    </div>
  );
}
