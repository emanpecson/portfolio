export default function BoxWrap({ children }: { children: React.ReactNode }) {
  return (
    <div className="duration-300 transition-all space-y-1.5 dark:hover:bg-neutral-300 hover:bg-neutral-600 dark:hover:bg-opacity-[3%] hover:bg-opacity-10 rounded-xl p-2.5 hover:shadow-neutral-200 dark:hover:shadow-neutral-900/80 hover:shadow-md">
      {children}
    </div>
  );
}
