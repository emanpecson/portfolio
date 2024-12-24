import { lbp_url } from '@/data/url';
import InlineLink from '../button/InlineLink';
import Paragraph from '../Paragraph';

export default function About() {
  return (
    <div className="space-y-4">
      <Paragraph>
        <span>I discovered a passion for engineering after stumbling upon </span>
        <InlineLink href={lbp_url}>LittleBigPlanet</InlineLink>
        <span>
          , a video game series that fosters curiosity and creativity by giving players the tools to build whatever they
          could imagine.
        </span>
      </Paragraph>

      <Paragraph>
        <span>This passion for engineering carried on into </span>
        <InlineLink href="https://www.unlv.edu/">UNLV</InlineLink>
        <span>, where I graduated cum laude with a </span>
        <InlineLink href="https://www.unlv.edu/degree/bs-computer-science">BS in Computer Science</InlineLink>.
      </Paragraph>

      <Paragraph>
        <span>I had the opportunity to showcase my skills and </span>
        <InlineLink href="/experience">gain valuable experience through internships</InlineLink>
        <span>. But it didn't stop there. I continued to learn and bring my ideas to life by engaging in a </span>
        <InlineLink href="/projects">variety of personal projects</InlineLink>.
      </Paragraph>

      <Paragraph>
        Outside of programming, I share a passion for basketball, playing the electric guitar, street fashion, and
        creating animations.
      </Paragraph>
    </div>
  );
}
