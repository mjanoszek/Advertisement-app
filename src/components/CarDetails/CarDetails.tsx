import React from 'react';
import Navbar from '../Navbar/Navbar';
import CarDetailsCarousel from './CarDetailsCarousel/CarDetailsCarousel';
import {
  plaidAutopilot,
  plaidAutopilotDesktop,
  amsterdamToBrussels,
  brusselsToParis,
  munichToZurich,
  osloToGothenburg,
  plaid1,
  plaid1Desktop,
  plaid3,
  plaid3Desktop,
  plaid4,
  plaid4Desktop,
  plaid5,
  plaid5Desktop,
  plaid6,
  plaid6Desktop,
  plaid7,
  plaid7Desktop,
  plaidVideo1Desktop,
  plaidVideo2Desktop,
  plaidVideo3Desktop,
  plaidVideo4Desktop,
  plaidVideo5Desktop,
  plaidVideo6Desktop,
  plaidVideo7Desktop,
  plaidVideo1,
  plaidVideo2,
  plaidVideo3,
  plaidVideo4,
  plaidVideo5,
  plaidVideo6,
  plaidVideo7,
  plaidPowertrain1,
  plaidPowertrain1Desktop,
  plaidPowertrain2,
  plaidPowertrain2Desktop,
  plaidStyle,
  plaidStyleDesktop,
  plaidAerodynamics,
  plaidAerodynamicsDesktop,
  plaidWheels,
  plaidWheelsDesktop,
  plaidAutopark,
  plaidLaneChange,
  plaidNavigateAutopilot,
  plaidSummon,
  modelS,
} from '../../assets/Images/Cars/Tesla/plaidImport';
import CarDetailsAnimation from './CarDetailsAnimation/CarDetailsAnimation';
import CarDetailsVideoCarousel from './CarDetailsVideoCarousel/CarDetailsVideoCarousel';
import { useMediaQuery } from 'react-responsive';
import CarDetailsBackgroundContent from './CarDetailsBackgroundContent/CarDetailsBackgroundContent';
import CarDetailsSection from './CarDetailsSection/CarDetailsSection';
import CarDetailsTextAnimation from './CarDetailsTextAnimation/CarDetailsTextAnimation';
import SecondaryButton from './CarDetailsButtons/SecondaryButton';
import { FaSmileWink } from 'react-icons/fa';
import SpecificationsShowcase from './SpecificationsShowcase/SpecificationsShowcase';
import PrimaryButton from './CarDetailsButtons/PrimaryButton';

interface CarDetailsProps {
  data: {
    range: string;
    ZeroToHundred: string;
    topSpeed: string;
    yearOfManufacture: string;
    power: string;
  };
}

function CarDetails({ data }: CarDetailsProps) {
  const isMobile = useMediaQuery({ maxWidth: 600 });

  const plaidBackground = isMobile ? plaid1 : plaid1Desktop;
  const interiorBackground = isMobile ? plaid3 : plaid3Desktop;
  const Video1 = isMobile ? plaidVideo1 : plaidVideo1Desktop;
  const Video2 = isMobile ? plaidVideo2 : plaidVideo2Desktop;
  const Video3 = isMobile ? plaidVideo3 : plaidVideo3Desktop;
  const Video4 = isMobile ? plaidVideo4 : plaidVideo4Desktop;
  const Video5 = isMobile ? plaidVideo5 : plaidVideo5Desktop;
  const stayConnectedImage = isMobile ? plaid6 : plaid6Desktop;
  const immersiveSoundVideo = isMobile ? plaidVideo6 : plaidVideo6Desktop;
  const spaceImage = isMobile ? plaid7 : plaid7Desktop;
  const plaidBackground2 = isMobile ? plaid5 : plaid5Desktop;
  const powertrainImage = isMobile ? plaidPowertrain1 : plaidPowertrain1Desktop;
  const powertrainImage2 = isMobile
    ? plaidPowertrain2
    : plaidPowertrain2Desktop;
  const plaidBackground3 = isMobile ? plaid4 : plaid4Desktop;
  const plaidWheelsImage = isMobile ? plaidWheels : plaidWheelsDesktop;
  const plaidAerodynamicsImage = isMobile
    ? plaidAerodynamics
    : plaidAerodynamicsDesktop;
  const plaidStyleImage = isMobile ? plaidStyle : plaidStyleDesktop;
  const travelVideo = isMobile ? plaidVideo7 : plaidVideo7Desktop;
  const plaidAutopilotImage = isMobile ? plaidAutopilot : plaidAutopilotDesktop;

  const teslaVideosData = [
    {
      url: Video1,
      heading: 'Cinematic Experience',
      text: 'A 17” touchscreen with left-right tilt offers 2200 x 1300 resolution, true colors and exceptional responsiveness for gaming, movies and more.',
    },
    {
      url: Video2,
      heading: 'Yoke Steering',
      text: 'A bold new approach gives you a true connection to Model S, offering better steering feel and unobstructed views of your dash and the road ahead. Tap the brake and Model S automatically selects the correct direction to start your trip.',
    },
    {
      url: Video3,
      heading: 'Perfect Environment',
      text: 'Air vents are hidden throughout the cabin, while tri-zone temperature controls, ventilated seats and HEPA filtration deliver the perfect environment.',
    },
    {
      url: Video4,
      heading: 'Redesigned Second Row',
      text: 'Seating for three adults, with extra legroom, headroom and a stowable armrest with integrated storage and wireless charging.',
    },
    {
      url: Video5,
      heading: 'Console-Grade Gaming',
      text: 'Up to 10 teraflops of processing power unlock in-car gaming on-par with today’s newest consoles. Play from any seat with wireless controller and headset compatibility.',
    },
  ];

  const autopilotFeaturesVideos = [
    {
      url: plaidAutopark,
      heading: 'Autopark',
      text: 'Parallel and perpendicular parking with a single touch',
    },
    {
      url: plaidNavigateAutopilot,
      heading: 'Navigate on Autopilot',
      text: 'Active guidance from on-ramp to off-ramp',
    },
    {
      url: plaidLaneChange,
      heading: 'Auto Lane change',
      text: 'Automatically change lanes while driving on the highway',
    },
    {
      url: plaidSummon,
      heading: 'Summon',
      text: 'Automatically retrieve your car',
    },
  ];

  const powerTrainImages = [
    {
      url: powertrainImage,
      heading: 'Model S',
      text: 'Dual Motor All-Wheel Drive unlocks more range than any other vehicle in our current lineup, with insane power and maximum control.',
      zeroToHundred: '3.2 s',
      range: '634 km',
    },
    {
      url: powertrainImage2,
      heading: 'Model S Plaid',
      text: 'Maintain 1,000+ horsepower all the way to 322 km/h with Tri-Motor All-Wheel Drive, featuring torque vectoring and three independent carbon-sleeved rotors.',
      zeroToHundred: '2.1 s*',
      range: '600 km',
    },
  ];

  const travelImages = [
    {
      url: munichToZurich,
      name: 'Munich to Zurich',
      distance: '311 km',
    },
    {
      url: amsterdamToBrussels,
      name: 'Amsterdam to Brussels',
      distance: '203 km',
    },
    {
      url: brusselsToParis,
      name: 'Brussels to Paris',
      distance: '320 km',
    },
    {
      url: osloToGothenburg,
      name: 'Oslo to Gothenburg',
      distance: '295 km',
    },
  ];

  return (
    <>
      <Navbar isAbsolute={true} />

      <CarDetailsBackgroundContent
        data={data}
        backgroundImageSource={plaidBackground}
        heading={'Model S'}
        paragraph={'Plaid'}
        showButton={true}
        firstStat={data.range}
        secondStat={data.ZeroToHundred}
        thirdStat={data.topSpeed}
        firstStatParagraph={'Range (WLTP)'}
        secondStatParagraph={'0-100 km/h'}
        thirdStatParagraph={'Top Speed†'}
        contentHeight={'h-screen'}
        buttonType={'primary'}
        backgroundVideoSource={null}
      />
      <div className='shadow-[inset 0 -360px calc(69px + (100vh - 768px) * 0.05) 0 rgba(0, 0, 0, 0.6)] flex flex-col items-center justify-center self-center bg-black py-16 text-center text-white'>
        <CarDetailsTextAnimation
          heading={'Interior of the Future'}
          textSize={'2xl'}
        />
      </div>
      <div
        className='shadow-[inset 0 -360px max(69px, 5vh) 0  rgba(0, 0, 0, 0.6)] flex h-screen flex-col justify-center bg-cover bg-center'
        style={{ backgroundImage: `url(${interiorBackground})` }}
      ></div>

      <div className='relative flex flex-col justify-center bg-black text-white'>
        <div className='flex h-full flex-col self-center text-center '>
          <CarDetailsVideoCarousel videoData={teslaVideosData} />

          <div className='flex flex-col gap-14 bg-black pt-24 min-[600px]:gap-6 min-[900px]:px-28 lg:px-36'>
            <CarDetailsAnimation
              imageSrc={stayConnectedImage}
              heading='Stay Connected'
              paragraph='Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.'
              showVideo={false}
              videoUrl={null}
              isReversed={true}
            />

            <CarDetailsAnimation
              imageSrc={null}
              heading='Immersive Sound'
              paragraph='A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers immersive listening and studio-grade sound quality.'
              showVideo={true}
              videoUrl={immersiveSoundVideo}
              isReversed={false}
            />

            <CarDetailsAnimation
              imageSrc={spaceImage}
              heading='Room for Everything'
              paragraph='With front and rear trunks and fold-flat seats you can fit your bike without taking the wheel off—and your luggage too.'
              showVideo={false}
              videoUrl={null}
              isReversed={true}
            />
          </div>
        </div>
      </div>

      <div className='flex w-full flex-col bg-black pt-24'>
        <CarDetailsBackgroundContent
          data={data}
          backgroundImageSource={plaidBackground2}
          heading={null}
          paragraph={null}
          showButton={false}
          firstStat={data.power}
          secondStat={data.yearOfManufacture}
          thirdStat={data.ZeroToHundred}
          firstStatParagraph={'Vehicle Power‡'}
          secondStatParagraph={'Year Of Manufacture'}
          thirdStatParagraph={'0-100 km/h'}
          contentHeight={'h-[65vh]'}
          buttonType={null}
          backgroundVideoSource={null}
        />
      </div>

      <CarDetailsSection
        backgroundColor={'bg-white'}
        textColor={'text-black'}
        heading={'Beyond Ludicrous'}
        description={
          'Model S Plaid has the quickest acceleration of any vehicle in production.Updated battery architecture for all Model S trims enables back-to-back track runs without performance degradation.'
        }
        title={'Plaid'}
        buttonTheme={'light'}
        showTertiaryButton={false}
      />

      <div className='flex flex-col bg-gray-100 py-24 min-[900px]:px-28 lg:px-36'>
        <div className='mb-10 flex flex-col gap-2 px-5'>
          <p className='mb-2 text-3xl font-medium '>Electric Powertrain</p>
          <p className='text-sm lg:text-lg'>
            Model S platforms unite powertrain and battery technologies for
            unrivaled performance, range and efficiency. New module and pack
            thermal architecture allows faster charging and gives you more power
            and endurance in all conditions.
          </p>
        </div>
        <CarDetailsCarousel carouselData={powerTrainImages} type={'images'} />
        <div className='flex h-full justify-center py-10'>
          <p className='text-xs text-gray-600'>* With rollout subtracted</p>
        </div>
      </div>

      <div
        className='shadow-[inset 0 -360px max(69px, 5vh) 0  rgba(0, 0, 0, 0.6)] flex h-[65vh] flex-col justify-center bg-cover bg-center'
        style={{ backgroundImage: `url(${plaidBackground3})` }}
      ></div>
      <div className='relative flex flex-col justify-center bg-black text-white'>
        <CarDetailsSection
          backgroundColor={'bg-black'}
          textColor={'text-white'}
          title={'Exterior'}
          heading={'Designed for Efficiency'}
          description={
            'With a drag coefficient of just .208 Cd, the lowest on the planet, Model S is built for speed, endurance and range. Improved aerodynamics and a wider chassis offer more responsive performance so you can take corners quicker and with more confidence.'
          }
          buttonTheme={'dark'}
          showTertiaryButton={false}
        />
        <div className='flex flex-col gap-14 bg-black pt-24 min-[600px]:gap-6 min-[900px]:px-28 lg:px-36'>
          <CarDetailsAnimation
            imageSrc={plaidWheelsImage}
            heading='Relentless Performance'
            paragraph='Staggered, performance wheels and tires keep the car planted and help transfer maximum power down to the road.'
            showVideo={false}
            videoUrl={null}
            isReversed={false}
          />

          <CarDetailsAnimation
            imageSrc={plaidAerodynamicsImage}
            heading='Optimized Aerodynamics'
            paragraph='Attention to detail on all exterior surfaces makes Model S the most aerodynamic production car on Earth.'
            showVideo={false}
            videoUrl={null}
            isReversed={true}
          />

          <CarDetailsAnimation
            imageSrc={plaidStyleImage}
            heading='Refined Styling'
            paragraph='An iconic silhouette meets refreshed, elegant proportions.'
            showVideo={false}
            videoUrl={null}
            isReversed={false}
          />
        </div>
      </div>

      <div className='flex w-full flex-col bg-black pt-24'>
        <CarDetailsBackgroundContent
          data={data}
          backgroundImageSource={null}
          backgroundVideoSource={travelVideo}
          heading={null}
          paragraph={null}
          showButton={false}
          firstStat={data.power}
          secondStat={data.yearOfManufacture}
          thirdStat={data.ZeroToHundred}
          firstStatParagraph={'Vehicle Power‡'}
          secondStatParagraph={'Year Of Manufacture'}
          thirdStatParagraph={'0-100 km/h'}
          contentHeight={'h-[80vh]'}
          buttonType={null}
        />
      </div>

      <div className='py-10'>
        <CarDetailsSection
          backgroundColor={'bg-white'}
          textColor={'text-black'}
          title={'Range'}
          heading={'Go Anywhere'}
          description={
            'With up to 634 kilometers of estimated range and access to the world’s largest and most powerful fast charging network, you’ll spend less time plugged in and more time on the road.'
          }
          buttonTheme={'light'}
          showTertiaryButton={true}
        />
      </div>

      <div className='flex flex-col bg-white py-12 min-[900px]:px-28 lg:px-36'>
        <div className='mb-10 flex flex-col gap-2 px-5'>
          <p className='mb-2 text-3xl font-medium'>Freedom to Travel</p>
          <p className='text-sm lg:text-lg'>
            Enter a destination on your touchscreen and Trip Planner will
            automatically calculate your route with Superchargers along the way.
          </p>
        </div>
        <CarDetailsCarousel carouselData={travelImages} type={'images'} />
        <div className='flex w-fit self-center '>
          <SecondaryButton theme={'light'} heading={'Learn more'} />
        </div>
      </div>

      <div className='py-10'>
        <CarDetailsSection
          backgroundColor={'bg-white'}
          textColor={'text-black'}
          title={'Safety'}
          heading={'High Impact Protection'}
          description={
            <>
              <p>
                Safety is the most important part of every Tesla. We design our
                vehicles to exceed <u>safety standards</u>.
              </p>
              <br />
              <p>
                <strong>5-Star Rating and Best in Class Safety</strong>
                <br />
                Model S achieved a 2022 5-star Euro NCAP safety rating and won
                the Best in Class awards in the Executive and Pure Electric
                categories.
              </p>
            </>
          }
          buttonTheme={'light'}
          showTertiaryButton={false}
        />
      </div>

      <div className='flex w-full flex-col'>
        <CarDetailsBackgroundContent
          data={data}
          backgroundImageSource={plaidAutopilotImage}
          backgroundVideoSource={null}
          heading={null}
          paragraph={null}
          showButton={false}
          firstStat={'360\u00B0'}
          secondStat={'250m'}
          thirdStat={<FaSmileWink />}
          firstStatParagraph={'Degrees of Visibility'}
          secondStatParagraph={'of Powerful visual processing'}
          thirdStatParagraph={'Tesla Vision'}
          contentHeight={'h-[80vh]'}
          buttonType={null}
        />
      </div>

      <div className='py-10'>
        <CarDetailsSection
          backgroundColor={'bg-white'}
          textColor={'text-black'}
          title={'Autopilot'}
          heading={'Future of Driving'}
          description={
            'Autopilot enables your car to steer, accelerate and brake automatically within its lane under your active supervision, assisting with the most burdensome parts of driving. With over-the-air software updates, the latest enhancements are available instantly.'
          }
          buttonTheme={'light'}
          showTertiaryButton={false}
        />
      </div>

      <div className='flex flex-col bg-white py-12 min-[900px]:px-28 lg:px-36'>
        <div className='mb-10 flex flex-col gap-2 px-5'>
          <p className='mb-2 text-3xl font-medium '>Features</p>
          <p className='text-sm lg:text-lg'>
            Full Self-Driving capability introduces additional features and
            improves existing functionality to make your car more capable over
            time including:
          </p>
        </div>
        <CarDetailsCarousel
          carouselData={autopilotFeaturesVideos}
          type={'videos'}
        />
      </div>
      <div className='bg-black py-24'>
        <SpecificationsShowcase />
      </div>

      <div className='w-full bg-white py-24 min-[900px]:px-28 lg:px-36'>
        <div className='min-[900px]:gap-24 min-[900px]:text-start flex flex-col items-center gap-5 px-5 text-center min-[900px]:flex-row'>
          <div className='flex flex-col gap-2 w-1/3'>
            <p className='text-xl font-bold'>Model S</p>
            <PrimaryButton />
          </div>
          <div className='flex w-2/3 '>
            <img src={modelS} alt='Model S' />
          </div>
        </div>
      </div>
    </>
  );
}

export default CarDetails;
