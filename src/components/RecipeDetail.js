import React from 'react';
import { useParams } from 'react-router-dom';
import recipes from './data'; 

function RecipeDetail() {
  const { recipeId } = useParams();
  const recipe = recipes.find(r => r.id === parseInt(recipeId));

  if (!recipe) return <p>No recipe found</p>;

  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className='mt-16'>
        <h1 className="text-8xl font-fancy text-emerald-200 tracking-widest text-left mb-4">{recipe.title}</h1>
        <h2 className="text-xl font-semibold mb-2 mt-16 uppercase">Ingredients</h2>
        <div className="mb-4">
          {recipe.ingredients.map((ingredient, index) => (
            <div key={index} className="flex justify-start items-center space-x-4">
              <span className="font-semibold w-20">{ingredient.amount}</span>
              <span className="flex-1 text-left">{ingredient.name}</span>
            </div>
          ))}
        </div>
        <hr className='mb-8 mt-8'/>
        <h2 className="text-xl font-semibold uppercase mb-2">Macros</h2>
        <div className="mb-4">
          <div className="flex justify-start items-center space-x-4">
            <span className="font-semibold w-32">Calories</span>
            <span className="flex-1 text-left">{recipe.macros.calories}</span>
          </div>
          <div className="flex justify-start items-center space-x-4">
            <span className="font-semibold w-32">Carbs</span>
            <span className="flex-1 text-left">{recipe.macros.carbs}</span>
          </div>
          <div className="flex justify-start items-center space-x-4">
            <span className="font-semibold w-32">Protein</span>
            <span className="flex-1 text-left">{recipe.macros.protein}</span>
          </div>
          <div className="flex justify-start items-center space-x-4">
            <span className="font-semibold w-32">Fat</span>
            <span className="flex-1 text-left">{recipe.macros.fat}</span>
          </div>
        </div>
      </div>
      <div className='mt-16'>
        <div className="text-right mt-24 flex justify-center">
          <p className="text-md font-semibold mb-1">Duration: {recipe.duration}</p>
        </div>
        <img src={recipe.imageUrl} alt={recipe.title} className="mb-4 w-full mt-24 shadow-lg rounded-lg"/>
        <h2 className="text-xl font-semibold mb-2">Instructions</h2>
        <p>{recipe.instructions}</p>
      </div>
    </div>
  );
}

export default RecipeDetail;
