import { Key } from 'react';

import DirectoryItem from '../directory-item/directory-item.component';

import { DirectoryContainer } from './directory.styles';

export type DirectoryCategory = {
  id: Key;
  title: string;
  imageUrl: string;
  route: string;
};

const categories: DirectoryCategory[] = [
  {
    id: 1,
    title: 'headwear',
    imageUrl: 'https://live.staticflickr.com/65535/53574492897_527979e8b3_o.jpg',
    route: 'shop/headwear',
  },
  {
    id: 2,
    title: 'outerwear',
    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    route: 'shop/outerwear',
  },
  {
    id: 3,
    title: 'shoes',
    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    route: 'shop/shoes',
  },
  {
    id: 4,
    title: 'women',
    imageUrl: 'https://live.staticflickr.com/65535/53575582703_a95a93b9e1_o.jpg',
    route: 'shop/women',
  },
  {
    id: 5,
    title: 'men',
    imageUrl: 'https://live.staticflickr.com/65535/53575898020_4bb727aa9e_o.jpg',
    route: 'shop/men',
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;