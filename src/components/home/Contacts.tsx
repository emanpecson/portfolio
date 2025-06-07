import InlineLink from '../button/InlineLink';
import Paragraph from '../Paragraph';

export default function Contacts() {
  return (
    <div>
      <Paragraph>Want to grab a coffee or just chat? Feel free to contact me!</Paragraph>
      <div>
        <span>✉️ </span>
        <InlineLink href="mailto:emanpecson@gmail.com">emanpecson@gmail.com</InlineLink>
      </div>
    </div>
  );
}
