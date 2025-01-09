export default function BlurWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-full backdrop-blur-lg p-2 flex place-items-center space-x-4 dark:bg-neutral-950 dark:bg-opacity-70 flex-shrink-0">
      {children}
    </div>
  );
}
