import { LucideIcon } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

interface IconButtonProps {
  icon: LucideIcon;
  onClick: () => void;
  label: string;
}

export default function IconButton(props: IconButtonProps) {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <button
            className="opacity-60 hover:opacity-100 transition-opacity duration-150 w-fit h-fit"
            onClick={props.onClick}
          >
            <props.icon size={20} />
          </button>
        </TooltipTrigger>

        <TooltipContent>{props.label}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
