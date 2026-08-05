"use client";

import { StarIcon, TagIcon, EarthIcon, CreditCardIcon, UserIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Counter from "./Counter";
import { useCart } from"@/contexts/CartContext"

// Define the shape of Product props
interface Rating {
  rating: number;
}

interface Product {
  id: string;
  name: string;
  price: number;
  mrp?: number;
  offerPercent?: number;
  images: string[];
  rating: Rating[];
}

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const productId = product.id;
  const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || "$";

  const { cart, addToCart } = useCart();
  const router = useRouter();

  const [mainImage, setMainImage] = useState<string>(product.images[0]);

  const addToCartHandler = () => {
    addToCart({
      id: productId,
      name: product.name,
      price: product.price,
      qty: 1,
      image: product.images[0],
    });
  };

  const averageRating =
    product.rating.reduce((acc, item) => acc + item.rating, 0) /
    (product.rating.length || 1);

  // ✅ Check if product has an offer
  const hasOffer =
    (product.offerPercent && product.offerPercent > 0) ||
    (product.mrp && product.mrp > product.price);

  // ✅ Use offerPercent if provided, otherwise calculate from mrp/price
  const discountPercent = product.offerPercent
    ? product.offerPercent
    : product.mrp && product.mrp > product.price
      ? Math.round(((product.mrp - product.price) / product.mrp) * 100)
      : 0;

  const inCart = cart.find((item) => item.id === productId);

  return (
    <div className="flex max-lg:flex-col gap-12">
      {/* Images */}
      <div className="flex max-sm:flex-col-reverse gap-3">
        <div className="flex sm:flex-col gap-3">
          {product.images.map((image, index) => (
            <div
              key={index}
              onClick={() => setMainImage(product.images[index])}
              className="bg-slate-100 flex items-center justify-center size-26 rounded-lg group cursor-pointer"
            >
              <Image
                src={image}
                className="group-hover:scale-103 group-active:scale-95 transition"
                alt={product.name}
                width={45}
                height={45}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center h-100 sm:size-113 bg-slate-100 rounded-lg">
          <Image src={mainImage} alt={product.name} width={250} height={250} />
        </div>
      </div>

      {/* Info */}
      <div className="flex-1">
        <h1 className="text-3xl font-semibold text-slate-800">{product.name}</h1>

        {/* Rating */}
        <div className="flex items-center mt-2">
          {Array(5)
            .fill("")
            .map((_, index) => (
              <StarIcon
                key={index}
                size={14}
                className="text-transparent mt-0.5"
                fill={averageRating >= index + 1 ? "#00C950" : "#D1D5DB"}
              />
            ))}
          <p className="text-sm ml-3 text-slate-500">
            {product.rating.length} Reviews
          </p>
        </div>

        {/* Price Section */}
        <div className="flex items-start my-6 gap-3 text-2xl font-semibold text-slate-800">
          <p className={hasOffer ? "text-green-600" : ""}>
            {currency}{product.price}
          </p>
          {hasOffer && (
            <p className="text-xl text-slate-500 line-through">
              {currency}{product.mrp}
            </p>
          )}
        </div>

        {/* Offer Text */}
        {hasOffer && (
          <div className="flex items-center gap-2 text-slate-500">
            <TagIcon size={14} />
            <p>Save {discountPercent}% right now</p>
          </div>
        )}

        {/* Cart Actions */}
        <div className="flex items-end gap-5 mt-10">
          {inCart && (
            <div className="flex flex-col gap-3">
              <p className="text-lg text-slate-800 font-semibold">Quantity</p>
              <Counter productId={productId} />
            </div>
          )}
          <button
            onClick={() =>
              !inCart ? addToCartHandler() : router.push("/cart")
            }
            className="bg-slate-800 text-white px-10 py-3 text-sm font-medium rounded hover:bg-slate-900 active:scale-95 transition"
          >
            {!inCart ? "Add to Cart" : "View Cart"}
          </button>
        </div>

        <hr className="border-gray-300 my-5" />

        {/* Extra Info */}
        <div className="flex flex-col gap-4 text-slate-500">
          <p className="flex gap-3">
            <EarthIcon className="text-slate-400" /> Free shipping worldwide
          </p>
          <p className="flex gap-3">
            <CreditCardIcon className="text-slate-400" /> 100% Secured Payment
          </p>
          <p className="flex gap-3">
            <UserIcon className="text-slate-400" /> Trusted by top brands
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
