import { RouteType } from '@/types/RouteType';
import { BriefcaseBusinessIcon, GraduationCapIcon, HomeIcon, LightbulbIcon, UserCircleIcon } from 'lucide-react';
import { experiences } from './experience';

export const routes: RouteType[] = [
  { label: 'About', path: '/', icon: UserCircleIcon },
  { label: 'Experience', path: experiences[0].path, icon: BriefcaseBusinessIcon },
  { label: 'Projects', path: '/projects', icon: LightbulbIcon },
  { label: 'Education', path: '/education', icon: GraduationCapIcon },
];
