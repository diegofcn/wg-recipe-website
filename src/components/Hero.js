import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg'
import backgroundImage from '../assets/avocado.jpg';

function Hero() {
  return (
    <div className="relative bg-white min-h-screen flex flex-col items-center overflow-hidden">
      <div className="relative z-10 text-center p-8">
        <img src={logo} alt="Recipe World Logo" className="w-24 h-24 mx-auto mb-4" />
        <h1 className="text-8xl font-bold font-cormorant uppercase text-gray-800">Kitchen Chaos</h1>
        <span className="block mt-2 text-4xl text-primary font-handwritten">flavorful & easy</span>
      </div>
      <div className="mt-24 text-xl">
        <div className="mt-8 flex justify-center space-x-20">
          <Link to="/category/breakfast" className="hover:text-primary text-gray-700 uppercase">breakfast</Link>
          <Link to="/category/dinner" className="hover:text-primary text-gray-700 uppercase">dinner</Link>
          <Link to="/category/dessert" className="hover:text-primary text-gray-700 uppercase">dessert</Link>
          <Link to="/category/snacks" className="hover:text-primary text-gray-700 uppercase">snacks</Link>
          <Link to="/category/drinks" className="hover:text-primary text-gray-700 uppercase">drinks</Link>
          <Link to="/create" className="hover:text-primary text-gray-700 uppercase">create</Link>
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-1/2">
        <img src={backgroundImage} alt="Background" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

export default Hero;
