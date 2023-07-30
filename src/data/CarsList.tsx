import plaidImage from '../assets/Images/Cars/Tesla/plaid3.jpeg';
import { plaidMobile } from '../assets/Images/Cars/Tesla/plaidMobile';

interface CarsItem {
  carID: number;
  title: string;
  image: string;
  price: string;
  description: string;
  topSpeed: string;
  power: string;
  range?: string;
  ZeroToHundred: string;
  yearOfManufacture: string;
  images: string[];
}

export const CarsList: CarsItem[] = [
  {
    carID: 1,
    title: 'Tesla Model S',
    topSpeed: '322 km/h',
    price: '95,000$',
    ZeroToHundred: '2.1s',
    power: '1020 HP',
    yearOfManufacture: '2023',
    image: plaidImage,
    images: plaidMobile,
    range: '600km',
    description:
      'Model S Plaid has the quickest acceleration of any vehicle in production. Updated battery architecture for all Model S trims enables back-to-back track runs without performance degradation.',
  },
];

export const getCarById = (carID: number) =>
  CarsList.find((car) => car.carID === carID);

export default CarsList;
