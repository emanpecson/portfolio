import { ProjectType } from '@/types/ProjectType';
import Project from '../item/Project';

export default function ProjectSection() {
  const projects: ProjectType[] = [
    {
      imageSrc: 'https://placekitten.com/200/120',
      title: 'Gatekeeper',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed posuere massa, vitae suscipit ante. Donec vulputate volutpat venenatis. Phasellus vel finibus nisl. Nullam pharetra egestas vulputate. Vestibulum id feugiat augue, ut auctor neque. Quisque at nunc orci. Aenean ut.',
      tags: ['React.js', 'Next', 'TypeScript', 'Prisma', 'Tailwind CSS'],
      repository: 'https://github.com/UNLV-CS-GANG/gatekeeper',
      website: 'https://unlvgatekeeper.com',
    },
    {
      imageSrc: 'https://placekitten.com/200/120',
      title: 'NBA Fantasy Optimizer',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed posuere massa, vitae suscipit ante. Donec vulputate volutpat venenatis. Phasellus vel finibus nisl. Nullam pharetra egestas vulputate. Vestibulum id feugiat augue, ut auctor neque. Quisque at nunc orci. Aenean ut.',
      tags: ['React.js', 'Next', 'TypeScript', 'Prisma', 'Tailwind CSS'],
      repository: 'https://github.com/emanpecson/nba-fantasy-optimizer',
    },
    {
      imageSrc: 'https://placekitten.com/200/120',
      title: 'My Portfolio',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed posuere massa, vitae suscipit ante. Donec vulputate volutpat venenatis. Phasellus vel finibus nisl. Nullam pharetra egestas vulputate. Vestibulum id feugiat augue, ut auctor neque. Quisque at nunc orci. Aenean ut.',
      tags: ['React.js', 'Next', 'TypeScript', 'Tailwind CSS'],
      repository: 'https://github.com/emanpecson/portfolio',
    },
    {
      imageSrc: 'https://placekitten.com/200/120',
      title: "Jessica's Portfolio",
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed posuere massa, vitae suscipit ante. Donec vulputate volutpat venenatis. Phasellus vel finibus nisl. Nullam pharetra egestas vulputate. Vestibulum id feugiat augue, ut auctor neque. Quisque at nunc orci. Aenean ut.',
      tags: ['React.js', 'Next', 'TypeScript', 'Tailwind CSS'],
      repository: 'https://github.com/emanpecson/jess-portfolio',
    },
  ];

  return (
    <>
      <div className="space-y-16 sm:mx-0 mx-6">
        {projects.map((proj: ProjectType, index: number) => (
          <Project params={proj} key={index} />
        ))}
      </div>
    </>
  );
}
