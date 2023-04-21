import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import AdvertisementCard from '../components/AdvertisementCard/AdvertisementCard';


function Cars() {
  return (
    <>
      <Navbar isAbsolute={false}/>
      <AdvertisementCard type='cars'/>
    </>
  );
}

export default Cars;