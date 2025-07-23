import React from 'react'
import { FiShoppingBag } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";

const FoodNav = () => {
  return (
    <header className="w-full bg-white sticky top-0 z-50 border-b border-b-neutral-200 px-20 max-lg:px-5 py-5">
      <div className="w-full mx-auto flex  flex-col gap-3 max-md:gap-2">
        {/* Top line: Logo + Buttons */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <h1 className="font-cal text-xl md:text-2xl cursor-pointer select-none flex-shrink-0">
            Order<span className="font-cal text-[#1ECD75]">Now</span>
          </h1>

          {/* Actions: Cart + Buttons */}
          <div className="flex items-center gap-3 justify-end">
            <FiShoppingBag className="text-xl cursor-pointer text-neutral-700" />
            <button className="font-cal text-xs text-white bg-green-500 rounded-md px-4 py-2 hover:bg-green-600 transition-colors">
              Register
            </button>
            <button className="font-cal text-xs text-white bg-black rounded-md px-4 py-2 hover:bg-gray-900 transition-colors">
              Login
            </button>
          </div>
        </div>

        {/* 2nd line: Search bar */}
        <div className="flex items-center max-lg:mt-2 gap-2 w-full bg-neutral-100 border border-neutral-200 rounded-xl px-3 py-2 max-md:w-full">
          <CiSearch className="text-xl text-neutral-500" />
          <input
            type="text"
            placeholder="Search for Food"
            className="bg-transparent outline-none w-full text-xs font-cal"
          />
        </div>
      </div>
    </header>
  )
}

export default FoodNav
