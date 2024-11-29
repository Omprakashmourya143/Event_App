import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between">
        <Link to="/" className="text-xl font-semibold">Event Management</Link>
        <div className="flex space-x-4">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/login" className="hover:text-blue-400">Login</Link>
          <Link to="/register" className="hover:text-blue-400">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
