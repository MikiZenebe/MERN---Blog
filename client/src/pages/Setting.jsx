import React from "react";
import { AiFillCamera } from "react-icons/ai";
import { useContext, useState } from "react";
import { Context } from "../context/Context";
import axios from "axios";
import toast from "react-hot-toast";

export default function Setting() {
  const { user, dispatch } = useContext(Context);
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const PF = "http://localhost:4000/images/";

  const updateHandler = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });

    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;

      try {
        await axios.post("http://localhost:4000/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.put(
        "http://localhost:4000/user/" + user._id,
        updatedUser
      );

      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
      //notification
      toast.success("Profile updated successfully 📝", {
        position: "top-center",
      });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };

  return (
    <div>
      <form onSubmit={updateHandler}>
        <div className="mx-4 min-h-screen max-w-screen-xl sm:mx-8 xl:mx-auto">
          <div className="py-6 flex items-center gap-3">
            <label tabIndex={0} className="  avatar">
              <div className="w-10 rounded-full">
                <img
                  src={file ? URL.createObjectURL(file) : PF + user.profilePic}
                />
              </div>
            </label>
            <h1 className="text-2xl font-semibold">{user.username}</h1>

            <div>
              <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                onChange={(e) => setFile(e.target.files[0])}
              />
              <label
                htmlFor="fileInput"
                className="btn btn-circle btn-sm hover:bg-black hover:text-white transition-all duration-[300ms] ease-out "
              >
                <AiFillCamera className="h-4 w-4 hover:text-white" />
              </label>
            </div>
          </div>

          <div className="grid grid-cols-8 pt-3 sm:grid-cols-10">
            <div className="relative my-4 w-56 sm:hidden">
              <input
                className="peer hidden"
                type="checkbox"
                name="select-1"
                id="select-1"
              />
              <label
                htmlFor="select-1"
                className="flex w-full cursor-pointer select-none rounded-lg border p-2 px-3 text-sm text-gray-700 ring-black peer-checked:ring"
              >
                Accounts{" "}
              </label>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="pointer-events-none absolute right-0 top-3 ml-auto mr-5 h-4 text-slate-700 transition peer-checked:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <ul className="max-h-0 select-none flex-col overflow-hidden rounded-b-lg shadow-md transition-all duration-300 peer-checked:max-h-56 peer-checked:py-3">
                <li className="cursor-pointer px-3 py-2 text-sm text-slate-600 hover:bg-black hover:text-white">
                  Accounts
                </li>
              </ul>
            </div>

            <div className="col-span-2 hidden sm:block">
              <ul>
                <li className="mt-5 cursor-pointer border-l-2 border-l-black px-2 py-2 font-semibold text-black transition hover:border-l-blue-700 hover:text-blue-700">
                  Accounts
                </li>
              </ul>
            </div>

            <div className="col-span-8 overflow-hidden rounded-xl sm:bg-gray-50 sm:px-8 sm:shadow">
              <div className="pt-4">
                <h1 className="py-2 text-2xl font-semibold">
                  Account settings
                </h1>
                <p className="font- text-slate-600">
                  Update and Customize your account
                </p>
              </div>
              <hr className="mt-4 mb-8" />

              <p className="py-2 text-xl font-semibold">Username</p>
              <div className="flex items-center">
                <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-3">
                  <label>
                    <span className="text-sm text-gray-500">New Username</span>
                    <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-black">
                      <input
                        type="text"
                        required
                        className="w-full flex-shrink appearance-none input input-bordered  max-w-xs transition-all duration-[300ms] ease-out rounded-lg  border border-gray-400  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm  focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                        placeholder={user.username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                  </label>
                </div>
              </div>

              <hr className="mt-4 mb-8" />

              <p className="py-2 text-xl font-semibold">Email</p>
              <div className="flex items-center">
                <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-3">
                  <label>
                    <span className="text-sm text-gray-500">New Email</span>
                    <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-black">
                      <input
                        type="email"
                        required
                        className="w-full flex-shrink appearance-none input input-bordered  max-w-xs transition-all duration-[300ms] ease-out rounded-lg  border border-gray-400  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm  focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                        placeholder={user.email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </label>
                </div>
              </div>

              <hr className="mt-4 mb-8" />

              <p className="py-2 text-xl font-semibold">Password</p>
              <div className="flex items-center">
                <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-3">
                  <label>
                    <span className="text-sm text-gray-500">New Password</span>
                    <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-black">
                      <input
                        type="password"
                        required
                        className="w-full flex-shrink appearance-none input input-bordered  max-w-xs transition-all duration-[300ms] ease-out rounded-lg  border border-gray-400  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm  focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                        placeholder="*********"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </label>
                </div>
              </div>

              <hr className="mt-4 mb-8" />

              <button
                type="submit"
                className="mt-4 rounded-lg bg-black px-4 py-2 text-white"
              >
                Update Profile
              </button>

              <hr className="mt-4 mb-8" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
