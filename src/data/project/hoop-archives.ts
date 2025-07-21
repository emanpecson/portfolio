import { RefMap } from '@/lib/ref-map';
import { ContentHeaderType } from '@/types/ContentHeader';

const refMap = new RefMap([
  'website',
  'overview',
  'introduction',
  'motivation',
  'simplified-vid-editor',
  'quant-data-collection',
  'architecture',
  'video-editing',
  'video-processing',
  'video-storage',
]);

export const headers: ContentHeaderType[] = [
  {
    id: 'Try it out',
    ref: refMap.getRef('website'),
    subheaders: [],
  },
  {
    id: 'Overview',
    ref: refMap.getRef('overview'),
    subheaders: [
      {
        id: 'Introduction',
        ref: refMap.getRef('introduction'),
      },
      {
        id: 'Motivation',
        ref: refMap.getRef('motivation'),
      },
      {
        id: 'Simplified video editor',
        ref: refMap.getRef('simplified-vid-editor'),
      },
      {
        id: 'Quantitative data collection',
        ref: refMap.getRef('quant-data-collection'),
      },
    ],
  },
  {
    id: 'Architecture',
    ref: refMap.getRef('architecture'),
    subheaders: [
      {
        id: 'Video editing (Next.js)',
        ref: refMap.getRef('video-editing'),
      },
      {
        id: 'Video processing (FFmpeg + Lambda + SQS)',
        ref: refMap.getRef('video-processing'),
      },
      {
        id: 'Video clip storage (S3 + DynamoDB)',
        ref: refMap.getRef('video-storage'),
      },
    ],
  },
];
