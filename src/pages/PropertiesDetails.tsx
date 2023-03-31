import React from 'react';
import { useParams } from 'react-router-dom';
import { getElementById }  from '../data/AdvertisementListProperties';
import PropertyDetails from '../components/PropertyDetails/PropertyDetails';

function PropertiesDetails() {
  const { id } = useParams();

  const particularElement = getElementById(Number(id));



  return (
    <>
      <PropertyDetails data={particularElement} />
      
    </>
  );
}

export default PropertiesDetails;