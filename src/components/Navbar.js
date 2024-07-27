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
    <nav className="fixed w-full mt-8 z-10 transition-opacity duration-300 ease-in-out">
      <div className="container mx-auto flex flex-col items-center p-4">
        <div className="flex justify-center space-x-20">
        <Link to="/" className="hover:text-primary text-gray-700 uppercase">Home</Link>
          <Link to="/category/breakfast" className="hover:text-primary text-gray-700 uppercase">breakfast</Link>
          <Link to="/category/dinner" className="hover:text-primary text-gray-700 uppercase">dinner</Link>
          <Link to="/category/dessert" className="hover:text-primary text-gray-700 uppercase">dessert</Link>
          <Link to="/category/snacks" className="hover:text-primary text-gray-700 uppercase">snacks</Link>
          <Link to="/category/drinks" className="hover:text-primary text-gray-700 uppercase">drinks</Link>
          <Link to="/create" className="hover:text-primary text-gray-700 uppercase">create</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
