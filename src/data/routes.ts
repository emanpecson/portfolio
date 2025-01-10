import { RouteGroupType } from '@/types/RouteType';
import { BriefcaseBusinessIcon, CircleUserIcon, GraduationCapIcon, LightbulbIcon } from 'lucide-react';

const swe: string[] = ['software', 'developer', 'engineer'];
const fs: string[] = ['full-stack', 'webapp'];

const homeRouteGroup: RouteGroupType = {
  label: 'Home',
  icon: CircleUserIcon,
  routes: [{ name: 'Home', path: '/', keywords: ['emanuel', 'pecson'] }],
};

const experienceRouteGroup: RouteGroupType = {
  label: 'Experience',
  icon: BriefcaseBusinessIcon,
  routes: [
    { name: 'Experience', path: '/experience/jt4', keywords: [] },
    { name: 'JT4 (SWE Intern)', path: '/experience/jt4', keywords: ['experience', ...swe, 'internship'] },
    {
      name: 'General Atomics (SDE Intern)',
      path: '/experience/general-atomics',
      keywords: ['experience', ...swe, 'internship'],
    },
    { name: 'Clark County (Intern)', path: '/experience/clark-county', keywords: ['experience', 'internship'] },
    {
      name: 'UNLV (Teaching Assistant)',
      path: '/experience/unlv',
      keywords: ['experience', 'service'],
    },
  ],
};

const projectsRouteGroup: RouteGroupType = {
  label: 'Projects',
  icon: LightbulbIcon,
  routes: [
    { name: 'Projects', path: '/projects', keywords: [] },
    { name: 'Gatekeeper', path: '/projects/gatekeeper', keywords: ['project', ...fs] },
    { name: 'Portfolio', path: '/projects/portfolio', keywords: ['project', 'website'] },
    { name: 'Quorum Bots', path: '/projects/quorum-bots', keywords: ['project', 'website', 'docs', 'documentation'] },
    {
      name: 'NBA Fantasy Optimizer',
      path: '/projects/nba-fantasy-optimizer',
      keywords: ['project', ...fs, 'selenium', 'webscrape'],
    },
    { name: 'Abilliti', path: '/projects/abilliti', keywords: ['project', ...fs] },
    {
      name: 'Employee Image',
      path: '/projects/employee-image',
      keywords: ['project', ...fs, 'private', 'upload', 'jt4'],
    },
    {
      name: 'Fileship',
      path: '/projects/fileship',
      keywords: ['project', ...fs, 'private', 'websocket', 'upload', 'jt4'],
    },
    {
      name: 'Concur Travel Approver',
      path: '/projects/concur-travel-approver',
      keywords: ['project', ...fs, 'private', 'jt4'],
    },
  ],
};

const educationRouteGroup: RouteGroupType = {
  label: 'Education',
  icon: GraduationCapIcon,
  routes: [
    {
      name: 'Education',
      path: '/education',
      keywords: ['degree', 'bachelors of science', 'computer science', 'certifications', 'volunteerism'],
    },
  ],
};

export const mainRouteGroups: RouteGroupType[] = [
  homeRouteGroup,
  experienceRouteGroup,
  projectsRouteGroup,
  educationRouteGroup,
];
