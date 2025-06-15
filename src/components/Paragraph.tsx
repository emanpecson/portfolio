interface ParagraphProps {
  children: React.ReactNode;
}

export default function Paragraph(props: ParagraphProps) {
  return (
    <div className="text-base text-neutral-700/80 dark:text-neutral-300/80 text-wrap leading-7">{props.children}</div>
  );
}
