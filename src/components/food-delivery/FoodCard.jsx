import React from "react";

const FoodCard = ({ id, name, image, price, desc }) => {
  const handleCart = () => {
    // TODO: Implement add to cart functionality
    alert(`Added ${name} to cart`);
  };

  return (
    <div className="w-full flex justify-between h-fit border-b max-lg:gap-2  border-neutral-200 max-lg:p-3 py-4">
      <div className="w-8/12  flex flex-col gap-2">
        <h1 className="text-xl font-cal max-lg:text-lg text-neutral-800">{name}</h1>
        <p className="font-dm font-semibold text-xs text-neutral-500">{desc}</p>
        <p className="text-xl  font-cal max-lg:text-lg mt-5">₹{price}</p>
      </div>
      <div className="w-fit flex h-[160px] relative">
        <div className="absolute w-full h-[150px] flex justify-center items-end">
          <button
            onClick={handleCart}
            className="text-white text-xs font-cal cursor-pointer px-5 py-2  bg-green-500"
          >
            Add to cart
          </button>
        </div>
        <img
          src={image}
          alt={name}
          className="w-[180px] object-cover object-center max-lg:h-[120px] h-[140px] rounded-xl"
        />
      </div>
    </div>
  );
};

export default FoodCard;
