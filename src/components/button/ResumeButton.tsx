import { FileUserIcon } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog';
import IconButton from './IconButton';

export default function ResumeButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <IconButton label="Resume" icon={FileUserIcon} onClick={() => {}} />
      </DialogTrigger>
      <DialogContent className="h-[44rem] p-2">
        <object
          data="/emanuel-pecson-resume.pdf"
          type="application/pdf"
          width="100%"
          height="100%"
          className="rounded-md"
        />
      </DialogContent>
    </Dialog>
  );
}
