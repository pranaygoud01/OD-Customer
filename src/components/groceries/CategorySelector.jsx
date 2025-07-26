import React, { useState } from 'react';
import { GiCarrot, GiCupcake, GiSteak, GiFishbone, GiSnowflake1, GiBread, GiDogBowl, GiMilkCarton } from 'react-icons/gi';

const categories = [
  { label: 'Vegetables & Fruit', icon: <GiCarrot size={32} /> },
  { label: 'Beverages', icon: <GiCupcake size={32} /> },
  { label: 'Meats & Seafood', icon: <GiSteak size={32} /> },
  { label: 'Frozen Foods', icon: <GiSnowflake1 size={32} /> },
  { label: 'Breakfast', icon: <GiBread size={32} /> },
  { label: 'Pet Food', icon: <GiDogBowl size={32} /> },
  { label: 'Milk & Dairies', icon: <GiMilkCarton size={32} /> },
];

function CategorySelector() {
  const [selected, setSelected] = useState(0);

  return (
    <div className='py-10'>
     <h2 className="text-2xl max-lg:text-xl font-cal mb-4">
      What's on your mind?
    </h2>
    <div className="flex max-lg:flex-wrap max-lg:space-y-2  space-x-4 py-1 justify-center">
      {categories.map((cat, idx) => (
        <button
          key={cat.label}
          onClick={() => setSelected(idx)}
          className={`flex flex-grow  max-lg:w-25 max-lg:h-20 max-lg:p-2 flex-col items-center w-40 h-40 justify-center shadow transition 
            ${selected === idx ? 'bg-green-400 text-white' : 'bg-white text-gray-700'} hover:scale-95 cursor-pointer`}
        >
          <span className="mb-2 max-lg:text-xs">{cat.icon}</span>
          <span className="font-medium max-lg:text-xs">{cat.label}</span>
        </button>
      ))}
    </div>
    </div>
  );
}

export default CategorySelector;
