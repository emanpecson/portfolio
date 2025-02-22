import { TaskType } from './TaskType';

export type ExperienceType = {
  logoSrc: string;
  company: string;
  path: string;
  website: string;
  positions: PositionType[];
};

export type PositionType = {
  name: string;
  timeline: string;
  location: string;
  tasks: TaskType[];
};
