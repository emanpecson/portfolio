import { SkillType } from './SkillType';

export type ProjectType = {
  name: string;
  label: string;
  path: string;
  description: string;
  coverImageSrc: string;
  tags: SkillType[];
  repoUrl?: string;
  websiteUrl?: string;
};
