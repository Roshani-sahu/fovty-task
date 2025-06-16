import React from "react";
import { FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <header className="w-full h-[70px] shadow-md flex items-center justify-between px-8 bg-white  ">
    
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="Logo" className="h-10 w-10 object-contain rounded-lg" />
                <img src="/logo2.png" alt="Logo" className="w-[200px] object-contain rounded-lg" />

      </div>

      
      <nav className="hidden md:flex sm:hidden space-x-8 text-lg font-semibold text-gray-700">
        <a href="/" className="text-[#EF4A6B] font-bold">Home</a>
        <a href="/">Vendors</a>
        <a href="/">Real Weddings</a>
        <a href="/">Blog & Tips</a>
        <a href="/">Offers</a>
        <a href="/">Plan Your Wedding</a>
      </nav>

     
      <div className="flex items-center space-x-4">
        <button className="bg-[#EF4A6B] text-white p-2 rounded-full hover:bg-pink-600">
          <FaSearch size={14} />
        </button>
        <a href="/" className="text-sm font-semibold text-gray-800 hover:text-pink-600">
          Log In/Register
        </a>
      </div>
    </header>
  );
}
