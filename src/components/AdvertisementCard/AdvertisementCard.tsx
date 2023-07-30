import React from 'react';
import AdvertisementDetail from '../AdvertisementDetail/AdvertisementDetail';

interface AdvertisementCardProps {
  type: string;
}

function AdvertisementCard({ type }: AdvertisementCardProps) {
  return (
    <>
      <div className='flex min-h-screen items-center justify-center '>
        <div className='item-center flex-colshadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] my-12 flex flex-wrap justify-center gap-16 max-sm:w-max md:flex-row md:gap-y-24 lg:mt-40 lg:gap-y-40  xl:gap-10 xl:gap-y-36 '>
          <AdvertisementDetail advertisementType={type} />
        </div>
      </div>
    </>
  );
}

export default AdvertisementCard;
