'use client';

import ProjectContent from '@/components/project/ProjectContent';
import ContentSection from '@/components/content/ContentSection';
import ContentText from '@/components/content/ContentText';
import { projects } from '@/data/projects';
import { useRefMap } from '@/hooks/useRefMap';
import { ContentHeaderType } from '@/types/ContentHeader';
import ContentSubsection from '@/components/content/ContentSubsection';

export default function QuorumBotsPage() {
  const proj = projects[2];
  const refMap = useRefMap(['problem', 'solution', 'features', 'f1', 'f2', 'f3']);
  const headers: ContentHeaderType[] = [
    { id: '0', label: 'Problem', ref: refMap.problem },
    { id: '1', label: 'Solution', ref: refMap.solution },
    {
      id: '2',
      label: 'Features',
      ref: refMap.features,
      subheaders: [
        { id: '2.0', label: 'Feature 1', ref: refMap.f1 },
        { id: '2.1', label: 'Feature 2', ref: refMap.f2 },
        { id: '2.2', label: 'Feature 3', ref: refMap.f3 },
      ],
    },
  ];

  return (
    <ProjectContent project={proj} headers={headers}>
      <ContentSection header={headers[0]}>
        <ContentText>
          proident laborum sit amet do deserunt nisi ullamco nostrud aute dolore officia mollit sint esse amet aliquip
          occaecat consectetur ea amet qui eiusmod amet veniam excepteur dolor sit duis reprehenderit do minim dolore
          sunt deserunt est nostrud elit aute commodo
        </ContentText>
      </ContentSection>
      <ContentSection header={headers[1]}>
        <ContentText>
          proident laborum sit amet do deserunt nisi ullamco nostrud aute dolore officia mollit sint esse amet aliquip
          occaecat consectetur ea amet qui eiusmod amet veniam excepteur dolor sit duis reprehenderit do minim dolore
          sunt deserunt est nostrud elit aute commodo
        </ContentText>
      </ContentSection>
      <ContentSection header={headers[2]}>
        <ContentSubsection subheader={headers[2].subheaders![0]}>
          proident laborum sit amet do deserunt nisi ullamco nostrud aute dolore officia mollit sint esse amet aliquip
          occaecat consectetur ea amet qui eiusmod amet veniam excepteur dolor sit duis reprehenderit do minim dolore
          sunt deserunt est nostrud elit aute commodo
        </ContentSubsection>
        <ContentSubsection subheader={headers[2].subheaders![1]}>
          proident laborum sit amet do deserunt nisi ullamco nostrud aute dolore officia mollit sint esse amet aliquip
          occaecat consectetur ea amet qui eiusmod amet veniam excepteur dolor sit duis reprehenderit do minim dolore
          sunt deserunt est nostrud elit aute commodo
        </ContentSubsection>
        <ContentSubsection subheader={headers[2].subheaders![2]}>
          proident laborum sit amet do deserunt nisi ullamco nostrud aute dolore officia mollit sint esse amet aliquip
          occaecat consectetur ea amet qui eiusmod amet veniam excepteur dolor sit duis reprehenderit do minim dolore
          sunt deserunt est nostrud elit aute commodo
        </ContentSubsection>
      </ContentSection>
    </ProjectContent>
  );
}
