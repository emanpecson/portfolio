import { ProjectType } from '@/types/ProjectType';
import overallSkills from './overall-skills';
import { SkillType } from '@/types/SkillType';

export const projects: ProjectType[] = [
  {
    name: 'Gatekeeper',
    description:
      'An event-planning and ticket-scanning web-app in one. Users are given the ability to create and manage events through QR-based invitations.',
    imageSrc: '/cover/gatekeeper.png',
    repoUrl: 'https://github.com/UNLV-CS-GANG/gatekeeper',
    websiteUrl: 'https://unlvgatekeeper.com/',
    tags: [
      overallSkills.get('React.js') as SkillType,
      overallSkills.get('Next') as SkillType,
      overallSkills.get('TypeScript') as SkillType,
      overallSkills.get('Node.js') as SkillType,
      overallSkills.get('Prisma') as SkillType,
      overallSkills.get('Tailwind CSS') as SkillType,
      overallSkills.get('Resend') as SkillType,
      overallSkills.get('Pusher') as SkillType,
      overallSkills.get('MySQL') as SkillType,
    ],
  },
  {
    name: 'Portfolio',
    description: 'Portfolio website to learn more information about me.',
    imageSrc: '/cover/portfolio.png',
    repoUrl: 'https://github.com/emanpecson/portfolio',
    websiteUrl: 'https://www.emanpecson.com/',
    tags: [
      overallSkills.get('React.js') as SkillType,
      overallSkills.get('Next') as SkillType,
      overallSkills.get('TypeScript') as SkillType,
      overallSkills.get('Tailwind CSS') as SkillType,
    ],
  },
];
