"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { CreditCard, Smartphone, Wallet, X } from "lucide-react"

interface RazorpayModalProps {
  isOpen: boolean
  onClose: () => void
  total: number
  onPaymentSuccess: () => void
}

export function RazorpayModal({ isOpen, onClose, total, onPaymentSuccess }: RazorpayModalProps) {
  const [selectedPayment, setSelectedPayment] = useState("card")
  const [isProcessing, setIsProcessing] = useState(false)

  const handlePayment = async () => {
    setIsProcessing(true)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsProcessing(false)
    onPaymentSuccess()
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="flex items-center gap-2">
              <div className="h-8 w-8 rounded bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              Razorpay Checkout
            </DialogTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Amount Display */}
          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Amount to pay</p>
                <p className="text-2xl font-bold text-primary">₹{(total * 83).toFixed(2)}</p>
                <p className="text-xs text-muted-foreground">(${total.toFixed(2)} USD)</p>
              </div>
            </CardContent>
          </Card>

          {/* Payment Methods */}
          <div>
            <h3 className="font-semibold mb-4">Select Payment Method</h3>
            <RadioGroup value={selectedPayment} onValueChange={setSelectedPayment}>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-muted/50 cursor-pointer">
                  <RadioGroupItem value="card" id="card" />
                  <Label htmlFor="card" className="flex items-center gap-2 cursor-pointer flex-1">
                    <CreditCard className="h-4 w-4" />
                    Credit/Debit Card
                  </Label>
                </div>

                <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-muted/50 cursor-pointer">
                  <RadioGroupItem value="upi" id="upi" />
                  <Label htmlFor="upi" className="flex items-center gap-2 cursor-pointer flex-1">
                    <Smartphone className="h-4 w-4" />
                    UPI
                  </Label>
                </div>

                <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-muted/50 cursor-pointer">
                  <RadioGroupItem value="wallet" id="wallet" />
                  <Label htmlFor="wallet" className="flex items-center gap-2 cursor-pointer flex-1">
                    <Wallet className="h-4 w-4" />
                    Wallet
                  </Label>
                </div>
              </div>
            </RadioGroup>
          </div>

          {/* Payment Details */}
          {selectedPayment === "card" && (
            <Card>
              <CardContent className="p-4 space-y-3">
                <div>
                  <Label htmlFor="card-number">Card Number</Label>
                  <div className="mt-1 p-3 border rounded-md bg-muted/30">
                    <span className="text-muted-foreground">**** **** **** 1234</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label htmlFor="expiry">Expiry</Label>
                    <div className="mt-1 p-3 border rounded-md bg-muted/30">
                      <span className="text-muted-foreground">12/25</span>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="cvv">CVV</Label>
                    <div className="mt-1 p-3 border rounded-md bg-muted/30">
                      <span className="text-muted-foreground">***</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {selectedPayment === "upi" && (
            <Card>
              <CardContent className="p-4">
                <Label htmlFor="upi-id">UPI ID</Label>
                <div className="mt-1 p-3 border rounded-md bg-muted/30">
                  <span className="text-muted-foreground">user@paytm</span>
                </div>
              </CardContent>
            </Card>
          )}

          {selectedPayment === "wallet" && (
            <Card>
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground">Select your preferred wallet to complete the payment.</p>
                <div className="mt-3 space-y-2">
                  <div className="p-2 border rounded-md bg-muted/30 text-center">Paytm Wallet</div>
                  <div className="p-2 border rounded-md bg-muted/30 text-center">PhonePe Wallet</div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Pay Button */}
          <Button onClick={handlePayment} disabled={isProcessing} size="lg" className="w-full">
            {isProcessing ? "Processing..." : `Pay ₹${(total * 83).toFixed(2)}`}
          </Button>

          {/* Security Notice */}
          <div className="text-center text-xs text-muted-foreground">
            <p>🔒 Your payment information is secure and encrypted</p>
            <p className="mt-1">This is a demo payment gateway</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
