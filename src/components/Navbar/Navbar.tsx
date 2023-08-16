import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  isAbsolute: boolean;
}

function Navbar({ isAbsolute }: NavbarProps) {
  return (
    <div
      className={`${
        isAbsolute ? 'absolute z-10 text-white' : 'relative text-black'
      } flex min-w-full items-center p-5 `}
    >
      <Link to='/'>
        <h1 className='text-xl font-medium tracking-wider sm:text-3xl'>
          {' '}
          LUSSO
        </h1>
      </Link>

      <div className='xs:gap-5 flex w-full justify-end gap-5 md:gap-20 '>
        <p className='one relative w-max text-xl tracking-wider sm:text-2xl '>
          <Link to='/AddAd'>Add Ad</Link>
          <span
            className={`absolute -bottom-1 left-0 h-0.5 w-0 transition-all ${
              isAbsolute ? 'bg-white' : 'bg-black'
            }`}
          ></span>
        </p>

        <p className=' one relative w-max text-xl tracking-wider sm:text-2xl'>
          <Link to='/Favorites'>Favorites</Link>
          <span
            className={`absolute -bottom-1 left-0 h-0.5 w-0 transition-all ${
              isAbsolute ? 'bg-white' : 'bg-black'
            }`}
          ></span>
        </p>
      </div>
    </div>
  );
}

export default Navbar;
