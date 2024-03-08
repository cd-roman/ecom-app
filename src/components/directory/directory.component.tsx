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
    imageUrl: 'https://live.staticflickr.com/65535/53573232162_70d0d8684c_w.jpg',
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
    imageUrl: 'https://live.staticflickr.com/65535/53574295263_bae20e5948_c.jpg',
    route: 'shop/women',
  },
  {
    id: 5,
    title: 'men',
    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
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