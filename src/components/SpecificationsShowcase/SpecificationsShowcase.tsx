import React from 'react';
import {
  plaid2,
  plaid2Desktop,
} from '../../assets/Images/Cars/Tesla/plaidImport';
import { useMediaQuery } from 'react-responsive';

function SpecificationsShowcase() {
  const isMobile = useMediaQuery({ maxWidth: 600 });

  const frontPlaidImage = isMobile ? plaid2 : plaid2Desktop;

  return (
    <div className='bg-black py-10'>
      <img src={frontPlaidImage} alt='' />
      <div className='px-5'>
        <p className='text-xl text-white'>
          <span className='font-bold'>Model S</span> Specs
        </p>
        <div className='mt-4 flex text-white '>
          <button className='rounded-lg border border-white px-5'>
            {' '}
            Model S Plaid
          </button>
        </div>
      </div>
    </div>
  );
}

export default SpecificationsShowcase;
