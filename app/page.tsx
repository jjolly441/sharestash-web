import Link from 'next/link';
import Image from 'next/image';
import {
  Search, PlusCircle, Calendar, ShieldCheck, Camera,
  CreditCard, Package, Users, Star, ArrowRight, MapPin,
  CheckCircle, Smartphone, ChevronRight, Zap, Lock, Heart
} from 'lucide-react';

// ── App Store / Google Play badge SVGs inline ─────────────────
function AppStoreBadge() {
  return (
    <a
      href="https://apps.apple.com/app/sharestash/id6760602144"
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-3 bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-900 transition-all duration-200 hover:scale-105 hover:shadow-xl border border-white/10"
    >
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white flex-shrink-0">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
      </svg>
      <div className="text-left">
        <div className="text-[10px] text-gray-400 leading-none mb-0.5">Download on the</div>
        <div className="text-base font-bold leading-none">App Store</div>
      </div>
    </a>
  );
}

function GooglePlayBadge() {
  return (
    <a
      href="https://play.google.com/store/apps/details?id=com.peerrentalapp.app"
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-3 bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-900 transition-all duration-200 hover:scale-105 hover:shadow-xl border border-white/10"
    >
      <svg viewBox="0 0 24 24" className="w-7 h-7 flex-shrink-0">
        <path fill="#EA4335" d="M1.22 0C.9.3.72.8.72 1.46v21.08c0 .66.18 1.16.5 1.46l.08.07 11.8-11.8v-.28L1.3-.07l-.08.07z"/>
        <path fill="#FBBC04" d="M17.01 16.34l-3.93-3.93v-.28l3.93-3.93.09.05 4.65 2.64c1.33.75 1.33 1.99 0 2.74l-4.65 2.64-.09.07z"/>
        <path fill="#34A853" d="M17.1 16.27L13.1 12.3 1.22 24.07c.44.46 1.16.52 1.98.06l13.9-7.86"/>
        <path fill="#4285F4" d="M17.1 7.73L3.2.07C2.38-.39 1.66-.33 1.22.13L13.1 12l4-4.27z"/>
      </svg>
      <div className="text-left">
        <div className="text-[10px] text-gray-400 leading-none mb-0.5">Get it on</div>
        <div className="text-base font-bold leading-none">Google Play</div>
      </div>
    </a>
  );
}

// ── Category pills ────────────────────────────────────────────
const CATEGORIES = [
  { emoji: '📷', label: 'Cameras & Drones' },
  { emoji: '🎮', label: 'Gaming Consoles' },
  { emoji: '🔧', label: 'Tools & Equipment' },
  { emoji: '🏕️', label: 'Camping Gear' },
  { emoji: '🏄', label: 'Water Sports' },
  { emoji: '🎵', label: 'Musical Gear' },
  { emoji: '🏠', label: 'Home Improvement' },
  { emoji: '🎉', label: 'Party & Events' },
];

// ── Testimonials ──────────────────────────────────────────────
const TESTIMONIALS = [
  {
    name: 'Marcus T.',
    location: 'Washington, DC',
    text: 'Rented a Sony a7 IV for a weekend shoot. Saved $1,800 vs buying. The handoff was seamless.',
    stars: 5,
    item: 'Camera Kit',
  },
  {
    name: 'Sarah K.',
    location: 'Bethesda, MD',
    text: 'Listed my pressure washer and made $340 last month from rentals. Never thought my garage stuff could earn like this.',
    stars: 5,
    item: 'Pressure Washer',
  },
  {
    name: 'Devon R.',
    location: 'Arlington, VA',
    text: 'Needed a DJI drone for one weekend. Rented one locally for $65 instead of spending $1,200.',
    stars: 5,
    item: 'DJI Drone',
  },
];

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">

      {/* ══════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════ */}
      <section className="relative bg-[#0A2342] overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        {/* Gold glow orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#F5C542] opacity-[0.06] blur-3xl translate-x-1/2 -translate-y-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#F5C542] opacity-[0.04] blur-3xl -translate-x-1/2 translate-y-1/4 pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left — Copy */}
            <div>
              {/* Location pill */}
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-8">
                <MapPin className="w-4 h-4 text-[#F5C542]" />
                <span className="text-sm font-semibold text-white/80">Now available in DC · MD · VA</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6">
                Rent anything<br />
                from your<br />
                <span className="text-[#F5C542]">neighbors.</span>
              </h1>

              <p className="text-lg text-white/60 leading-relaxed mb-10 max-w-md">
                Cameras, drones, tools, gaming gear, camping equipment and more —
                available from verified locals in DC, Maryland, and Virginia.
              </p>

              {/* App store badges */}
              <div className="flex flex-wrap gap-3 mb-10">
                <AppStoreBadge />
                <GooglePlayBadge />
              </div>

              {/* Trust signals */}
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2 text-white/50">
                  <ShieldCheck className="w-4 h-4 text-[#F5C542]" />
                  <span>ID Verified Users</span>
                </div>
                <div className="flex items-center gap-2 text-white/50">
                  <Lock className="w-4 h-4 text-[#F5C542]" />
                  <span>Stripe Secured</span>
                </div>
                <div className="flex items-center gap-2 text-white/50">
                  <Camera className="w-4 h-4 text-[#F5C542]" />
                  <span>Photo Handoffs</span>
                </div>
              </div>
            </div>

            {/* Right — Phone mockup card */}
            <div className="hidden lg:flex justify-end">
              <div className="relative">
                {/* Main card */}
                <div className="w-72 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                  {/* Card header */}
                  <div className="bg-[#0A2342] p-5">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 bg-[#F5C542] rounded-lg flex items-center justify-center">
                          <Package className="w-4 h-4 text-[#0A2342]" />
                        </div>
                        <span className="text-white font-bold text-sm">ShareStash</span>
                      </div>
                      <div className="w-6 h-6 bg-white/10 rounded-full" />
                    </div>
                    <p className="text-white/60 text-xs">Items near you in DC</p>
                    <div className="flex items-center gap-2 mt-2 bg-white/10 rounded-xl px-3 py-2">
                      <Search className="w-3 h-3 text-white/40" />
                      <span className="text-white/40 text-xs">Search cameras, tools, gaming...</span>
                    </div>
                  </div>
                  {/* Listing cards */}
                  {[
                    { emoji: '📷', name: 'Sony a7 IV Kit', price: '$75', loc: 'Capitol Hill', badge: 'Popular' },
                    { emoji: '🚁', name: 'DJI Mavic 3 Pro', price: '$65', loc: 'Bethesda', badge: 'New' },
                    { emoji: '🔧', name: 'Pressure Washer', price: '$35', loc: 'Arlington', badge: null },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 px-5 py-3 border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
                      <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                        {item.emoji}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="text-xs font-bold text-gray-900 truncate">{item.name}</p>
                          {item.badge && (
                            <span className="text-[9px] font-bold bg-[#F5C542]/20 text-[#0A2342] px-1.5 py-0.5 rounded-full flex-shrink-0">{item.badge}</span>
                          )}
                        </div>
                        <p className="text-[10px] text-gray-400 flex items-center gap-1">
                          <MapPin className="w-2.5 h-2.5" />{item.loc}
                        </p>
                      </div>
                      <span className="text-xs font-black text-[#0A2342]">{item.price}<span className="text-gray-400 font-normal">/day</span></span>
                    </div>
                  ))}
                </div>

                {/* Floating earn card */}
                <div className="absolute -left-16 bottom-12 bg-white rounded-2xl shadow-xl p-4 border border-gray-100 w-44">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-xs">💰</span>
                    </div>
                    <span className="text-xs font-bold text-gray-900">New Rental!</span>
                  </div>
                  <p className="text-[10px] text-gray-500">Your Sony camera was rented</p>
                  <p className="text-lg font-black text-green-600 mt-1">+$75.00</p>
                </div>

                {/* Floating verified card */}
                <div className="absolute -right-8 top-8 bg-white rounded-2xl shadow-xl p-3 border border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 bg-green-100 rounded-full flex items-center justify-center">
                      <ShieldCheck className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-gray-900">Identity Verified</p>
                      <p className="text-[9px] text-gray-400">Stripe Identity</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CATEGORY STRIP
      ══════════════════════════════════════════════════════ */}
      <section className="bg-white border-b border-gray-100 py-6 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.label}
                href="/browse"
                className="flex-shrink-0 flex items-center gap-2 bg-gray-50 hover:bg-[#0A2342] hover:text-white border border-gray-200 hover:border-[#0A2342] rounded-full px-4 py-2.5 text-sm font-semibold text-gray-700 transition-all duration-200 group"
              >
                <span>{cat.emoji}</span>
                <span className="group-hover:text-white">{cat.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          HOW IT WORKS
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-extrabold text-[#F5C542] tracking-[4px] mb-3">HOW IT WORKS</p>
            <h2 className="text-4xl lg:text-5xl font-black text-[#0A2342] mb-4">Simple as 1, 2, 3, 4</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">From browsing to booking in under 2 minutes. No subscriptions, no commitments.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connector line */}
            <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[#F5C542]/40 to-transparent" />

            {[
              { num: '01', icon: Search, title: 'Browse', desc: 'Find items near you filtered by category, price, and distance.', color: 'bg-[#F5C542]' },
              { num: '02', icon: Calendar, title: 'Book', desc: 'Select your dates, agree to rental terms, and pay securely through Stripe.', color: 'bg-[#0A2342]' },
              { num: '03', icon: MapPin, title: 'Meet', desc: 'Pick up the item at a safe location with photo documentation for both parties.', color: 'bg-[#F5C542]' },
              { num: '04', icon: CheckCircle, title: 'Return', desc: 'Drop off when done. Your security deposit is released after confirmation.', color: 'bg-[#0A2342]' },
            ].map((s) => (
              <div key={s.num} className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#F5C542] hover:shadow-lg transition-all duration-300 group relative">
                <div className={`w-10 h-10 rounded-full ${s.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <span className={`text-sm font-black ${s.color === 'bg-[#F5C542]' ? 'text-[#0A2342]' : 'text-white'}`}>{s.num}</span>
                </div>
                <s.icon className="w-7 h-7 text-[#0A2342] mb-4 opacity-60" />
                <h3 className="text-lg font-extrabold text-[#0A2342] mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          TWO-SIDED VALUE PROP
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">

          {/* Renter side */}
          <div className="bg-gray-50 rounded-3xl p-10 border border-gray-200 hover:border-[#F5C542] transition-colors duration-300">
            <div className="w-12 h-12 bg-[#F5C542] rounded-2xl flex items-center justify-center mb-6">
              <Search className="w-6 h-6 text-[#0A2342]" />
            </div>
            <h3 className="text-2xl font-black text-[#0A2342] mb-3">Need something?</h3>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Stop buying things you'll use once. Rent from verified neighbors at a fraction of the purchase price.
            </p>
            <div className="space-y-4 mb-8">
              {[
                { item: 'Sony a7 IV Camera Kit', save: 'Save $1,800 vs buying' },
                { item: 'DJI Mavic 3 Drone', save: 'Save $1,100 vs buying' },
                { item: 'Pressure Washer', save: 'Save $350 vs buying' },
                { item: 'Camping Tent (4-person)', save: 'Save $180 vs buying' },
              ].map((r) => (
                <div key={r.item} className="flex items-center justify-between py-3 border-b border-gray-200 last:border-0">
                  <span className="text-sm font-semibold text-gray-800">{r.item}</span>
                  <span className="text-xs font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full">{r.save}</span>
                </div>
              ))}
            </div>
            <Link href="/browse" className="inline-flex items-center gap-2 bg-[#0A2342] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#1A3A5C] transition-colors">
              Browse Items <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Owner side */}
          <div className="bg-[#0A2342] rounded-3xl p-10 border border-[#0A2342]">
            <div className="w-12 h-12 bg-[#F5C542] rounded-2xl flex items-center justify-center mb-6">
              <PlusCircle className="w-6 h-6 text-[#0A2342]" />
            </div>
            <h3 className="text-2xl font-black text-white mb-3">Own something?</h3>
            <p className="text-white/60 mb-8 leading-relaxed">
              Your unused gear is depreciating in your closet. List it on ShareStash and earn passive income from items you already own.
            </p>
            <div className="space-y-4 mb-8">
              {[
                { item: 'Camera Kit', earn: '$50–80/day' },
                { item: 'Drone', earn: '$60–90/day' },
                { item: 'Gaming Console', earn: '$25–35/day' },
                { item: 'Power Tools', earn: '$15–50/day' },
              ].map((r) => (
                <div key={r.item} className="flex items-center justify-between py-3 border-b border-white/10 last:border-0">
                  <span className="text-sm font-semibold text-white/80">{r.item}</span>
                  <span className="text-sm font-black text-[#F5C542]">{r.earn}</span>
                </div>
              ))}
            </div>
            <Link href="/register" className="inline-flex items-center gap-2 bg-[#F5C542] text-[#0A2342] font-bold px-6 py-3 rounded-xl hover:bg-[#D4A017] transition-colors">
              Start Listing <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          TRUST & SAFETY
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-extrabold text-[#F5C542] tracking-[4px] mb-3">BUILT FOR TRUST</p>
            <h2 className="text-4xl lg:text-5xl font-black text-[#0A2342] mb-4">Safety at every step</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">Every feature is designed to protect both renters and owners.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: ShieldCheck, title: 'Identity Verification', desc: 'Every user verifies their government ID through Stripe Identity before renting or listing high-value items.' },
              { icon: Camera, title: 'Photo Handoffs', desc: 'Timestamped photos at pickup and return document item condition. Disputes resolved with evidence.' },
              { icon: CreditCard, title: 'Secure Payments', desc: 'Stripe processes all payments. Security deposits are held and released automatically after safe return.' },
              { icon: Lock, title: 'Address Privacy', desc: "Your exact address is never shown publicly. Renters only see your city until a booking is confirmed." },
              { icon: Star, title: 'Two-Way Reviews', desc: 'Both renters and owners leave reviews after every rental. Accountability builds trust across the community.' },
              { icon: Zap, title: 'Dispute Protection', desc: 'Our team reviews every dispute with photo evidence and rental agreements to reach fair resolutions.' },
            ].map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-7 border border-gray-200 hover:border-[#0A2342] hover:shadow-md transition-all duration-300 group">
                <div className="w-11 h-11 rounded-xl bg-[#0A2342] group-hover:bg-[#F5C542] flex items-center justify-center mb-5 transition-colors duration-300">
                  <f.icon className="w-5 h-5 text-white group-hover:text-[#0A2342] transition-colors duration-300" />
                </div>
                <h3 className="text-base font-extrabold text-[#0A2342] mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-extrabold text-[#F5C542] tracking-[4px] mb-3">COMMUNITY</p>
            <h2 className="text-4xl lg:text-5xl font-black text-[#0A2342] mb-4">Real people. Real rentals.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-[#F5C542] transition-colors duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F5C542] text-[#F5C542]" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-6">"{t.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-[#0A2342] text-sm">{t.name}</p>
                    <p className="text-xs text-gray-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />{t.location}
                    </p>
                  </div>
                  <span className="text-xs font-bold bg-[#0A2342]/10 text-[#0A2342] px-3 py-1 rounded-full">{t.item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          STATS
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 px-6 bg-[#0A2342]">
        <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { num: '1,000+', label: 'Items Listed', icon: Package },
            { num: '500+', label: 'Active Users', icon: Users },
            { num: '4.8★', label: 'App Store Rating', icon: Star },
            { num: '100%', label: 'Secure Payments', icon: ShieldCheck },
          ].map((s) => (
            <div key={s.label}>
              <s.icon className="w-6 h-6 text-[#F5C542] mx-auto mb-3 opacity-80" />
              <div className="text-4xl font-black text-white mb-1">{s.num}</div>
              <div className="text-sm text-white/40 font-semibold">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          EMAIL CAPTURE
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 px-6 bg-gray-50 border-y border-gray-200">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-12 h-12 bg-[#F5C542] rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Heart className="w-6 h-6 text-[#0A2342]" />
          </div>
          <h2 className="text-3xl font-black text-[#0A2342] mb-3">Get notified when items near you are listed</h2>
          <p className="text-gray-500 mb-8">Be the first to know when new cameras, tools, and gear become available in DC, MD, and VA.</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0A2342] focus:ring-2 focus:ring-[#0A2342]/10"
            />
            <button
              type="submit"
              className="bg-[#0A2342] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#1A3A5C] transition-colors whitespace-nowrap"
            >
              Get Notified
            </button>
          </form>
          <p className="text-xs text-gray-400 mt-4">No spam. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          APP DOWNLOAD CTA
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#0A2342] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-0 left-1/2 w-[800px] h-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F5C542] opacity-[0.05] blur-3xl pointer-events-none" />

        <div className="relative max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 bg-[#F5C542] rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Smartphone className="w-8 h-8 text-[#0A2342]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Download ShareStash
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
            Available on iOS and Android. Free to download — browse, list, and rent in minutes.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <AppStoreBadge />
            <GooglePlayBadge />
          </div>

          <p className="text-white/30 text-sm">DC · Maryland · Virginia · Expanding soon</p>
        </div>
      </section>

    </div>
  );
}
