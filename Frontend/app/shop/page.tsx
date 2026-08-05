'use client'
import { useState, useEffect, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import { productDummyData } from "@/assets/assets"
import ProductCard from "@/components/ProductCard"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

export default function ShopPage() {
  const searchParams = useSearchParams()
  const categoryFromQuery = searchParams.get("category") || "All"
  
  const [selectedCategory, setSelectedCategory] = useState(categoryFromQuery)

  useEffect(() => {
    // Update state when query changes
    setSelectedCategory(categoryFromQuery)
  }, [categoryFromQuery])

  const categories = ["All", "Headphones", "Speakers", "Watch", "Earbuds", "Mouse", "Decoration"]

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "All") return productDummyData
    return productDummyData.filter(product => product.category === selectedCategory)
  }, [selectedCategory])

  return (
    <>
      <Navbar />

      <main className="container mx-auto px-4 py-8 text-slate-700 min-h-screen">
        <h1 className="text-3xl font-bold mb-6">Shop Products</h1>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-start gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-lg border transition-all ${
                selectedCategory === cat
                  ? "bg-slate-800 text-white border-slate-800"
                  : "border-slate-300 text-slate-700 hover:bg-slate-100"
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  )
}
