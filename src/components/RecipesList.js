import React from 'react';
import { useParams, Link } from 'react-router-dom';
import recipes from './data';

// Dummy data for demonstration purposes
const dummyData = [
  { id: 1, title: 'Spaghetti Carbonara', category: 'dinner', duration: '20 mins', imageUrl: 'https://source.unsplash.com/random/80x80?spaghetti' },
  { id: 2, title: 'Classic Pancakes', category: 'breakfast', duration: '15 mins', imageUrl: 'https://www.einfachbacken.de/sites/einfachbacken.de/files/styles/700_530/public/2020-08/american_pancakes.jpg' },
  { id: 3, title: 'Classic Pancakes', category: 'breakfast', duration: '15 mins', imageUrl: 'https://www.einfachbacken.de/sites/einfachbacken.de/files/styles/700_530/public/2020-08/american_pancakes.jpg' },
  // Add more dummy recipes here...
];

function RecipesList() {
  const { categoryName } = useParams();
  const filteredRecipes = recipes.filter(recipe => recipe.category === categoryName);

  return (
    <div className="p-16">
      <h2 className="text-2xl font-bold text-center capitalize mb-8 mt-8">{categoryName} Recipes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {filteredRecipes.map(recipe => (
          <Link to={`/recipe/${recipe.id}`} key={recipe.id} className="flex flex-row bg-white shadow-lg rounded-lg overflow-hidden hover:bg-gray-200 transition-colors duration-200 ease-in-out">
            <img src={recipe.imageUrl} alt={recipe.title} className="w-1/3 object-cover"/>
            <div className="p-16 flex flex-col justify-between">
              <h3 className="text-lg font-semibold">{recipe.title}</h3>
              <p className="text-gray-600">{recipe.duration}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default RecipesList;
