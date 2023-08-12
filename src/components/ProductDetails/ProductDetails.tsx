import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import useGeoLocation from '../../hooks/useGeoLocation';
import Navbar from '../Navbar/Navbar';
import { Slider } from '../Slider/Slider';
import AdvertisementForm from '../AdvertisementForm/AdvertisementForm';
import ProductDescription from '../ProductDescription/ProductDescription';

interface ProductDetailsProps {
  data: {
    location: string;
    images: string[];
    price: string;
    description: string;
    baths?: string;
    beds?: string;
    area?: string;
    diameter?: string;
    waterResistance?: string;
    material?: string;
    maxSpeed?: string;
    range?: string;
    engine?: string;
  };
  productCategory: 'Property' | 'Watch' | 'Jet';
}

function ProductDetails({ data, productCategory }: ProductDetailsProps) {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const { latitude, longitude } = useGeoLocation({
    location: data.location,
  });

  return (
    <>
      <Navbar isAbsolute={false} />
      <div className='flex h-screen items-start justify-center pt-[20vw] sm:pt-[22vw] md:pt-[24vw] lg:pt-[20vw] 2xl:pt-[22vw] lg:px-14 '>
        <div className='flex w-screen flex-col items-center justify-center lg:mt-10 lg:items-start xl:mt-16 xl:w-screen'>
          <div className='w-screen min-[500px]:mb-10 lg:mb-32 xl:mb-24'>
            <Slider image={data.images} isMobile={isMobile} isInMenu={false} />
          </div>

          <div className='z-20 mx-2 mb-12 mt-[10vw] flex gap-5 self-center max-md:flex-col md:mx-8 lg:mt-[5vw] xl:mx-16 xl:mt-[12vw] 2xl:mt-[17vw]'>
            <div className='flex flex-col gap-2 self-start lg:w-5/6'>
              <p className='text-xl xl:text-2xl'>{data.location}</p>
              <p className='font-medium xl:text-xl'>For Sale</p>
              <p className=' font-medium md:text-lg lg:text-xl xl:text-2xl'>
                {data.price}
              </p>
              <ProductDescription data={data} category={productCategory} />

              <div className='mt-2 flex flex-col gap-2'>
                <p className='font-medium 2xl:text-xl'>
                  About this {productCategory}
                </p>
                <p className='sm:text-md text-sm 2xl:text-lg '>
                  {data.description}
                </p>
              </div>
              <div className='mt-5 flex items-center justify-center'>
                <iframe
                  className='h-[350px] rounded-xl'
                  width='100%'
                  src={`https://www.openstreetmap.org/export/embed.html?bbox=${longitude},${latitude},${longitude},${latitude}&amp;layer=mapnik`}
                ></iframe>
              </div>
            </div>
            <AdvertisementForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
