import banner from "../assets/banner.jpg";

export default function Post() {
  return (
    <div className="py-14 container mx-auto px-6 lg:px-20">
      <div className="flex flex-col text-[14px] sm:text-[20px]">
        <h1 className="text-2xl font-bold text-center ">
          Most interesting topic
        </h1>
        <div className="flex gap-4 sm:gap-14 my-6 w-full justify-center text-[12px]">
          <p className="border-gray-400 border-[1px] px-3 py-1 rounded-xl font-medium items-center hover:bg-black hover:transition hover:duration-300 hover:text-white cursor-pointer">
            Sport
          </p>

          <p className="border-gray-400 border-[1px] px-3 py-1 rounded-xl font-medium items-center hover:bg-black hover:transition hover:duration-300 hover:text-white cursor-pointer">
            Sport
          </p>
          <p className="border-gray-400 border-[1px] px-3 py-1 rounded-xl font-medium items-center hover:bg-black hover:transition hover:duration-300 hover:text-white cursor-pointer">
            Sport
          </p>
          <p className="border-gray-400 border-[1px] px-3 py-1 rounded-xl font-medium items-center hover:bg-black hover:transition hover:duration-300 hover:text-white cursor-pointer">
            Sport
          </p>
          <p className="border-gray-400 border-[1px] px-3 py-1 rounded-xl font-medium items-center hover:bg-black hover:transition hover:duration-300 hover:text-white cursor-pointer">
            Sport
          </p>
        </div>
      </div>

      <div className="py-4">
        <div>
          <h1 className="text-2xl font-bold text-center my-6">
            Most interesting posts
          </h1>
        </div>
        <div className=" flex flex-col items-center sm:flex-row md:flex-row gap-10 justify-center flex-wrap ">
          <div className="card max-w-[250px] mt-2 transform transition duration-300  gap-4 bg-white p-4">
            <div>
              <img className="" src={banner} alt="" />
              <div className="my-4">
                <h1 className="font-bold">New Js Coming</h1>

                <p>description</p>
              </div>
            </div>

            <div className="mt-3 flex items-center gap-4">
              <img
                className="w-10 h-10 object-cover rounded-full"
                src={banner}
              />
              <p>Miki</p>
              <p className="text-[11px] text-gray-600 ml-8">Date</p>
            </div>
          </div>

          <div className="card max-w-[250px] mt-2 transform transition duration-300  gap-4 bg-white p-4">
            <div>
              <img className="" src={banner} alt="" />
              <div className="my-4">
                <h1 className="font-bold">New Js Coming</h1>

                <p>description</p>
              </div>
            </div>

            <div className="mt-3 flex items-center gap-4">
              <img
                className="w-10 h-10 object-cover rounded-full"
                src={banner}
              />
              <p>Miki</p>
              <p className="text-[11px] text-gray-600 ml-8">Date</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
