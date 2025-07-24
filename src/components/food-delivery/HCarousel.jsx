import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const offerData = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Mega Pizza Fest!",
    offer: "Flat 50% Off on All Pizzas"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1615937722923-67f6deaf2cc9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Super Sushi Days",
    offer: "Order 1 Get 1 Free Sushi Rolls"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1657299156538-e08595d224ca?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Burger Bonanza",
    offer: "Free Fries with Every Burger"
  }
];

const HeaderCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="w-full px-20 max-lg:px-5 py-5">
      <Slider {...settings}>
        {offerData.map(item => (
          <div key={item.id} className="relative">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[200px] md:h-[350px] object-cover "
            />
            <div className="
                absolute 
                bottom-7 left-7 
                bg-black/50 
                px-7 py-5 
                rounded-md 
                text-white
                max-sm:bottom-3 max-sm:left-2 max-sm:px-3 max-sm:py-2
                max-w-full
              ">
              <h2 className="m-0 text-sm md:text-2xl font-cal">{item.title}</h2>
              <p className="m-0 mt-2 text-xs md:text-lg">{item.offer}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeaderCarousel;
