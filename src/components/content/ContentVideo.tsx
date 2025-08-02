interface ContentVideoProps {
  src: string;
}

export default function ContentVideo(props: ContentVideoProps) {
  return (
    <video
      src={props.src}
      height={24}
      width={24}
      className="max-w-[40rem] w-full rounded-3xl border object-contain shadow-lg"
      muted
      controls
    />
  );
}
