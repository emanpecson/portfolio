import { TaskType } from './TaskType';

export type ExperienceType = {
  timeline: string;
  position: string;
  employer: string;
  // description: string;
  tasks: TaskType[];
  tags: string[];
  website: string;
};
