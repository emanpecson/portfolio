'use client';

import ProjectContent from '@/components/project/ProjectContent';
import ContentSection from '@/components/content/ContentSection';
import ContentText from '@/components/content/ContentText';
import { projects } from '@/data/projects';
import { useRefMap } from '@/hooks/useRefMap';
import { ContentHeaderType } from '@/types/ContentHeader';
import ContentSubsection from '@/components/content/ContentSubsection';
import { BellIcon, MailIcon, MessageCircleIcon, QrCodeIcon, SmartphoneIcon } from 'lucide-react';

export default function GatekeeperPage() {
  const proj = projects[0];
  const refMap = useRefMap(['problem', 'solution', 'features', 'f1', 'f2', 'f3', 'f4', 'f5']);
  const headers: ContentHeaderType[] = [
    { id: '0', label: 'Problem', ref: refMap.problem },
    { id: '1', label: 'Solution', ref: refMap.solution },
    {
      id: '2',
      label: 'Features',
      ref: refMap.features,
      subheaders: [
        { id: '2.0', label: 'QR Code Generation', ref: refMap.f1 },
        { id: '2.1', label: 'Easy Verification', ref: refMap.f2 },
        { id: '2.2', label: 'Email Notifications', ref: refMap.f3 },
        { id: '2.3', label: 'Real-time Notificaitons', ref: refMap.f4 },
        { id: '2.4', label: 'Group Chat', ref: refMap.f5 },
      ],
    },
  ];

  return (
    <ProjectContent project={proj} headers={headers}>
      <ContentSection header={headers[0]}>
        <ContentText>
          The process of manually verifying whether an individual should be allowed into some event can be tedious.
        </ContentText>
        <ContentText>
          Oftentimes, this involves having someone flipping through several pages on a clipboard to locate this person's
          name. Now imagine how long and annoying this might be when it comes to verifying tens or hundreds of people!
        </ContentText>
        <ContentText>It's about time we finally move on from this method.</ContentText>
      </ContentSection>

      <ContentSection header={headers[1]}>
        <ContentText>
          Gatekeeper streamlines this process by giving users the ability to scan-in an invitee's QR code for a quick
          and easy verficiation.
        </ContentText>
      </ContentSection>

      <ContentSection header={headers[2]}>
        <ContentSubsection subheader={headers[2].subheaders![0]} icon={QrCodeIcon}>
          <ContentText>
            Effortlessly scan your code at the event entrance, eliminating the need for physical tickets and ensuring a
            hassle-free entry process.
          </ContentText>
        </ContentSubsection>

        <ContentSubsection subheader={headers[2].subheaders![1]} icon={SmartphoneIcon}>
          <ContentText>
            No need for a QR scanning device. You will be able to verify codes with your device's own integrated camera.
            Just press the Scan codes button above and enter your event's verifier code.
          </ContentText>
        </ContentSubsection>

        <ContentSubsection subheader={headers[2].subheaders![2]} icon={MailIcon}>
          <ContentText>
            As a guest, receive email notifications whenever changes occur to the event you were invited to.
          </ContentText>
        </ContentSubsection>

        <ContentSubsection subheader={headers[2].subheaders![3]} icon={BellIcon}>
          <ContentText>As an event host, get notifications as soon as a guest accepts your invite.</ContentText>
        </ContentSubsection>

        <ContentSubsection subheader={headers[2].subheaders![4]} icon={MessageCircleIcon}>
          <ContentText>
            Users with access to an event will be able to interact in a dedicated group chat. Here, the host and guests
            can engage in conversation or coordinate plans.
          </ContentText>
        </ContentSubsection>
      </ContentSection>
    </ProjectContent>
  );
}
