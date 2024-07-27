import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { FaRegClock } from "react-icons/fa";

function RecipeDetail() {
    const { recipeId } = useParams();
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/recipes/${recipeId}`);
                setRecipe(response.data);
            } catch (error) {
                console.error("Failed to fetch recipe:", error);
                alert("Failed to load recipe details");
            } finally {
                setLoading(false);
            }
        };
        fetchRecipe();
    }, [recipeId]);

    const handleDelete = async () => {
        if (window.confirm("Are you sure you want to delete this recipe?")) {
            try {
                await axios.delete(`http://localhost:5000/recipes/${recipeId}`);
                navigate('/');  // Redirect to home or another appropriate page after deletion
                alert("Recipe deleted successfully");
            } catch (error) {
                console.error("Failed to delete recipe:", error);
                alert("Failed to delete recipe");
            }
        }
    };

    if (loading) return <p>Loading...</p>;
    if (!recipe) return <p>No recipe found</p>;

    return (
      <div className="flex justify-center">
        <div className="w-1/5"></div> {/* Left empty space */}
        <div className="w-3/5 p-8 grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <div className='mt-16 lg:col-span-1'>
            <h1 className="text-8xl font-fancy text-blue-300 tracking-widest text-left mb-4">{recipe.title}</h1>
            <button onClick={handleDelete} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Delete Recipe
            </button>
            <Link to={`/edit-recipe/${recipeId}`} className="text-blue-500 ml-4">Edit</Link>
            <div className='p-4'>
              <h2 className="text-xl font-semibold mb-2 tracking-widest mt-16 uppercase">Ingredients</h2>
              <hr className='mb-6'/>
              <div className="mb-4">
                {recipe.ingredients.map((ingredient, index) => (
                  <div key={index} className="flex justify-start items-center space-x-24 mb-2">
                    <span className="font-semibold w-20">{ingredient.amount}</span>
                    <span className="flex-1 text-left">{ingredient.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-sky-100 p-4 rounded-lg mt-16">
            <h2 className="text-xl font-semibold tracking-widest uppercase mb-2">Macros</h2>
            <hr className='mb-8'/>
            <div className="mb-4">
              <div className="flex justify-start items-center space-x-16 mb-2"> 
                <span className="font-semibold w-32">Calories</span>
                <span className="flex-1 text-left">{recipe.macros.calories}</span>
              </div>
              <div className="flex justify-start items-center space-x-16 mb-2">
                <span className="font-semibold w-32">Carbs</span>
                <span className="flex-1 text-left">{recipe.macros.carbs}</span>
              </div>
              <div className="flex justify-start items-center space-x-16 mb-2"> 
                <span className="font-semibold w-32">Protein</span>
                <span className="flex-1 text-left">{recipe.macros.protein}</span>
              </div>
              <div className="flex justify-start items-center space-x-16 mb-2">
                <span className="font-semibold w-32">Fat</span>
                <span className="flex-1 text-left">{recipe.macros.fat}</span>
              </div>
            </div>
          </div>
          </div>
          <div className='mt-16 lg:col-span-2'>
          <div className="flex justify-center mt-24">
            <p className="text-xl font-semibold text-amber-600 tracking-widest mb-1 flex items-center">
              <FaRegClock className="mr-2" /> Duration: {recipe.duration}
            </p>
          </div>
            <div className='flex justify-end'>
              <img 
                src={recipe.imageUrl} 
                alt={recipe.title} 
                className="mb-4 w-full mt-24 shadow-lg rounded-lg"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2 mt-8 uppercase tracking-widest">Instructions</h2>
            <hr className='mb-8'/>
            <div className="grid grid-cols-[auto_1fr] gap-2">
              {recipe.instructions.map((step, index) => (
                  <React.Fragment key={index}>
                      <div className="text-lg font-semibold text-gray-800 mb-8">
                          Step {index + 1}
                      </div>
                      <div className="text-lg text-gray-700 ms-24">
                          {step.description}
                      </div>
                  </React.Fragment>
              ))}
            </div>
          </div>
        </div>
        <div className="w-1/5"></div> {/* Right empty space */}
      </div>
    );
}

export default RecipeDetail;