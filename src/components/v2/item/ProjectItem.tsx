import { ProjectType } from '@/types/v2/ProjectType';
import SkillItem from './SkillItem';
import { SkillType } from '@/types/v2/SkillType';
import { Button } from '@/components/ui/button';
import { GithubIcon, GlobeIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ProjectItem({ proj }: { proj: ProjectType }) {
  return (
    <div className="border p-3 rounded-lg">
      <Link rel="noopener noreferrer" target="_blank" href={proj.websiteUrl ?? proj.repoUrl}>
        <Image
          src={proj.imageSrc}
          height={24}
          width={36}
          alt={proj.imageSrc}
          className="w-full rounded-lg max-h-52 object-cover border"
          unoptimized
        />
      </Link>

      <div className="flex flex-col justify-between h-[18rem] pt-1.5">
        <div>
          <h3 className="font-semibold text-xl">{proj.name}</h3>
          <p className="text-sm">{proj.description}</p>
        </div>

        <div className="space-y-2">
          <div className="flex flex-wrap gap-1.5">
            {proj.tags.length > 0 && proj.tags.map((tag: SkillType, i: number) => <SkillItem skill={tag} />)}
          </div>
          <div className="flex space-x-2">
            <Link rel="noopener noreferrer" target="_blank" href={proj.repoUrl}>
              <Button size="sm" className="flex space-x-1.5 duration-150">
                <GithubIcon size={20} />
                <p className="font-semibold">Repository</p>
              </Button>
            </Link>
            {!!proj.websiteUrl && (
              <Link rel="noopener noreferrer" target="_blank" href={proj.websiteUrl}>
                <Button size="sm" className="flex space-x-1.5 duration-150">
                  <GlobeIcon size={20} />
                  <p className="font-semibold">Website</p>
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
