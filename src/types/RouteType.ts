import { LucideIcon } from 'lucide-react';

export type RouteGroupType = {
  label: string;
  icon: LucideIcon;
  routes: RouteType[];
};

export type RouteType = {
  name: string;
  path: string;
  keywords: string[];
};
