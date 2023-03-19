import React from 'react';
import { Link } from 'react-router-dom';



function Navbar() {
  
  return (
    <div className="absolute z-10 p-5 flex items-center min-w-full text-white">
      <Link to='/'>
        <h1 className=' text-xl sm:text-3xl tracking-wider text-white font-bold relative w-max one"'> XYZ</h1>
      </Link>
       
      <div className=" flex justify-end w-full gap-5 xs:gap-5 md:gap-20  ">
        <Link to='/AddAd'>
          <p className=' text-xl sm:text-2xl tracking-wider hover:text-black'>
          Add Ad
          </p>
        </Link>
        <Link to='/Favorites'>
          <p className=' text-xl sm:text-2xl tracking-wider hover:text-black'>Favorites</p>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;