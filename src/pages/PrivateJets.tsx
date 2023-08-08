import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import AdvertisementCard from '../components/AdvertisementCard/AdvertisementCard';

function PrivateJets() {
  return (
    <>
      <Navbar isAbsolute={false} />
      <AdvertisementCard type='jets' />
    </>
  );
}

export default PrivateJets;
