import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";

export default function Signup() {
  const [redirect, setRedirect] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:4000/auth/register", {
        username,
        email,
        password,
      });

      console.log(res);

      //notification
      if (res) {
        toast.success("The user registerd successfully 📝", {
          position: "top-center",
        });
        setRedirect(true);
      }
    } catch (err) {
      toast.error(err.message, {
        position: "top-center",
        autoClose: 1000,
      });
    }
  };

  if (redirect) {
    return <Navigate to={`/login`} />;
  }

  return (
    <div>
      <div>
        <form
          onSubmit={registerSubmit}
          className="bg-white my-[50px]  w-[350px]  sm:w-[500px] h-[420px] mx-auto rounded-lg"
        >
          <div className="flex flex-col py-[200px] max-w-[450px] mx-auto justify-center items-center h-[0vh] ">
            <div className="my-6">
              <h1 className="text-2xl font-bold text-gray-600">
                Signup to Daily Blog
              </h1>
            </div>
            <div className="flex flex-col w-[300px] sm:w-[400px] mx-auto gap-3">
              <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                required
                autoFocus
                id="username"
                className="transition-all duration-[300ms] ease-out rounded-lg  appearance-none border border-gray-300  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="Your Name"
              />

              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                required
                autoFocus
                id="email"
                className="transition-all duration-[300ms] ease-out rounded-lg  appearance-none border border-gray-300  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="Your email"
              />
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                required
                autoFocus
                id="password"
                className="transition-all duration-[300ms] ease-out rounded-lg  appearance-none border border-gray-300  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="password must be morethan 6 char"
              />
            </div>

            <div className="py-4">
              <button
                type="submit"
                className="transition-all duration-[300ms] ease-out border-2 border-black w-[150px] h-[40px] rounded-lg hover:bg-black hover:text-white"
              >
                Sign Up
              </button>
            </div>

            <p className="mt-1 text-center font-normal">
              Already have an account?{" "}
              <Link to="/login" className="font-bold">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
