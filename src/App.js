import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home'; // Home component to be created
import RecipesList from './components/RecipesList';
import RecipeDetail from './components/RecipeDetail';
import Navbar from './components/Navbar';
import CreateRecipe from './components/CreateRecipe';

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navbar />} />
        </Routes>
        <Routes>
          <Route path="/category/:categoryName" element={<RecipesList />} />
          <Route path="/recipe/:recipeId" element={<RecipeDetail />} />
          <Route path="/create" element={<CreateRecipe />} />
          <Route path="/edit-recipe/:recipeId" element={<CreateRecipe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
