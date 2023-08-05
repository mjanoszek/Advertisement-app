import React from 'react';
import { useParams } from 'react-router-dom';
import { getPropertyById } from '../data/PropertyList';
import { getCarById } from '../data/CarsList';
import { getWatchById } from '../data/WatchesList';
import PropertyDetails from '../components/PropertyDetails/PropertyDetails';
import CarDetails from '../components/CarDetails/CarDetails';
import WatchesDetails from '../components/WatchesDetails/WatchesDetails';

function ProductProfile() {
  const { carID, propertyID, watchID } = useParams();

  let data;
  if (propertyID) {
    data = getPropertyById(Number(propertyID));
  } else if (carID) {
    data = getCarById(Number(carID));
  } else if (watchID) {
    data = getWatchById(Number(watchID));
  }

  return (
    <>
      {propertyID ? (
        <PropertyDetails data={data} />
      ) : carID ? (
        <CarDetails data={data} />
      ) : watchID ? (
        <WatchesDetails data={data} />
      ) : null}
    </>
  );
}

export default ProductProfile;
