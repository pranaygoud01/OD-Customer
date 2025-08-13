import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";

const dummyItems = {
  "1": [
    {
      _id: "food1",
      name: "Chicken Curry",
      price: 250,
      description: "Delicious spicy chicken curry.",
      image: "https://images.unsplash.com/photo-1447078806655-40579c2520d6?q=80&w=1170&auto=format&fit=crop",
      category: "Non-Veg",
      bestSeller: true,
    },
    {
      _id: "food2",
      name: "Veg Biryani",
      price: 180,
      description: "Aromatic vegetable biryani with spices.",
      image: "https://images.unsplash.com/photo-1447078806655-40579c2520d6?q=80&w=1170&auto=format&fit=crop",
      category: "Veg",
      bestSeller: false,
    },
    {
      _id: "food3",
      name: "Seafood Pizza",
      price: 350,
      description: "Fresh seafood topping on crispy pizza.",
      image: "https://images.unsplash.com/photo-1447078806655-40579c2520d6?q=80&w=1170&auto=format&fit=crop",
      category: "Non-Veg",
      bestSeller: true,
    },
  ],
};

// ------------------ FoodCard with Add Button ------------------
const FoodCard = ({ item, onChangeQuantity }) => {
  const [quantity, setQuantity] = useState(0);

  const increase = () => {
    setQuantity(quantity + 1);
    onChangeQuantity(item, quantity + 1);
  };

  const decrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      onChangeQuantity(item, quantity - 1);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col p-3 relative transition hover:shadow-lg mb-4">
      <img
        src={item.image}
        alt={item.name}
        className="rounded-lg w-full h-40 object-cover mb-3"
      />
      <h3 className="text-base font-semibold">{item.name}</h3>
      <p className="text-gray-500 text-sm mb-1">{item.description}</p>
      <p className="text-green-600 font-bold">₹{item.price}</p>

      {quantity === 0 ? (
        <button
          className="absolute bottom-3 right-3 bg-green-600 text-white text-xs px-4 py-1 rounded-full font-semibold shadow-md"
          onClick={increase}
        >
          Add
        </button>
      ) : (
        <div className="absolute bottom-3 right-3 flex items-center bg-green-100 rounded-full shadow">
          <button
            className="px-3 py-1 text-green-700 font-bold"
            onClick={decrease}
          >
            −
          </button>
          <span className="px-2 text-green-800">{quantity}</span>
          <button
            className="px-3 py-1 text-green-700 font-bold"
            onClick={increase}
          >
            +
          </button>
        </div>
      )}
    </div>
  );
};

// ------------------ Main Items Component ------------------
const Items = () => {
  const menuId = "1";
  const [menuItems, setMenuItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setMenuItems(dummyItems[menuId] || []);
  }, [menuId]);

  const handleQuantityChange = (item, qty) => {
    setCart((prev) => {
      const existing = prev.find((p) => p._id === item._id);
      if (qty === 0) {
        return prev.filter((p) => p._id !== item._id);
      }
      if (existing) {
        return prev.map((p) =>
          p._id === item._id ? { ...p, quantity: qty } : p
        );
      }
      return [...prev, { ...item, quantity: qty }];
    });
  };

  const filteredItems = menuItems.filter((i) =>
    i.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPrice = cart.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0
  );

  return (
    <div className="w-full h-fit flex justify-center">
      <div className="max-w-[1350px] h-full flex flex-col items-center w-full">

        {/* Header + Search */}
        <div className="sticky z-10 bg-white top-18 w-10/12">
          <h1 className="text-sm font-cal text-neutral-700">Menu</h1>
          <div className="flex mt-2 items-center gap-2 w-full bg-neutral-100 border border-neutral-200 px-3 py-2">
            <CiSearch className="text-xl text-neutral-500" />
            <input
              type="text"
              placeholder="Search for Food"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent outline-none w-full text-xs font-cal"
            />
          </div>
        </div>

        {/* Items Grid */}
        <div className="mt-5 w-10/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <FoodCard
                key={item._id}
                item={item}
                onChangeQuantity={handleQuantityChange}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No items found
            </p>
          )}
        </div>
      </div>

      {/* Fixed Cart Bar */}
      {cart.length > 0 && (
        <div className="fixed bottom-0 left-0 w-full bg-green-600 text-white p-4 flex justify-between items-center shadow-lg">
          <span className="font-semibold">
            {cart.length} items | ₹{totalPrice}
          </span>
          <button className="bg-white text-green-700 px-6 py-2 rounded-full font-bold shadow">
            View Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Items;
