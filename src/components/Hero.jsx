import React from "react";

import food from "../assets/food.png";
import grocery from "../assets/grocery.png";
import dining from "../assets/dining.png";

const options = [
  {
    title: "Food Delivery",
    description: "Get free delivery on your first order!",
    image_path: food,
    route: "/food-delivery",
  },
  {
    title: "Eat Out",
    description: "Flat 55% off on first reservation",
    image_path: dining,
    route: "/eat-out",
  },
  {
    title: "Groceries",
    description: "Flat 50% off on all grocery items",
    image_path: grocery,
    route: "/groceries",
  },
];

const Hero = () => {


  return (
    <div className="w-full px-4 md:px-20  flex flex-col py-20 max-lg:py-10  min-h-[100vh]">
      <div className="flex flex-col gap-2 justify-center  mb-8 max-w-4xl">
        <h1 className="font-cal text-neutral-900 text-2xl md:text-4xl ">
          Order Anything, Anytime
        </h1>
        <p className="text-base max-lg:text-xs text-neutral-600 max-w-xl">
          OrderNow connects you instantly with everything you need—from your favorite meals to everyday essentials and even local experiences—all in one spot.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {options.map((option, idx) => (
          <div
            key={option.title}
            className={`relative cursor-pointer overflow-hidden rounded-2xl p-8 max-lg:p-5 flex flex-col justify-between text-white shadow-lg transition-transform hover:scale-105 ${
              idx === 0
                ? "bg-orange-600 max-lg:min-h-[210px] min-h-[300px]"
                : idx === 1
                ? "bg-pink-700 min-h-[210px]"
                : "bg-green-500 min-h-[210px]"
            }`}
          >
            <img
              src={option.image_path}
              alt={option.title}
              className={`absolute ${
                idx === 2 ? "-bottom-4 -right-4" : "-bottom-7 -right-7"
              } w-40 h-40 md:w-50 md:h-50 object-cover rounded-xl`}
            />
            <div className="z-10 relative">
              <h2 className="text-2xl md:text-3xl font-cal mb-1">{option.title}</h2>
              <p className="text-sm md:text-base">{option.description}</p>
            </div>
            <button
              className="z-10 cursor-pointer mt-8 self-end bg-white text-black rounded-lg px-4 py-2 font-semibold text-sm shadow transition-all hover:bg-neutral-100 flex items-center gap-1 absolute bottom-6 left-6"
              
            >
              Explore Now &rarr;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
