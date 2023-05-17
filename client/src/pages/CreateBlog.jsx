import React, { useContext, useState } from "react";
import { AiFillCamera } from "react-icons/ai";
import Img from "../assets/banner.jpg";
import { Context } from "../context/Context";
import axios from "axios";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";

export default function CreateBlog() {
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState([]);
  const [file, setFile] = useState(null);
  const [redirect, setRedirect] = useState(false);

  const postHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      content,
      category,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("http://localhost:4000/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("http://localhost:4000/posts", newPost);
      window.location.replace("/post/" + res.data._id);

      //notification
      toast.success("Blog posted successfully 📝", {
        position: "top-center",
      });
      setRedirect(true);
    } catch (err) {}

    if (redirect) {
      return <Navigate to={`/post/${res.data._id}`} />;
    }
  };

  return (
    <div>
      <div className=" backdrop-blur-md bg-white/70 container py-8 my-8 mx-auto px-6 max-w-[500px]  bg-white rounded-lg">
        <div>
          {file ? (
            <img
              className="py-4 w-full object-cover rounded-lg"
              src={URL.createObjectURL(file)}
              alt=""
            />
          ) : (
            <div className="flex flex-col w-[400px] mx-auto">
              <h1 className="py-4 mb-6 w-full object-cover rounded-lg text-5xl text-center">
                Blog image
              </h1>
            </div>
          )}
        </div>
        <form onSubmit={postHandler} className="flex flex-col gap-8">
          <div className="flex flex-col gap-6 items-center">
            <input
              type="file"
              id="fileInput"
              hidden
              onChange={(e) => setFile(e.target.files[0])}
            />
            <label
              htmlFor="fileInput"
              className="btn btn-circle hover:bg-black hover:text-white transition-all duration-[300ms] ease-out"
            >
              <AiFillCamera className="h-6 w-6 hover:text-white" />
            </label>

            <input
              className="input input-bordered w-full max-w-xs"
              placeholder="Category"
              type="text"
              label="Title"
              autoFocus={true}
              onChange={(e) => setCategory(e.target.value)}
            />
            <input
              className="input input-bordered w-full max-w-xs"
              placeholder="Title"
              type="text"
              label="Title"
              autoFocus={true}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div>
            <textarea
              className="textarea textarea-bordered  w-[300px] sm:w-[450px] md:w-[450px] lg:w-[450px]"
              label="Write your story..."
              type="text"
              color="gray"
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>

          <div className="w-full">
            <button
              type="submit"
              className="w-[200px] btn hover:bg-black hover:text-white flex justify-center items-center mx-auto"
            >
              Publish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
