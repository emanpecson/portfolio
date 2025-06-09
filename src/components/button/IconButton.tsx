import { LucideIcon } from 'lucide-react';
import * as React from 'react';

interface IconButtonProps {
  icon: LucideIcon;
  onClick: () => void;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => {
  return (
    <button
      ref={ref}
      className="opacity-60 hover:opacity-100 transition-opacity duration-150 w-fit h-fit"
      onClick={props.onClick}
    >
      <props.icon size={20} />
    </button>
  );
});

IconButton.displayName = 'IconButton';

export default IconButton;
