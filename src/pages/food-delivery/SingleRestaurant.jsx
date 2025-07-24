import React from "react";
import { GoLocation } from "react-icons/go";
import { FaStar } from "react-icons/fa6";
import { IoIosInformationCircleOutline } from "react-icons/io";
import Items from "../../components/food-delivery/Item"
import FoodNav from "../../components/food-delivery/FoodNav";
import Footer from "../../components/Footer";
import { FiShoppingBag } from "react-icons/fi";
import { Link } from "@tanstack/react-router";

const dummyRestaurant = {
  id: "1",
  name: "Tasty Curry House",
  address: "123 Spice Rd, Flavor Town",
  image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  rating: 4.9,
};

const SingleRestaurant = () => {
  // Using dummyRestaurant address for location text
  const location = dummyRestaurant.address;

  return (
    <div>
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
                   
                    <Link to="/login" className="font-cal text-xs text-white bg-black px-4 py-2 hover:bg-gray-900 transition-colors">
                      Login
                    </Link>
                  </div>
                </div>
        
               
              </div>
            </header>
    <div className="w-full h-full font-cal">
      <div className="w-full h-[45vh] max-lg:h-fit relative">
        <div
          className="w-full h-[35vh] max-lg:h-[20vh] z-0 bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: `url(${dummyRestaurant.image})`,
          }}
        >
          <div className="w-full h-full bg-black/30" />
        </div>

        {/* White Card positioned absolutely */}
        <div className="w-full flex justify-center max-lg:static absolute top-[20vh]">
          <div className="w-9/12 max-lg:w-full rounded-none max-lg:shadow-none bg-white p-8 max-lg:p-5 text-black h-fit shadow-lg items-center flex justify-between ">
            <div>
              <h1 className="text-2xl font-cal max-lg:text-xl text-neutral-800">
                {dummyRestaurant.name}
              </h1>
              <p className="font-dm max-lg:text-sm font-medium mt-2 text-neutral-600">
                Curry, Fresh Seafood, Pizza
              </p>
              <p className="flex gap-2 items-center max-lg:text-xs font-inter text-sm mt-3">
                <GoLocation className="text-xl max-lg:text-md" />
                {location}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-white bg-green-500 p-1 font-dm font-bold rounded-md flex items-center gap-1 text-xs">
                <FaStar /> {dummyRestaurant.rating}
              </h1>
              <p className="font-dm font-semibold text-sm flex gap-1 items-center text-blue-500">
                <IoIosInformationCircleOutline className="text-lg" />
                Info
              </p>
            </div>
          </div>
        </div>
      </div>
      <Items />
    </div>
    <Footer/>
    </div>
  );
};

export default SingleRestaurant;
