import React from 'react';
import { useParams } from 'react-router-dom';
import { getElementById }  from '../data/AdvertisementListProperties';
import ProductDetails from '../components/ProductDetails/ProductDetails';

function ProductProfile() {
  const { id } = useParams();

  const particularElement = getElementById(Number(id));

  console.log(particularElement);
  return (
    <>
      {particularElement ? (
        <ProductDetails data={particularElement} />
      ) : (
        <p>Loading...</p>
      )}      
    </>
  );
}

export default ProductProfile;