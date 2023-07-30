import React from 'react';

function PrimaryButton() {
  return (
    <button
      type='button'
      className='mt-2 w-full rounded-md border-2 border-black bg-white p-2 px-14 font-medium text-black min-[600px]:w-fit min-[600px]:px-24'
    >
      Order now
    </button>
  );
}

export default PrimaryButton;
