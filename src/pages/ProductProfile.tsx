import React from 'react';
import { useParams } from 'react-router-dom';
import { getPropertyById } from '../data/PropertyList';
import { getCarById } from '../data/CarsList';
import { getWatchById } from '../data/WatchesList';
import ProductDetails from '../components/ProductDetails/ProductDetails';
import CarDetails from '../components/CarDetails/CarDetails';
import { getJetById } from '../data/JetsList';
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
          {propertyID && (
            <ProductDetails
              data={data as PropertyItem}
              productCategory={'Property'}
            />
          )}
          {carID && <CarDetails data={data as CarItem} />}
          {watchID && (
            <ProductDetails
              data={data as WatchItem}
              productCategory={'Watch'}
            />
          )}
          {jetID && (
            <ProductDetails data={data as JetItem} productCategory={'Jet'} />
          )}
        </>
      )}
    </>
  );
}

export default ProductProfile;
