export default function RestaurantCard({
  name, rating, time, price, tags, area, image, offer
}) {
  return (
    <div className="relative border border-neutral-200   bg-white overflow-hidden hover:shadow-2xl transition-shadow">
      <img src={`${image}`} alt={name} className="w-full h-40 object-cover" />
      {offer && (
        <span className="absolute top-3 left-3 bg-yellow-400 text-black px-2 py-1 text-xs font-bold rounded">
          {offer}
        </span>
      )}
      <div className="p-4">
        <h2 className="font-semibold text-lg">{name}</h2>
        <div className="flex items-center text-sm text-gray-500 mt-1">
          <span className="mr-2 text-green-600 font-bold">{rating}★</span>
          · <span className="mx-2">{time}</span>
        </div>
        <div className="text-sm mt-2">
          {tags.join(", ")}, {area}
        </div>
        <div className="text-xs mt-3 text-gray-700">
          Items at ₹{price}
        </div>
      </div>
    </div>
  );
}
