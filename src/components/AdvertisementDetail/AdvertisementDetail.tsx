import React from 'react';
import { AdvertisementList } from '../../data/AdvertisementListProperties';
import { FaBed } from 'react-icons/fa';
import { FaBath } from 'react-icons/fa';
import { SlSizeFullscreen } from 'react-icons/sl';
import { Slider } from '../Slider/Slider';
import { Link } from 'react-router-dom';

function AdvertisementDetail() {
 

  return (
    <>
      {AdvertisementList.map((item, indx) => (
        <Link to={`/Properties/${item.id}`} key={indx} className='flex max-sm:items-left flex-col  max-sm:pb-2  xl:w-full rounded-md shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] w-[250px]  lg:w-[340px] lg:max-w-[340px]'>
          <Slider image={item.images} isLarge={false}/>
          <div className='px-3 py-2 sm:flex sm:flex-col items-start justify-between gap-5'>
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
        </Link>
      ))}
    </>
  );
}

export default AdvertisementDetail;

