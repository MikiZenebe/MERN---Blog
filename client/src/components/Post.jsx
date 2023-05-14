import banner from "../assets/banner.jpg";

export default function Post() {
  return (
    <div className="py-4">
      <div>
        <h1 className="text-2xl font-bold text-center my-6">
          Most interesting posts
        </h1>
      </div>
      <div className=" flex flex-col items-center md:flex-row gap-6 justify-center flex-wrap ">
        <div className="card max-w-[300px] mt-2 transform transition duration-300  gap-4 bg-white p-4">
          <div>
            <img className="" src={banner} alt="" />
            <div className="my-4">
              <h1 className="font-bold">New Js Coming</h1>

              <p>description</p>
            </div>
          </div>

          <div className="mt-3 flex items-center gap-4">
            <img className="w-10 h-10 object-cover rounded-full" src={banner} />
            <p>Miki</p>
            <p className="text-[11px] text-gray-600 ml-8">Date</p>
          </div>
        </div>

        <div className="card max-w-[300px] mt-2 transform transition duration-300  gap-4 bg-white p-4">
          <div>
            <img className="" src={banner} alt="" />
            <div className="my-4">
              <h1 className="font-bold">New Js Coming</h1>

              <p>description</p>
            </div>
          </div>

          <div className="mt-3 flex items-center gap-4">
            <img className="w-10 h-10 object-cover rounded-full" src={banner} />
            <p>Miki</p>
            <p className="text-[11px] text-gray-600 ml-8">Date</p>
          </div>
        </div>
      </div>
    </div>
  );
}
