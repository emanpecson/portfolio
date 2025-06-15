import { ConstructionIcon } from 'lucide-react';

export default function UnderDevelopment() {
  return (
    <div className="rounded-md px-3 py-1 bg-neutral-200 text-neutral-500 dark:bg-neutral-700 dark:text-neutral-300 w-fit border">
      <div className="flex space-x-2 place-items-center">
        <ConstructionIcon size={20} />
        <span className="font-medium font-mono text-sm">Under development</span>
        <ConstructionIcon size={20} />
      </div>
    </div>
  );
}
