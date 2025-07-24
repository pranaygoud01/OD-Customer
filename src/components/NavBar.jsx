import { Link } from "@tanstack/react-router";
import React, { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white sticky top-0 z-50 border-b border-b-neutral-200">
      <div className="mx-auto px-4 sm:px-6 lg:px-20 flex justify-between items-center h-14 md:h-16">
        {/* Logo */}
        <h1 className="font-cal text-xl md:text-2xl cursor-pointer select-none">
          Order<span className="font-cal text-[#1ECD75]">Now</span>
        </h1>

        {/* Desktop buttons */}
        <div className="hidden md:flex gap-3 items-center">
          <Link to="/login" className="font-semibold text-xs px-4 py-2  bg-[#1ECD75] text-white hover:bg-[#17b966] transition">
            Login
          </Link>
          <button className="font-semibold text-xs px-4 py-2  bg-[#222] text-white hover:bg-[#111] transition">
            Contact
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center justify-center p-2  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#1ECD75]"
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6 text-[#1ECD75]"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {!isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8h16M4 16h16"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-b border-neutral-200 px-4 py-4">
          <button className="block w-fit  text-left font-semibold text-sm mb-3 px-4 py-2  bg-[#1ECD75] text-white hover:bg-[#17b966] transition">
            Login
          </button>
          <button className="block w-fit text-left font-semibold text-sm px-4 py-2  bg-[#222] text-white hover:bg-[#111] transition">
            Contact
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
