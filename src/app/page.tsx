export default function Home() {
  return (
    <>
      <div className="xl:grid xl:grid-cols-10 h-screen pt-20">
        <div className="xl:col-span-4 bg-red-500 xl:h-full h-[24rem]">
          <div className="mx-20 bg-blue-300">profile content</div>
        </div>
        <div className="xl:col-span-6 bg-blue-500 h-full">
          <div className="mx-20 bg-green-300">desc content</div>
        </div>
      </div>
    </>
  );
}
