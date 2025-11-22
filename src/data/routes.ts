import { RouteGroupType } from '@/types/RouteType';
import { BriefcaseBusinessIcon, HouseIcon, FileUserIcon, GraduationCapIcon, LightbulbIcon } from 'lucide-react';

const swe: string[] = ['software', 'developer', 'engineer'];
const fs: string[] = ['full-stack', 'web app'];

const homeRouteGroup: RouteGroupType = {
  label: 'Home',
  icon: HouseIcon,
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
    { name: 'Hoop Archives', path: '/projects/hoop-archives', keywords: ['project', ...fs] },
    { name: 'Gatekeeper', path: '/projects/gatekeeper', keywords: ['project', ...fs] },
    { name: 'Portfolio', path: '/projects/portfolio', keywords: ['project', 'website'] },
    {
      name: 'Matchup Metrics',
      path: '/projects/matchup-metrics',
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

export const resumePath = '/emanuel-pecson-resume.pdf';

const resumeRouteGroup: RouteGroupType = {
  label: 'Resume',
  icon: FileUserIcon,
  routes: [{ name: 'Resume', path: resumePath, keywords: ['resume'] }],
};

export const mainRouteGroups: RouteGroupType[] = [
  homeRouteGroup,
  experienceRouteGroup,
  projectsRouteGroup,
  educationRouteGroup,
  resumeRouteGroup,
];
