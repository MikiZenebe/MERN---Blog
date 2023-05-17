import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import Img from "../assets/banner.jpg";

export default function DetailPage() {
  const [post, setPost] = useState({});
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const PF = "http://localhost:4000/images/";

  useEffect(() => {
    const getSingle = async () => {
      const res = await axios.get("http://localhost:4000/posts/" + path);
      setPost(res.data);
    };
    getSingle();
  }, [path]);

  return (
    <div>
      <div key={post._id} className="container py-14 mx-auto px-6 ">
        <div className="flex flex-col justify-center items-center text-center gap-2">
          <h3 className="font-semibold">{post.category}</h3>
          <h1 className="text-4xl font-medium">{post.title}</h1>
          <p>{post.desc}</p>
        </div>

        <div className="my-8 flex gap-4 justify-center">
          <div className="avatar">
            <div className="w-12 rounded-full ring ring-gray-500 ring-offset-gray-200 ring-offset-2">
              <img src={Img} />
            </div>
          </div>

          <div>
            <Link to={`/?user=${post.username}`}>
              <p className="font-semibold ">{post.username}</p>
            </Link>

            <p>{new Date(post.createdAt).toDateString()}</p>
          </div>
        </div>

        <div className="max-w-[400px]">
          <div className="flex flex-col justify-center mx-auto items-center max-w-[900px] xl:max-w-[1200px]">
            <img
              className="w-[500px] sm:w-[800px] rounded-md"
              src={PF + post.photo}
              alt=""
            />

            <div className="py-3 flex gap-4 mt-2">
              <p>Edit</p>
              <p>Delete</p>
            </div>
          </div>

          <div className="max-w-[500px] ">
            <p className="w-[300px]">{post.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
