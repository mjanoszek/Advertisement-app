import React from 'react';

interface SpecificationsItemProps {
  heading: string;
  description: string | React.ReactNode;
}

function SpecificationsItem({ heading, description }: SpecificationsItemProps) {
  return (
    <div className='flex flex-col gap-1 text-white'>
      <div className='mb-2 h-[0.25px] w-1/5 bg-gray-400'></div>
      <p className='text-sm font-medium'>{heading}</p>
      <p className='text-sm font-normal'>{description}</p>
    </div>
  );
}

export default SpecificationsItem;
