import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import Img from "../assets/banner.jpg";
import { Context } from "../context/Context";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import toast from "react-hot-toast";

export default function DetailPage() {
  const { user } = useContext(Context);
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

  const deleteHandler = async () => {
    try {
      await axios.delete(`http://localhost:4000/posts/${post._id}`, {
        data: { username: user.username },
      });
      //notification
      toast.success("Blog deleted successfully 🗑️", {
        position: "top-center",
      });
      window.location.replace("/");
    } catch (error) {}
  };

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

        <div className="max-w-[1000px] mx-auto">
          <div className="flex flex-col justify-center mx-auto items-center max-w-[900px] xl:max-w-[1200px]">
            <img
              className="w-[500px] h-auto sm:w-[500px] sm:h-[600px] object-cover md:w-[500px] rounded-md mx-auto mb-4"
              src={PF + post.photo}
              alt=""
            />

            {post.username === user?.username && (
              <div className="py-3 flex gap-4 ">
                <label className="btn btn-circle btn-sm hover:bg-green-600 hover:text-white transition-all duration-[300ms] ease-out">
                  <AiFillEdit className="h-5 w-5 hover:text-white" />
                </label>

                <label className="btn btn-circle btn-sm hover:bg-red-600 hover:text-white transition-all duration-[300ms] ease-out">
                  <label className="cursor-pointer" htmlFor="my-modal-3">
                    <AiFillDelete className="h-5 w-5 hover:text-white" />
                  </label>
                </label>

                <input
                  type="checkbox"
                  id="my-modal-3"
                  className="modal-toggle"
                />
                <div className="modal ">
                  <div className="modal-box relative bg-white">
                    <label
                      htmlFor="my-modal-3"
                      className="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                      ✕
                    </label>
                    <h3 className="text-lg font-bold">
                      Are you sure did u want delete the post
                    </h3>

                    <div className="py-4 flex justify-center gap-4">
                      <button
                        onClick={deleteHandler}
                        className="btn btn-sm btn-success border-none hover:bg-red-300  bg-red-400"
                      >
                        Yes
                      </button>
                      <button className="btn btn-sm btn-warning bg-black text-white hover:bg-gray-500">
                        <label className="cursor-pointer" htmlFor="my-modal-3">
                          No
                        </label>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="max-w-[500px] mx-auto sm:max-w-[500px] md:max-w-[500px] ">
            <p>{post.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
