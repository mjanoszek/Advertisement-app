import React from 'react';
import { useParams } from 'react-router-dom';
import { getPropertyById }  from '../data/PropertyList';
import { getCarById }  from '../data/CarsList';
import PropertyDetails from '../components/PropertyDetails/PropertyDetails';
import CarDetails from '../components/CarDetails/CarDetails';


function ProductProfile() {
  const { carID, propertyID } = useParams();
 
  let data;
  if (propertyID) {
    data = getPropertyById(Number(propertyID));
  } else if (carID) {
    data = getCarById(Number(carID));
  }
  return (
    <>
      {propertyID ? <PropertyDetails data={data}/> : <CarDetails data={data}/>}
    </>
  );
}

export default ProductProfile;