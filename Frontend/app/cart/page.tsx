"use client";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";



export default function CartPage() {
  const { cart, addToCart, removeFromCart } = useCart();
  const { toast } = useToast();

  const [showAddressInput, setShowAddressInput] = useState(false);
  const [address, setAddress] = useState("");

  const updateQuantity = (id: string, newQty: number) => {
    if (newQty <= 0) {
      removeItem(id);
      return;
    }
    const item = cart.find((p) => p.id === id);
    if (item) {
      removeFromCart(id);
      addToCart({ ...item, qty: newQty });
    }
  };

  const removeItem = (id: string) => {
    removeFromCart(id);
    toast({
      title: "Item removed",
      description: "Item has been removed from your cart.",
    });
  };

  if (cart.length === 0) {
    return (
      <> <Navbar /> <div className="flex flex-col min-h-screen"> <div className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center"> <ShoppingBag className="h-24 w-24 text-muted-foreground mb-6" /> <h1 className="text-2xl sm:text-4xl font-semibold mb-4">Your cart is empty</h1> <p className="text-muted-foreground mb-8 text-center"> Looks like you haven't added any items to your cart yet. </p> <Link href="/shop"> <Button size="lg">Start Shopping</Button> </Link> </div> <Footer /> </div> </>
    );
  }

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = 5;
  const total = subtotal + shipping;

  return (
    <>
      <Navbar />
      <div className="min-h-screen mx-6 text-slate-800 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">My Cart</h1>
            <Link
              href="/shop"
              className="text-green-600 text-sm font-medium hover:underline"
            >
              + Add more
            </Link>
          </div>

          <div className="flex items-start justify-between gap-10 max-lg:flex-col">
            {/* Cart Table */}
            <table className="w-full max-w-4xl text-slate-700 border rounded-xl overflow-hidden">
              <thead className="bg-slate-50">
                <tr className="text-slate-500 text-sm">
                  <th className="text-left py-3 px-4">Product</th>
                  <th className="py-3 px-4 text-center">Quantity</th>
                  <th className="py-3 px-4 text-center">Total Price</th>
                  <th className="py-3 px-4 text-center">Remove</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, idx) => (
                  <tr
                    key={item.id}
                    className={`border-t ₹{idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                      }`}
                  >
                    {/* Product */}
                    <td className="flex gap-4 items-center py-5 px-4">
                      <div className="flex items-center justify-center bg-white border rounded-md w-16 h-16 shadow-sm overflow-hidden">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={64}
                          height={64}
                          className="object-contain w-full h-full"
                        />
                      </div>
                      <div>
                        <p className="font-medium text-slate-800">{item.name}</p>
                        <p className="text-sm text-slate-500">
                          {item.category?.subCategory || item.category?.type}
                        </p>
                        <p className="text-slate-700 font-semibold">₹{item.price}</p>
                      </div>
                    </td>

                    {/* Quantity */}
                    <td className="text-center px-4">
                      <div className="inline-flex items-center border rounded-md overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.id, item.qty - 1)}
                          className="px-3 py-2 hover:bg-slate-100"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="px-4 font-medium">{item.qty}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.qty + 1)}
                          className="px-3 py-2 hover:bg-slate-100"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </td>

                    {/* Price */}
                    <td className="text-center px-4 font-semibold text-slate-800">
                      ₹{(item.price * item.qty).toFixed(2)}
                    </td>

                    {/* Remove */}
                    <td className="text-center px-4">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:bg-red-100 p-2 rounded-full"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Payment Summary */}
            <div className="w-full max-w-sm bg-white shadow-md rounded-xl border p-6 sticky top-24">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                Payment Summary
              </h2>

              <div className="space-y-5 text-sm text-slate-700">
                {/* Payment Method */}
                <div>
                  <p className="text-slate-500 mb-2">Payment Method</p>
                  <div className="flex flex-col gap-2">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="payment"
                        defaultChecked
                        className="accent-slate-800"
                      />
                      COD
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="payment" className="accent-slate-800" />
                      Stripe Payment
                    </label>
                  </div>
                </div>

                <hr />

                {/* Address */}
                <div>
                  <p className="text-slate-500 mb-2">Address</p>
                  {!showAddressInput ? (
                    <button
                      onClick={() => setShowAddressInput(true)}
                      className="text-slate-700 flex items-center gap-1 hover:underline text-sm"
                    >
                      Add Address <span className="text-lg leading-none">+</span>
                    </button>
                  ) : (
                    <div className="space-y-2">
                      <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Enter your address"
                        className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-slate-400"
                      />
                      <div className="flex justify-end gap-2">
                        <button
                          onClick={() => setShowAddressInput(false)}
                          className="px-3 py-1 text-sm rounded-md border hover:bg-slate-100"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={() => setShowAddressInput(false)}
                          className="px-3 py-1 text-sm rounded-md bg-slate-800 text-white hover:bg-slate-700"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                <hr />

                {/* Price Details */}
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span className="font-medium">₹{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping:</span>
                    <span className="font-medium">₹{shipping}</span>
                  </div>
                </div>

                {/* Coupon */}
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Coupon Code"
                    className="flex-1 border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-slate-400"
                  />
                  <button className="bg-slate-800 text-white px-4 rounded-md hover:bg-slate-700">
                    Apply
                  </button>
                </div>

                {/* Total */}
                <div className="flex justify-between font-semibold text-slate-800 text-base">
                  <span>Total:</span>
                  <span>₹{total.toFixed(2)}</span>
                </div>
              </div>

              {/* Place Order */}
                <Link href="/checkout">
              <button className="w-full mt-6 bg-slate-800 text-white py-3 rounded-lg font-medium hover:bg-slate-700 active:scale-95 transition">
                Place Order
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
