import { LucideIcon } from 'lucide-react';

interface IconButtonProps {
  icon: LucideIcon;
  onClick: () => void;
}

export default function IconButton(props: IconButtonProps) {
  return (
    <button
      className="opacity-60 hover:opacity-100 transition-opacity duration-150 w-fit h-fit"
      onClick={props.onClick}
    >
      <props.icon size={20} strokeWidth={1.75} />
    </button>
  );
}
