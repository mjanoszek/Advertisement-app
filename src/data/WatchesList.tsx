import { submarinerImages } from '../assets/Images/Watches/Submariner/submariner';
import submariner from '../assets/Images/Watches/Submariner/submariner3.jpeg';
import { WatchItem } from '../types/WatchItem';

export const WatchesList: WatchItem[] = [
  {
    watchID: 1,
    title: 'Rolex Submariner',
    image: submariner,
    images: submarinerImages,
    diameter: '41 mm',
    waterResistance: 'Waterproof to 300 metres / 1,000 feet',
    material: 'Oystersteel',
    location: '510 Madison Avenue, New York New York 10022, USA ',
    price: '$16,500',
    description:
      'The Oyster Perpetual Submariner in Oystersteel with a Cerachrom bezel insert in black ceramic and a black dial with large luminescent hour markers.',
  },
];

export const getWatchById = (watchID: number) =>
  WatchesList.find((watch) => watch.watchID === watchID);

export default WatchesList;
