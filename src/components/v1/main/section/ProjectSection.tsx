import { ProjectType } from '@/types/v1/ProjectType';
import Project from '../item/Project';

export default function ProjectSection() {
  const projects: ProjectType[] = [
    {
      imageSrc: '/gatekeeper_cover.pdf',
      title: 'Gatekeeper',
      description:
        'An event-planning and ticket-scanning web-app in one. Our users are given the ability to create an event and manage who is invited by generating unique QR codes for guests. Additional features include the ability to scan the QR codes with your device’s integrated camera, and an automatically created group chat where other guests and the host and can communicate.',
      tags: ['React.js', 'Next', 'TypeScript', 'Prisma', 'Tailwind CSS', 'Resend', 'Pusher', 'MySQL'],
      repository: 'https://github.com/UNLV-CS-GANG/gatekeeper',
      website: 'https://unlvgatekeeper.com',
    },
    {
      imageSrc: '/portfolio_cover.pdf',
      title: 'My Portfolio',
      description: 'The very website you’re viewing right now!',
      tags: ['React.js', 'Next', 'TypeScript', 'Tailwind CSS'],
      repository: 'https://github.com/emanpecson/portfolio',
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
