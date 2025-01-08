import { RouteType } from '@/types/RouteType';
import { BriefcaseBusinessIcon, GraduationCapIcon, LightbulbIcon, UserCircleIcon } from 'lucide-react';
import { experiences } from './experience';

export const routes: RouteType[] = [
  // { label: 'About', path: '/', icon: UserCircleIcon },
  { label: 'Experience', path: experiences[0].path, icon: BriefcaseBusinessIcon },
  { label: 'Projects', path: '/projects', icon: LightbulbIcon },
  { label: 'Education', path: '/education', icon: GraduationCapIcon },
];

export type KeywordRouteType = {
  title: string;
  path: string;
  keywords: string[];
};

export const keywordRoutes: KeywordRouteType[] = [
  {
    title: 'About',
    path: '/',
    keywords: ['emanuel', 'pecson', 'root'],
  },

  // experience
  {
    title: 'Experience',
    path: experiences[0].path,
    keywords: ['internship'],
  },
  {
    title: 'JT4',
    path: '/experience/jt4',
    keywords: ['experience', 'internship', 'software', 'developer', 'engineer'],
  },
  {
    title: 'General Atomics',
    path: '/experience/general-atomics',
    keywords: ['experience', 'internship', 'software', 'developer', 'engineer'],
  },
  {
    title: 'Clark County',
    path: '/experience/clark-county',
    keywords: ['experience', 'internship'],
  },
  {
    title: 'UNLV',
    path: '/experience/unlv',
    keywords: ['experience', 'university', 'teaching assistant'],
  },

  // projects
  {
    title: 'Projects',
    path: '/projects',
    keywords: [],
  },
  {
    title: 'Gatekeeper',
    path: '/projects/gatekeeper',
    keywords: ['projects', 'webapp'],
  },
  {
    title: 'Portfolio',
    path: '/projects/portfolio',
    keywords: ['projects', 'webapp'],
  },
  {
    title: 'Quorum Bots',
    path: '/projects/quorum-bots',
    keywords: ['projects', 'website', 'documentation'],
  },
  {
    title: 'NBA Fantasy Optimizer',
    path: '/projects/nba-fantasy-optimizer',
    keywords: ['projects', 'webapp'],
  },
  {
    title: 'Abilliti',
    path: '/projects/abilliti',
    keywords: ['projects', 'webapp'],
  },
  {
    title: 'Employee Image',
    path: '/projects/employee-image',
    keywords: ['projects', 'webapp', 'upload'],
  },
  {
    title: 'Fileship',
    path: '/projects/fileship',
    keywords: ['projects', 'webapp', 'socket', 'websocket', 'upload'],
  },
  {
    title: 'Concur Travel Approver',
    path: '/projects/concur-travel-approver',
    keywords: ['projects', 'webapp'],
  },

  // education
  {
    title: 'Education',
    path: '/education',
    keywords: ['unlv', 'school', 'certifications', 'volunteerism'],
  },
];
