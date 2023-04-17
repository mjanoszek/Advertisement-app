import React from 'react';
import AdvertisementDetail from '../AdvertisementDetail/AdvertisementDetail';

function AdvertisementCard() {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="flex justify-center item-center flex-wrap md:flex-row flex-colshadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] my-12 lg:mt-40 max-sm:w-max gap-16 md:gap-y-24 lg:gap-y-40  xl:gap-10 xl:gap-y-36 ">
        <AdvertisementDetail/>
      </div>
    </div>
  );
}

export default AdvertisementCard;