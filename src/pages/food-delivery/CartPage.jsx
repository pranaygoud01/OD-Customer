import React from "react";
import Header from "../../components/food-delivery/cart/Header";
import Items from "../../components/food-delivery/cart/Items"

const CartPage = () => {
  return (
    <div className="w-full flex flex-col h-fit">
      <Header />
      <div className="flex px-20 py-6">
        <h1 className="font-cal text-2xl">Order Checkout </h1>
      </div>
      <div className="w-full gap-5 grid-cols-3 py-0 grid px-20 h-fit min-h-[70vh]">
        <div className="col-span-2 w-full h-full">
            <Items/>
        </div>
        <div className="w-full h-full bg-orange-400"></div>
      </div>
    </div>
  );
};

export default CartPage;
