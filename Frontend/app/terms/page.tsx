export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using ShopMart's website and services, you accept and agree to be bound by the terms and
              provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Permission is granted to temporarily download one copy of the materials on ShopMart's website for
                personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of
                title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Product Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              We strive to provide accurate product information, including descriptions, pricing, and availability.
              However, we do not warrant that product descriptions or other content is accurate, complete, reliable,
              current, or error-free. Prices and availability are subject to change without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Orders and Payment</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>By placing an order, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Pay all charges incurred by you or any users of your account</li>
                <li>Accept responsibility for any taxes applicable to your purchase</li>
              </ul>
              <p>
                We reserve the right to refuse or cancel any order for any reason, including suspected fraud or
                unauthorized transactions.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Shipping and Returns</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We offer free standard shipping on all orders. Delivery times are estimates and may vary based on
                location and product availability.
              </p>
              <p>
                We accept returns within 30 days of purchase for most items in original condition. Some restrictions may
                apply. Please see our return policy for complete details.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              In no event shall ShopMart or its suppliers be liable for any damages (including, without limitation,
              damages for loss of data or profit, or due to business interruption) arising out of the use or inability
              to use the materials on ShopMart's website, even if ShopMart or an authorized representative has been
              notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws of the United States
              and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at legal@shopmart.com or through
              our contact page.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
