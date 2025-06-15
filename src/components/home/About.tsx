import { lbpUrl } from '@/data/url';
import InlineLink from '../button/InlineLink';
import Paragraph from '../Paragraph';
import { experiences } from '@/data/experience';

export default function About() {
  return (
    <div className="space-y-6">
      <Paragraph>
        <span>I discovered my love for engineering through </span>
        <InlineLink href={lbpUrl}>LittleBigPlanet</InlineLink>
        <span>
          , a video game series that encourages curiosity and creativity by letting players build whatever they imagine.
        </span>
      </Paragraph>
      <Paragraph>
        <span>This passion for engineering carried on into </span>
        <InlineLink href="https://www.unlv.edu/">UNLV</InlineLink>
        <span>, where I graduated cum laude with a </span>
        <InlineLink href="https://www.unlv.edu/degree/bs-computer-science">BS in Computer Science</InlineLink>
        <span> in 2024.</span>
      </Paragraph>
      <Paragraph>
        <span>I've had the chance to </span>
        <InlineLink href={experiences[0].path}>
          showcase my skills and gain hands-on experience through internships
        </InlineLink>
        <span>. But my learning didn't stop there. I continue to grow by bringing ideas to life with </span>
        <InlineLink href="/projects">personal projects</InlineLink>.
      </Paragraph>
      <Paragraph>
        When I'm not coding, you can find me playing basketball, playing the electric guitar, exploring street fashion,
        or creating animations.
      </Paragraph>
    </div>
  );
}
