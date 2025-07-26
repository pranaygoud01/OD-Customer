import React, { useState, useEffect } from "react";
import GNavBar from "../../components/groceries/GNavBar";
import Footer from "../../components/Footer";
import CategorySelector from "../../components/groceries/CategorySelector";
import Stores from "../../components/groceries/Stores";

const Home = () => {
  const images = [
    "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1479658564437-7df9c111159e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1543168256-418811576931?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ]; // Replace with your images
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      <GNavBar />
      <div className="w-full h-fit bg-neutral-100 px-20 max-lg:p-5  py-5">
        <div className="relative h-[40vh] max-lg:h-[30vh] w-full flex justify-center items-center">
          <img
            src={images[currentIndex]}
            alt={`grocery-${currentIndex}`}
            className="h-full object-cover w-full"
          />
        </div>
        <CategorySelector/>
        <Stores/>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
