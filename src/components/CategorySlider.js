import React from 'react';
import { Link } from 'react-router-dom';

const categories = ['Breakfast', 'Dinner', 'Dessert', 'Snacks', 'Drinks'];

function CategorySlider() {
  return (
    <div className="flex flex-col justify-center mt-8 mb-8">
      <div className="relative z-10 text-center p-8">
        <h1 className="text-6xl font-bold font-cormorant uppercase text-gray-800">Categories</h1>
        <span className="block mt-2 text-6xl text-primary font-handwritten">Lets cook!</span>
      </div>
      <div className="flex gap-24 justify-center overflow-x-auto px-4 mt-12"> 
        {categories.map(category => (
          <Link to={`/category/${category.toLowerCase()}`} key={category} className="min-w-max">
            <div className="w-80 h-80 bg-gray-200 flex justify-center items-center rounded-lg shadow-lg">
              <p className="text-4xl font-semibold font-fancy">{category}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategorySlider;
