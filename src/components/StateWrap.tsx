export default function StateWrap({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-full border px-2 py-0.5 dark:bg-neutral-900 bg-neutral-200 text-neutral-500 border-neutral-300 dark:border-neutral-800 sm:text-sm text-xs w-fit whitespace-nowrap">
      {children}
    </div>
  );
}
