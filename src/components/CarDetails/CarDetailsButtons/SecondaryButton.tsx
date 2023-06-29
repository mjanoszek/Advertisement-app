import React from 'react';

function secondaryButton({ theme }) {
  return (
    <button
      type="button"
      className={`border-2 rounded-md w-full p-2 px-14 mt-2 font-medium min-[600px]:w-fit ${theme == 'dark' ? 'bg-black border-white text-white' : 'bg-white border-white text-white' } `}>
      Order now
    </button>
  );
}

export default secondaryButton;