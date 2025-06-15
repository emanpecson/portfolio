import Link from 'next/link';
import Paragraph from '../Paragraph';
import { experiences } from '@/data/experience';
import InlineLink from '../button/InlineLink';
import { resumePath } from '@/data/routes';

export default function Directory() {
  return (
    <div className="space-y-1">
      <Paragraph>Explore the rest of my portfolio:</Paragraph>
      <div className="flex flex-col space-y-1">
        <InlineLink href={experiences[0].path}>💼 Experience</InlineLink>
        <InlineLink href="/projects">💡 Projects</InlineLink>
        <InlineLink href="/education">🎓 Education</InlineLink>
        <InlineLink href={resumePath}>📄 Resume</InlineLink>
      </div>
    </div>
  );
}
