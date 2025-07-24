import RestaurantCard from "../../components/food-delivery/RestaurantCard";

const restaurants = [
  {
    name: "Millet Express",
    rating: 4.4,
    time: "45-50 mins",
    price: 69,
    tags: ["Healthy Food", "South Indian"],
    area: "Banjara hills",
    image: "milletexpress.jpg",
    offer: "",
  },
  
];

export default function CRestaurant() {
  return (
    <div className="bg-white max-lg:p-5 min-h-screen p-8 px-20">
      <h1 className="text-3xl max-lg:text-2xl font-cal mb-2">Dosa</h1>
      <p className="mb-6 max-lg:text-xs text-gray-600">
        Satisfy your cravings for South Indian breakfast with these crispy & buttery Dosas.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {restaurants.map((rest, idx) => (
          <RestaurantCard key={idx} {...rest} />
        ))}
      </div>
    </div>
  );
}
