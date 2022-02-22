import {getImage} from '../../assets';
import ImageTag from '../../assets/images';

export interface Slide {
  title: string;
  description: string;
  image: any;
  id: string;
}
const data: Array<Slide> = [
  {
    id: '1',
    title: 'Welcome to the app!',
    description: 'This is a simple app to book ambulance.',
    image: getImage(ImageTag.POST),
  },
  {
    id: '2',
    title: 'Book an ambulance',
    description:
      'Just enter your details and we will book an ambulance for you.',
    image: getImage(ImageTag.SEARCH),
  },
  {
    id: '3',
    title: 'Thank you!',
    description: 'We will get back to you soon.',
    image: getImage(ImageTag.THANK_YOU),
  },
];

export default data;
