"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    contactMethod: "email",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Message sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    })
    setFormData({ name: "", email: "", subject: "", message: "", contactMethod: "email" })
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <>
      <Navbar />

      {/* Background is white */}
      <main className="container mx-auto px-4 py-12 bg-white text-slate-700 min-h-screen">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-slate-800">Contact Us</h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Have a question or need help? We're here to assist you. Get in touch with our friendly customer support team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="shadow-md rounded-2xl border border-slate-100 bg-white">
              <CardHeader>
                <CardTitle className="text-slate-800">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-700">
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-slate-800 mt-0.5" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-slate-500">support@shopmart.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-slate-800 mt-0.5" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-slate-500">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-slate-800 mt-0.5" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-sm text-slate-500">
                      123 Commerce Street
                      <br />
                      Business District, NY 10001
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-slate-800 mt-0.5" />
                  <div>
                    <p className="font-medium">Business Hours</p>
                    <p className="text-sm text-slate-500">
                      Mon - Fri: 9:00 AM - 6:00 PM
                      <br />
                      Sat - Sun: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md rounded-2xl border border-slate-100 bg-white">
              <CardHeader>
                <CardTitle className="text-slate-800">FAQ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-slate-700">
                <div>
                  <p className="font-medium text-sm">How long does shipping take?</p>
                  <p className="text-sm text-slate-500">Standard shipping takes 3-5 business days.</p>
                </div>
                <div>
                  <p className="font-medium text-sm">What's your return policy?</p>
                  <p className="text-sm text-slate-500">We offer 30-day returns on all items.</p>
                </div>
                <div>
                  <p className="font-medium text-sm">Do you ship internationally?</p>
                  <p className="text-sm text-slate-500">Yes, we ship to most countries worldwide.</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-md rounded-2xl border border-slate-100 bg-white">
              <CardHeader>
                <CardTitle className="text-slate-800">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5 text-slate-700">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                        className="rounded-xl border-slate-200 bg-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        className="rounded-xl border-slate-200 bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Select
                      value={formData.subject}
                      onValueChange={(value) => handleInputChange("subject", value)}
                    >
                      <SelectTrigger className="rounded-xl border-slate-200 bg-white">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="order">Order Support</SelectItem>
                        <SelectItem value="shipping">Shipping Question</SelectItem>
                        <SelectItem value="return">Return/Refund</SelectItem>
                        <SelectItem value="technical">Technical Issue</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Radio Options - styled */}
                  <div>
                    <Label className="mb-2 block">Preferred Contact Method *</Label>
                    <div className="flex gap-6">
                      {["email", "phone"].map((option) => (
                        <label
                          key={option}
                          className={`flex items-center space-x-2 cursor-pointer px-4 py-2 rounded-xl border transition bg-white ₹{
                            formData.contactMethod === option
                              ? "border-slate-800 bg-slate-50 text-slate-900"
                              : "border-slate-200 hover:border-slate-400 text-slate-600"
                          }`}
                        >
                          <input
                            type="radio"
                            name="contactMethod"
                            value={option}
                            checked={formData.contactMethod === option}
                            onChange={(e) => handleInputChange("contactMethod", e.target.value)}
                            className="hidden"
                          />
                          <span className="capitalize">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Please describe your question or concern in detail..."
                      required
                      className="rounded-xl border-slate-200 bg-white"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full rounded-xl bg-slate-800 hover:bg-slate-900 text-white"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
