import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  isAbsolute: boolean,
}

function Navbar({ isAbsolute }: NavbarProps) {
  
  return (
    <div className={`${isAbsolute ? 'absolute z-10 text-white' : 'relative text-black'} p-5 flex items-center min-w-full `}>

      <Link to='/'>
        <h1 className='text-xl sm:text-3xl tracking-wider font-medium'> XYZ</h1>
      </Link>
       
      <div className='flex justify-end w-full gap-5 xs:gap-5 md:gap-20 '>
        <p className='text-xl sm:text-2xl tracking-wider relative w-max one '>
          <Link to='/AddAd'>
            Add Ad
          </Link>
          <span className={`absolute -bottom-1 left-0 w-0 transition-all h-0.5 ${isAbsolute ?  'bg-white' : 'bg-black'}`}></span>
        </p>
        
        <p className=' text-xl sm:text-2xl tracking-wider relative w-max one'>
          <Link to='/Favorites'>
            Favorites
          </Link>
          <span className={`absolute -bottom-1 left-0 w-0 transition-all h-0.5 ${isAbsolute ?  'bg-white' : 'bg-black'}`}></span>
        </p>
        
      </div>
    </div>
  );
}

export default Navbar;