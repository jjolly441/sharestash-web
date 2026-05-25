'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { UserProfile, RentalItem } from '@/lib/types';
import Link from 'next/link';
import { User, Shield, Star, MapPin, Calendar, Loader2, ArrowLeft } from 'lucide-react';

export default function UserProfileClient() {
  const searchParams = useSearchParams();
  // Read id from the query param (?id=) OR the URL path (/user/{id}). The Vercel
  // rewrite maps /user/{id} → /user?id={id} server-side, so the browser URL keeps
  // /user/{id} with no query string — meaning searchParams is empty on the client.
  const fromQuery = searchParams.get('id');
  const fromPath = typeof window !== 'undefined'
    ? window.location.pathname.split('/').filter(Boolean).pop() ?? ''
    : '';
  const userId = fromQuery || (fromPath && fromPath !== 'user' ? fromPath : '');
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [items, setItems] = useState<RentalItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (userId) { loadProfile(); }
    else { setLoading(false); }
  }, [userId]);

  async function loadProfile() {
    try {
      const snap = await getDoc(doc(db, 'users', userId));
      if (snap.exists()) {
        setProfile({ id: snap.id, ...snap.data() } as UserProfile);
        const itemsQ = query(collection(db, 'items'), where('ownerId', '==', userId), where('isAvailable', '==', true));
        const itemsSnap = await getDocs(itemsQ);
        setItems(itemsSnap.docs.map(d => ({ id: d.id, ...d.data() } as RentalItem)));
      }
    } catch (err) { console.error(err); }
    setLoading(false);
  }

  if (loading) return <div className="flex justify-center py-32"><Loader2 className="w-8 h-8 text-brand-gold animate-spin" /></div>;
  if (!profile) return <div className="text-center py-32"><h2 className="text-2xl font-bold text-gray-400">User not found</h2></div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link href="/browse" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-brand-dark mb-6 font-medium">
        <ArrowLeft className="w-4 h-4" /> Back
      </Link>

      <div className="bg-white rounded-2xl p-8 border border-gray-200 mb-8 flex items-center gap-6">
        <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden flex-shrink-0">
          {profile.photoURL ? <img src={profile.photoURL} alt="" className="w-full h-full object-cover" /> : <User className="w-10 h-10 text-gray-400" />}
        </div>
        <div>
          <h1 className="text-2xl font-black text-brand-dark">{profile.displayName}</h1>
          <div className="flex items-center gap-3 mt-1 text-sm text-gray-500">
            {profile.isVerified && <span className="flex items-center gap-1 text-brand-green font-semibold"><Shield className="w-4 h-4" /> Verified</span>}
            {profile.trustScore && <span className="flex items-center gap-1"><Star className="w-4 h-4 text-amber-500" /> {profile.trustScore.toFixed(1)}</span>}
          </div>
          {profile.bio && <p className="text-gray-500 text-sm mt-2">{profile.bio}</p>}
        </div>
      </div>

      <h2 className="text-xl font-extrabold text-brand-dark mb-4">Items for Rent ({items.length})</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(item => (
          <Link href={`/item?id=${item.id}`} key={item.id} className="item-card bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
              {item.image && <img src={item.image} alt={item.title} className="w-full h-full object-cover" />}
            </div>
            <div className="p-4">
              <h3 className="font-bold text-brand-dark truncate">{item.title}</h3>
              <p className="text-brand-gold font-extrabold">${item.pricePerDay}<span className="text-xs text-gray-400 font-medium">/day</span></p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
