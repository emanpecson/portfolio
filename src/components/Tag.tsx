export default function Tag({ params }: { params: { text: string } }) {
  return (
    <div className="rounded-3xl bg-teal-300 bg-opacity-20 px-3 py-1 mx-1 my-1">
      <p className="text-teal-300 font-medium text-sm">{params.text}</p>
    </div>
  );
}
