import { MutableRefObject } from 'react';

export type ContentHeaderType = {
  id: string;
  subheaders: ContentSubheaderType[];
  ref: MutableRefObject<HTMLDivElement | null>;
};

export type ContentSubheaderType = {
  id: string;
  ref: MutableRefObject<HTMLDivElement | null>;
};
