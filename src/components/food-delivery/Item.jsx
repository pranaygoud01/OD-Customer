import React, { useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import { CiSearch } from "react-icons/ci";

const dummyItems = {
  "1": [
    {
      _id: "food1",
      name: "Chicken Curry",
      price: 250,
      description: "Delicious spicy chicken curry.",
      image:
        "https://images.unsplash.com/photo-1447078806655-40579c2520d6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Non-Veg",
      bestSeller: true,
    },
    {
      _id: "food2",
      name: "Veg Biryani",
      price: 180,
      description: "Aromatic vegetable biryani with spices.",
      image:
        "https://images.unsplash.com/photo-1447078806655-40579c2520d6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Veg",
      bestSeller: false,
    },
    {
      _id: "food3",
      name: "Seafood Pizza",
      price: 350,
      description: "Fresh seafood topping on crispy pizza.",
      image:
        "https://images.unsplash.com/photo-1447078806655-40579c2520d6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Non-Veg",
      bestSeller: true,
    },
  ],
};

const Items = () => {
  const menuId = "1"; // Use string key to access dummyItems

  const [menuItems, setMenuItems] = useState([]);
  const filters = ["Veg", "Non-Veg", "BestSeller"];

  useEffect(() => {
    // Load menu items for the restaurant/menuId
    setMenuItems(dummyItems[menuId] || []);
  }, [menuId]);

  return (
    <div className="w-full h-fit flex justify-center">
      <div className="max-w-[1300px] h-full flex flex-col items-center w-full">
        <div className="sticky z-10 bg-white top-18 max-lg:top-15 max-lg:w-full max-lg:px-4 flex flex-col items-center w-10/12">
          <h1 className="text-sm font-cal text-neutral-700">Menu</h1>
          <div className="flex mt-2 items-center max-lg:mt-2 gap-2 w-full bg-neutral-100 border border-neutral-200 rounded-xl px-3 py-2 max-md:w-full">
                    <CiSearch className="text-xl text-neutral-500" />
                    <input
                      type="text"
                      placeholder="Search for Food"
                      className="bg-transparent outline-none w-full text-xs font-cal"
                    />
                  </div>
          <div className="w-full flex gap-3 mt-4 pb-5 max-lg:gap-2 border-b border-b-neutral-200">
            {filters.map((item, index) => {
              return (
                <button
                  key={index}
                  className="p-2 max-lg:text-xs max-lg:px-4 px-4 text-xs font-cal text-neutral-600 rounded-full border border-neutral-400"
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
        <div className="z-1 mt-5 max-lg:w-full max-lg:px-5 w-10/12">
          {menuItems.map((item) => (
            <FoodCard
              key={item._id}
              name={item.name}
              id={item._id}
              price={item.price}
              desc={item.description}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Items;
