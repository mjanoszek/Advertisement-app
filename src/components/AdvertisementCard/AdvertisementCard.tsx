import React from 'react';
import AdvertisementDetail from '../AdvertisementDetail/AdvertisementDetail';

function AdvertisementCard() {
  return (
    <div className="flex justify-center py-10">
      <div className="flex justify-center flex-colshadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] max-sm:w-5/6 w-screen lg:mx-10 ">
        <AdvertisementDetail/>
      </div>
    </div>
  );
}

export default AdvertisementCard;