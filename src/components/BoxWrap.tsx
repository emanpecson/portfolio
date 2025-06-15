export default function BoxWrap({ children }: { children: React.ReactNode }) {
  return (
    <div className="duration-200 transition-all space-y-1.5 dark:hover:bg-neutral-800/50 dark:hover:shadow-inner dark:hover:shadow-neutral-800 hover:bg-neutral-200/50 rounded-xl p-2.5 hover:shadow-neutral-200 hover:shadow-md">
      {children}
    </div>
  );
}
