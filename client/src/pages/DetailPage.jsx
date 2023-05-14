import React from "react";
import Img from "../assets/banner.jpg";

export default function DetailPage() {
  return (
    <div>
      <div className="container py-14 mx-auto px-6 ">
        <div className="flex flex-col justify-center items-center text-center gap-2">
          <h3 className="font-semibold">Catagory</h3>
          <h1 className="text-4xl font-medium">Here is the Title</h1>
          <p>Here is the TitleHere is the TitleHere is the Title</p>
        </div>

        <div className="my-8 flex gap-4 justify-center">
          <div className="avatar">
            <div className="w-12 rounded-full ring ring-gray-500 ring-offset-gray-200 ring-offset-2">
              <img src={Img} />
            </div>
          </div>

          <div>
            <p className="font-semibold ">username</p>

            <p>date</p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center max-w-[900px] xl:max-w-[1200px]">
          <img className="w-[800px] rounded-md" src={Img} alt="" />

          <div className="py-3 flex gap-4 mt-2">
            <p>Edit</p>
            <p>Delete</p>
          </div>
          <p className=" my-6 max-w-[600px] sm:max-w-[800px] xl:max-w-[1000px] ">
            import Img from "../assets/banner.jpg"; import Img from
            "../assets/banner.jpg"; import Img from "../assets/banner.jpg";
            import Img from "../assets/banner.jpg";
          </p>
        </div>
      </div>
    </div>
  );
}
