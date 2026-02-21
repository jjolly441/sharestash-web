import Link from 'next/link';
import { Search, PlusCircle, Calendar, ShieldCheck, Camera, CreditCard, Package, Users, Star, ArrowRight, MapPin, CheckCircle } from 'lucide-react';

export default function HomePage() {
  const features = [
    { icon: Search, color: 'text-brand-blue bg-blue-50', title: 'Discover Nearby Items', desc: 'Browse tools, electronics, sports gear, and more available for rent in your area.' },
    { icon: PlusCircle, color: 'text-brand-green bg-green-50', title: 'List & Earn', desc: "Have items sitting around? List them in minutes and earn money when you're not using them." },
    { icon: Calendar, color: 'text-brand-gold bg-amber-50', title: 'Flexible Rentals', desc: 'Rent by the hour, day, week, or month. Choose what works for you.' },
    { icon: ShieldCheck, color: 'text-purple-600 bg-purple-50', title: 'Safe & Secure', desc: 'Identity verification, secure payments, photo documentation, and dispute protection.' },
    { icon: Camera, color: 'text-red-500 bg-red-50', title: 'Photo Handoffs', desc: 'Document item condition at pickup and return. Both parties are protected.' },
    { icon: CreditCard, color: 'text-brand-green bg-green-50', title: 'Secure Payments', desc: 'Pay securely through Stripe. Owners get paid directly to their bank account.' },
  ];

  const steps = [
    { num: 1, icon: Search, color: 'bg-brand-gold', title: 'Browse', desc: 'Find items near you' },
    { num: 2, icon: Calendar, color: 'bg-brand-blue', title: 'Book', desc: 'Choose dates & pay securely' },
    { num: 3, icon: MapPin, color: 'bg-brand-green', title: 'Meet', desc: 'Pick up at a safe location' },
    { num: 4, icon: CheckCircle, color: 'bg-purple-600', title: 'Return', desc: "Drop off when you're done" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-dark text-center py-20 px-6">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <div className="w-20 h-20 rounded-2xl border-2 border-brand-gold flex items-center justify-center mx-auto mb-6">
            <Package className="w-10 h-10 text-brand-gold" />
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-3 tracking-tight">ShareStash</h1>
          <p className="text-xl sm:text-2xl font-semibold text-brand-gold mb-4">Rent anything from people nearby</p>
          <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto mb-8">
            Why buy when you can rent? Save money, reduce waste, and connect with your community.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <Link href="/browse" className="btn-gold text-lg flex items-center justify-center gap-2">
              Start Browsing <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/register" className="border-2 border-gray-600 text-gray-300 font-bold px-6 py-3 rounded-xl hover:border-brand-gold hover:text-brand-gold transition-all text-lg">
              Create Account
            </Link>
          </div>
          <div className="flex gap-6 justify-center flex-wrap text-sm text-gray-500 font-semibold">
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-brand-green" /> Verified Users</span>
            <span className="flex items-center gap-1.5"><CreditCard className="w-4 h-4 text-brand-blue" /> Secure Payments</span>
            <span className="flex items-center gap-1.5"><Star className="w-4 h-4 text-brand-gold" /> Rated Community</span>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs font-extrabold text-brand-blue tracking-[3px] mb-2">SIMPLE & EASY</p>
          <h2 className="text-4xl font-black text-brand-dark mb-12">How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={s.num} className={`bg-white rounded-2xl p-8 border border-gray-200 item-card animate-fade-in animate-fade-in-delay-${i + 1}`}>
                <div className={`w-10 h-10 rounded-full ${s.color} text-white font-extrabold text-lg flex items-center justify-center mx-auto mb-4`}>
                  {s.num}
                </div>
                <s.icon className="w-8 h-8 text-brand-dark mx-auto mb-3" />
                <h3 className="text-lg font-extrabold text-brand-dark mb-1">{s.title}</h3>
                <p className="text-sm text-gray-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs font-extrabold text-brand-blue tracking-[3px] mb-2">EVERYTHING YOU NEED</p>
          <h2 className="text-4xl font-black text-brand-dark mb-12">Built for Trust & Safety</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-left item-card">
                <div className={`w-12 h-12 rounded-xl ${f.color} flex items-center justify-center mb-4`}>
                  <f.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-extrabold text-brand-dark mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Package, color: 'text-brand-gold', num: '1000+', label: 'Items Listed' },
            { icon: Users, color: 'text-brand-blue', num: '500+', label: 'Active Users' },
            { icon: Star, color: 'text-amber-500', num: '4.8', label: 'Average Rating' },
            { icon: ShieldCheck, color: 'text-brand-green', num: '100%', label: 'Secure Payments' },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-2xl p-6 border border-gray-200 text-center item-card">
              <s.icon className={`w-8 h-8 ${s.color} mx-auto mb-2`} />
              <div className="text-3xl font-black text-brand-dark">{s.num}</div>
              <div className="text-sm text-gray-500 font-semibold">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-dark py-20 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <Package className="w-12 h-12 text-brand-gold mx-auto mb-4" />
          <h2 className="text-4xl font-black text-white mb-4">Ready to get started?</h2>
          <p className="text-gray-400 mb-8 text-lg">Join your neighbors in the sharing economy. Browse items, list your own, and start saving today.</p>
          <Link href="/browse" className="btn-gold text-lg inline-flex items-center gap-2">
            Explore the Marketplace <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
