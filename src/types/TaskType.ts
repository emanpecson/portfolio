import { SkillType } from './SkillType';

export type TaskType = {
  header: string;
  description: string;
  tags: SkillType[];
  externalLink?: string;
  label?: string;
};
