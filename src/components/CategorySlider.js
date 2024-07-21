import React from 'react';
import { Link } from 'react-router-dom';

const categories = ['Breakfast', 'Lunch', 'Dinner', 'Dessert'];

function CategorySlider() {
  return (
    <div className="flex justify-center mt-8 mb-8">
      <div className="flex gap-24 overflow-x-auto px-4"> 
        {categories.map(category => (
          <Link to={`/category/${category.toLowerCase()}`} key={category} className="min-w-max">
            <div className="w-80 h-80 bg-gray-200 flex justify-center items-center rounded-lg shadow-lg">
              <p className="text-xl font-semibold">{category}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategorySlider;
