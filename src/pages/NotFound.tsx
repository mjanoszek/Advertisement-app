import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar/Navbar';


function NotFound() {
  const [gif, setGif] = useState('');
  const [error, setError] = useState('');

  const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
  const funnyGifTags = [
    'Mr Bean',
    'The Office',
    'Gym Fails',
    'Breaking Bad',
    'wtf',
    'rofl',
  ];
  const randomGif = funnyGifTags[Math.floor(Math.random() * funnyGifTags.length)];


  useEffect(() => {
    axios.get(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${randomGif}&rating=G`).then((res) => {
      const data = res.data;
      setGif(data.data.images.downsized_large.url);

    }).catch((err) => {
      setError(err);
    });
    
  }, []);
  
  return (
    <>
      <Navbar isAbsolute={false} />
      <div className="flex flex-col gap-10 justify-center items-center h-screen">
        <h1 className='font-bold text-3xl'>NOT FOUND 404</h1>
        {!error && <img src={gif} alt="notfound" className='h-[250px] md:h-[400px] xl:h-[550px]  shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]' />}
        {error && <p className='font-medium text-center'>{error.toString()}</p>}

      </div>
    </>
  );
}

export default NotFound;