import { Link } from "@tanstack/react-router";
import React from "react";

const HNavBar = () => {
  return (
    <div className="w-full px-20 py-3 max-lg:px-5 flex justify-between border-b border-b-neutral-300">
      <div className="flex flex-col w-fit justify-center">
        <h1 className="font-cal text-xl md:text-2xl cursor-pointer select-none flex-shrink-0">
          Order<span className="font-cal text-[#1ECD75]">Now</span>
        </h1>
        <p className="text-[10px] text-center">Book your table</p>
      </div>
      <div className=" flex gap-3 items-center">
        <Link
          to="/login"
          className="font-semibold text-xs px-4 py-2  bg-[#1ECD75] text-white hover:bg-[#17b966] transition"
        >
          Login
        </Link>
        <button className="font-semibold text-xs px-4 py-2  bg-[#222] text-white hover:bg-[#111] transition">
          Contact
        </button>
      </div>
    </div>
  );
};

export default HNavBar;
