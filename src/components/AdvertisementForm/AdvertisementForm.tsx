import React, { useState } from 'react';

function AdvertisementForm() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => setShowMore(!showMore);

  const fullText =
    'By submitting an email through this form, you represent and warrant that you have obtained all necessary consents, approvals, and authorizations from any third parties whose personal information or other sensitive data you may include in your message. You further agree to use this form only for lawful purposes and not to send any unsolicited or unauthorized commercial messages or spam. You acknowledge that the transmission of any information through this form is at your own risk and that you are solely responsible for any consequences or damages that may arise from such transmission';

  const truncatedText = (
    <p className='text-xs'>
      {fullText.slice(0, 100)}...{' '}
      <span onClick={toggleShowMore} className='text-blue-700'>
        Read more
      </span>
    </p>
  );

  const textToShow = (
    <p className='text-xs'>
      {fullText}{' '}
      <span onClick={toggleShowMore} className='text-blue-700'>
        Read less
      </span>
    </p>
  );
  return (
    <form className='mt-10 flex h-fit w-[250px] flex-col gap-2 self-center rounded-md border border-gray-400 p-3 text-center shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] lg:ml-5 lg:w-[350px] lg:gap-5'>
      <p className='p-2 text-xl font-medium xl:text-2xl'>
        Request for more information
      </p>
      <input
        type='text'
        className='rounded-sm border border-black p-2'
        placeholder='Name'
      />
      <input
        type='email'
        className='rounded-sm border border-black p-2'
        placeholder='Email'
      />
      <input
        type='tel'
        className='rounded-sm border border-black p-2'
        placeholder='Your phone'
      />
      <textarea
        className='resize rounded-sm border border-black p-2'
        rows={parseInt('4')}
        placeholder='Write a message'
      ></textarea>
      <input
        type='submit'
        value='Send'
        className='w-1/3 self-center rounded-sm border border-black p-1'
      />
      <div>{showMore ? textToShow : truncatedText}</div>
    </form>
  );
}

export default AdvertisementForm;
