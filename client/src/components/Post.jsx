/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import banner from "../assets/banner.jpg";
import Categories from "./Categories";

export default function Post({ posts }) {
  const PF = "http://localhost:4000/images/";

  return (
    <div className="py-14 container mx-auto px-6 lg:px-20">
      <Categories />
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
                  src={banner}
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
