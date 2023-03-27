import React from 'react';
import { useParams } from 'react-router-dom';
import { getElementById }  from '../data/AdvertisementListProperties';

function PropertiesDetails() {
  const { id } = useParams();

  const particularElement = getElementById(Number(id));

  return (
    <div>{JSON.stringify(particularElement)}</div>
  );
}

export default PropertiesDetails;