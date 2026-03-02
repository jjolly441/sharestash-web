// FILE: app/help/page.tsx
'use client';
import { useState } from 'react';
import { HelpCircle, ArrowLeft, ChevronDown, ChevronUp, Search, Package, CreditCard, Shield, Users, Calendar, MessageCircle, Smartphone } from 'lucide-react';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSection {
  title: string;
  icon: any;
  color: string;
  items: FAQItem[];
}

const FAQ_SECTIONS: FAQSection[] = [
  {
    title: 'Getting Started',
    icon: Package,
    color: 'text-brand-gold bg-amber-50',
    items: [
      {
        question: 'What is ShareStash?',
        answer: 'ShareStash is a peer-to-peer rental marketplace where you can rent items from people nearby or list your own items for others to rent. Think of it as Airbnb, but for things — tools, electronics, sports gear, and more.',
      },
      {
        question: 'How do I create an account?',
        answer: 'Tap "Get Started" or "Create Account" on the homepage. Enter your name, email, and a password (at least 6 characters). You can also sign up through the ShareStash mobile app. Your account works on both web and mobile.',
      },
      {
        question: 'Is ShareStash free to use?',
        answer: 'Creating an account and browsing items is completely free. ShareStash charges a small service fee on each rental transaction. The exact fee is shown at checkout before you confirm any booking.',
      },
      {
        question: 'What can I rent on ShareStash?',
        answer: 'You can rent almost anything — tools, electronics, cameras, sports equipment, outdoor gear, musical instruments, home improvement items, and more. Items that are illegal, hazardous, or unsafe are not permitted.',
      },
    ],
  },
  {
    title: 'Renting Items',
    icon: Calendar,
    color: 'text-brand-blue bg-blue-50',
    items: [
      {
        question: 'How do I rent an item?',
        answer: 'Browse or search for items, then tap on one to see details and pricing. Choose your rental period (hourly, daily, weekly, or monthly), select dates, and proceed to checkout. Payment is processed securely through Stripe.',
      },
      {
        question: 'What rental periods are available?',
        answer: 'ShareStash supports hourly, daily, weekly, and monthly rentals. Each owner sets their own pricing for available periods. Longer rentals may include discounts set by the owner.',
      },
      {
        question: 'How do I pick up and return items?',
        answer: 'You and the owner coordinate a meeting location through in-app messaging. At pickup and return, both parties take photos of the item to document its condition using the Photo Handoff feature. This protects both the renter and the owner.',
      },
      {
        question: 'Can I cancel a rental?',
        answer: 'Cancellation policies may vary. Contact the item owner through messaging to discuss cancellations. If you cannot reach a resolution, you can file a dispute through the app.',
      },
    ],
  },
  {
    title: 'Listing & Earning',
    icon: Users,
    color: 'text-brand-green bg-green-50',
    items: [
      {
        question: 'How do I list an item?',
        answer: 'In the mobile app, tap the "+" button to create a new listing. Add photos, a title, description, category, and set your pricing for each rental period. You can also set weekly or monthly discounts to encourage longer rentals.',
      },
      {
        question: 'How do I get paid?',
        answer: 'Owners receive payouts through Stripe Connect. You will need to complete Stripe Connect onboarding (linking your bank account) to receive payments. Earnings are transferred after the rental is completed and confirmed.',
      },
      {
        question: 'Can I set my own prices?',
        answer: 'Yes! You have full control over your pricing. Set prices for hourly, daily, weekly, and monthly rentals. You can also offer percentage discounts for longer rental periods.',
      },
      {
        question: 'Can I list items from the website?',
        answer: 'Currently, item listing is only available through the ShareStash mobile app. Download the app to list your items, manage rentals, and access all features.',
      },
    ],
  },
  {
    title: 'Payments & Security',
    icon: CreditCard,
    color: 'text-purple-600 bg-purple-50',
    items: [
      {
        question: 'How are payments handled?',
        answer: 'All payments are processed securely through Stripe. ShareStash never stores your full credit card information. Payments are held securely and released to the owner after the rental is completed.',
      },
      {
        question: 'What is a security deposit?',
        answer: 'Some owners may require a security deposit to protect against damage or loss. The deposit amount is shown on the item listing and at checkout. It is refunded after the item is returned in satisfactory condition.',
      },
      {
        question: 'Are there promo codes?',
        answer: 'Yes! ShareStash occasionally offers promotional discount codes. If you have a promo code, enter it at checkout to apply the discount to your rental.',
      },
    ],
  },
  {
    title: 'Trust & Safety',
    icon: Shield,
    color: 'text-red-500 bg-red-50',
    items: [
      {
        question: 'How does identity verification work?',
        answer: 'ShareStash offers optional identity verification through Stripe Identity. Verified users receive a badge on their profile, which helps build trust in the community. Verification involves securely confirming your identity with a government-issued ID.',
      },
      {
        question: 'What if an item is damaged during my rental?',
        answer: 'The Photo Handoff feature documents item condition at both pickup and return. If damage occurs, the owner can file a dispute with photo evidence. ShareStash will review the evidence and facilitate a resolution, which may include applying the security deposit toward repairs.',
      },
      {
        question: 'How do I report a problem?',
        answer: 'You can file a dispute through the ShareStash mobile app. Provide a description of the issue along with any relevant photos or evidence. Our team will review your case and work toward a fair resolution.',
      },
      {
        question: 'What is a Trust Score?',
        answer: 'Trust Scores are algorithm-based ratings that reflect a user\'s reliability on the platform. Factors include completed rentals, ratings from other users, identity verification status, and dispute history. Higher trust scores indicate more reliable users.',
      },
    ],
  },
];

function FAQAccordion({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-bold text-brand-dark text-sm pr-4">{item.question}</span>
        {open ? <ChevronUp className="w-4 h-4 text-gray-400 flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />}
      </button>
      {open && (
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
          {item.answer}
        </div>
      )}
    </div>
  );
}

export default function HelpCenterPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSections = FAQ_SECTIONS.map(section => ({
    ...section,
    items: section.items.filter(
      item =>
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter(section => section.items.length > 0);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-brand-dark mb-6 font-medium">
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </Link>

      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center">
          <HelpCircle className="w-6 h-6 text-brand-gold" />
        </div>
        <div>
          <h1 className="text-3xl font-black text-brand-dark">Help Center</h1>
          <p className="text-sm text-gray-400">Find answers to common questions</p>
        </div>
      </div>

      {/* Search */}
      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search for help..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent text-sm"
        />
      </div>

      {/* FAQ Sections */}
      {filteredSections.length === 0 ? (
        <div className="text-center py-12">
          <HelpCircle className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-gray-400 mb-1">No results found</h3>
          <p className="text-sm text-gray-400">Try a different search term</p>
        </div>
      ) : (
        <div className="space-y-8">
          {filteredSections.map((section) => (
            <div key={section.title}>
              <div className="flex items-center gap-2 mb-4">
                <div className={`w-8 h-8 rounded-lg ${section.color} flex items-center justify-center`}>
                  <section.icon className="w-4 h-4" />
                </div>
                <h2 className="text-lg font-extrabold text-brand-dark">{section.title}</h2>
              </div>
              <div className="space-y-2">
                {section.items.map((item) => (
                  <FAQAccordion key={item.question} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Contact Support */}
      <div className="mt-12 bg-brand-dark rounded-2xl p-8 text-center">
        <MessageCircle className="w-10 h-10 text-brand-gold mx-auto mb-3" />
        <h3 className="text-lg font-bold text-white mb-2">Still need help?</h3>
        <p className="text-gray-400 text-sm mb-4">Contact our support team or use the AI support chatbot in the ShareStash app.</p>
        <div className="flex gap-3 justify-center flex-wrap">
          <a href="mailto:support@sharestash.app" className="btn-gold text-sm !py-2.5">
            Email Support
          </a>
          <div className="flex items-center gap-1.5 text-gray-400 text-sm">
            <Smartphone className="w-4 h-4" />
            <span>In-app chat available in the mobile app</span>
          </div>
        </div>
      </div>
    </div>
  );
}