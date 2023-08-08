import React from 'react';
import { useParams } from 'react-router-dom';
import { getPropertyById } from '../data/PropertyList';
import { getCarById } from '../data/CarsList';
import { getWatchById } from '../data/WatchesList';
import PropertyDetails from '../components/PropertyDetails/PropertyDetails';
import CarDetails from '../components/CarDetails/CarDetails';
import WatchesDetails from '../components/WatchesDetails/WatchesDetails';
import { getJetById } from '../data/JetsList';
import JetsDetails from '../components/JetsDetails/JetsDetails';
import { PropertyItem } from '../types/PropertyItem';
import { CarItem } from '../types/CarItem';
import { WatchItem } from '../types/WatchItem';
import { JetItem } from '../types/JetItem';

type DataItem = PropertyItem | CarItem | WatchItem | JetItem;

function ProductProfile() {
  const { carID, propertyID, watchID, jetID } = useParams();

  let data: DataItem | undefined;

  if (propertyID) {
    data = getPropertyById(Number(propertyID));
  } else if (carID) {
    data = getCarById(Number(carID));
  } else if (watchID) {
    data = getWatchById(Number(watchID));
  } else if (jetID) {
    data = getJetById(Number(jetID));
  }

  return (
    <>
      {data && (
        <>
          {propertyID && <PropertyDetails data={data as PropertyItem} />}
          {carID && <CarDetails data={data as CarItem} />}
          {watchID && <WatchesDetails data={data as WatchItem} />}
          {jetID && <JetsDetails data={data as JetItem} />}
        </>
      )}
    </>
  );
}

export default ProductProfile;
