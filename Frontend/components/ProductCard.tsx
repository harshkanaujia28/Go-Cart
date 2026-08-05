'use client'
import { StarIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductCard = ({ product }) => {
  const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || '$'

  // Calculate average rating
  const rating = Math.round(
    product.rating.reduce((acc, curr) => acc + curr.rating, 0) / product.rating.length
  )

  // Check if product has discount
  const hasDiscount = product?.offerPercent && product.offerPercent > 0

  return (
    <Link href={`/product/${product.id}`} className="group max-xl:mx-auto relative">
      {/* Product Image Box */}
      <div className="bg-[#F5F5F5] h-40 sm:w-60 sm:h-68 rounded-lg flex items-center justify-center relative overflow-hidden">
        <Image
          width={500}
          height={500}
          className="max-h-30 sm:max-h-40 w-auto group-hover:scale-115 transition duration-300"
          src={product.images[0]}
          alt={product.name}
        />

        {/* Discount Badge */}
        {hasDiscount && (
          <span className="absolute top-2 left-2 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded-md shadow-md">
            {product.offerPercent}% OFF
          </span>
        )}
      </div>

      {/* Product Info */}
      <div className="flex justify-between gap-3 text-sm text-slate-800 pt-2 max-w-60">
        <div>
          <p className="font-medium">{product.name}</p>
          <div className="flex mt-1">
            {Array(5)
              .fill('')
              .map((_, index) => (
                <StarIcon
                  key={index}
                  size={14}
                  className="text-transparent mt-0.5"
                  fill={rating >= index + 1 ? '#00C950' : '#D1D5DB'}
                />
              ))}
          </div>
        </div>

        {/* Price Section */}
        <div className="text-right">
          {hasDiscount ? (
            <>
              <p className="text-green-600 font-semibold">{currency}{product.price}</p>
              <p className="text-gray-400 text-xs line-through">{currency}{product.mrp}</p>
            </>
          ) : (
            <p>{currency}{product.price}</p>
          )}
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
