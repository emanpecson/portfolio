import { TaskType } from './TaskType';

export type ExperienceType = {
  logoSrc: string;
  location: string;
  company: string;
  position: string;
  timeline: string;
  path: string;
  tasks: TaskType[];
  website: string;
};
