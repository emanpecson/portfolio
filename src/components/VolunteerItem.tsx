import { VolunteerType } from '@/types/VolunteerType';
import Link from 'next/link';
import BoxWrap from './BoxWrap';
import Image from 'next/image';

export default function VolunteerItem({ volunteer }: { volunteer: VolunteerType }) {
  return (
    <div>
      <Link href={volunteer.website} rel="noopener noreferrer" target="_blank">
        <BoxWrap>
          <div className="flex space-x-2 place-items-center">
            <Image
              src={volunteer.iconSrc}
              alt={volunteer.place}
              height={24}
              width={24}
              className="object-contain h-16 w-16 rounded-md"
              unoptimized
            />
            <div className="sm:flex sm:justify-between w-full">
              <h2 className="sm:text-2xl text-lg font-extrabold">{volunteer.place}</h2>
              <p className="sm:font-normal sm:text-lg font-normal text-base">{volunteer.timeline}</p>
            </div>
          </div>
          <p>{volunteer.description}</p>
        </BoxWrap>
      </Link>
    </div>
  );
}
