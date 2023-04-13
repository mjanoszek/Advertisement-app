import bostonHouse from '../assets/Images/Properties/Boston/boston1.jpeg';
import { boston } from '../assets/Images/Properties/Boston/boston';

interface AdvertisementItem {
  id: number;
  title: string;
  image: string
  location: string, 
  price: string,
  description: string,
  beds: string,
  baths: string,
  area: string,
  images: string[];
}


export const AdvertisementList: AdvertisementItem[] = [
  { id: 1, title: 'The Millennium Residences at Winthrop Center', beds: '3 beds', baths: '3 baths', area: '1989 ft²', image: bostonHouse, images: boston,  location: 'Boston, MA, United States, 240 Devonshire Street', price: '$4,875,000', description: 'The Residences at Winthrop Center: proof that “living centered” is the ultimate luxury. These spectacular residences currently rising in the center of the city will sit atop what will be the largest Passive House office building in the world. They’ll feature climate-positive design and panoramic harbor and city views. The best news of all? Residential sales have officially commenced! The Residences at Winthrop Center lifestyle will begin with Millennium’s signature five-star service and an unprecedented 50,000+ sq. ft. of total luxury amenity space spanning two floors. This includes The Club, with expansive owner’s lounge, two sprawling outdoor terraces, screening room, bar, and more, all supported by Millennium’s exclusive social calendar, La Vie®. The private FLX Wellness Sanctuary will offer state-of-the-art fitness equipment, Pilates and yoga, tranquil treatment and recovery rooms, and a 75-foot indoor lap pool, among other special features.' },
 

];

export const getElementById = (id: number) => AdvertisementList.find((el) => el.id == id);


export default AdvertisementList;
