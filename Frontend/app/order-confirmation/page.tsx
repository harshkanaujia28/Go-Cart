"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { CheckCircle, Package, Truck, Home } from "lucide-react"

interface OrderData {
  orderId: string
  items: Array<{
    id: number
    name: string
    price: number
    quantity: number
  }>
  total: number
  shippingAddress: {
    firstName: string
    lastName: string
    email: string
    address: string
    city: string
    state: string
    zipCode: string
  }
  orderDate: string
}

export default function OrderConfirmationPage() {
  const searchParams = useSearchParams()
  const orderId = searchParams.get("orderId")
  const [orderData, setOrderData] = useState<OrderData | null>(null)

  useEffect(() => {
    const savedOrder = localStorage.getItem("lastOrder")
    if (savedOrder) {
      try {
        const order = JSON.parse(savedOrder)
        if (order.orderId === orderId) {
          setOrderData(order)
        }
      } catch (error) {
        console.error("Error loading order data:", error)
      }
    }
  }, [orderId])

  if (!orderData) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center py-16">
          <h1 className="text-3xl font-bold mb-4">Order Not Found</h1>
          <p className="text-muted-foreground mb-8">We couldn't find the order you're looking for.</p>
          <Link href="/shop">
            <Button size="lg">Continue Shopping</Button>
          </Link>
        </div>
      </div>
    )
  }

  const orderDate = new Date(orderData.orderDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Success Header */}
      <div className="text-center mb-8">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-green-600 mb-2">Order Confirmed!</h1>
        <p className="text-muted-foreground">Thank you for your purchase. Your order has been successfully placed.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Order Details */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5" />
                Order Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Order ID</p>
                <p className="font-mono font-semibold">{orderData.orderId}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Order Date</p>
                <p className="font-medium">{orderDate}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Amount</p>
                <p className="text-2xl font-bold text-primary">₹{orderData.total.toFixed(2)}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Home className="h-5 w-5" />
                Shipping Address
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                <p className="font-medium">
                  {orderData.shippingAddress.firstName} {orderData.shippingAddress.lastName}
                </p>
                <p>{orderData.shippingAddress.address}</p>
                <p>
                  {orderData.shippingAddress.city}, {orderData.shippingAddress.state}{" "}
                  {orderData.shippingAddress.zipCode}
                </p>
                <p className="text-sm text-muted-foreground pt-2">{orderData.shippingAddress.email}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Truck className="h-5 w-5" />
                Delivery Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span>Estimated Delivery</span>
                  <span className="font-medium">3-5 business days</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Shipping Method</span>
                  <span className="font-medium">Standard Shipping (Free)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Tracking</span>
                  <span className="text-sm text-muted-foreground">Available within 24 hours</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Order Items */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Items Ordered</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {orderData.items.map((item) => (
                <div key={item.id} className="flex justify-between items-center py-2">
                  <div className="flex-1">
                    <p className="font-medium line-clamp-2">{item.name}</p>
                    <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                  </div>
                  <p className="font-medium">₹{(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}

              <Separator />

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{(orderData.total / 1.08).toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>₹{(orderData.total - orderData.total / 1.08).toFixed(2)}</span>
                </div>
              </div>

              <Separator />

              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>₹{orderData.total.toFixed(2)}</span>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="mt-6 space-y-3">
            <Link href="/shop">
              <Button size="lg" className="w-full">
                Continue Shopping
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="w-full bg-transparent">
              Track Your Order
            </Button>
          </div>

          {/* Support Info */}
          <Card className="mt-6">
            <CardContent className="p-4 text-center">
              <p className="text-sm text-muted-foreground mb-2">Need help with your order?</p>
              <Link href="/contact">
                <Button variant="link" className="p-0 h-auto">
                  Contact Customer Support
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
