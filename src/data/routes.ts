import { RouteType } from '@/types/RouteType';
import { BriefcaseBusinessIcon, GraduationCapIcon, LightbulbIcon } from 'lucide-react';

export const routes: RouteType[] = [
  { label: 'Experience', path: '/experience', icon: BriefcaseBusinessIcon },
  { label: 'Projects', path: '/projects', icon: LightbulbIcon },
  { label: 'Education', path: '/education', icon: GraduationCapIcon },
];
