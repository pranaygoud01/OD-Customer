// src/components/Restaurant.jsx
import React from 'react';
import { Link } from '@tanstack/react-router';
import { useProducts } from '../../context/ProductsContext';

const Restaurant = () => {
  const { foodDeliveryOwners, loading, error } = useProducts();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="py-10 pb-15 w-full px-20 max-lg:p-5 mx-auto">
      <h2 className="text-2xl max-lg:text-xl font-cal mb-4">
        Restaurants with online food delivery
      </h2>

      <div className="grid grid-cols-1 mt-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {foodDeliveryOwners.map(
          ({
            _id,
            restaurantName,
            timing,
            address,
            profileImage,
            images,
          }) => {
            const imageUrl =
              profileImage || (images && images.length > 0 && images[0]) || '/default-image.png';

            const location = address?.city || 'Unknown location';

            // These fields are not present in the API response, so provide placeholders
            const rating = 'N/A';
            const time = timing ? `${timing.openTime} - ${timing.closeTime}` : 'N/A';

            return (
              <Link
                to={`/food-delivery/restaurant/${_id}`}
                key={_id}
                className="border border-neutral-300 hover:shadow overflow-hidden bg-white"
              >
                <img src={imageUrl} alt={restaurantName} className="w-full h-36 object-cover" />
                <div className="p-4 max-lg:p-3">
                  <h3 className="font-cal max-lg:text-sm text-lg mb-1">{restaurantName}</h3>
                  <p className="flex max-lg:text-xs items-center gap-2 text-green-600 font-medium mb-1">
                  
                     {time}
                  </p>
                  {/* No cuisines data from API, so omit this or add if available */}
                  <p className="text-gray-400 text-xs">{location}</p>
                </div>
              </Link>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Restaurant;
