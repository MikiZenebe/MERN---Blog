import React from "react";

export default function Signup() {
  return (
    <div>
      <div>
        <form className="bg-white my-[50px]  w-[350px]  sm:w-[500px] h-[420px] mx-auto rounded-lg">
          <div className="flex flex-col py-[200px] max-w-[450px] mx-auto justify-center items-center h-[0vh] ">
            <div className="my-6">
              <h1 className="text-2xl font-bold text-gray-600">
                Signup to Daily Blog
              </h1>
            </div>
            <div className="flex flex-col w-[300px] sm:w-[400px] mx-auto gap-3">
              <input
                type="text"
                required
                autoFocus
                id="username"
                className="transition-all duration-[300ms] ease-out rounded-lg  appearance-none border border-gray-300  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="Your Name"
              />

              <input
                type="email"
                required
                autoFocus
                id="email"
                className="transition-all duration-[300ms] ease-out rounded-lg  appearance-none border border-gray-300  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="Your email"
              />
              <input
                type="password"
                required
                autoFocus
                id="password"
                className="transition-all duration-[300ms] ease-out rounded-lg  appearance-none border border-gray-300  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="password must be morethan 6 char"
              />

              <input
                type="password"
                required
                autoFocus
                id="ConfirmPassword"
                className="transition-all duration-[300ms] ease-out rounded-lg  appearance-none border border-gray-300  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="Confirm password"
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
          </div>
        </form>
      </div>
    </div>
  );
}
