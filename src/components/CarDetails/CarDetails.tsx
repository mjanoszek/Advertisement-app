import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Navbar from '../Navbar/Navbar';
import plaid1Mobile from '../../assets/Images/Cars/Tesla/plaid1Mobile.jpeg';



function CarDetails({ data }) {

 

  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <>
      <Navbar isAbsolute={true} />
     
      <div className="flex justify-center items-end text-white bg-cover bg-center h-screen" style={{ backgroundImage: `url(${plaid1Mobile})` }} >
        <h1>sdfdsf</h1>

      </div>
      
    
    </>
  );
}

export default CarDetails;