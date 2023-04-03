import malibuHouse from '../assets/Images/Properties/Malibu/malibu1.jpeg';
import floridaHouse from '../assets/Images/Properties/Florida/florida1.jpeg';
import { malibu } from '../assets/Images/Properties/Malibu/malibu';
import { florida } from '../assets/Images/Properties/Florida/florida';

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
  { id: 1, title: 'Single Family Residence', beds: '3 beds', baths: '3 baths', area: '5507 ft²', image: malibuHouse, images: malibu,  location: '28034 Sea Lane Dr MALIBU, CA, US', price: '$55,000,000', description: 'Residence, Modern - Malibu, CA Located in a gated community on a private road, this modern estate designed by architect William Hefner embraces the Malibu lifestyle from the moment you arrive! With 88 feet of beach frontage, its envious location is steps from the beach and boasts 180 views of the ocean from the expansive deck. As you enter through the pivot glass door into the stone foyer with interiors designed by Billy Cotton, the spacious living room draws you in to capture the views as you relax in front of the fireplace.' },
  { id: 2, title: 'Single Family Residence', beds: '4 beds', baths: '7 baths', area: '11589 ft²', image: floridaHouse, images: florida, location: '1005 NE Doubloon Drive Stuart, FL, US', price: '$18,500,000', description: 'Welcome to one of the most iconic homes on the Treasure Coast. Situated on a 2.3-plus-acre double lot in Galleon Bay, the property offers 239 feet of unobstructed oceanfront. Completed in 2019, this home marries contemporary design with utter livability. The second-floor entry delivers views of the Atlantic Ocean via a two-story glass wall. Open-concept kitchen with oversized island and private service. The main dining and living rooms maximize all views. Two additional rooms flex as offices or bedrooms. River and Ocean pools with heated spa. The third-level main suite features a barista station, fireplace, living wall, flow-over tub with aqua pillar, glass shower, and massive boutique closets.' },
 

];

export const getElementById = (id: number) => AdvertisementList.find((el) => el.id == id);


export default AdvertisementList;
