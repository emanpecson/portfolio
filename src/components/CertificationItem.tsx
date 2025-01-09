import { CertificaitonType } from '@/types/CertificationType';
import Link from 'next/link';
import BoxWrap from './BoxWrap';
import Image from 'next/image';
import Label from './Label';

export default function CertificationItem({ certification }: { certification: CertificaitonType }) {
  return (
    <div>
      <Link href={certification.website} rel="noopener noreferrer" target="_blank">
        <BoxWrap>
          <div className="flex space-x-2 place-items-center">
            <Image
              src={certification.iconSrc}
              alt={certification.source}
              height={24}
              width={24}
              className="object-contain h-16 w-16 rounded-md"
              unoptimized
            />
            <div>
              <h2 className="sm:text-2xl text-lg font-extrabold">{certification.source}</h2>
              <p className="sm:font-normal sm:text-lg font-normal text-base">{certification.certificate}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {certification.labels.map((label, i) => (
              <Label key={i}>{label}</Label>
            ))}
          </div>
        </BoxWrap>
      </Link>
    </div>
  );
}
