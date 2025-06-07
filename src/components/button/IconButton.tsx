import { LucideIcon } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import * as React from 'react';

interface IconButtonProps {
  icon: LucideIcon;
  onClick: () => void;
  label: string;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <button
            ref={ref}
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
});

IconButton.displayName = 'IconButton';

export default IconButton;
