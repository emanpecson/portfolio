import Link from 'next/link';
import Label from '../Label';
import Paragraph from '../Paragraph';
import { ChevronLeftIcon } from 'lucide-react';
import { ProjectType } from '@/types/ProjectType';

export default function ContentTitleProject({ project }: { project: ProjectType }) {
  return (
    <div className="space-y-4">
      <Link
        href="/projects"
        className="flex space-x-1 w-fit place-items-center rounded-full text-neutral-500 hover:text-black dark:hover:text-white transition-colors duration-150"
      >
        <ChevronLeftIcon size={20} />
        <span className="font-medium">Return to projects</span>
      </Link>

      <div>
        <h1 className="text-4xl font-extrabold text-neutral-700 dark:text-neutral-200">{project.name}</h1>
        <Label>{project.label}</Label>
      </div>
      <Paragraph>{project.description}</Paragraph>
    </div>
  );
}
