import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Navbar from '../Navbar/Navbar';
import plaid1Mobile from '../../assets/Images/Cars/Tesla/plaid1Mobile.jpeg';
import plaid3Mobile from '../../assets/Images/Cars/Tesla/plaid3Mobile.jpeg';
import plaidVideo1 from '../../assets/Images/Cars/Tesla/plaidVideo1.mp4';
import plaidVideo2 from '../../assets/Images/Cars/Tesla/plaidVideo2.mp4';
import plaidVideo3 from '../../assets/Images/Cars/Tesla/plaidVideo3.mp4';
import plaidVideo4 from '../../assets/Images/Cars/Tesla/plaidVideo4.mp4';
import plaidVideo5 from '../../assets/Images/Cars/Tesla/plaidVideo5.mp4';

function CarDetails({ data }) {

 

  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <>
      <Navbar isAbsolute={true} />
     
      <div className="flex justify-center flex-col bg-cover bg-center h-screen shadow-[inset_0_-90px_90px_0_rgba(0,0,0,1)]" style={{ backgroundImage: `url(${plaid1Mobile})` }} >
        <div className="flex flex-col text-center self-center text-gray-900 mt-36 h-screen ">
          <p className='text-4xl font-medium '>Model S</p>
          <p className='text-xl font-normal '>Plaid</p>
        </div>
        <div className="flex justify-center items-center gap-5 self-start text-white  mb-24 text-center w-screen">
          <div className="flex flex-col">
            <p className='font-medium text-xl'>{data.range}</p>
            <p className='text-xs'>Range</p>
            <p className='text-xs'>(WLTP)</p>
          </div>
          <div className="flex flex-col">
            <p className='font-medium text-xl'>{data.ZeroToHundred}</p>
            <p className='text-xs'>0-100 km/h</p>
          </div>
          <div className="flex flex-col">
            <p className='font-medium text-xl'>{data.topSpeed}</p>
            <p className='text-xs'>Top Speed</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center flex-col bg-cover bg-center h-screen shadow-[inset_0_90px_90px_0_rgba(0,0,0,0.6)]" style={{ backgroundImage: `url(${plaid3Mobile})` }} >
        <div className="flex flex-col text-center self-center text-white mt-36 h-screen ">
          <p className='text-xl font-medium '>Interior of the future S</p>
        </div>
      </div>



      <div className="flex justify-center flex-col h-screen bg-black" >
        <div className="flex flex-col text-center self-center text-white mt-36 h-screen ">
          <div className="flex flex-col gap-10">
            <video autoPlay muted controls={false}>
              <source src={plaidVideo1} type="video/mp4"  />
            </video>

            <video autoPlay muted controls={false}> 
              <source src={plaidVideo2} type="video/mp4"  />
            </video>

            <video autoPlay muted controls={false}>
              <source src={plaidVideo3} type="video/mp4"  />
            </video>

            <video autoPlay muted controls={false}>
              <source src={plaidVideo4} type="video/mp4"  />
            </video>

            <video autoPlay muted controls={false}>
              <source src={plaidVideo5} type="video/mp4"  />
            </video>
          </div>
        </div>
      </div>
      
    
    </>
  );
}

export default CarDetails;