import Image from 'next/image';
import { jt4_url } from '@/data/url';
import Paragraph from '../Paragraph';
import IconLinkTag from '../button/IconLinkTag';

export default function Intro() {
  return (
    <div className="flex sm:space-x-8 space-x-4 justify-between">
      <div className="space-y-4">
        <div>
          <h1 className="sm:text-4xl text-3xl font-extrabold text-neutral-700 dark:text-neutral-200">Emanuel Pecson</h1>
          <Paragraph>
            <div className="flex space-x-1">
              <span>Software engineer intern at</span>
              <IconLinkTag label="JT4 LLC" imgSrc="/logo/jt4.png" href={jt4_url} />
            </div>
          </Paragraph>
        </div>
        <Paragraph>
          Hey, I'm Emanuel 👋. I utilize my proficiency in software development to create effective solutions and leave
          a lasting impact.
        </Paragraph>
      </div>

      <Image
        src="/linkedin_pfp.jpeg"
        alt="linkedin_pfp"
        width="24"
        height="24"
        className="sm:h-36 sm:w-36 h-24 w-24 rounded-full bg-white"
        unoptimized
      />
    </div>
  );
}
