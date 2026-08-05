"use client";

import Link from "next/link";
import { Header } from "@/components/header";
import Footer from "@/components/footer";

export default function CancellationsAndRefundsPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 to-background py-20 md:py-28 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">
            Cancellations & Refunds Policy
          </h1>
          <p className="text-muted-foreground text-lg">
            Last Updated: <strong>01/01/2025</strong>
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="bg-card shadow-sm rounded-2xl p-8 md:p-12 border border-border space-y-10 leading-relaxed text-foreground/90">
          
          <section>
            <p>
              At <strong>DemoLeather Store</strong>, we want you to be completely satisfied with your shopping
              experience. This Cancellations & Refunds Policy explains how order cancellations,
              returns, and refunds are handled.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">1. Order Cancellation</h2>
            <h3 className="text-lg font-medium mt-3 mb-1">Before Dispatch:</h3>
            <p>
              Orders can be cancelled within <strong>24 hours</strong> of purchase if they are not shipped.
            </p>
            <p className="mt-3">
              To cancel your order, email us at{" "}
              <a href="mailto:support@demostore.in" className="text-primary hover:underline">
                support@demostore.in
              </a>{" "}
              or call{" "}
              <a href="tel:+910000000000" className="text-primary hover:underline">
                +91 0000000000
              </a>.
            </p>
            <p className="mt-3">
              If the order is already shipped, cancellation is not possible. You can still return
              it after delivery.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-1">After Dispatch:</h3>
            <p>
              Once shipped, orders cannot be cancelled. Please refer to{" "}
              <Link href="/return-refund-policy" className="text-primary hover:underline">
                Return & Refund Policy
              </Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">2. Return Eligibility</h2>
            <p>Returns are accepted only if:</p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>The item is damaged, defective, or incorrect.</li>
              <li>The item is unused and in original condition with tags.</li>
              <li>Return request is raised within <strong>7 days</strong> of delivery.</li>
            </ul>

            <p className="mt-3">
              Email your order details and photos to{" "}
              <a href="mailto:support@demostore.in" className="text-primary hover:underline">
                support@demostore.in
              </a>.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-2">Not eligible for return:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Products damaged due to misuse.</li>
              <li>Customized or personalized items.</li>
              <li>Items marked as “non-returnable” or “final sale.”</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">3. Refunds Process</h2>
            <p>
              Once your returned product is received and inspected:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>
                Refund will be issued within <strong>5–7 business days</strong>.
              </li>
              <li>
                Processing times may vary depending on banks/payment gateways.
              </li>
              <li>
                COD orders are refunded via bank transfer or UPI.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">4. Damaged or Wrong Products</h2>
            <p>
              If your order arrives damaged or incorrect, contact us within <strong>48 hours</strong>{" "}
              with pictures or video proof. We will offer a replacement or full refund.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">5. Contact Information</h2>
            <ul className="space-y-2">
              <li>
                📧 Email:{" "}
                <a href="mailto:support@demostore.in" className="text-primary hover:underline">
                  support@demostore.in
                </a>
              </li>
              <li>
                📞 Phone:{" "}
                <a href="tel:+910000000000" className="text-primary hover:underline">
                  +91 0000000000
                </a>
              </li>
              <li>🕒 Support: Monday–Saturday | 10:00 AM – 6:00 PM</li>
            </ul>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}
