'use client'

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function PrivacyPage() {
  return (
    <>
      <Navbar />

      <main className="container mx-auto px-4 py-8 text-slate-700 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <p className="mb-8 text-slate-500">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
              <div className="space-y-4 leading-relaxed">
                <p>
                  We collect information you provide directly to us, such as when you create an account, make a purchase,
                  or contact us for support. This may include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name, email address, and contact information</li>
                  <li>Billing and shipping addresses</li>
                  <li>Payment information (processed securely by our payment providers)</li>
                  <li>Order history and preferences</li>
                  <li>Communications with our customer service team</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
              <div className="space-y-4 leading-relaxed">
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Process and fulfill your orders</li>
                  <li>Communicate with you about your orders and account</li>
                  <li>Provide customer support</li>
                  <li>Improve our products and services</li>
                  <li>Send you promotional communications (with your consent)</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Information Sharing</h2>
              <div className="space-y-4 leading-relaxed">
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties except as
                  described in this policy. We may share your information with:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Service providers who assist us in operating our website and conducting business</li>
                  <li>Payment processors to handle transactions securely</li>
                  <li>Shipping companies to deliver your orders</li>
                  <li>Legal authorities when required by law</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
              <p className="leading-relaxed">
                We implement appropriate security measures to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction. However, no method of transmission over the internet or
                electronic storage is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
              <div className="space-y-4 leading-relaxed">
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access and update your personal information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt out of promotional communications</li>
                  <li>Request a copy of your personal information</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Cookies</h2>
              <p className="leading-relaxed">
                We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and
                personalize content. You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Contact Us</h2>
              <p className="leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at privacy@shopmart.com or through
                our contact page.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
