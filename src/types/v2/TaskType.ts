import { SkillType } from './SkillType';

export type TaskType = {
  header: string;
  description: string;
  tags: SkillType[];
};
