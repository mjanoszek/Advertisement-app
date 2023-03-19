import React from 'react';
import { AdvertisementList } from '../../data/AdvertisementList';

function AdvertisementDetail() {
  return (
    <>
      {AdvertisementList.map((item, indx) => (
        <div key={indx} className='flex max-sm:items-left max-sm:flex-col max-sm:pb-2 max-sm:w-full sm:h-full sm:w-3/4 rounded-md shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]'>
          <img src={item.image} alt='car' className='max-sm:w-fit sm:w-2/6 w-fit' />
          <div className='px-3 py-2 sm:flex sm:flex-col justify-between'>
            <p className='max-[375px]:text-sm text-base'>{item.title}</p>
            <p className='text-center hidden xl:block'>{item.description}</p>
            <div className='flex flex-col'>
              <p className='font-bold'>{item.price}</p>
              <p className='max-[375px]:text-xs'>{item.location}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default AdvertisementDetail;


//remove padding on desktop