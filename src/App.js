import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import RecipesList from './components/RecipesList';
import RecipeDetail from './components/RecipeDetail';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />  // New Home component route
          <Route path="/category/:categoryName" element={<RecipesList />} />
          <Route path="/recipe/:recipeId" element={<RecipeDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
