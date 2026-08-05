"use client"
import { createContext, useContext, useState, ReactNode } from "react"

export interface WishlistItem {
  id: string
  name: string
  price: number
  image?: string
}

interface WishlistContextType {
  wishlist: WishlistItem[]
  addToWishlist: (item: WishlistItem) => void
  removeFromWishlist: (id: string) => void
  clearWishlist: () => void
}

const WishlistContext = createContext<WishlistContextType | null>(null)

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([])

  const addToWishlist = (item: WishlistItem) => {
    setWishlist((prev) => {
      if (prev.find((p) => p.id === item.id)) return prev
      return [...prev, item]
    })
  }

  const removeFromWishlist = (id: string) => {
    setWishlist((prev) => prev.filter((p) => p.id !== id))
  }

  const clearWishlist = () => setWishlist([])

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, clearWishlist }}>
      {children}
    </WishlistContext.Provider>
  )
}

export const useWishlist = () => {
  const ctx = useContext(WishlistContext)
  if (!ctx) throw new Error("useWishlist must be used inside WishlistProvider")
  return ctx
}
