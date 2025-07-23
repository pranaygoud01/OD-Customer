import React from "react";
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white px-20 max-lg:p-5 max-lg:py-8 py-12">
      <div className="flex flex-wrap md:flex-nowrap justify-between items-start gap-10">
        {/* Brand and Tagline */}
        <div className="flex flex-col gap-2 w-full md:w-1/3 max-w-md">
          <h2 className="text-3xl font-cal mb-2">OrderNow</h2>
          <p className="text-neutral-400 text-xs md:text-sm">
            Your one-stop platform to order food, groceries, and local experiences instantly.
          </p>
          <p className="text-neutral-500 text-xs mt-6">
            &copy; {new Date().getFullYear()} OrderNow. All rights reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 gap-8 w-full md:w-1/3">
          <div>
            <h3 className="font-semibold text-sm mb-2">Quick Links</h3>
            <ul className="text-neutral-300 text-xs flex flex-col gap-1">
              <li>
                <a href="/food-delivery" className="hover:text-orange-400 transition-colors">
                  Food Delivery
                </a>
              </li>
              <li>
                <a href="/eat-out" className="hover:text-pink-500 transition-colors">
                  Eat Out
                </a>
              </li>
              <li>
                <a href="/groceries" className="hover:text-green-400 transition-colors">
                  Groceries
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-neutral-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-neutral-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-sm mb-2">Support</h3>
            <ul className="text-neutral-300 text-xs flex flex-col gap-1">
              <li><a href="/privacy" className="hover:text-neutral-400 transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-neutral-400 transition-colors">Terms</a></li>
              {/* Add more support links if needed */}
            </ul>
          </div>
        </div>

        {/* Subscribe & Social */}
        <div className="flex flex-col gap-3 w-full md:w-1/3">
          <h3 className="font-semibold text-sm mb-2">Stay Updated</h3>
          <form className="flex gap-2" onSubmit={e => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your Email"
              className="bg-neutral-800 text-xs px-3 py-2 rounded focus:outline-none w-full"
            />
            <button
              type="submit"
              className="bg-white text-black text-xs px-4 py-2 rounded hover:bg-neutral-200"
            >
              Subscribe
            </button>
          </form>
          <div className="flex gap-4 mt-3 text-2xl text-white">
            <a
              href="https://facebook.com/ordernow"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-blue-600 transition-colors"
            >
              <FaFacebookSquare />
            </a>
            <a
              href="https://twitter.com/ordernow"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-sky-400 transition-colors"
            >
              <FaTwitterSquare />
            </a>
            <a
              href="https://instagram.com/ordernow"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-500 transition-colors"
            >
              <FaInstagramSquare />
            </a>
          </div>

          <div className="mt-6 text-sm md:text-base text-neutral-400">
            <p>
              Email:{" "}
              <a href="mailto:support@ordernow.com" className="hover:underline">
                support@ordernow.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:+1234567890" className="hover:underline">
                +1 234 567 890
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-px bg-neutral-800 my-8"></div>
      <div className="flex justify-between items-center text-xs text-neutral-500">
        <span>© {new Date().getFullYear()} OrderNow. All rights reserved.</span>
        <span className="hidden md:block">Your go-to platform for food and local experiences.</span>
      </div>
    </footer>
  );
};

export default Footer;
