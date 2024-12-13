import { ProjectType } from '@/types/ProjectType';
import SkillItem from './SkillItem';
import { SkillType } from '@/types/SkillType';
import { Button } from '@/components/ui/button';
import { GithubIcon, GlobeIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import WebsiteButton from '../button/WebsiteButton';
import GitHubButton from '../button/GitHubButton';

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

      <div className="flex flex-col justify-between h-[18rem] pt-1.5 space-y-2">
        <div>
          <h3 className="font-semibold text-xl text-neutral-700 dark:text-neutral-200">{proj.name}</h3>
          <p className="text-sm text-neutral-500">{proj.description}</p>
        </div>

        <div className="space-y-2">
          <div className="flex flex-wrap gap-1.5">
            {proj.tags.length > 0 && proj.tags.map((tag: SkillType, i: number) => <SkillItem skill={tag} />)}
          </div>
          <div className="flex space-x-2">
            {!!proj.websiteUrl && <WebsiteButton href={proj.websiteUrl} />}
            <GitHubButton href={proj.repoUrl} />
          </div>
        </div>
      </div>
    </div>
  );
}
