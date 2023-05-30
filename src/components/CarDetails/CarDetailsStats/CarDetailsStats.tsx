import React from 'react';

function CarDetailsStats({ heading, paragraph }) {
  return (
    <div className="flex flex-col">
      <p className='font-medium text-md'>{heading}</p>
      <p className='text-xs'>{paragraph}</p>
    </div>
  );
}

export default CarDetailsStats;