import { greeting, mission, position } from '@/data/intro';
import Image from 'next/image';

export default function Intro() {
  return (
    <div className="flex sm:space-x-8 space-x-4 justify-between">
      <div className="font-medium space-y-4">
        <div>
          <h1 className="sm:text-4xl text-3xl font-extrabold">Emanuel Pecson</h1>
          <p className="sm:text-2xl text-xl dark:text-neutral-400 text-neutral-700">{position}</p>
        </div>
        <p className="sm:text-2xl text-xl dark:text-neutral-400 text-neutral-700">{mission}</p>
      </div>
      <Image
        src="/linkedin_pfp.jpeg"
        alt="linkedin_pfp"
        width="24"
        height="24"
        className="sm:h-36 sm:w-36 h-24 w-24 rounded-full"
        unoptimized
      />
    </div>
  );
}
