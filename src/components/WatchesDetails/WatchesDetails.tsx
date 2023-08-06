import React, { useState, useEffect } from 'react';
import { Slider } from '../Slider/Slider';
import { FaBed, FaWater } from 'react-icons/fa';
import { FaBath } from 'react-icons/fa';
import { SlSizeFullscreen } from 'react-icons/sl';
import { useMediaQuery } from 'react-responsive';
import Navbar from '../Navbar/Navbar';
import { PiCircleHalfTiltFill } from 'react-icons/pi';
import { MdWatch } from 'react-icons/md';
import { WatchItem } from '../../types/WatchItem';

interface WatchesDetailsProps {
  data: WatchItem;
}

function WatchesDetails({ data }: WatchesDetailsProps) {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => setShowMore(!showMore);

  const fullText =
    'By submitting an email through this form, you represent and warrant that you have obtained all necessary consents, approvals, and authorizations from any third parties whose personal information or other sensitive data you may include in your message. You further agree to use this form only for lawful purposes and not to send any unsolicited or unauthorized commercial messages or spam. You acknowledge that the transmission of any information through this form is at your own risk and that you are solely responsible for any consequences or damages that may arise from such transmission';

  const truncatedText = (
    <p className='text-xs'>
      {fullText.slice(0, 100)}...{' '}
      <span onClick={toggleShowMore} className='text-blue-700'>
        Read more
      </span>
    </p>
  );

  const textToShow = (
    <p className='text-xs'>
      {fullText}{' '}
      <span onClick={toggleShowMore} className='text-blue-700'>
        Read less
      </span>
    </p>
  );

  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <>
      <Navbar isAbsolute={false} />
      <div className='flex h-screen items-start justify-center pt-[22vw] lg:px-14 '>
        <div className='flex w-screen flex-col items-center justify-center lg:mt-10 lg:items-start xl:mt-16 xl:w-screen'>
          <div className='w-screen min-[500px]:mb-10 lg:mb-32 xl:mb-24'>
            <Slider image={data.images} isMobile={isMobile} isInMenu={false} />
          </div>

          <div className='z-20 mx-2 mb-12 mt-[10vw] flex gap-5 self-center max-md:flex-col md:mx-8 lg:mt-[5vw] xl:mx-16 xl:mt-[12vw] 2xl:mt-[15vw]'>
            <div className='flex flex-col gap-2 self-start lg:w-5/6'>
              <p className='font-medium xl:text-xl'>For Sale</p>
              <p className=' font-medium md:text-lg lg:text-xl xl:text-2xl'>
                {data.price}
              </p>
              <div className='flex flex-col gap-5 lg:flex-row xl:text-lg'>
                <p className='flex items-center gap-2 '>
                  <PiCircleHalfTiltFill />
                  {data.diameter}
                </p>
                <p className='flex items-center gap-2'>
                  <FaWater />
                  {data.waterResistance}
                </p>
                <p className='flex items-center gap-2'>
                  <MdWatch />
                  {data.material}
                </p>
              </div>
              <div className='mt-2 flex flex-col gap-2'>
                <p className='font-medium 2xl:text-xl'>About this Watch</p>
                <p className='sm:text-md text-sm 2xl:text-lg '>
                  {data.description}
                </p>
              </div>
            </div>

            <form className='mt-10 flex h-fit w-[250px] flex-col gap-2 self-center rounded-md border border-gray-400 p-3 text-center shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] lg:ml-5 lg:w-[350px] lg:gap-5'>
              <p className='p-2 text-xl font-medium xl:text-2xl'>
                Request for more information
              </p>
              <input
                type='text'
                className='rounded-sm border border-black p-2'
                placeholder='Name'
              />
              <input
                type='email'
                className='rounded-sm border border-black p-2'
                placeholder='Email'
              />
              <input
                type='tel'
                className='rounded-sm border border-black p-2'
                placeholder='Your phone'
              />
              <textarea
                className='resize rounded-sm border border-black p-2'
                rows={parseInt('4')}
                placeholder='Write a message'
              ></textarea>
              <input
                type='submit'
                value='Send'
                className='w-1/3 self-center rounded-sm border border-black p-1'
              />
              <div>{showMore ? textToShow : truncatedText}</div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default WatchesDetails;
