import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const offerData = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1170&auto=format&fit=crop",
    title: "Mega Pizza Fest!",
    offer: "Flat 50% Off on All Pizzas"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1615937722923-67f6deaf2cc9?q=80&w=1170&auto=format&fit=crop",
    title: "Super Sushi Days",
    offer: "Order 1 Get 1 Free Sushi Rolls"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1657299156538-e08595d224ca?q=80&w=1170&auto=format&fit=crop",
    title: "Burger Bonanza",
    offer: "Free Fries with Every Burger"
  }
];

const HeaderCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dotsClass: "slick-dots custom-dots"
  };

  return (
    <div className="w-full max-w-8xl mx-auto px-4 py-6">
      <Slider {...settings}>
        {offerData.map(item => (
          <div key={item.id} className="px-2">
            <div className="relative rounded-lg overflow-hidden ">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5">
                <h2 className="text-white text-lg md:text-2xl font-semibold">{item.title}</h2>
                <p className="text-white text-sm md:text-lg mt-1">{item.offer}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <style jsx>{`
        .custom-dots li.slick-active button:before {
          color: #000000; /* Swiggy orange */
          opacity: 1;
        }
        .custom-dots li button:before {
          color: #333333;
          opacity: 0.6;
        }
      `}</style>
    </div>
  );
};

export default HeaderCarousel;
