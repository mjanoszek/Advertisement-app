import { gulfImages } from '../assets/Images/Jets/Gulf/gulf';
import gulf from '../assets/Images/Jets/Gulf/gulf1.jpeg';
import { JetItem } from '../types/JetItem';

export const JetsList: JetItem[] = [
  {
    jetID: 1,
    title: 'Gulfstream G650',
    image: gulf,
    images: gulfImages,
    maxSpeed: '1,133 km/h',
    range: '12.964 km',
    location: 'JFK Access Rd, Jamaica, NY 11430, USA',
    engine: '2 x Rolls-Royce BR725',
    price: 'From $68,500,000',
    description:
      'Gulfstream first introduced the G650 to the public in 2008 as the successor to the popular G550. At the time, it was the largest, fastest and most expensive business jet the company had ever produced. In the meantime, it has been replaced in this role by the G700. Today, the aircraft comes in two variants: G650 and G650ER. The Gulfstream G650ER has a larger fuel capacity and allows for longer ranges than the standard variant. The G650 can carry a maximum of 19 passengers on flights of up to 12,964 kilometres. This allows luxury private jet travel from Frankfurt, Zurich or Vienna to distant destinations such as Singapore, Los Angeles, Buenos Aires or Cape Town without refuelling stops.',
  },
];

export const getJetById = (jetID: number) =>
  JetsList.find((jet) => jet.jetID === jetID);

export default JetsList;
