import React from 'react';
import { PropertyList } from '../../data/PropertyList';
import { CarsList } from '../../data/CarsList';
import { FaBed, FaBath } from 'react-icons/fa';
import { SlSizeFullscreen } from 'react-icons/sl';
import { Slider } from '../Slider/Slider';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

interface AdvertisementDetailProps {
  advertisementType: string,
}

function AdvertisementDetail({ advertisementType }: AdvertisementDetailProps) {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <>
      {advertisementType == 'properties' && PropertyList.map((item, indx) => (
        <Link to={`/Properties/${item.propertyID}`} key={indx} className='flex max-sm:items-left flex-col max-sm:pb-2  xl:w-full rounded-md shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] w-[250px]  lg:w-[340px] lg:max-w-[340px]'>
          <Slider image={item.images} isLarge={false} isMobile={isMobile}/>
          <div className='px-3  sm:flex sm:flex-col items-start justify-between gap-5'>
            <p className='max-[375px]:text-sm text-base'>{item.title}</p>
            <div className='flex flex-col'>
              <p className='font-bold'>{item.price}</p>
              <p className='flex gap-2'><FaBed />{item.beds}</p>
              <p className='flex gap-2'><FaBath/>{item.baths}</p>
              <p className='flex gap-2'><SlSizeFullscreen/>{item.area}</p>
              <hr className='my-2'/>
              <p className='max-[375px]:text-xs md:py-3'>{item.location}</p>
            </div>
          </div>
        </Link>
      ))}

      {advertisementType == 'cars' && CarsList.map((item, indx) => (
        <Link to={`/Cars/${item.carID}`} key={indx} className='flex max-sm:items-left flex-col max-sm:pb-2  xl:w-full rounded-md shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] w-[250px]  lg:w-[340px] lg:min-w-[340px] lg:max-w-[340px]'>          
          <Slider image={item.images} isLarge={false} isMobile={isMobile}/>
          <div className='px-3 sm:flex sm:flex-col items-start justify-between gap-5 mt-2'>
            <p className='max-[375px]:text-md font-semibold text-base'>{item.title}</p>
            <p className='max-[375px]:text-md font-normal md:py-3'>{item.yearOfManufacture}</p>
            
            <div className='flex flex-col'>
              
              <p className='flex gap-2'><FaBed />{item.topSpeed}</p>
              <p className='flex gap-2'><FaBath/>{item.power}</p>
              <p className='flex gap-2'><SlSizeFullscreen/>{item.ZeroToHundred}</p>
              <hr className='my-2'/>
              <p className='font-medium'>{item.price}</p>

            </div>
          </div>
        </Link>
      ))}
    </>
  );
}

export default AdvertisementDetail;

