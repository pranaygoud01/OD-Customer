import React from "react";

import Items from "../../components/food-delivery/cart/Items"

import FoodNav from "../../components/food-delivery/FoodNav";
import Footer from "../../components/Footer";

const CartPage = () => {
  return (
    <div className="w-full flex bg-neutral-100 min-h-[100vh] flex-col h-fit">
      <FoodNav/>
      <div className="min-h-[90vh] h-fit py-10">
     
      <div className="w-full gap-10 grid-cols-3 py-0 grid px-20 h-fit min-h-[70vh]">
        <div className="col-span-2 w-full shadow bg-white h-full">
            <Items/>
        </div>
        <div className="w-full h-full bg-white shadow"></div>
      </div>
      </div>
      <Footer/>
    </div>
  );
};

export default CartPage;
