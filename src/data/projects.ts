import { ProjectType } from '@/types/ProjectType';
import overallSkills from './overall-skills';
import { SkillType } from '@/types/SkillType';

export const projects: ProjectType = {
  'Hoop Archives': {
    label: 'full-stack web app',
    path: '/projects/hoop-archives',
    description: 'Web app for previewing your own basketball highlights',
    coverImageSrc: '/project/hoop-archives/mockup/video-editor.png',
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
  // Portfolio: {
  //   label: 'website',
  //   path: '/projects/portfolio',
  //   description: 'Website to display my experience, projects, and education ',
  //   coverImageSrc: '/project/portfolio/header-section.png',
  //   repoUrl: 'https://github.com/emanpecson/portfolio',
  //   websiteUrl: 'https://www.emanpecson.com',
  //   iconSrc: '/linkedin_pfp.jpeg',
  //   tags: [
  //     overallSkills.get('React.js') as SkillType,
  //     overallSkills.get('Next') as SkillType,
  //     overallSkills.get('TypeScript') as SkillType,
  //     overallSkills.get('Tailwind CSS') as SkillType,
  //   ],
  // },
  Abilliti: {
    label: 'full-stack web app',
    path: '/projects/abilliti',
    description: 'All-in-one web app that offers solutions for common business operations',
    coverImageSrc: '/project/abilliti/mockup/invoice-builder.png',
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
    coverImageSrc: '/project/quorum-bots/hero-section.png',
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
    coverImageSrc: '/project/matchup-metrics/3v3.png',
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
};

export type ProjectKey = typeof projects;
