/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Link } from "react-router-dom";
import banner from "../assets/banner.jpg";
import { Context } from "../context/Context";
import Categories from "./Categories";

export default function Post({ posts }) {
  const PF = "http://localhost:4000/images/";
  console.log(posts);

  return (
    <div className="py-14 container mx-auto px-6 lg:px-20">
      <h1 className="text-2xl font-bold text-center ">
        Most interesting topic
      </h1>
      <div className="flex gap-2 flex-wrap sm:gap-10 my-6 w-full justify-center text-[12px]">
        <span>
          <p className="border-gray-400 border-[1px] px-3 py-1 rounded-xl font-medium items-center hover:bg-black hover:transition hover:duration-300 hover:text-white cursor-pointer">
            {posts.category}
          </p>
        </span>
      </div>
      <div className="py-4">
        <div className=" flex flex-col items-center sm:flex-row md:flex-row gap-10 justify-center flex-wrap ">
          {posts.map((item, key) => (
            <div
              key={key}
              className="card max-w-[250px] mt-2 transform transition duration-300  gap-1 bg-white p-4"
            >
              <div className="max-w-[300px]">
                <Link to={`/post/${item._id}`}>
                  <img
                    className="w-[220px] h-[220px] mx-auto object-cover"
                    src={PF + item.photo}
                    alt=""
                  />
                  <div className="flex flex-col my-1">
                    <h1 className="font-bold">{item.title}</h1>
                  </div>
                </Link>
                <p className="text-[13px]">{item.desc}</p>
              </div>

              <div className="mt-3 flex items-center gap-4">
                <img
                  className="w-8 h-8 object-cover rounded-full"
                  src={PF + profilePic}
                />

                <p className="text-[13px] font-semibold text-gray-500">
                  {item.username}
                </p>

                <p className="text-[11px] text-gray-600 ">
                  {new Date(item.createdAt).toDateString()}
                </p>
              </div>

              <div className="mt-4">
                <p className="border-gray-400 border-[1px] text-[11px]  rounded-full font-medium items-center text-center max-w-[60px]">
                  {item.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
