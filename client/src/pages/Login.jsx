import React from "react";

export default function Login() {
  return (
    <div>
      <div>
        <form className="bg-white my-[90px]  w-[350px]  sm:w-[500px] h-[300px] mx-auto rounded-lg">
          <div className="flex flex-col py-[150px] max-w-[450px] mx-auto justify-center items-center h-[0vh] ">
            <div className="my-6">
              <h1 className="text-2xl font-bold text-gray-600">
                Login to Daily Blog
              </h1>
            </div>
            <div className="flex flex-col w-[300px] sm:w-[400px] mx-auto gap-6">
              <input
                type="email"
                autoFocus
                className="transition-all duration-[300ms] ease-out rounded-lg  appearance-none border border-gray-300  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="Your email"
              />
              <input
                type="password"
                autoFocus
                className="transition-all duration-[300ms] ease-out rounded-lg  appearance-none border border-gray-300  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="Your Password"
              />
            </div>

            <div className="py-4">
              <button
                type="submit"
                className="transition-all duration-[300ms] ease-out border-2 border-black w-[150px] h-[40px] rounded-lg hover:bg-black hover:text-white"
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
