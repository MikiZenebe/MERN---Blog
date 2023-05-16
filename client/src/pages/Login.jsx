import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Context } from "../context/Context";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch, isFetching } = useContext(Context);

  const loginHandler = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });

    try {
      const res = await axios.post("http://localhost:4000/auth/login", {
        email,
        password,
      });

      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      console.log(user);
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div>
      <div>
        <form
          onSubmit={loginHandler}
          className="bg-white my-[90px]  w-[350px]  sm:w-[500px] h-[300px] mx-auto rounded-lg"
        >
          <div className="flex flex-col py-[150px] max-w-[450px] mx-auto justify-center items-center h-[0vh] ">
            <div className="my-6">
              <h1 className="text-2xl font-bold text-gray-600">
                Login to Daily Blog
              </h1>
            </div>
            <div className="flex flex-col w-[300px] sm:w-[400px] mx-auto gap-6">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
                className="transition-all duration-[300ms] ease-out rounded-lg  appearance-none border border-gray-300  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="Your email"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoFocus
                className="transition-all duration-[300ms] ease-out rounded-lg  appearance-none border border-gray-300  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="Your Password"
              />
            </div>

            <div className="py-4">
              <button
                type="submit"
                className="transition-all duration-[300ms] ease-out border-2 border-black w-[150px] h-[40px] rounded-lg hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:btn-disabled "
                disabled={isFetching}
              >
                Login
              </button>
            </div>

            <p className=" mb-3 text-center font-normal">
              have not an account?{" "}
              <Link to="/signup" className="font-bold">
                Signup
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
