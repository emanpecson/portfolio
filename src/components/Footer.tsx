import InlineLink from './button/InlineLink';

export default function Footer() {
  return (
    <div className="mb-16 flex space-x-1.5">
      <InlineLink href="https://creativecommons.org/licenses/by-nc/4.0/?ref=chooser-v1">CC BY-NC 4.0</InlineLink>
      <span>Emanuel Pecson © 2025</span>
    </div>
  );
}
