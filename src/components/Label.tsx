export default function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-full border px-2 dark:bg-neutral-900 bg-neutral-200 text-neutral-500 border-neutral-300 dark:border-neutral-800 text-sm w-fit h-fit whitespace-nowrap font-medium">
      {children}
    </div>
  );
}
