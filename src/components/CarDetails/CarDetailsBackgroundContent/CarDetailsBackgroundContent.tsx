import React from 'react';
import CarDetailsStats from '../CarDetailsStats/CarDetailsStats';
import { useMediaQuery } from 'react-responsive';
import PrimaryButton from '../CarDetailsButtons/PrimaryButton';
import SecondaryButton from '../CarDetailsButtons/SecondaryButton';
import ReactPlayer from 'react-player';

interface CarDetailsBackgroundContentProps {
  data: {
    range: string;
    ZeroToHundred: string;
    topSpeed: string;
    yearOfManufacture: string;
    power: string;
  };
  backgroundImageSource: string | null;
  backgroundVideoSource: string | null;
  contentHeight: string;
  heading: string | null;
  paragraph: string | null;
  showButton: boolean;
  firstStat: string;
  secondStat: string;
  thirdStat: string | React.ReactNode;
  firstStatParagraph: string;
  secondStatParagraph: string;
  thirdStatParagraph: string;
  buttonType: string | null;
}

function CarDetailsBackgroundContent({
  data,
  backgroundImageSource,
  backgroundVideoSource,
  contentHeight,
  heading,
  paragraph,
  showButton,
  firstStat,
  secondStat,
  thirdStat,
  firstStatParagraph,
  secondStatParagraph,
  thirdStatParagraph,
  buttonType,
}: CarDetailsBackgroundContentProps) {
  const isDesktop = useMediaQuery({ minWidth: 900 });
  return (
    <>
      {backgroundImageSource && (
        <div
          className={`flex flex-col justify-center bg-cover bg-center ${
            contentHeight === 'h-screen' ? 'h-screen' : contentHeight
          } w-full py-10 shadow-[inset_0_-90px_90px_0_rgba(0,0,0,1)]`}
          style={{ backgroundImage: `url(${backgroundImageSource})` }}
        >
          {heading && (
            <div className='mt-36 flex h-screen flex-col self-center text-center text-gray-900'>
              <p className='text-4xl font-medium '>{heading}</p>
              <p className='text-xl font-normal '>{paragraph}</p>
            </div>
          )}
          <div
            className={`flex w-fit flex-col items-end justify-end self-center min-[900px]:flex-row ${
              !showButton && 'h-screen'
            }`}
          >
            <div className='mb-8 text-white min-[900px]:px-5'>
              <div className='flex gap-[7vw] text-center text-lg'>
                <CarDetailsStats
                  heading={firstStat}
                  paragraph={firstStatParagraph}
                />
                <CarDetailsStats
                  heading={secondStat}
                  paragraph={secondStatParagraph}
                />
                <CarDetailsStats
                  heading={thirdStat}
                  paragraph={thirdStatParagraph}
                />
                {isDesktop && showButton && (
                  <CarDetailsStats
                    heading={data.power}
                    paragraph={'Vehicle Power‡'}
                  />
                )}
              </div>
            </div>
            <div className='flex w-full justify-center self-start min-[900px]:w-fit'>
              {buttonType == 'primary' && <PrimaryButton />}
              {buttonType == 'secondary' && (
                <SecondaryButton theme={'dark'} heading={'Order now'} />
              )}
            </div>
          </div>
        </div>
      )}

      {backgroundVideoSource && (
        <div className='relative'>
          <ReactPlayer
            className='object-cover'
            url={backgroundVideoSource}
            playing={true}
            loop={true}
            muted={true}
            width='100%'
            height='100%'
          />

          <div
            className={
              'absolute inset-0 flex flex-col items-center  justify-end self-center'
            }
          >
            <div className='mb-8 text-white min-[900px]:px-5 '>
              <div className='flex gap-[7vw]  text-center text-lg  '>
                <CarDetailsStats
                  heading={firstStat}
                  paragraph={firstStatParagraph}
                />
                <CarDetailsStats
                  heading={secondStat}
                  paragraph={secondStatParagraph}
                />
                <CarDetailsStats
                  heading={thirdStat}
                  paragraph={thirdStatParagraph}
                />
                {isDesktop && showButton && (
                  <CarDetailsStats
                    heading={data.power}
                    paragraph={'Vehicle Power‡'}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CarDetailsBackgroundContent;
