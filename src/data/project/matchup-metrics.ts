import { RefMap } from '@/lib/ref-map';
import { ContentHeaderType } from '@/types/ContentHeader';

const refMap = new RefMap([
  '1(preview)',
  '2(overview)',
  '2.1(intro)',
  '2.2(motivation)',
  '3(demo)',
  '3.1(1:1)',
  '3.2(x:x)',
]);

export const headers: ContentHeaderType[] = [
  { id: 'Try it out!', ref: refMap.getRef('1(preview)'), subheaders: [] },
  {
    id: 'Overview',
    ref: refMap.getRef('2(overview)'),
    subheaders: [
      {
        id: 'Introduction',
        ref: refMap.getRef('2.1(intro)'),
      },
      {
        id: 'Motivation',
        ref: refMap.getRef('2.2(motivation)'),
      },
    ],
  },
  {
    id: 'Demo',
    ref: refMap.getRef('3(demo)'),
    subheaders: [
      {
        id: '1:1 comparison',
        ref: refMap.getRef('3.1(1:1)'),
      },
      {
        id: 'Lineup-based comparison',
        ref: refMap.getRef('3.2(x:x)'),
      },
    ],
  },
];
