import React from "react";
import Img from "../assets/banner.jpg";

export default function CreateBlog() {
  return (
    <div>
      <div className="container py-8 my-8 mx-auto px-6 max-w-[500px]  ">
        <div>
          <img
            className="py-4 w-full object-cover rounded-lg"
            src={Img}
            alt=""
          />
        </div>
        <form className="flex flex-col gap-8">
          <div className="flex gap-6 items-center">
            <input type="file" id="fileInput" hidden />
            <input type="text" label="Title" color="gray" autoFocus={true} />
            <label
              htmlFor="fileInput"
              className="bg-blue-gray-800 p-2 rounded-full cursor-pointer"
            ></label>
          </div>

          <div>
            <textarea
              className="h-44"
              label="Write your story..."
              type="text"
              color="gray"
            />
          </div>

          <div className="w-full">
            <button
              className="w-[200px] flex justify-center items-center mx-auto"
              color="blue-gray"
            >
              Publish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
