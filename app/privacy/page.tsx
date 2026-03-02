// FILE: app/privacy/page.tsx
import { Shield, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-brand-dark mb-6 font-medium">
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </Link>

      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center">
          <Shield className="w-6 h-6 text-purple-600" />
        </div>
        <div>
          <h1 className="text-3xl font-black text-brand-dark">Privacy Policy</h1>
          <p className="text-sm text-gray-400">Last updated: February 21, 2026</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 p-8 space-y-8 text-gray-600 leading-relaxed">
        <section>
          <h2 className="text-lg font-extrabold text-brand-dark mb-3">1. Information We Collect</h2>
          <p className="mb-3">When you use ShareStash, we collect information you provide directly to us, including:</p>
          <p>Account information such as your name, email address, and password when you create an account. Profile information such as your profile photo and bio. Listing information including item descriptions, photos, pricing, and location. Transaction information including rental details, payment information, and communication between users. Identity verification data processed securely through Stripe Identity when you choose to verify your account. Device and usage information including IP address, browser type, and how you interact with our service.</p>
        </section>

        <section>
          <h2 className="text-lg font-extrabold text-brand-dark mb-3">2. How We Use Your Information</h2>
          <p>We use the information we collect to provide, maintain, and improve ShareStash, including to process transactions and send related information such as confirmations and receipts. We also use it to send you technical notices, updates, security alerts, and support messages. Your information helps us respond to your comments, questions, and customer service requests. We use location data to show nearby items and facilitate local rentals. We may also use aggregated or anonymized data for analytics and service improvement.</p>
        </section>

        <section>
          <h2 className="text-lg font-extrabold text-brand-dark mb-3">3. Information Sharing</h2>
          <p className="mb-3">We do not sell your personal information. We share information only in the following circumstances:</p>
          <p>With other users as necessary to facilitate rentals — for example, sharing your name and general location with someone renting your item. With service providers who perform services on our behalf, including Stripe for payment processing, Firebase for data storage, and cloud hosting providers. When required by law or to protect the rights, property, or safety of ShareStash, our users, or others. In connection with a merger, acquisition, or sale of assets, with appropriate notice to users.</p>
        </section>

        <section>
          <h2 className="text-lg font-extrabold text-brand-dark mb-3">4. Payment Security</h2>
          <p>All payment processing is handled by Stripe. ShareStash does not store your full credit card numbers or bank account details on our servers. Stripe&apos;s security practices are certified to PCI Service Provider Level 1, the most stringent level of certification available in the payments industry.</p>
        </section>

        <section>
          <h2 className="text-lg font-extrabold text-brand-dark mb-3">5. Data Security</h2>
          <p>We use industry-standard security measures to protect your personal information, including encryption in transit and at rest, secure authentication, and regular security audits. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
        </section>

        <section>
          <h2 className="text-lg font-extrabold text-brand-dark mb-3">6. Your Rights and Choices</h2>
          <p>You may update or delete your account information at any time through the app. You can opt out of promotional emails by following the unsubscribe instructions in those messages. You may request a copy of your personal data or request deletion by contacting us at the email below. If you are a California resident, you have additional rights under the CCPA, including the right to know what data we collect and the right to request deletion.</p>
        </section>

        <section>
          <h2 className="text-lg font-extrabold text-brand-dark mb-3">7. Children&apos;s Privacy</h2>
          <p>ShareStash is not intended for users under the age of 18. We do not knowingly collect personal information from children. If we learn that we have collected information from a child under 18, we will take steps to delete that information promptly.</p>
        </section>

        <section>
          <h2 className="text-lg font-extrabold text-brand-dark mb-3">8. Changes to This Policy</h2>
          <p>We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the &quot;Last updated&quot; date. Your continued use of ShareStash after changes are posted constitutes your acceptance of the updated policy.</p>
        </section>

        <section>
          <h2 className="text-lg font-extrabold text-brand-dark mb-3">9. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:support@sharestash.app" className="text-brand-blue font-semibold hover:underline">support@sharestash.app</a>.</p>
        </section>
      </div>
    </div>
  );
}