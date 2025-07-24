import React, { useState } from "react";
import FoodNav from "../../components/food-delivery/FoodNav";
import Footer from "../../components/Footer";

const mockCartItems = [
  {
    id: 1,
    name: "Paneer Butter Masala",
    description: "Spicy paneer curry",
    price: 250,
    qty: 2,
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=80&q=80",
  },
  {
    id: 2,
    name: "Garlic Naan",
    description: "Freshly baked garlic naan",
    price: 60,
    qty: 3,
    image: "https://images.unsplash.com/photo-1604908812877-7f7831c0fddd?auto=format&fit=crop&w=80&q=80",
  },
];





const Items = ({ items, onQuantityChange, onRemove }) => {
  return (
    <div>
      <h2 className="text-xl font-cal  max-lg:text-lg px-6 py-5 max-lg:p-4 max-lg:px-6 border-b border-gray-300">
        Your Cart
      </h2>
      {items.length === 0 ? (
        <p className="text-center text-gray-500 py-20">Your cart is empty</p>
      ) : (
        items.map((item) => (
          <div
            key={item.id}
            className="flex items-center border-b max-lg:p-4 max-lg:px-6 border-gray-200 px-6 py-4"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 rounded-md object-cover"
            />
            <div className="flex-1 max-lg:ml-2 ml-6">
              <h3 className="font-cal max-lg:text-xs text-lg">{item.name}</h3>
              <p className="text-gray-500 max-lg:text-[10px] text-sm">{item.description}</p>
              <p className="font-semibold max-lg:text-sm mt-1">₹ {item.price}</p>
            </div>

            <div className="flex items-center max-lg:text-xs space-x-3">
              <button
                onClick={() =>
                  onQuantityChange(item.id, Math.max(1, item.qty - 1))
                }
                className="text-gray-600 max-lg:p-1 hover:text-red-600 border border-gray-300 rounded px-3 py-1 transition"
              >
                -
              </button>
              <span className="text-lg max-lg:text-xs font-semibold">{item.qty}</span>
              <button
                onClick={() => onQuantityChange(item.id, item.qty + 1)}
                className="text-gray-600 max-lg:p-1 hover:text-red-600 border border-gray-300 rounded px-3 py-1 transition"
              >
                +
              </button>
            </div>

            <button
              onClick={() => onRemove(item.id)}
              className="ml-4 text-red-600 hover:text-red-800 font-bold text-xl"
              title="Remove item"
            >
              &times;
            </button>
          </div>
        ))
      )}
    </div>
  );
};

const CartSummary = ({ items }) => {
  const subtotal = items.reduce((acc, item) => acc + item.price * item.qty, 0);
  const deliveryCharge = subtotal > 300 ? 0 : 40;
  const tax = subtotal * 0.05; // 5% GST approximation
  const total = subtotal + deliveryCharge + tax;

  return (
    <div className="p-6 sticky top-20 h-fit rounded shadow bg-white flex flex-col">
      <h2 className="text-xl max-lg:text-md  font-cal mb-6  border-b border-neutral-300 pb-2">
        Price Details
      </h2>

      <div className="flex text-sm justify-between mb-3">
        <span>Subtotal</span>
        <span>₹ {subtotal.toFixed(2)}</span>
      </div>

      <div className="flex text-sm justify-between mb-3">
        <span>Delivery Charges</span>
        <span className={deliveryCharge === 0 ? "text-green-600" : ""}>
          {deliveryCharge === 0 ? "Free" : `₹ ${deliveryCharge}`}
        </span>
      </div>

      <div className="flex text-sm justify-between mb-3">
        <span>Taxes & GST</span>
        <span>₹ {tax.toFixed(2)}</span>
      </div>

      <hr className="my-4" />

      <div className="flex justify-between max-lg:text-sm font-bold text-lg">
        <span>Total</span>
        <span>₹ {total.toFixed(2)}</span>
      </div>

      <button
        disabled={items.length === 0}
        className="mt-8 bg-green-500 font-cal disabled:bg-gray-400 hover:bg-green-700 text-white py-3  shadow-lg transition"
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

const CartPage = () => {
  const [cartItems, setCartItems] = useState(mockCartItems);

  const handleQuantityChange = (id, newQty) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, qty: newQty } : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-neutral-100 flex flex-col">
      <FoodNav />
      <main className="flex-grow w-full mx-auto max-lg:py-0 sm:px-6 lg:px-20 py-10">
        <div className="grid grid-cols-1 max-lg:gap-0 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-white shadow ">
            <Items
              items={cartItems}
              onQuantityChange={handleQuantityChange}
              onRemove={handleRemove}
            />
          </div>
          <CartSummary items={cartItems} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;
