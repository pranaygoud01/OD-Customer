import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const offerData = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg",
    title: "Mega Pizza Fest!",
    offer: "Flat 50% Off on All Pizzas"
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg",
    title: "Super Sushi Days",
    offer: "Order 1 Get 1 Free Sushi Rolls"
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg",
    title: "Burger Bonanza",
    offer: "Free Fries with Every Burger"
  }
];

const Hero = () => {
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
              className="w-full h-[200px] md:h-[350px] object-cover rounded-xl"
            />
            
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
