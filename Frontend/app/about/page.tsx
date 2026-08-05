import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Truck, Shield } from "lucide-react"

export default function AboutPage() {
  const features = [
    {
      icon: Users,
      title: "Customer First",
      description: "We prioritize our customers' satisfaction above everything else, ensuring exceptional service.",
    },
    {
      icon: Award,
      title: "Quality Products",
      description: "Every product in our catalog is carefully selected for quality, durability, and value.",
    },
    {
      icon: Truck,
      title: "Fast Shipping",
      description: "Free shipping on all orders with quick delivery to get your products to you faster.",
    },
    {
      icon: Shield,
      title: "Secure Shopping",
      description: "Your personal and payment information is protected with industry-standard security.",
    },
  ]

  return (
    <>
    <Navbar/>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white text-slate-700">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6 text-slate-800">About ShopMart</h1>
        <p className="text-lg text-slate-500 max-w-3xl mx-auto">
          Your trusted online shopping destination, committed to bringing you the best products at unbeatable prices
          with exceptional customer service.
        </p>
      </div>

      {/* Story Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-slate-800">Our Story</h2>
          <div className="space-y-4 text-slate-500 leading-relaxed">
            <p>
              Founded in 2020, ShopMart began as a small startup with a big vision: to make quality products accessible
              to everyone, everywhere. What started as a passion project has grown into a trusted e-commerce platform
              serving thousands of customers worldwide.
            </p>
            <p>
              We believe that shopping online should be simple, secure, and enjoyable. That's why we've built our
              platform with cutting-edge technology and a customer-first approach, ensuring every interaction with
              ShopMart exceeds your expectations.
            </p>
            <p>
              Today, we continue to expand our product catalog, improve our services, and build lasting relationships
              with our customers. Every purchase you make helps us grow and serve you better.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Card className="w-full max-w-md aspect-square shadow-md rounded-2xl border border-slate-100 flex items-center justify-center bg-white">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-slate-800 flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">S</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-800">ShopMart</h3>
              <p className="text-slate-500">Est. 2020</p>
            </div>
          </Card>
        </div>
      </div>

      {/* Features Grid */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">Why Choose ShopMart?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center shadow-md rounded-2xl border border-slate-100 bg-white"
            >
              <CardContent className="p-6">
                <feature.icon className="h-12 w-12 text-slate-800 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2 text-slate-800">{feature.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Mission Section */}
      <Card className="shadow-md rounded-2xl border border-slate-100 bg-white text-center">
        <CardContent className="p-8">
          <h2 className="text-3xl font-bold mb-6 text-slate-800">Our Mission</h2>
          <p className="text-lg text-slate-500 max-w-4xl mx-auto leading-relaxed">
            To democratize access to quality products by providing an exceptional online shopping experience that combines
            competitive pricing, reliable service, and innovative technology. We're committed to building a sustainable
            business that benefits our customers, partners, and communities.
          </p>
        </CardContent>
      </Card>
    </div>
    <Footer/>
    </>

  )
}
