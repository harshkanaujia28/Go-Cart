'use client';

import React from 'react';
import ProductCard from './ProductCard';
import Title from './Title';
import { productDummyData } from '@/assets/assets';

interface Product {
  id: string;
  name: string;
  images: string[];
  rating: any[];
  price: number;
  mrp?: number;
  offerPercent?: number;
  createdAt: string;
}

const LatestProducts: React.FC = () => {
  const displayQuantity = 4;

  // Sort latest products by date
  const latestProducts = productDummyData
    .slice()
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, displayQuantity);

  return (
    <div className='px-6 my-30 max-w-6xl mx-auto'>
      <Title
        title='Latest Products'
        description={`Showing ${latestProducts.length} of ${productDummyData.length} products`}
        href='/shop'
      />
      <div className='mt-12 grid grid-cols-2 sm:flex flex-wrap gap-6 justify-between'>
        {latestProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;
