export enum SkillGroup {
  LANGUAGE,
  FRAMEWORK,
  TOOL,
  DATABASE,
}

export type SkillType = {
  label: string;
  iconSrc: string;
  group: SkillGroup;
  url: string;
};
