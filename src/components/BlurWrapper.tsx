export default function BlurWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-full backdrop-blur-lg p-2 flex place-items-center space-x-4 dark:bg-background dark:bg-opacity-70 flex-shrink-0">
      {children}
    </div>
  );
}
