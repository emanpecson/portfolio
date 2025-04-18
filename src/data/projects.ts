import { ProjectType } from '@/types/ProjectType';
import overallSkills from './overall-skills';
import { SkillType } from '@/types/SkillType';

export const projects: ProjectType[] = [
  {
    name: 'Gatekeeper',
    label: 'full-stack webapp',
    path: '/projects/gatekeeper',
    description:
      'An event-planning and ticket-scanning webapp in one, users are given the ability to create and manage events through QR-based invitations',
    coverImageSrc: '/cover/gatekeeper.png',
    repoUrl: 'https://github.com/UNLV-CS-GANG/gatekeeper',
    websiteUrl: 'https://unlvgatekeeper.com',
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
    label: 'website',
    path: '/projects/portfolio',
    description: 'Website to display my experience, projects, and education ',
    coverImageSrc: '/cover/portfolio.png',
    repoUrl: 'https://github.com/emanpecson/portfolio',
    websiteUrl: 'https://www.emanpecson.com',
    iconSrc: '/linkedin_pfp.jpeg',
    tags: [
      overallSkills.get('React.js') as SkillType,
      overallSkills.get('Next') as SkillType,
      overallSkills.get('TypeScript') as SkillType,
      overallSkills.get('Tailwind CSS') as SkillType,
    ],
  },
  {
    name: 'Quorum Bots',
    label: 'docs website',
    path: '/projects/quorum-bots',
    description: 'Documentation website so that users can learn how to use Quorum Studio to program their LEGO robot',
    coverImageSrc: '/cover/quorum-bots.png',
    repoUrl: 'https://github.com/emanpecson/quorum-bots-docs',
    websiteUrl: 'https://www.quorumbots.com',
    iconSrc: '/logo/quorum.svg',
    tags: [
      overallSkills.get('React.js') as SkillType,
      overallSkills.get('Next') as SkillType,
      overallSkills.get('TypeScript') as SkillType,
      overallSkills.get('Tailwind CSS') as SkillType,
    ],
  },
  {
    name: 'Matchup Metrics',
    label: 'full-stack webapp',
    path: '/projects/matchup-metrics',
    description: 'Webapp solution for comparing NBA players and custom lineups 🏀',
    coverImageSrc: '/cover/matchup-metrics.png',
    repoUrl: 'https://github.com/emanpecson/matchup-metrics',
    websiteUrl: 'https://matchupmetrics.vercel.app',
    tags: [
      overallSkills.get('React.js') as SkillType,
      overallSkills.get('Next') as SkillType,
      overallSkills.get('Node.js') as SkillType,
      overallSkills.get('TypeScript') as SkillType,
      overallSkills.get('Tailwind CSS') as SkillType,
    ],
  },
  {
    name: 'Abilliti',
    label: 'full-stack webapp',
    path: '/projects/abilliti',
    description: 'All-in-one webapp that offers solutions for common business operations',
    coverImageSrc: '/cover/abilliti.png',
    repoUrl: 'https://github.com/abilliti-dev',
    websiteUrl: 'https://abilliti.com',
    iconSrc: '/logo/abilliti.svg',
    tags: [
      overallSkills.get('React.js') as SkillType,
      overallSkills.get('TypeScript') as SkillType,
      overallSkills.get('Tailwind CSS') as SkillType,
    ],
  },
  {
    name: 'Employee Image',
    label: 'full-stack webapp',
    path: '/projects/employee-image',
    description: 'Webapp that allows users to update their profile picture among all corporate apps',
    coverImageSrc: '/cover/na.png',
    iconSrc: '/logo/jt4.png',
    tags: [
      overallSkills.get('React.js') as SkillType,
      overallSkills.get('Next') as SkillType,
      overallSkills.get('Node.js') as SkillType,
      overallSkills.get('TypeScript') as SkillType,
      overallSkills.get('Tailwind CSS') as SkillType,
      overallSkills.get('Prisma') as SkillType,
      overallSkills.get('SQL Server') as SkillType,
      // overallSkills.get('Minio') as SkillType,
    ],
  },
  {
    name: 'Fileship',
    label: 'full-stack webapp',
    path: '/projects/fileship',
    description: 'Webapp that provides employees with a way to securely upload files',
    coverImageSrc: '/cover/na.png',
    iconSrc: '/logo/jt4.png',
    tags: [
      overallSkills.get('Vue.js') as SkillType,
      overallSkills.get('Nuxt') as SkillType,
      overallSkills.get('Node.js') as SkillType,
      overallSkills.get('TypeScript') as SkillType,
      overallSkills.get('Tailwind CSS') as SkillType,
      overallSkills.get('Prisma') as SkillType,
      overallSkills.get('SQL Server') as SkillType,
    ],
  },
  {
    name: 'Concur Travel Approver',
    label: 'full-stack webapp',
    path: '/projects/concur-travel-approver',
    description: 'Webapp that simplifies the management of employee travel info',
    coverImageSrc: '/cover/na.png',
    iconSrc: '/logo/jt4.png',
    tags: [
      overallSkills.get('Vue.js') as SkillType,
      overallSkills.get('Nuxt') as SkillType,
      overallSkills.get('Node.js') as SkillType,
      overallSkills.get('TypeScript') as SkillType,
      overallSkills.get('Tailwind CSS') as SkillType,
      overallSkills.get('Prisma') as SkillType,
      overallSkills.get('SQL Server') as SkillType,
    ],
  },
];
