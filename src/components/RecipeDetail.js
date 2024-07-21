import React from 'react';
import { useParams } from 'react-router-dom';
import recipes from './data'; 

function RecipeDetail() {
  const { recipeId } = useParams();
  const recipe = recipes.find(r => r.id === parseInt(recipeId));

  if (!recipe) return <p>No recipe found</p>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-12 mt-16">{recipe.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-1 flex flex-col items-center">
          <img src={recipe.imageUrl} alt={recipe.title} className="mb-4 w-full"/>
          <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="ml-4">{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2">
          <p className="text-md mb-4"><strong>Duration:</strong> {recipe.duration}</p>
          <h2 className="text-xl font-semibold mb-2">Instructions</h2>
          <p>{recipe.instructions}</p>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
