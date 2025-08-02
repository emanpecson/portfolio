import { RefMap } from '@/lib/ref-map';
import { ContentHeaderType } from '@/types/ContentHeader';

const refMap = new RefMap([
  '1(preview)',
  '2(overview)',
  '2.1(problem)',
  '2.2(solution)',
  '2.3(impact)',
  '3(leadership-role)',
  '3.1(contributor-guide)',
]);

export const headers: ContentHeaderType[] = [
  {
    id: 'Try it out',
    ref: refMap.getRef('1(preview)'),
    subheaders: [],
  },
  {
    id: 'Overview',
    ref: refMap.getRef('2(overview)'),
    subheaders: [
      {
        id: 'Problem',
        ref: refMap.getRef('2.1(problem)'),
      },
      {
        id: 'Solution',
        ref: refMap.getRef('2.2(solution)'),
      },
      {
        id: 'Impact',
        ref: refMap.getRef('2.3(impact)'),
      },
    ],
  },
  {
    id: 'Leadership Role',
    ref: refMap.getRef('3(leadership-role)'),
    subheaders: [
      {
        id: 'Contributor guide',
        ref: refMap.getRef('3.1(contributor-guide)'),
      },
    ],
  },
];
