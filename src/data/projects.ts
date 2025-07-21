import { ProjectType } from '@/types/ProjectType';
import overallSkills from './overall-skills';
import { SkillType } from '@/types/SkillType';

export const projects: ProjectType = {
  'Hoop Archives': {
    label: 'full-stack web app',
    path: '/projects/hoop-archives',
    description: 'Web app for previewing your own basketball highlights',
    coverImageSrc: '/cover/hoop-archives.png',
    tags: [
      overallSkills.get('React.js') as SkillType,
      overallSkills.get('Next') as SkillType,
      overallSkills.get('Node.js') as SkillType,
      overallSkills.get('TypeScript') as SkillType,
      overallSkills.get('Tailwind CSS') as SkillType,
      // aws dynamo db
      // aws s3
      // aws ec2
      // aws cdk
    ],
    repoUrl: 'https://github.com/emanpecson/hoop-archives-app',
    websiteUrl: 'https://www.hoop-archives.com',
  },
  Portfolio: {
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
  Abilliti: {
    label: 'full-stack web app',
    path: '/projects/abilliti',
    description: 'All-in-one web app that offers solutions for common business operations',
    coverImageSrc: '/cover/abilliti.png',
    repoUrl: 'https://github.com/abilliti-dev',
    websiteUrl: 'https://abilliti.com',
    iconSrc: '/logo/abilliti.svg',
    tags: [
      overallSkills.get('React.js') as SkillType,
      // vite
      overallSkills.get('TypeScript') as SkillType,
      overallSkills.get('Tailwind CSS') as SkillType,
      // aws dynamo db
      // aws cdk
      // aws s3
    ],
  },
  'Quorum Bots': {
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
  'Matchup Metrics': {
    label: 'full-stack web app',
    path: '/projects/matchup-metrics',
    description:
      'App for building custom NBA lineups and comparing player performance across key statistical metrics 🏀',
    coverImageSrc: '/cover/matchup-metrics.png',
    repoUrl: 'https://github.com/emanpecson/matchup-metrics',
    websiteUrl: 'https://matchupmetrics.vercel.app',
    tags: [
      overallSkills.get('React.js') as SkillType,
      overallSkills.get('Next') as SkillType,
      overallSkills.get('Node.js') as SkillType,
      overallSkills.get('TypeScript') as SkillType,
      // mongo db
      overallSkills.get('Tailwind CSS') as SkillType,
      overallSkills.get('Python') as SkillType,
      overallSkills.get('Selenium') as SkillType,
    ],
  },
  // Gatekeeper: {
  //   label: 'full-stack web app',
  //   path: '/projects/gatekeeper',
  //   description:
  //     'An event-planning and ticket-scanning web app in one, users are given the ability to create and manage events through QR-based invitations',
  //   coverImageSrc: '/cover/gatekeeper.png',
  //   repoUrl: 'https://github.com/UNLV-CS-GANG/gatekeeper',
  //   websiteUrl: 'https://unlvgatekeeper.com',
  //   tags: [
  //     overallSkills.get('React.js') as SkillType,
  //     overallSkills.get('Next') as SkillType,
  //     overallSkills.get('TypeScript') as SkillType,
  //     overallSkills.get('Node.js') as SkillType,
  //     overallSkills.get('Prisma') as SkillType,
  //     overallSkills.get('Tailwind CSS') as SkillType,
  //     overallSkills.get('Resend') as SkillType,
  //     overallSkills.get('Pusher') as SkillType,
  //     overallSkills.get('MySQL') as SkillType,
  //     // supabase
  //   ],
  // },
};

export type ProjectKey = typeof projects;
