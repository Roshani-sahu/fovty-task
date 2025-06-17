import React from "react";

export default function Hero() {
  return (
    
      <div className="relative w-full h-[85vh] bg-cover bg-center" style={{ backgroundImage: `url('/hero.png` }}>
      
 <div className="absolute inset-0 bg-black bg-opacity-30"></div>
  
      <div className="absolute -bottom-16 right-0 left-0  z-10 max-w-6xl mx-auto px-4 text-center text-white pt-24">
        <h1 className="text-5xl md:text-5xl font-semibold">
          Plan Your Dream <span className="text-pink-500">Wedding</span> – All in One Place
        </h1>
        <p className="mt-4  text-lg md:text-xl text-gray-200">
          Discover the best venues, top-rated vendors, bridal inspiration, and planning tools – just one click away.
        </p>

        
        <div className="mt-10 h-[260px] w-[590px] md:h-[150px] md:w-[1060px] bg-white rounded-2xl shadow-lg p-6 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 max-w-4xl mx-auto">
          <div className="flex-1 w-full">
  <select className=" w-[551px] h-[61px] md:w-[311px] md:h-[61px] border rounded-lg p-2 text-gray-500 focus:outline-pink-500">
    <option value="" disabled selected hidden>
      Search for Vendors
    </option>
    <option>Photographers</option>
    <option>Caterers</option>
    <option>Decorators</option>
  </select>
</div>

         <div className="flex-1 w-full">
  <select className="w-[551px] h-[61px] md:w-[311px] md:h-[61px] border rounded-lg p-2 bg-white text-gray-500 focus:outline-pink-500">
    <option value="" disabled selected hidden>
      Search Location
    </option>
    <option>Mumbai</option>
    <option>Delhi</option>
    <option>Bangalore</option>
  </select>
</div>

          <button className="bg-[#EF4A6B] hover:bg-pink-600 text-white font-semibold px-6 py-3 w-[550px] h-[60px] md:w-[254px] md:h-[60px] rounded-lg whitespace-nowrap">
            Find Vendors
          </button>
        </div>
      </div>
    </div>
    

  );
}
