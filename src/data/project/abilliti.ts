import { RefMap } from '@/lib/ref-map';
import { ContentHeaderType } from '@/types/ContentHeader';

const refMap = new RefMap([
  '1(overview)',
  '1.1(disclaimer)',
  '1.2(motivation)',
  '1.3(phase-1)',
  '1.4(phase-2)',

  '2(mockup-to-live)',
  '2.1(my-contributions)',
  '2.2(mockup)',

  '3(demo-invoice-builder)',
  '3.1(form-data)',
  '3.2(dynamic-form-items)',
  '3.2(invoice-download)',
]);

export const headers: ContentHeaderType[] = [
  {
    id: 'Overview',
    ref: refMap.getRef('1(overview)'),
    subheaders: [
      {
        id: 'Disclaimer',
        ref: refMap.getRef('1.1(disclaimer)'),
      },
      {
        id: 'Motivation',
        ref: refMap.getRef('1.2(motivation)'),
      },
      {
        id: 'Phase 1',
        ref: refMap.getRef('1.3(phase-1)'),
      },
      {
        id: 'Phase 2',
        ref: refMap.getRef('1.4(phase-2)'),
      },
    ],
  },
  {
    id: 'From Mockup To Live',
    ref: refMap.getRef('2(mockup-to-live)'),
    subheaders: [
      {
        id: 'My contributions',
        ref: refMap.getRef('2.1(my-contributions)'),
      },
      {
        id: 'Figma mockup',
        ref: refMap.getRef('2.2(mockup)'),
      },
    ],
  },
  {
    id: 'Demo - Invoice Builder',
    ref: refMap.getRef('3(demo-invoice-builder)'),
    subheaders: [
      {
        id: 'Form data + input validation',
        ref: refMap.getRef('3.1(form-data)'),
      },
      {
        id: 'Adding dynamic items',
        ref: refMap.getRef('3.2(dynamic-form-items)'),
      },
      {
        id: 'Generate invoice',
        ref: refMap.getRef('3.2(invoice-download)'),
      },
    ],
  },
];
