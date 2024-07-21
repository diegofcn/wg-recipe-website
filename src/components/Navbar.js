import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [transparent, setTransparent] = useState(false);

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 80) {
        setTransparent(true);
      } else {
        setTransparent(false);
      }
    };

    window.addEventListener('scroll', changeBackground);

    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-10 transition-opacity duration-300 ease-in-out ${transparent ? 'bg-gray-800 bg-opacity-50' : 'bg-gray-800'}`}>
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-lg font-semibold text-white">
          Recipe World
        </Link>
        <div className="flex gap-4">
          <Link to="/" className="hover:bg-gray-700 p-2 rounded text-white">Home</Link>
          <Link to="/category/breakfast" className="hover:bg-gray-700 p-2 rounded text-white">Breakfast</Link>
          <Link to="/category/lunch" className="hover:bg-gray-700 p-2 rounded text-white">Lunch</Link>
          <Link to="/category/dinner" className="hover:bg-gray-700 p-2 rounded text-white">Dinner</Link>
          <Link to="/category/dessert" className="hover:bg-gray-700 p-2 rounded text-white">Dessert</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
