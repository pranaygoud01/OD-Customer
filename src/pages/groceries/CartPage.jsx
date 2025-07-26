import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const initialCart = [
  {
    id: 1,
    name: "Lemon Big imported from South Africa",
    price: 24,
    qty: 1,
    img: "https://i.ibb.co/x7VL26G/lemon.png",
  },
  {
    id: 2,
    name: "Organic Rad Big Capsicum",
    price: 30,
    qty: 1,
    img: "https://i.ibb.co/9wdLwWR/capsicum.png",
  },
  {
    id: 3,
    name: "Garden Frozen Chicken Leg Cutes Skyless",
    price: 70,
    qty: 1,
    img: "https://i.ibb.co/hHcm9Sv/chicken.png",
  },
];

function CartPage() {
  const [cart, setCart] = useState(initialCart);

  const handleQty = (id, type) => {
    setCart((cart) =>
      cart.map((item) =>
        item.id === id
          ? { ...item, qty: Math.max(1, item.qty + (type === "plus" ? 1 : -1)) }
          : item
      )
    );
  };

  const handleRemoveAll = () => setCart([]);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = 5;
  const total = subtotal + shipping;

  return (
    <div className="flex flex-col md:flex-row md:space-x-6 p-4 md:p-6 md:px-20 bg-gray-50 min-h-[80vh]">
      {/* Cart Items */}
      <div className="flex-1 bg-white rounded-lg shadow p-4 md:p-6">
        <table className="w-full table-fixed">
          <thead>
            <tr className="border-b border-neutral-300 text-left text-gray-600 font-semibold text-sm md:text-base">
              <th className="pb-2 w-3/5">Product</th>
              <th className="pb-2 w-1/6">Price</th>
              <th className="pb-2 w-1/6">Quantity</th>
              <th className="pb-2 w-1/6">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr
                className="border-b border-neutral-200 last:border-none"
                key={item.id}
              >
                <td className="py-3 flex items-center gap-3">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-12 h-12 md:w-16 md:h-16 rounded object-cover"
                  />
                  <span className="line-clamp-2 text-xs md:text-base">{item.name}</span>
                </td>
                <td className="py-3 text-sm md:text-base">${item.price.toFixed(2)}</td>
                <td className="py-3">
                  <div className="flex items-center border border-green-400 rounded w-20 md:w-24 select-none">
                    <button
                      aria-label="Decrease quantity"
                      onClick={() => handleQty(item.id, "minus")}
                      className="p-1.5 hover:bg-green-100 transition-colors rounded-l"
                    >
                      <FaMinus />
                    </button>
                    <span className="w-8 text-center text-sm md:text-base">{item.qty}</span>
                    <button
                      aria-label="Increase quantity"
                      onClick={() => handleQty(item.id, "plus")}
                      className="p-1.5 hover:bg-green-100 transition-colors rounded-r"
                    >
                      <FaPlus />
                    </button>
                  </div>
                </td>
                <td className="py-3 text-sm md:text-base">${(item.price * item.qty).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Coupon & Remove All */}
        <div className="flex flex-col md:flex-row mt-6 gap-3 items-center">
          <input
            type="text"
            placeholder="Coupon code"
            className="border border-neutral-300 rounded px-3 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-green-600 transition"
          />
          <button className="px-6 py-2 bg-green-700 text-white rounded w-full md:w-auto hover:bg-green-800 transition">
            Apply coupon
          </button>
          <button
            className="px-6 py-2 border border-red-400 text-red-600 rounded w-full md:w-auto hover:bg-red-50 transition"
            onClick={handleRemoveAll}
          >
            Remove All
          </button>
        </div>
      </div>

      {/* Summary */}
      <div className="w-full md:w-80 mt-6 md:mt-0 bg-white rounded-lg shadow p-4 md:p-6 h-max">
        <h3 className="text-lg font-bold mb-4">Cart totals</h3>
        <div className="flex justify-between border-b border-neutral-300 pb-3 text-gray-700 text-sm md:text-base">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center py-3 text-gray-700 text-sm md:text-base">
          <span>Shipping</span>
          <div className="text-right">
            <div>
              <span className="text-orange-500 font-semibold">Flat rate: $5.00</span>
            </div>
            <div className="text-xs md:text-sm">Local pickup</div>
            <div className="text-xs md:text-sm">Shipping to AL...</div>
            <button className="text-green-700 underline text-xs md:text-sm hover:text-green-800 transition">
              Change address
            </button>
          </div>
        </div>
        <div className="flex justify-between border-t border-neutral-300 pt-3 font-bold text-gray-900 text-lg md:text-xl">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <button className="w-full mt-6 bg-green-700 hover:bg-green-800 text-white py-3 rounded text-lg font-semibold transition">
          Proceed to checkout
        </button>
      </div>
    </div>
  );
}

export default CartPage;
