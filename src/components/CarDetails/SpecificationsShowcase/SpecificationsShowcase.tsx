import React, { useState } from 'react';
import {
  plaid2,
  plaid2Desktop,
} from '../../../assets/Images/Cars/Tesla/plaidImport';
import { useMediaQuery } from 'react-responsive';
import SpecificationsItem from './SpecificationsItem/SpecificationsItem';

function SpecificationsShowcase() {
  const [specificationItem, setSpecificationItem] = useState('Model S Plaid');
  const isMobile = useMediaQuery({ maxWidth: 600 });

  const frontPlaidImage = isMobile ? plaid2 : plaid2Desktop;

  return (
    <>
      <div className=' flex flex-col gap-10 min-[900px]:flex-row'>
        <div className='min-[900px]:w-1/2 flex items-center'>
          <img src={frontPlaidImage} alt='Plaid S' />
        </div>
        <div className='min-[900px]:w-1/2 flex flex-col bg-black px-5'>
          <p className='text-xl text-white'>
            <span className='font-bold'>Model S</span> Specs
          </p>
          <div className='mt-4 flex w-full justify-center gap-2 text-xs text-white'>
            <button
              className={`w-1/2 rounded-sm border px-5 py-2 ${
                specificationItem === 'Model S Plaid'
                  ? 'border-white'
                  : 'border-gray-800'
              }`}
              onClick={() => setSpecificationItem('Model S Plaid')}
            >
              {' '}
              Model S Plaid
            </button>
            <button
              className={`w-1/2 rounded-sm border border-gray-800 px-5 py-2 ${
                specificationItem === 'Model S'
                  ? 'border-white'
                  : 'border-gray-800'
              }`}
              onClick={() => setSpecificationItem('Model S')}
            >
              {' '}
              Model S
            </button>
          </div>
          {specificationItem === 'Model S Plaid' ? (
            <div className='flex'>
              <div className='flex w-1/2 flex-col gap-5 py-5 pr-5'>
                <SpecificationsItem
                  heading={'Range (WLTP)'}
                  description={'600 km'}
                />
                <SpecificationsItem
                  heading={'1/4 Mile'}
                  description={'9.23@250 km/h trap speed'}
                />
                <SpecificationsItem
                  heading={'Drag Coefficient'}
                  description={'0.208 Cd'}
                />
                <SpecificationsItem
                  heading={'Wheels'}
                  description={'19" or 21"'}
                />
                <SpecificationsItem
                  heading={'Cargo'}
                  description={'793 liters'}
                />
                <SpecificationsItem
                  heading={'Weight'}
                  description={'2,167 kg'}
                />
                <SpecificationsItem
                  heading={'Supercharging Max'}
                  description={'250 kW'}
                />
              </div>
              <div className='flex w-1/2 flex-col gap-5 py-5'>
                <SpecificationsItem
                  heading={'*Acceleration'}
                  description={
                    <>
                      <p>2.1 s 0-100km/h</p>
                      <i>when equipped with paid hardware upgrades</i>
                    </>
                  }
                />
                <SpecificationsItem
                  heading={'†Top Speed'}
                  description={
                    <>
                      <p>32 km/h</p>
                      <i>when equipped with paid hardware upgrades</i>
                    </>
                  }
                />
                <SpecificationsItem
                  heading={'‡Vehicle Power'}
                  description={
                    <>
                      <p>1,020 hp</p>
                      <i>
                        based on acceleration testing, simulation and battery
                        limits
                      </i>
                    </>
                  }
                />
                <SpecificationsItem
                  heading={'Motor Power (R85)'}
                  description={
                    <>
                      <p>Front: 314 kW</p>
                      <p>Reat: 309 kW x2</p>
                    </>
                  }
                />
                <SpecificationsItem
                  heading={'Powertrain'}
                  description={'Tri Motor'}
                />
              </div>
            </div>
          ) : (
            <div className='flex'>
              <div className='flex w-1/2 flex-col gap-5 py-5'>
                <SpecificationsItem
                  heading={'Range (WLTP)'}
                  description={'634 km'}
                />
                <SpecificationsItem
                  heading={'Drag Coefficient'}
                  description={'0.208 Cd'}
                />
                <SpecificationsItem
                  heading={'Wheels'}
                  description={'19" or 21"'}
                />
                <SpecificationsItem
                  heading={'Cargo'}
                  description={'793 liters'}
                />
                <SpecificationsItem
                  heading={'Weight'}
                  description={'2,068 kg'}
                />
                <SpecificationsItem
                  heading={'Supercharging Max'}
                  description={'250 kW'}
                />
              </div>
              <div className='flex flex-1 flex-col gap-5 py-5'>
                <SpecificationsItem
                  heading={'Acceleration'}
                  description={'3.2 s 0-100 km/h'}
                />
                <SpecificationsItem
                  heading={'Top Speed'}
                  description={'250 km/h'}
                />

                <SpecificationsItem
                  heading={'‡Vehicle Power'}
                  description={
                    <>
                      <p>670 hp</p>
                      <i>
                        based on acceleration testing, simulation and battery
                        limits
                      </i>
                    </>
                  }
                />
                <SpecificationsItem
                  heading={'Motor Power (R85)'}
                  description={
                    <>
                      <p>Front: 252 kW</p>
                      <p>Reat: 252 kW x2</p>
                    </>
                  }
                />
                <SpecificationsItem
                  heading={'Powertrain'}
                  description={'Dual Motor Motor'}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default SpecificationsShowcase;
