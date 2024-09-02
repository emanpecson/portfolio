import { TaskType } from './TaskType';

export type ExperienceType = {
  iconSrc: string;
  company: string;
  position: string;
  timeline: string;
  tasks: TaskType[];
  website: string;
};
