interface ContentListProps {
  list: string[];
}

export default function ContentList(props: ContentListProps) {
  return (
    <ul className="font-light text-neutral-800 dark:text-neutral-200 flex flex-col space-y-1">
      {props.list.map((item, i) => (
        <li key={i} className="flex space-x-4 place-items-start pl-2">
          <div className="rounded-full bg-neutral-800 dark:bg-neutral-200 w-1.5 h-1.5 mt-2 flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
