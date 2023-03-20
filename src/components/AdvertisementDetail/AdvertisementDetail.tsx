import React from 'react';
import { AdvertisementList } from '../../data/AdvertisementListProperties';
import { FaBed } from 'react-icons/fa';
import { FaBath } from 'react-icons/fa';
import { SlSizeFullscreen } from 'react-icons/sl';
import { GrFormNextLink } from 'react-icons/gr';
import { GrFormPreviousLink } from 'react-icons/gr';

function AdvertisementDetail() {
  return (
    <>
      {AdvertisementList.map((item, indx) => (
        <div key={indx} className='relative flex max-sm:items-left flex-col flex-wrap max-sm:pb-2 max-sm:w-full h-fit sm:w-2/5 xl:w-1/4 rounded-md shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]'>
          <div className='relative'>
            <img src={item.image} alt='car' />
            <button type='button' className='absolute top-36 -left-0 bg-white rounded-full p-2 m-1 opacity-80 hover:opacity-100'>
              <GrFormPreviousLink className='text-3xl' />
            </button>
            <button type='button' className='absolute top-36 -right-0 bg-white rounded-full p-2 m-1 opacity-80 hover:opacity-100'>
              <GrFormNextLink className='text-3xl' />
            </button>
          </div>
          <div className='px-3 py-2 sm:flex sm:flex-col justify-between gap-5'>
            <p className='max-[375px]:text-sm text-base'>{item.title}</p>
            <div className='flex flex-col'>
              <p className='font-bold'>{item.price}</p>
              <p className='flex gap-2'><FaBed />{item.beds}</p>
              <p className='flex gap-2'><FaBath/>{item.baths}</p>
              <p className='flex gap-2'><SlSizeFullscreen/>{item.area}</p>
              <hr className='my-2'/>
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