import { Link } from '@tanstack/react-router';
import React from 'react';

const restaurants = [
  {
    name: 'Pizza Hut',
    rating: 4.3,
    time: '45-50 mins',
    cuisines: 'Pizzas',
    location: 'Parasla Road',
    imageUrl: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    name: 'Adil Hotel',
    rating: 4.3,
    time: '30-35 mins',
    cuisines: 'North Indian, Biryani, Tandoor',
    location: 'Chhindwara Locality',
    imageUrl: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'The Burger House',
    rating: 3.7,
    time: '50-55 mins',
    cuisines: 'Beverages, Fast Food, Burgers',
    location: 'Chhindwara City',
    imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=781&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Urban Cafe',
    rating: 4.2,
    time: '50-55 mins',
    cuisines: 'Snacks, Pizzas, Pastas, Fast Food',
    location: 'Chhindwara City',
    imageUrl: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const filters = [
  'Fast Delivery',
  'Ratings 4.0+',
  'Pure Veg',
  'Offers',
  'Rs. 300-Rs. 600',
  'Less than Rs. 300'
];

const Restaurant = () => (
  <div className="py-10 pb-15 w-full px-20 max-lg:p-5 mx-auto">
    <h2 className="text-2xl max-lg:text-xl font-cal mb-4">
      Restaurants with online food delivery
    </h2>

    

    <div className="grid grid-cols-1 mt-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {restaurants.map(({ name, rating, time, cuisines, location, imageUrl }) => (
        <Link to="/food-delivery/restaurant" key={name} className="border border-neutral-300 hover:shadow overflow-hidden bg-white">
          <img src={imageUrl} alt={name} className="w-full h-36 object-cover" />
          <div className="p-4">
            <h3 className="font-cal text-lg mb-1">{name}</h3>
            <p className="flex items-center gap-2 text-green-600 font-medium mb-1">
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.455a1 1 0 00-.364 1.118l1.287 3.973c.3.922-.755 1.688-1.54 1.118l-3.388-2.455a1 1 0 00-1.175 0l-3.388 2.455c-.784.57-1.838-.196-1.54-1.118l1.287-3.973a1 1 0 00-.364-1.118L2.044 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
              </svg>
              {rating} - {time}
            </p>
            <p className="text-gray-500 text-sm mb-1">{cuisines}</p>
            <p className="text-gray-400 text-xs">{location}</p>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

export default Restaurant;
