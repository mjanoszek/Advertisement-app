import React from 'react';
import AdvertisementDetail from '../AdvertisementDetail/AdvertisementDetail';

function AdvertisementCard() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex justify-center item-center flex-col md:flex-row flex-colshadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] max-sm:w-max gap-20 lg:mx-10  w-fit ">
        <AdvertisementDetail/>
      </div>
    </div>
  );
}

export default AdvertisementCard;