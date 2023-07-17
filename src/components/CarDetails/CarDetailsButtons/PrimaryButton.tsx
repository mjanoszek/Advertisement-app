import React from 'react';

function PrimaryButton() {
  return (
    <button
      type="button"
      className='border-2 rounded-md w-full p-2 px-14 mt-2 font-medium min-[600px]:w-fit min-[600px]:px-24 bg-white border-black text-black' >
      Order now
    </button>
  );
}

export default PrimaryButton;