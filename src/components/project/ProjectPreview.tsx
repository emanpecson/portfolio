import { SkillType } from '@/types/SkillType';
import Link from 'next/link';
import Image from 'next/image';
import WebsiteButton from '../button/WebsiteButton';
import GitHubButton from '../button/GitHubButton';
import IconLinkTag from '../button/IconLinkTag';
import { ProjectType } from '@/types/ProjectType';
import Label from '../Label';
import { Button } from '../ui/button';

export default function ProjectPreview({ project }: { project: ProjectType }) {
  return (
    <div className="border break-inside-avoid rounded-lg shadow-md">
      <Link href={project.path}>
        <Image
          src={project.coverImageSrc}
          height={24}
          width={36}
          alt={project.coverImageSrc}
          className="w-full rounded-t-lg object-cover border-b hover:opacity-90 duration-150 transition-all"
          unoptimized
        />
      </Link>

      <div className="p-3">
        <div className="flex space-x-2 place-items-center">
          <h3 className="font-extrabold text-xl text-neutral-700 dark:text-neutral-200">{project.name}</h3>
          <Label>{project.label}</Label>
        </div>

        <p className="text-neutral-600 dark:text-neutral-400 pt-2 pb-4 font-medium">{project.description}</p>

        <div className="space-y-2">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag: SkillType, i: number) => (
              <IconLinkTag href={tag.url} imgSrc={tag.iconSrc} label={tag.label} key={i} />
            ))}
          </div>

          <div className="flex space-x-1.5 place-items-center">
            <Button size="sm" asChild>
              <Link href={project.path}>Learn more</Link>
            </Button>
            {!!project.websiteUrl && <WebsiteButton href={project.websiteUrl} />}
            {!!project.repoUrl && <GitHubButton href={project.repoUrl} />}
          </div>
        </div>
      </div>
    </div>
  );
}
