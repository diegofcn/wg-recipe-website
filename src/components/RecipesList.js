import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function RecipesList() {
  const { categoryName } = useParams();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/recipes/category/${categoryName}`);
        setRecipes(response.data);
      } catch (error) {
        console.error("Failed to fetch recipes:", error);
        alert("Failed to load recipes");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [categoryName]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className='flex justify-center'>
      <div className="p-16 w-full xl:w-2/3">
        <h2 className="text-2xl lg:text-6xl font-bold font-cormorant text-center capitalize mb-16 mt-12">{categoryName} Recipes</h2>
        {recipes.length === 0 ? (
          <p className="text-center text-xl text-gray-600 mt-16">No recipes found in this category yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {recipes.map(recipe => (
              <Link to={`/recipe/${recipe._id}`} key={recipe._id} className="flex flex-row bg-white shadow-lg rounded-lg overflow-hidden hover:bg-gray-200 transition-colors duration-200 ease-in-out">
                <img src={recipe.imageUrl} alt={recipe.title} className="w-1/3 object-cover"/>
                <div className="p-16 flex flex-col justify-between">
                  <h3 className="text-lg font-semibold">{recipe.title}</h3>
                  <p className="text-gray-600">{recipe.duration}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default RecipesList;
