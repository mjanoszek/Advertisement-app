import React from 'react';
import { useParams } from 'react-router-dom';
import { getElementById }  from '../data/AdvertisementListProperties';
import ProductDetails from '../components/ProductDetails/ProductDetails';

function PropertiesDetails() {
  const { id } = useParams();

  const particularElement = getElementById(Number(id));



  return (
    <>
      <ProductDetails data={particularElement} />
      
    </>
  );
}

export default PropertiesDetails;