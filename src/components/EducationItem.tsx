import { EducationType } from '@/types/EducationType';
import Image from 'next/image';
import BoxWrap from './BoxWrap';
import Link from 'next/link';
import Label from './Label';

export default function EducationItem({ education }: { education: EducationType }) {
  return (
    <div>
      <Link href={education.website} rel="noopener noreferrer" target="_blank">
        <BoxWrap>
          <div className="flex space-x-2 place-items-center">
            <Image
              src={education.iconSrc}
              alt={education.school}
              height={24}
              width={24}
              className="object-contain h-16 w-16 rounded-md"
              unoptimized
            />
            <div className="sm:flex sm:justify-between w-full">
              <div>
                <h2 className="sm:text-2xl text-lg font-extrabold">{education.school}</h2>
                <p className="sm:font-normal sm:text-lg font-normal text-base">{education.degree}</p>
              </div>

              <div>
                <p className="sm:font-normal sm:text-lg font-normal text-base">{education.timeline}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {education.labels.map((label, i) => (
              <Label key={i}>{label}</Label>
            ))}
          </div>
        </BoxWrap>
      </Link>
    </div>
  );
}
