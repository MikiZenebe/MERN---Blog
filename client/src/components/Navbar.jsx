import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import { AiFillEdit } from "react-icons/ai";
import banner from "../assets/banner.jpg";

export default function Navbar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:4000/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    window.location.replace("/");
  };

  return (
    <div>
      <div className="flex justify-between w-full sm:px-16 px-2 py-4 items-center shadow-sm backdrop-blur-md bg-white/30">
        <div>
          <Link to="/">
            <h1 className="font-bold text-[20px]">Daily Blog</h1>
          </Link>
        </div>

        {user ? (
          <div className="flex items-center gap-4">
            <Link to="/write">
              <h1 className="transition-all duration-[350ms] ease-out hover:bg-black hover:text-white border border-black px-2 py-1 rounded-lg flex items-center gap-2">
                <AiFillEdit />
                Write
              </h1>
            </Link>
            <div className="dropdown dropdown-end ">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={PF + user.profilePic} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 py-5  shadow menu menu-compact dropdown-content bg-white rounded-box  w-[150px] "
              >
                <div className="flex flex-col gap-2 mx-auto">
                  {" "}
                  <Link to="/settings">
                    {" "}
                    <button className=" btn btn-sm  w-[100px]">
                      <span>Settings</span>
                    </button>
                  </Link>
                  <button
                    className="btn-square btn btn-sm bg-black text-white w-[100px] hover:text-black"
                    onClick={handleLogout}
                  >
                    <span> Logout</span>
                  </button>
                </div>
              </ul>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-6">
            <Link to="/login">
              <button className="font-medium transition-all duration-[250ms] ease-out hover:font-semibold">
                Login
              </button>
            </Link>
            <button className="group relative w-[100px] py-2 overflow-hidden rounded-lg bg-white ">
              <div className="absolute inset-0 w-3 bg-black transition-all duration-[300ms] ease-out group-hover:w-full"></div>
              <Link to="/signup">
                <span className="relative text-black group-hover:text-white font-medium">
                  Sign Up
                </span>
              </Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
