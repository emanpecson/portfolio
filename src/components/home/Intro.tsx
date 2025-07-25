import Image from 'next/image';
import { jt4Url } from '@/data/url';
import Paragraph from '../Paragraph';
import IconLinkTag from '../button/IconLinkTag';
import { metadata } from '@/app/layout';

export default function Intro() {
  return (
    <div className="flex sm:space-x-8 space-x-4 justify-between">
      <div className="space-y-6">
        <div>
          <h1 className="sm:text-4xl text-3xl font-extrabold text-neutral-700 dark:text-neutral-200">
            {metadata.title as string}
          </h1>
          <Paragraph>
            <div className="sm:flex space-x-1">
              <span className="font-semibold">Software engineer at</span>
              <IconLinkTag label="JT4 LLC" imgSrc="/logo/jt4.png" href={jt4Url} />
            </div>
          </Paragraph>
        </div>
        <div>
          <Paragraph>{"Hello! I'm Emanuel 👋"}</Paragraph>
          <Paragraph>
            {"I'm a software engineer passionate about building effective solutions that make a meaningful impact."}
          </Paragraph>
        </div>
      </div>

      <Image
        src="/linkedin_pfp.jpeg"
        alt="linkedin_pfp"
        width="24"
        height="24"
        className="sm:h-36 sm:w-36 h-24 w-24 rounded-full bg-white"
        unoptimized
        priority
      />
    </div>
  );
}
