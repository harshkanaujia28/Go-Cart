"use client"
import { createContext, useContext, useState, ReactNode } from "react"

export interface Address {
  id: string
  fullName: string
  phone: string
  street: string
  city: string
  state: string
  zip: string
}

interface AddressContextType {
  addresses: Address[]
  addAddress: (addr: Address) => void
  removeAddress: (id: string) => void
  clearAddresses: () => void
}

const AddressContext = createContext<AddressContextType | null>(null)

export const AddressProvider = ({ children }: { children: ReactNode }) => {
  const [addresses, setAddresses] = useState<Address[]>([])

  const addAddress = (addr: Address) => setAddresses((prev) => [...prev, addr])
  const removeAddress = (id: string) => setAddresses((prev) => prev.filter((a) => a.id !== id))
  const clearAddresses = () => setAddresses([])

  return (
    <AddressContext.Provider value={{ addresses, addAddress, removeAddress, clearAddresses }}>
      {children}
    </AddressContext.Provider>
  )
}

export const useAddress = () => {
  const ctx = useContext(AddressContext)
  if (!ctx) throw new Error("useAddress must be used inside AddressProvider")
  return ctx
}
