import { greeting, mission, position } from '@/data/intro';
import Image from 'next/image';

export default function Intro() {
  return (
    <div className="flex space-x-8">
      <div className="font-medium space-y-4">
        <div>
          <h1 className="text-6xl">{greeting}</h1>
          <p className="text-2xl">{position}</p>
        </div>
        <p className="text-2xl">{mission}</p>
      </div>
      <Image
        src="/linkedin_pfp.jpeg"
        alt="linkedin_pfp"
        width="24"
        height="24"
        className="h-36 w-36 rounded-full"
        unoptimized
      />
    </div>
  );
}
