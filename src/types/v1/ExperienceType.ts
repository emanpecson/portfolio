import { TaskType } from './TaskType';

export type ExperienceType = {
  timeline: string;
  position: string;
  employer: string;
  tasks: TaskType[];
  tags: string[];
  website: string;
};
