import { RouteType } from '@/types/RouteType';
import { BriefcaseBusinessIcon, GraduationCapIcon, LightbulbIcon } from 'lucide-react';
import { experiences } from './experience';

export const routes: RouteType[] = [
  { label: 'Experience', path: experiences[0].path, icon: BriefcaseBusinessIcon },
  { label: 'Projects', path: '/projects', icon: LightbulbIcon },
  { label: 'Education', path: '/education', icon: GraduationCapIcon },
];
