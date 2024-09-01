export enum CompletionStatus {
  IN_PROGRESS = 'in progress',
  COMPLETE = 'complete',
  EXPIRED = 'expired',
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
