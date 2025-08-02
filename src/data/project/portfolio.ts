import { RefMap } from '@/lib/ref-map';
import { ContentHeaderType } from '@/types/ContentHeader';

const refMap = new RefMap(['1(overview)', '1.1(v1)', '1.2(v2)', '1.3(v3)']);

export const headers: ContentHeaderType[] = [
  {
    id: 'Overview',
    ref: refMap.getRef('1(overview)'),
    subheaders: [
      {
        id: 'v1',
        ref: refMap.getRef('1.1(v1)'),
      },
      {
        id: 'v2',
        ref: refMap.getRef('1.2(v2)'),
      },
      {
        id: 'v3',
        ref: refMap.getRef('1.3(v3)'),
      },
    ],
  },
];
