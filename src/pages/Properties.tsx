import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import AdvertisementCard from '../components/AdvertisementCard/AdvertisementCard';

function Properties() {
  return (
    <>
      <Navbar isAbsolute={false} />
      <AdvertisementCard type='properties' />
    </>
  );
}

export default Properties;
