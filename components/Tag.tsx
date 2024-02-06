export default function Tag({ params }: { params: { text: string } }) {
  return (
    <div className="rounded-3xl bg-green-400 bg-opacity-20">
      <p className="text-green-400">{params.text}</p>
    </div>
  );
}
