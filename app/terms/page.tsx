// FILE: app/terms/page.tsx
import { FileText, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function TermsOfServicePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-brand-dark mb-6 font-medium">
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </Link>

      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
          <FileText className="w-6 h-6 text-brand-blue" />
        </div>
        <div>
          <h1 className="text-3xl font-black text-brand-dark">Terms of Service</h1>
          <p className="text-sm text-gray-400">Last updated: February 21, 2026</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 p-8 space-y-8 text-gray-600 leading-relaxed">
        <section>
          <h2 className="text-lg font-extrabold text-brand-dark mb-3">1. Acceptance of Terms</h2>
          <p>By accessing or using ShareStash, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our service. ShareStash reserves the right to modify these terms at any time, and your continued use constitutes acceptance of any changes.</p>
        </section>

        <section>
          <h2 className="text-lg font-extrabold text-brand-dark mb-3">2. Eligibility</h2>
          <p>You must be at least 18 years old and capable of entering into a legally binding agreement to use ShareStash. By creating an account, you represent and warrant that you meet these requirements and that all information you provide is accurate and complete.</p>
        </section>

        <section>
          <h2 className="text-lg font-extrabold text-brand-dark mb-3">3. User Accounts</h2>
          <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use. ShareStash reserves the right to suspend or terminate accounts that violate these terms, engage in fraudulent activity, or pose a risk to other users or the platform.</p>
        </section>

        <section>
          <h2 className="text-lg font-extrabold text-brand-dark mb-3">4. Listing Items</h2>
          <p>When listing an item for rent, you represent that you are the legal owner or have authorization to rent the item, that the item is in safe working condition, that your listing description and photos are accurate, and that your pricing is clearly stated. You agree not to list prohibited items including illegal items, weapons, hazardous materials, stolen property, or items that infringe on intellectual property rights.</p>
        </section>

        <section>
          <h2 className="text-lg font-extrabold text-brand-dark mb-3">5. Renting Items</h2>
          <p>When renting an item, you agree to use the item responsibly and for its intended purpose, return the item in the same condition you received it on or before the agreed return time, document the item condition using the photo handoff feature at both pickup and return, and report any damage immediately. You are financially responsible for any damage, loss, or theft that occurs during your rental period.</p>
        </section>

        <section>
          <h2 className="text-lg font-extrabold text-brand-dark mb-3">6. Payments and Fees</h2>
          <p>All payments are processed securely through Stripe. ShareStash charges a service fee on each transaction. The fee structure is displayed at checkout before you confirm any booking. Owners receive payouts via Stripe Connect after the rental is completed. Refund eligibility depends on the circumstances and is handled through our dispute resolution process. Security deposits, when applicable, are refunded after the item is returned in satisfactory condition.</p>
        </section>

        <section>
          <h2 className="text-lg font-extrabold text-brand-dark mb-3">7. Dispute Resolution</h2>
          <p>If a dispute arises between a renter and an owner, both parties should first attempt to resolve it directly through our in-app messaging. If a resolution cannot be reached, either party may file a dispute through our dispute resolution system, providing relevant evidence including photos and communication records. ShareStash will review disputes and make a determination, which may include partial or full refunds.</p>
        </section>

        <section>
          <h2 className="text-lg font-extrabold text-brand-dark mb-3">8. Identity Verification</h2>
          <p>ShareStash offers optional identity verification through Stripe Identity to help build trust in our community. Verified users receive a badge on their profile. While verification is optional, some item owners may choose to only rent to verified users. Verification data is processed by Stripe and subject to their privacy policy.</p>
        </section>

        <section>
          <h2 className="text-lg font-extrabold text-brand-dark mb-3">9. Limitation of Liability</h2>
          <p>ShareStash is a platform that connects renters and owners. We are not a party to rental transactions and do not own, manage, or control the items listed on our platform. ShareStash is not liable for the condition, legality, or safety of listed items, any damage, injury, or loss arising from a rental transaction, the actions or omissions of any user, or any disputes between users. Our total liability to you for any claims arising from your use of ShareStash shall not exceed the amount of fees you have paid to ShareStash in the 12 months preceding the claim.</p>
        </section>

        <section>
          <h2 className="text-lg font-extrabold text-brand-dark mb-3">10. Prohibited Conduct</h2>
          <p>You agree not to use ShareStash to violate any applicable laws or regulations, post false, misleading, or fraudulent content, harass, abuse, or harm other users, circumvent our payment system, create multiple accounts for deceptive purposes, scrape or collect user data without authorization, or interfere with the proper functioning of the platform.</p>
        </section>

        <section>
          <h2 className="text-lg font-extrabold text-brand-dark mb-3">11. Intellectual Property</h2>
          <p>ShareStash and its original content, features, and functionality are owned by ShareStash and are protected by copyright, trademark, and other intellectual property laws. You retain ownership of content you post but grant ShareStash a non-exclusive license to use, display, and distribute your content in connection with the service.</p>
        </section>

        <section>
          <h2 className="text-lg font-extrabold text-brand-dark mb-3">12. Governing Law</h2>
          <p>These Terms shall be governed by and construed in accordance with the laws of the United States. Any disputes shall be resolved in the appropriate courts of the applicable jurisdiction.</p>
        </section>

        <section>
          <h2 className="text-lg font-extrabold text-brand-dark mb-3">13. Contact Us</h2>
          <p>If you have any questions about these Terms of Service, please contact us at <a href="mailto:support@sharestash.app" className="text-brand-blue font-semibold hover:underline">support@sharestash.app</a>.</p>
        </section>
      </div>
    </div>
  );
}