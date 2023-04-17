import bostonHouse from '../assets/Images/Properties/Boston/boston1.jpeg';
import { boston } from '../assets/Images/Properties/Boston/boston';
import virginiaHouse from '../assets/Images/Properties/Virginia/virginia1.jpeg';
import { virginia } from '../assets/Images/Properties/Virginia/virginia';
import montanaHouse from '../assets/Images/Properties/Montana/montana1.jpeg';
import { montana } from '../assets/Images/Properties/Montana/montana';
import illinoisHouse from '../assets/Images/Properties/illinois/illinois1.jpeg';
import { illinois } from '../assets/Images/Properties/Illinois/illinois';
import nycHouse from '../assets/Images/Properties/NYC/nyc1.jpeg';
import { nyc } from '../assets/Images/Properties/NYC/nyc';


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
  { id: 1, title: 'The Millennium Residences', beds: '3 beds', baths: '3 baths', area: '1989 ft²', image: bostonHouse, images: boston,  location: 'Boston, MA, United States, 240 Devonshire Street', price: '$4,875,000', description: 'The Residences at Winthrop Center: proof that “living centered” is the ultimate luxury. These spectacular residences currently rising in the center of the city will sit atop what will be the largest Passive House office building in the world. They’ll feature climate-positive design and panoramic harbor and city views. The best news of all? Residential sales have officially commenced! The Residences at Winthrop Center lifestyle will begin with Millennium’s signature five-star service and an unprecedented 50,000+ sq. ft. of total luxury amenity space spanning two floors. This includes The Club, with expansive owner’s lounge, two sprawling outdoor terraces, screening room, bar, and more, all supported by Millennium’s exclusive social calendar, La Vie®. The private FLX Wellness Sanctuary will offer state-of-the-art fitness equipment, Pilates and yoga, tranquil treatment and recovery rooms, and a 75-foot indoor lap pool, among other special features.' },
  { id: 2, title: 'Monarch Tysons', beds: '2 beds', baths: '2 baths', area: '2284 ft²', image: virginiaHouse, images: virginia,  location: 'McLean, VA, United States, 7887 Jones Branch Drive', price: '$2,395,000', description: 'The Residences at Winthrop Center: proof that “living centered” is the ultimate luxury. These spectacular residences currently rising in the center of the city will sit atop what will be the largest Passive House office building in the world. They’ll feature climate-positive design and panoramic harbor and city views. The best news of all? Residential sales have officially commenced! The Residences at Winthrop Center lifestyle will begin with Millennium’s signature five-star service and an unprecedented 50,000+ sq. ft. of total luxury amenity space spanning two floors. This includes The Club, with expansive owner’s lounge, two sprawling outdoor terraces, screening room, bar, and more, all supported by Millennium’s exclusive social calendar, La Vie®. The private FLX Wellness Sanctuary will offer state-of-the-art fitness equipment, Pilates and yoga, tranquil treatment and recovery rooms, and a 75-foot indoor lap pool, among other special features.' },
  { id: 3, title: 'Moonlight Basin', beds: '6 beds', baths: '6 baths', area: '4818 ft²', image: montanaHouse, images: montana,  location: 'Big Sky, MT, United States, 66 Mountain Loop Rd', price: '$12,650,000', description: 'The latest edition to the One&Only collection and the first branded resort in the United States: One&Only Moonlight Basin is comprised of six resort buildings, including 73 guest rooms and suites, 19 guest cabins, and 62 Private Homes. The renowned architect Olson Kundig based the overall design aesthetic to take full advantage of the stunning views and natural landscape.' },
  { id: 4, title: 'TRIBUNE TOWER RESIDENCES', beds: '4 beds', baths: '4 baths', area: '4185 ft²', image: illinoisHouse, images: illinois,  location: 'Chicago, IL, United States, 435  Michigan Avenue', price: '$6,675,000', description: 'Tribune Tower Residences offers 162 exquisitely designed condominiums with over 56 distinctive one to four-plus bedroom floor plans. For those who crave luxury, iconic architecture, and every modern amenity imaginable, Tribune Tower Residences has the best of all worlds. It is a once-in-a-lifetime opportunity to live in one of the most architecturally significant buildings, located where the Magnificent Mile and Chicago River meet.' },
  { id: 5, title: 'THE CORTLAND', beds: '5 beds', baths: '5 baths', area: '4089 ft²', image: nycHouse, images: nyc,  location: '555 W 22nd St, New York, NY 10011, USA', price: '$25,000,000', description: 'Inspired by West Chelsea’s historical architecture and rich industrial heritage, The Cortland represents a unique collaboration between two architectural icons, Robert A.M. Stern Architects and Olson Kundig. The Cortland’s 144 expansive residences are a celebration of light and space, with generously proportioned rooms. Extended ceiling heights and large floor plates are the perfect backdrop for art collections, statement furniture pieces, and family heirlooms.' },
  

];

export const getElementById = (id: number) => AdvertisementList.find((el) => el.id == id);


export default AdvertisementList;
