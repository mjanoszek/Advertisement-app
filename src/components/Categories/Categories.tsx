import React from 'react';
import propertiesLogo from '../../assets/Images/propertiesLogo.jpeg';
import carsLogo from '../../assets/Images/carsLogo.jpeg';
import watchesLogo from '../../assets/Images/watchesLogo.jpeg';
import jetsLogo from '../../assets/Images/privateJetsLogo.jpeg';
import city from '../../assets/Videos/city.mp4';
import cityVertical from '../../assets/Videos/cityVertical.mp4';
import { Link } from 'react-router-dom';

function Categories() {
  return (
    <div className='absolute flex justify-center '>
      <div className='relative h-screen '>
        <video
          autoPlay
          loop
          muted
          className='h-full object-cover max-lg:hidden'
        >
          <source src={city} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className='h-screen w-screen object-cover lg:hidden'
        >
          <source src={cityVertical} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className='flex-colshadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] absolute mx-5  flex h-[90vh] flex-wrap items-center justify-center text-xl text-white max-sm:text-base min-[500px]:gap-10 sm:gap-10'>
        <div className='h-1/4 max-sm:h-0 '>
          <Link to='/Properties'>
            <img
              src={propertiesLogo}
              alt='propertiesLogo'
              className='rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  hover:opacity-100 max-sm:h-[130px] max-sm:w-[220px] sm:h-[180px] sm:w-[310px] lg:opacity-80'
            />
            <p className='my-2 text-center font-bold '>Properties</p>
          </Link>
        </div>
        <div className='h-1/4 max-sm:h-0 '>
          <Link to='/Cars'>
            <img
              src={carsLogo}
              alt='carsLogo'
              className='rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  hover:opacity-100 max-sm:h-[130px] max-sm:w-[220px] sm:h-[180px] sm:w-[310px] lg:opacity-80'
            />
            <p className='my-2 text-center font-bold'>Cars</p>
          </Link>
        </div>
        <div className='h-1/4 max-sm:h-0 '>
          <Link to='/Watches'>
            <img
              src={watchesLogo}
              alt='watchesLogo'
              className='rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:opacity-100 max-sm:h-[130px] max-sm:w-[220px] sm:h-[180px] sm:w-[310px] lg:opacity-80'
            />
            <p className='my-2 text-center font-bold'>Watches</p>
          </Link>
        </div>

        <div className='h-1/4 max-sm:h-0 '>
          <Link to='PrivateJets'>
            <img
              src={jetsLogo}
              alt='jetsLogo'
              className='rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:opacity-100 max-sm:h-[130px] max-sm:w-[220px] sm:h-[180px] sm:w-[310px] lg:opacity-80'
            />
            <p className='my-2 text-center font-bold'>Private Jets</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Categories;
