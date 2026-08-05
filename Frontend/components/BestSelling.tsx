'use client';
import Title from './Title';
import ProductCard from './ProductCard';
import { productDummyData } from '@/assets/assets';

const BestSelling = () => {
  const displayQuantity = 8;

  // Sort by number of ratings and pick top products
  const bestSellingProducts = productDummyData
    .slice()
    .sort((a, b) => b.rating.length - a.rating.length)
    .slice(0, displayQuantity);

  return (
    <div className="px-6 my-30 max-w-6xl mx-auto">
      <Title
        title="Best Selling"
        description={`Showing ${bestSellingProducts.length} of ${productDummyData.length} products`}
        href="/shop"
      />

      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 xl:gap-8">
        {bestSellingProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BestSelling;
