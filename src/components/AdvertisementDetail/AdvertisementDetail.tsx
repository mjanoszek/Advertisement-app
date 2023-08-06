import React from 'react';
import { PropertyList } from '../../data/PropertyList';
import { CarsList } from '../../data/CarsList';
import { FaBed, FaBath, FaWater } from 'react-icons/fa';
import { BsSpeedometer } from 'react-icons/bs';
import {
  PiCircleHalfTiltFill,
  PiEngineBold,
  PiTimerBold,
} from 'react-icons/pi';
import { SlSizeFullscreen } from 'react-icons/sl';
import { Slider } from '../Slider/Slider';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import WatchesList from '../../data/WatchesList';
import { MdWatch } from 'react-icons/md';

interface AdvertisementDetailProps {
  advertisementType: string;
}

function AdvertisementDetail({ advertisementType }: AdvertisementDetailProps) {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <>
      {advertisementType == 'properties' &&
        PropertyList.map((item, indx) => (
          <Link
            to={`/Properties/${item.propertyID}`}
            key={indx}
            className='max-sm:items-left flex w-[250px] flex-col rounded-md pt-12 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] max-sm:pb-2 lg:w-[340px] lg:max-w-[340px] xl:w-full'
          >
            <Slider image={item.images} isMobile={isMobile} isInMenu={true} />
            <div className='items-start justify-between gap-5 px-3 max-lg:py-5 sm:flex sm:flex-col'>
              <p className='text-base max-[375px]:text-sm'>{item.title}</p>
              <div className='flex flex-col'>
                <p className='font-bold'>{item.price}</p>
                <p className='flex items-center gap-2'>
                  <FaBed />
                  {item.beds}
                </p>
                <p className='flex items-center gap-2'>
                  <FaBath />
                  {item.baths}
                </p>
                <p className='flex items-center gap-2'>
                  <SlSizeFullscreen />
                  {item.area}
                </p>
                <hr className='my-2' />
                <p className='max-[375px]:text-xs md:py-3'>{item.location}</p>
              </div>
            </div>
          </Link>
        ))}

      {advertisementType == 'cars' &&
        CarsList.map((item, indx) => (
          <Link
            to={`/Cars/${item.carID}`}
            key={indx}
            className='max-sm:items-left flex w-[250px] flex-col rounded-md pt-12 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] max-sm:pb-2 lg:w-[340px] lg:min-w-[340px] lg:max-w-[340px] xl:w-full'
          >
            <Slider image={item.images} isMobile={isMobile} isInMenu={true} />
            <div className='mt-2 items-start justify-between px-3 pb-3 max-lg:py-5 sm:flex sm:flex-col'>
              <p className='max-[375px]:text-md text-base font-semibold'>
                {item.title}
              </p>
              <p className='max-[375px]:text-md font-normal md:py-3'>
                {item.yearOfManufacture}
              </p>
              <div className='flex flex-col'>
                <p className='flex items-center gap-2'>
                  <BsSpeedometer />
                  {item.topSpeed}
                </p>
                <p className='flex items-center gap-2'>
                  <PiEngineBold />
                  {item.power}
                </p>
                <p className='flex items-center gap-2'>
                  <PiTimerBold />
                  {item.ZeroToHundred}
                </p>
                <hr className='my-2' />
                <p className='font-medium'>{item.price}</p>
              </div>
            </div>
          </Link>
        ))}

      {advertisementType == 'watches' &&
        WatchesList.map((item, indx) => (
          <Link
            to={`/Watches/${item.watchID}`}
            key={indx}
            className='max-sm:items-left flex w-[250px] flex-col rounded-md pt-12 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] max-sm:pb-2 lg:w-[340px] lg:min-w-[340px] lg:max-w-[340px] xl:w-full'
          >
            <Slider image={item.images} isMobile={isMobile} isInMenu={true} />
            <div className='mt-2 items-start justify-between px-3 pb-3 max-lg:py-5 sm:flex sm:flex-col'>
              <p className='max-[375px]:text-md text-base font-semibold'>
                {item.title}
              </p>
              <div className='flex flex-col'>
                <p className='flex items-center gap-2'>
                  <FaWater />
                  {item.waterResistance}
                </p>
                <p className='flex items-center gap-2'>
                  <PiCircleHalfTiltFill />
                  {item.diameter}
                </p>
                <p className='flex items-center gap-2'>
                  <MdWatch />
                  {item.material}
                </p>
                <hr className='my-2' />
                <p className='font-medium'>{item.price}</p>
              </div>
            </div>
          </Link>
        ))}
    </>
  );
}

export default AdvertisementDetail;
