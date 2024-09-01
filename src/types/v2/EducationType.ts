export enum CompletionStatus {
  IN_PROGRESS,
  COMPLETE,
  EXPIRED,
}

export type EducationType = {
  school: string;
  document: string;
  iconSrc: string;
  timeline: string;
  website: string;
  status: CompletionStatus;
  description: string;
};
