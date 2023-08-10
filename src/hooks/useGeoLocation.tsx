import { useState, useEffect } from 'react';

interface useGeoLocationProps {
  location: string;
}
const useGeoLocation = ({ location }: useGeoLocationProps) => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    const API_KEY = import.meta.env.VITE_GEO_CODE_API_KEY;

    const fetchData = async () => {
      const response = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
          location
        )}&key=${API_KEY}`
      );

      const dataResponse = await response.json();
      setLongitude(dataResponse.results[0].geometry.lng);
      setLatitude(dataResponse.results[0].geometry.lat);
    };

    fetchData();
  }, [location]);

  return { latitude, longitude };
};

export default useGeoLocation;
