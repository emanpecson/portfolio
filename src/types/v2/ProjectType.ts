import { SkillType } from './SkillType';

export type ProjectType = {
  name: string;
  description: string;
  imageSrc: string;
  repoUrl: string;
  tags: SkillType[];
  websiteUrl?: string;
};
