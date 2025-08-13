import React, { useState } from "react";
import GNavBar from "../../components/groceries/GNavBar";
import Footer from "../../components/Footer";

const groceryItems = [
  { id: 1, name: "Fresh Bananas", price: 42, image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80", unit: "1 kg" },
  { id: 2, name: "Amul Milk", price: 58, image: "https://images.unsplash.com/photo-1582555172308-6e70c6baf47c?auto=format&fit=crop&w=400&q=80", unit: "1 Litre" },
  { id: 3, name: "Potato", price: 35, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80", unit: "1 kg" },
  { id: 4, name: "Brown Bread", price: 45, image: "https://images.unsplash.com/photo-1519864601445-27ebd3a985ee?auto=format&fit=crop&w=400&q=80", unit: "400g" },
];

const ItemCard = ({ item, onChangeQuantity }) => {
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
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col items-center p-3 relative transition hover:shadow-lg">
      <img src={item.image} alt={item.name} className="rounded-lg w-full h-36 object-cover mb-3" />
      <div className="w-full">
        <p className="text-gray-500 text-xs">{item.unit}</p>
        <h3 className="font-semibold text-base truncate">{item.name}</h3>
        <p className="text-green-600 font-bold text-sm">₹{item.price}</p>
      </div>

      {quantity === 0 ? (
        <button
          className="absolute bottom-3 right-3 bg-green-600 text-white text-xs px-4 py-1 rounded-full font-semibold shadow-md"
          onClick={increase}
        >
          Add
        </button>
      ) : (
        <div className="absolute bottom-3 right-3 flex items-center bg-green-100 rounded-full shadow">
          <button className="px-3 py-1 text-green-700 font-bold" onClick={decrease}>−</button>
          <span className="px-2 text-green-800">{quantity}</span>
          <button className="px-3 py-1 text-green-700 font-bold" onClick={increase}>+</button>
        </div>
      )}
    </div>
  );
};

const Store = () => {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  const handleQuantityChange = (item, qty) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (qty === 0) {
        return prev.filter((p) => p.id !== item.id);
      }
      if (existing) {
        return prev.map((p) => (p.id === item.id ? { ...p, quantity: qty } : p));
      }
      return [...prev, { ...item, quantity: qty }];
    });
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const filteredItems = groceryItems.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <GNavBar />
      <div className="w-full min-h-[100vh] flex flex-col px-6 md:px-20 py-6 ">
        
        {/* Heading + Search */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-bold text-xl">Groceries</h2>
          <input
            type="text"
            placeholder="Search for items..."
            className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <ItemCard key={item.id} item={item} onChangeQuantity={handleQuantityChange} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">No items found</p>
          )}
        </div>
      </div>

      {/* Fixed Cart Bar at Bottom */}
      {cart.length > 0 && (
        <div className="fixed bottom-0 left-0 w-full bg-green-600 text-white p-4 flex justify-between items-center shadow-lg">
          <span className="font-semibold">{cart.length} items | ₹{totalPrice}</span>
          <button className="bg-white text-green-700 px-6 py-2 rounded-full font-bold shadow">View Cart</button>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Store;
