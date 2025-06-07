import { FileUserIcon } from 'lucide-react';
import IconButton from './IconButton';
import Link from 'next/link';

export default function ResumeButton() {
  return (
    <Link href="/emanuel-pecson-resume.pdf" rel="noopener noreferrer" target="_blank">
      <IconButton label="Resume" icon={FileUserIcon} onClick={() => {}} />
    </Link>
  );
}
