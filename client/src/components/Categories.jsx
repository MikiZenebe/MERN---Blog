import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Categories() {
  const [cat, setCat] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("http://localhost:4000/categories");
      setCat(res.data);
    };
    getCats();
  }, []);

  return (
    <div className="flex flex-col text-[14px] sm:text-[20px]">
      <h1 className="text-2xl font-bold text-center ">
        Most interesting topic
      </h1>
      <div className="flex gap-5 sm:gap-10 my-6 w-full justify-center text-[12px]">
        <span>
          {cat.map((cat, i) => (
            <span key={i}>
              {" "}
              <Link to={`/?cat=${cat.name}`}>
                <p className="border-gray-400 border-[1px] px-3 py-1 rounded-xl font-medium items-center hover:bg-black hover:transition hover:duration-300 hover:text-white cursor-pointer">
                  {cat.name}
                </p>
              </Link>
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}
