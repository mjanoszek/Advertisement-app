import React from 'react';
import propertiesLogo from '../../assets/propertiesLogo.jpeg';
import carsLogo from '../../assets/carsLogo.jpeg';
import watchesLogo from '../../assets/watchesLogo.jpeg';
import jetsLogo from '../../assets/privateJetsLogo.jpeg';
import city from '../../assets/city.mp4';
import cityVertical from '../../assets/cityVertical.mp4';


function Categories() {
  return (
    <div className="flex justify-center absolute ">
      <div className='relative h-screen '>
        <video autoPlay loop muted className='max-lg:hidden object-cover h-full'>
          <source src={city} type="video/mp4"  />
            Your browser does not support the video tag.
        </video>
        <video autoPlay loop muted className='lg:hidden object-cover h-screen w-screen' >
          <source src={cityVertical} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
      </div>


      <div className="absolute flex h-[90vh]  justify-center items-center flex-wrap max-sm:text-base mx-5 sm:gap-10 min-[500px]:gap-10 flex-colshadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] text-white text-xl">
        
        <div className="h-1/4 max-sm:h-0 ">
          <img src={propertiesLogo} alt="propertiesLogo" className='lg:opacity-80 hover:opacity-100  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] max-sm:h-[130px] max-sm:w-[220px] sm:h-[180px] sm:w-[320px] rounded-md' />
          <p className='text-center my-2 font-bold '>Properties</p>
        </div>
        <div className="h-1/4 max-sm:h-0 ">
          <img src={carsLogo} alt="carsLogo" className='lg:opacity-80 hover:opacity-100  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] max-sm:h-[130px] max-sm:w-[220px] sm:h-[180px] sm:w-[320px] rounded-md' />
          <p className='text-center my-2 font-bold'>Cars</p>
        </div>
        <div className="h-1/4 max-sm:h-0 ">
          <img src={watchesLogo} alt="watchesLogo" className='lg:opacity-80 hover:opacity-100 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] max-sm:h-[130px] max-sm:w-[220px] sm:h-[180px] sm:w-[320px] rounded-md' />
          <p className='text-center my-2 font-bold'>Watches</p>
        </div>

        <div className="h-1/4 max-sm:h-0 ">
          <img src={jetsLogo} alt="jetsLogo" className='lg:opacity-80 hover:opacity-100 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] max-sm:h-[130px] max-sm:w-[220px] sm:h-[180px] sm:w-[320px] rounded-md' />
          <p className='text-center my-2 font-bold'>Private Jets</p>
        </div>
      </div>
    </div>
  );
}

export default Categories;