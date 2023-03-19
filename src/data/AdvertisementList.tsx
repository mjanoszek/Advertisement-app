import passatImage from '../assets/passat.jpeg';

interface AdvertisementItem {
  title: string;
  image: string
  category: string,
  location: string, 
  price: string,
  description: string

}

export const AdvertisementList: AdvertisementItem[] = [
  { title: 'Volkswagen Passat 1.9 TDI zadbany', image: passatImage, category: 'cars', location: 'Warszawa', price: '10 900 zł', description: 'Witam mam na sprzed Passata 1.9 TDI. Samochód użytkowany przez żonę do pracy. Autka zadbane ' },

];

export default AdvertisementList;
