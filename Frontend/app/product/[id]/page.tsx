"use client";

import ProductDescription from "@/components/ProductDescription";
import ProductDetails from "@/components/ProductDetails";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { productDummyData } from "@/assets/assets"; // ✅ import your products
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Product() {
  const params = useParams();
  const productId = params.id as string; // folder is [id], not productId

  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    if (productDummyData.length > 0) {
      const found = productDummyData.find((p) => p.id === productId);
      setProduct(found || null);
    }
    scrollTo(0, 0);
  }, [productId]);

  return (
    <>
    <Navbar/>
    <div className="mx-6">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumbs */}
        <div className="text-gray-600 text-sm mt-8 mb-5">
          Home / Products / {product?.category}
        </div>

        {/* Product Details */}
        {product && <ProductDetails product={product} />}

        {/* Description & Reviews */}
        {product && <ProductDescription product={product} />}

        {!product && (
          <p className="text-center text-slate-500 mt-10">Product not found.</p>
        )}
      </div>
    </div>
    <Footer/>
    </>
  );
}
