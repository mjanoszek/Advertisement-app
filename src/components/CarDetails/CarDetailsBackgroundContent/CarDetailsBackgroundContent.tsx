import React from 'react';
import CarDetailsStats from '../CarDetailsStats/CarDetailsStats';
import { useMediaQuery } from 'react-responsive';
import PrimaryButton from '../CarDetailsButtons/PrimaryButton';
import SecondaryButton from '../CarDetailsButtons/SecondaryButton';

interface CarDetailsBackgroundContentProps {
  data: {
    range: string;
    ZeroToHundred: string;
    topSpeed: string;
    yearOfManufacture: string;
    power: string;
  };
  backgroundImageSource: string;
  contentHeight: string;
  heading: string | null;
  paragraph: string | null;
  showButton: boolean;
  firstStat: string;
  secondStat: string;
  thirdStat: string;
  firstStatParagraph: string;
  secondStatParagraph: string;
  thirdStatParagraph: string;
  buttonType: string | null;
}

function CarDetailsBackgroundContent({
  data, 
  backgroundImageSource, 
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
    <div className={`flex justify-center flex-col bg-cover bg-center ${contentHeight === 'h-screen' ? 'h-screen' : contentHeight } w-full py-10 shadow-[inset_0_-90px_90px_0_rgba(0,0,0,1)]`} style={{ backgroundImage: `url(${backgroundImageSource})` }} >
      {heading && 
       <div className="flex flex-col text-center self-center text-gray-900 mt-36 h-screen">
         <p className='text-4xl font-medium '>{heading}</p>
         <p className='text-xl font-normal '>{paragraph}</p>
       </div>
      }
      <div className={`flex flex-col min-[900px]:flex-row justify-end items-end self-center w-fit ${!showButton && 'h-screen'}`}>
        <div className="mb-8 text-white min-[900px]:px-5">
          <div className="text-lg flex gap-[7vw] text-center">
            <CarDetailsStats heading={firstStat} paragraph={firstStatParagraph}/>
            <CarDetailsStats heading={secondStat} paragraph={secondStatParagraph}/>
            <CarDetailsStats heading={thirdStat} paragraph={thirdStatParagraph}/>
            {isDesktop && showButton && <CarDetailsStats heading={data.power} paragraph={'Vehicle Power‡'}/>} 
          </div>
        </div>
        <div className="flex self-start justify-center w-full min-[900px]:w-fit">
          {buttonType == 'primary' && <PrimaryButton  />} 
          {buttonType == 'secondary' && <SecondaryButton theme={'dark'} />} 
          
        </div>
      </div>
    </div>
  );
}

export default CarDetailsBackgroundContent;