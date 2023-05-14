import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div className="flex justify-between w-full sm:px-16 px-2 py-4 items-center shadow-sm backdrop-blur-md bg-white/30">
        <div>
          <h1 className="font-bold text-[20px]">Daily Blog</h1>
        </div>

        <div className="flex items-center gap-6">
          <button className="font-medium transition-all duration-[250ms] ease-out hover:font-semibold">
            Login
          </button>
          <button className="group relative w-[100px] py-2 overflow-hidden rounded-lg bg-white ">
            <div className="absolute inset-0 w-3 bg-black transition-all duration-[300ms] ease-out group-hover:w-full"></div>
            <span className="relative text-black group-hover:text-white font-medium">
              Sign Up
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
