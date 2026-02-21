'use client';
import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { useAuth } from '@/lib/auth';
import { RentalItem, UserProfile } from '@/lib/types';
import Link from 'next/link';
import { MapPin, Calendar, Shield, Star, ArrowLeft, Loader2, User, Clock, DollarSign, ChevronRight } from 'lucide-react';

export default function ItemDetailClient() {
  const router = useRouter();
  const { user } = useAuth();
  const [item, setItem] = useState<RentalItem | null>(null);
  const [owner, setOwner] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  const searchParams = useSearchParams();
const itemId = searchParams.get('id') || '';

  useEffect(() => {
    if (itemId) loadItem();
  }, [itemId]);

  async function loadItem() {
    try {
      const snap = await getDoc(doc(db, 'items', itemId));
      if (snap.exists()) {
        const data = { id: snap.id, ...snap.data() } as RentalItem;
        setItem(data);
        // Load owner
        const ownerSnap = await getDoc(doc(db, 'users', data.ownerId));
        if (ownerSnap.exists()) {
          setOwner({ id: ownerSnap.id, ...ownerSnap.data() } as UserProfile);
        }
      }
    } catch (err) {
      console.error('Error loading item:', err);
    }
    setLoading(false);
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-32">
        <Loader2 className="w-8 h-8 text-brand-gold animate-spin" />
      </div>
    );
  }

  if (!item) {
    return (
      <div className="text-center py-32">
        <h2 className="text-2xl font-bold text-gray-400 mb-4">Item not found</h2>
        <Link href="/browse" className="btn-gold inline-flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Browse
        </Link>
      </div>
    );
  }

  const handleBook = () => {
    if (!user) {
      router.push('/login');
      return;
    }
    router.push(`/book/${item.id}`);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back link */}
      <Link href="/browse" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-brand-dark mb-6 font-medium">
        <ArrowLeft className="w-4 h-4" /> Back to Browse
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image */}
        <div className="aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden">
          {item.image ? (
            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-300">
              <Calendar className="w-16 h-16" />
            </div>
          )}
        </div>

        {/* Details */}
        <div>
          <span className="text-xs font-bold text-brand-blue bg-blue-50 px-3 py-1 rounded-full">{item.category}</span>
          <h1 className="text-3xl font-black text-brand-dark mt-3 mb-2">{item.title}</h1>

          {item.location?.city && (
            <p className="text-sm text-gray-500 flex items-center gap-1 mb-4">
              <MapPin className="w-4 h-4" />
              {item.location.city}, {item.location.state}
            </p>
          )}

          {/* Pricing */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 mb-6">
            <div className="flex items-baseline gap-1 mb-3">
              <span className="text-4xl font-black text-brand-gold">${item.pricePerDay}</span>
              <span className="text-gray-400 font-medium">/day</span>
            </div>
            <div className="grid grid-cols-3 gap-3 text-sm">
              {item.pricePerHour && (
                <div className="bg-white rounded-xl p-3 text-center border border-gray-100">
                  <Clock className="w-4 h-4 text-gray-400 mx-auto mb-1" />
                  <div className="font-bold text-brand-dark">${item.pricePerHour}</div>
                  <div className="text-xs text-gray-400">per hour</div>
                </div>
              )}
              {item.pricePerWeek && (
                <div className="bg-white rounded-xl p-3 text-center border border-gray-100">
                  <Calendar className="w-4 h-4 text-gray-400 mx-auto mb-1" />
                  <div className="font-bold text-brand-dark">${item.pricePerWeek}</div>
                  <div className="text-xs text-gray-400">per week</div>
                </div>
              )}
              {item.pricePerMonth && (
                <div className="bg-white rounded-xl p-3 text-center border border-gray-100">
                  <DollarSign className="w-4 h-4 text-gray-400 mx-auto mb-1" />
                  <div className="font-bold text-brand-dark">${item.pricePerMonth}</div>
                  <div className="text-xs text-gray-400">per month</div>
                </div>
              )}
            </div>
            {item.securityDeposit && (
              <p className="text-xs text-gray-400 mt-3 flex items-center gap-1">
                <Shield className="w-3 h-3" /> Security deposit: ${item.securityDeposit}
              </p>
            )}
          </div>

          {/* Book Button */}
          {user?.id !== item.ownerId && (
            <button onClick={handleBook} className="btn-gold w-full text-lg flex items-center justify-center gap-2 mb-6">
              Book This Item <ChevronRight className="w-5 h-5" />
            </button>
          )}

          {/* Owner */}
          {owner && (
            <Link href={`/user?id=${owner.id}`} className="flex items-center gap-3 bg-white rounded-2xl p-4 border border-gray-200 hover:border-brand-gold transition-colors">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                {owner.photoURL ? (
                  <img src={owner.photoURL} alt={owner.displayName} className="w-full h-full object-cover" />
                ) : (
                  <User className="w-6 h-6 text-gray-400" />
                )}
              </div>
              <div className="flex-1">
                <p className="font-bold text-brand-dark">{owner.displayName}</p>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  {owner.isVerified && <span className="flex items-center gap-0.5 text-brand-green"><Shield className="w-3 h-3" /> Verified</span>}
                  {owner.trustScore && <span className="flex items-center gap-0.5"><Star className="w-3 h-3 text-amber-500" /> {owner.trustScore.toFixed(1)}</span>}
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-300" />
            </Link>
          )}
        </div>
      </div>

      {/* Description */}
      <div className="mt-8">
        <h2 className="text-xl font-extrabold text-brand-dark mb-3">Description</h2>
        <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">{item.description}</p>
      </div>

      {/* Download App CTA */}
      <div className="mt-12 bg-brand-dark rounded-2xl p-8 text-center">
        <h3 className="text-xl font-bold text-white mb-2">Want the full experience?</h3>
        <p className="text-gray-400 mb-4">Download the ShareStash app for messaging, handoff photos, dispute resolution, and more.</p>
        <div className="flex gap-3 justify-center">
          <a href="https://apps.apple.com" className="bg-white text-brand-dark font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-gray-100 transition-colors">
            App Store
          </a>
          <a href="https://play.google.com" className="bg-brand-green text-white font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-green-700 transition-colors">
            Google Play
          </a>
        </div>
      </div>
    </div>
  );
}
