'use client';

import Content from '@/components/content/Content';
import ContentSection from '@/components/content/ContentSection';
import ContentText from '@/components/content/ContentText';
import ContentTitleProject from '@/components/content/ContentTitleProject';
import { projects } from '@/data/projects';
import { useRefMap } from '@/hooks/useRefMap';
import { ContentHeaderType } from '@/types/ContentHeader';

export default function GatekeeperPage() {
  const proj = projects[0];
  const refMap = useRefMap(['motivation', 'features']);
  const headers: ContentHeaderType[] = [
    {
      id: '0',
      label: 'Motivation',
      ref: refMap.motivation,
      subheaders: [],
    },
    {
      id: '1',
      label: 'Features',
      ref: refMap.features,
      subheaders: [],
    },
  ];

  return (
    <Content headers={headers}>
      <ContentTitleProject project={proj} />

      <ContentSection header={headers[0]}>
        <ContentText>This is some motivational stuff man.</ContentText>
      </ContentSection>
    </Content>
  );
}
