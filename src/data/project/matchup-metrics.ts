import { RefMap } from '@/lib/ref-map';
import { ContentHeaderType } from '@/types/ContentHeader';

const refMap = new RefMap(['website', 'motivation', 'fans']);
export const headers: ContentHeaderType[] = [
  { id: 'Try it out!', ref: refMap.getRef('website'), subheaders: [] },
  {
    id: 'Motivation',
    ref: refMap.getRef('motivation'),
    subheaders: [{ id: 'An App for NBA Fans', ref: refMap.getRef('fans') }],
  },
];
