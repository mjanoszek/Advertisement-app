import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import AdvertisementCard from '../components/AdvertisementCard/AdvertisementCard';

function Watches() {
  return (
    <>
      <Navbar isAbsolute={false} />
      <AdvertisementCard type='watches' />
    </>
  );
}

export default Watches;
