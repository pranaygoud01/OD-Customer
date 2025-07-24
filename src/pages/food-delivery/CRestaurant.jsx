import RestaurantCard from "../../components/food-delivery/RestaurantCard";

const restaurants = [
  {
    name: "Millet Express",
    rating: 4.4,
    time: "45-50 mins",
    price: 69,
    tags: ["Healthy Food", "South Indian"],
    area: "Banjara hills",
    image: "https://images.unsplash.com/photo-1752490891350-3cf965c544b4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    offer: "",
  },
  
];

export default function CRestaurant() {
  return (
    <div className="bg-neutral-100 max-lg:p-5 min-h-screen p-8 px-20">
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
