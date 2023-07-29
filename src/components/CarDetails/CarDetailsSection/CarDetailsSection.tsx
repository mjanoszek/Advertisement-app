import React from 'react';
import { useMediaQuery } from 'react-responsive';
import SecondaryButton from '../CarDetailsButtons/SecondaryButton';
import TertiaryButton from '../CarDetailsButtons/TertiaryButton';

interface CarDetailsSectionProps {
  title: string,
  heading: string,
  description: string | React.ReactNode,
  backgroundColor: string, 
  textColor: string, 
  buttonTheme: string,
  showTertiaryButton: boolean,
}

function CarDetailsSection(
  { 
    title,
    heading,
    description,
    backgroundColor, 
    textColor, 
    buttonTheme,
    showTertiaryButton,
  }: CarDetailsSectionProps,
) {
  const isDesktop = useMediaQuery({ minWidth: 900 });
  return (
    <div className={`flex flex-col justify-start items-start gap-2 text-left ${textColor} ${backgroundColor} p-5 px-5 min-[900px]:px-28 lg:px-36 lg:p-10`}>
      {!isDesktop ?
        <div className="flex flex-col">
          <p className='text-md'>{title}</p>
          <p className='font-medium mb-2 text-2xl'>{heading}</p>          
          <p className='text-sm'>{description}</p>
          <div className="mt-5 flex gap-2 flex-col">
            <SecondaryButton theme={buttonTheme} heading={'Order now'}/>
            {showTertiaryButton && <TertiaryButton/>}
          </div>

        </div>
        :
        <div className="flex flex-row items-center">
          <div className="flex flex-col flex-1 ">
            <p className='text-xl'>{title}</p>
            <p className='font-medium mb-5 text-3xl'>{heading}</p>
            <div className="flex w-fit flex-col">
              <SecondaryButton theme={buttonTheme} heading={'Order now'}/>
              {showTertiaryButton && <TertiaryButton/>}
            </div>

          </div>
          <div className="flex flex-1">
            <p>{description}</p>
          </div>
        </div> 
      }
     
    </div>
  );
}

export default CarDetailsSection;