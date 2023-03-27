import malibuHouse from '../assets/Images/Properties/Malibu/malibu1.jpeg';

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

}


export const AdvertisementList: AdvertisementItem[] = [
  { id: 1, title: 'Single Family Residence', beds: '3 beds', baths: '3 baths', area: '5507 ft²', image: malibuHouse, location: '28034 Sea Lane Dr MALIBU, CA, US', price: '$55,000,000', description: 'Single Family Residence, Modern - Malibu, CA Located in a gated community on a private road, this modern estate designed by architect William Hefner embraces the Malibu lifestyle from the moment you arrive! With 88 feet of beach frontage, its envious location is steps from the beach and boasts 180 views of the ocean from the expansive deck. As you enter through the pivot glass door into the stone foyer with interiors designed by Billy Cotton, the spacious living room draws you in to capture the views as you relax in front of the fireplace. The sliding glass doors open to the expansive deck to enjoy indoor-outdoor living. Experience a one-of-a-kind kitchen equipped with Miele and Gaggenau appliances, floating shelves, a built-in keg, wine fridges, and a large walk-in pantry. With skylights overhead, an ocean view breakfast nook and additional island bar seating, sliding glass doors open to a BBQ island, and an outdoor dining area. The owner\'s suite is a masterpiece spanning the entire top floor for the ultimate privacy. Wood floors and glass walls provide a remarkable backdrop to display your art collection on the built-in shelving throughout the room. The owner\'s ensuite boasts uncompromising quality with a Toto washlet, freestanding tub, resort-style shower, and stone countertops. The suite is complete with a large walk-in closet and a wrap-around balcony. Two additional bedrooms and a media room round out the spaces in this estate. The media room features wood-paneled walls and doors leading to the deck, complete with a lounge area, jacuzzi, additional dining spaces, and heaters, providing everything you need for year-round entertaining. A meticulously landscaped yard with low-maintenance succulents provides year-round beauty to enhance the outdoor spaces. In addition, to a two-car garage, guest park area, and gated entry, the home is equipped with security cameras on the property, a full-house alarm system, and a built-in sound system.' },
 

];

export const getElementById = (id: number) => AdvertisementList.find((el) => el.id == id);


export default AdvertisementList;
