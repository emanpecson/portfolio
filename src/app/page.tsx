export default function Home() {
  return (
    <>
      <div className="xl:grid xl:grid-cols-12 h-screen pt-20">
        <div className="xl:col-span-5 bg-red-500 xl:h-full h-[24rem]">
          <div className="mx-16 bg-blue-300 fixed">
            <div>
              <h1 className="text-5xl font-bold">Emanuel Pecson</h1>
              <h2 className="text-2xl pt-2 font-semibold">Software Engineer Intern at JT4</h2>
            </div>
          </div>
        </div>
        <div className="xl:col-span-7 bg-blue-500 h-full">
          <div className="mx-16 bg-green-300">
            <div className="bg-orange-500 h-[20rem] my-2">block</div>
            <div className="bg-orange-500 h-[20rem] my-2">block</div>
            <div className="bg-orange-500 h-[20rem] my-2">block</div>
            <div className="bg-orange-500 h-[20rem] my-2">block</div>
          </div>
        </div>
      </div>
    </>
  );
}
