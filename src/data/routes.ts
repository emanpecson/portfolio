import { RouteGroupType, RouteType } from '@/types/RouteType';
import { BriefcaseBusinessIcon, GraduationCapIcon, LightbulbIcon } from 'lucide-react';

const swe: string[] = ['software', 'developer', 'engineer'];
const fs: string[] = ['full-stack', 'webapp'];

const experienceRouteGroup: RouteGroupType = {
  label: 'Experience',
  icon: BriefcaseBusinessIcon,
  routes: [
    { name: 'Experience', path: 'experience/jt4', keywords: [] },
    { name: 'JT4', path: '/experience/jt4', keywords: ['experience', ...swe, 'internship'] },
    { name: 'General Atomics', path: '/experience/general-atomics', keywords: ['experience', ...swe, 'internship'] },
    { name: 'Clark County', path: '/experience/clark-county', keywords: ['experience', 'internship'] },
    { name: 'UNLV', path: '/experience/unlv', keywords: ['experience', 'teaching', 'assistant', 'service'] },
  ],
};

const projectsRouteGroup: RouteGroupType = {
  label: 'Projects',
  icon: LightbulbIcon,
  routes: [
    { name: 'Projects', path: '/projects', keywords: [] },
    { name: 'Gatekeeper', path: '/projects/gatekeeper', keywords: ['projects', ...fs] },
    { name: 'Portfolio', path: '/projects/portfolio', keywords: ['projects', 'website'] },
    { name: 'Quorum Bots', path: '/projects/quorum-bots', keywords: ['projects', 'website', 'docs', 'documentation'] },
    {
      name: 'NBA Fantasy Optimizer',
      path: '/projects/nba-fantasy-optimizer',
      keywords: ['projects', ...fs, 'selenium', 'webscrape'],
    },
    { name: 'Abilliti', path: '/projects/abilliti', keywords: ['projects', ...fs] },
    {
      name: 'Employee Image',
      path: '/projects/employee-image',
      keywords: ['projects', ...fs, 'private', 'upload', 'jt4'],
    },
    {
      name: 'Fileship',
      path: '/projects/fileship',
      keywords: ['projects', ...fs, 'private', 'websocket', 'upload', 'jt4'],
    },
    {
      name: 'Concur Travel Approver',
      path: '/projects/concur-travel-approver',
      keywords: ['projects', ...fs, 'private', 'jt4'],
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

export const mainRouteGroups: RouteGroupType[] = [experienceRouteGroup, projectsRouteGroup, educationRouteGroup];
