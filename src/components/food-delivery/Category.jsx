import { Link } from "@tanstack/react-router";
import React from "react";
const categories = [
  {
    name: "Biryani",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836" // Unsplash[1]
  },
  {
    name: "Burgers",
    image: "https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg" // Pexels[2]
  },
  {
    name: "Pizzas",
    image: "https://images.pexels.com/photos/1435906/pexels-photo-1435906.jpeg" // Pexels
  },
  {
    name: "Khichdi",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Unsplash
  },
  {
    name: "Noodles",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Unsplash
  },
  {
    name: "Chole Bhature",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Unsplash
  },
  {
    name: "Paratha",
    image: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg" // Pexels
  }
];


const Category = () => {
  return (
    <div className="w-full px-5 lg:px-20 py-5">
      <h2 className="text-2xl font-cal max-lg:text-xl mb-4">What's on your mind?</h2>
      <div className="grid grid-cols-8 mt-5 max-lg:grid-cols-3 gap-5 items-center">
        {categories.map((cat) => (
          <Link to="/food-delivery/collections" key={cat.name} className="text-center min-w-[100px] flex-shrink-0">
            <img
              src={cat.image}
              alt={cat.name}
              className="w-30 max-lg:w-20 max-lg:h-20 h-30 object-cover rounded-full shadow-md mx-auto"
            />
            <p className="mt-2 text-xs font-cal text-gray-600">{cat.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
