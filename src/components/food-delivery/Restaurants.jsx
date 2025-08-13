// src/components/Restaurant.jsx
import React from 'react';
import { Link } from '@tanstack/react-router';

// Dummy data for testing
const dummyRestaurants = [
  {
    _id: '1',
    restaurantName: 'Spicy Bites',
    timing: { openTime: '10:00 AM', closeTime: '10:00 PM' },
    address: { city: 'Mumbai' },
    profileImage: 'https://via.placeholder.com/300x200?text=Spicy+Bites',
    images: [],
  },
  {
    _id: '2',
    restaurantName: 'Sweet Corner',
    timing: { openTime: '9:00 AM', closeTime: '9:00 PM' },
    address: { city: 'Delhi' },
    profileImage: '',
    images: ['https://via.placeholder.com/300x200?text=Sweet+Corner'],
  },
  {
    _id: '3',
    restaurantName: 'Urban Tandoor',
    timing: { openTime: '12:00 PM', closeTime: '11:00 PM' },
    address: { city: 'Bangalore' },
    profileImage: '',
    images: [],
  },
  {
    _id: '4',
    restaurantName: 'Ocean’s Catch',
    timing: { openTime: '8:00 AM', closeTime: '8:00 PM' },
    address: { city: 'Chennai' },
    profileImage: 'https://via.placeholder.com/300x200?text=Ocean’s+Catch',
    images: [],
  },
];

const Restaurant = () => {
  const foodDeliveryOwners = dummyRestaurants; // Replaced API with dummy data

  return (
    <div className="py-10 pb-15 w-full px-20 max-lg:p-5 mx-auto">
      <h2 className="text-2xl max-lg:text-xl font-cal mb-4">
        Restaurants with online food delivery
      </h2>

      <div className="grid grid-cols-1 mt-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {foodDeliveryOwners.map(
          ({ _id, restaurantName, timing, address, profileImage, images }) => {
            const imageUrl =
              profileImage || (images && images.length > 0 && images[0]) || '/default-image.png';

            const location = address?.city || 'Unknown location';
            const time = timing
              ? `${timing.openTime} - ${timing.closeTime}`
              : 'N/A';

            return (
              <Link
                to={`/j`}
                key={_id}
                className="border border-neutral-300 hover:shadow overflow-hidden bg-white"
              >
                <img
                  src={imageUrl}
                  alt={restaurantName}
                  className="w-full h-36 object-cover"
                />
                <div className="p-4 max-lg:p-3">
                  <h3 className="font-cal max-lg:text-sm text-lg mb-1">{restaurantName}</h3>
                  <p className="flex max-lg:text-xs items-center gap-2 text-green-600 font-medium mb-1">
                    {time}
                  </p>
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
