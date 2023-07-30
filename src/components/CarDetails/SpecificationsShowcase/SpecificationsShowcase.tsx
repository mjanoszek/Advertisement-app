import React from 'react';
import {
  plaid2,
  plaid2Desktop,
} from '../../../assets/Images/Cars/Tesla/plaidImport';
import { useMediaQuery } from 'react-responsive';

const plaidData = {
  RangeWLTP: '600km',
};

function SpecificationsShowcase() {
  const isMobile = useMediaQuery({ maxWidth: 600 });

  const frontPlaidImage = isMobile ? plaid2 : plaid2Desktop;

  return (
    <>
      <div className='bg-black py-10'>
        <img src={frontPlaidImage} alt='' />
        <div className='px-5'>
          <p className='text-xl text-white'>
            <span className='font-bold'>Model S</span> Specs
          </p>
          <div className='mt-4 flex w-full justify-center gap-2 text-xs text-white'>
            <button className='flex-1 rounded-sm border border-white px-5 py-2'>
              {' '}
              Model S Plaid
            </button>
            <button className='flex-1 rounded-sm border border-gray-800 px-5 py-2'>
              {' '}
              Model S
            </button>
          </div>
        </div>
      </div>
      <div className='bg-black text-white'></div>
    </>
  );
}

export default SpecificationsShowcase;
