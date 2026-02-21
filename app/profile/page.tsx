'use client';
import { useAuth } from '@/lib/auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { User, Shield, Star, Package, LogOut, Smartphone } from 'lucide-react';

export default function ProfilePage() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) router.push('/login');
  }, [user, loading]);

  if (loading || !user) return null;

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      {/* Profile Card */}
      <div className="bg-white rounded-2xl p-8 border border-gray-200 text-center mb-8">
        <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4 overflow-hidden">
          {user.photoURL ? (
            <img src={user.photoURL} alt={user.displayName} className="w-full h-full object-cover" />
          ) : (
            <User className="w-12 h-12 text-gray-400" />
          )}
        </div>
        <h1 className="text-2xl font-black text-brand-dark mb-1">{user.displayName}</h1>
        <p className="text-gray-500 text-sm">{user.email}</p>
      </div>

      {/* App Download Prompt */}
      <div className="bg-brand-dark rounded-2xl p-8 text-center mb-8">
        <Smartphone className="w-10 h-10 text-brand-gold mx-auto mb-3" />
        <h3 className="text-lg font-bold text-white mb-2">Get the Full Experience</h3>
        <p className="text-gray-400 text-sm mb-4">Edit your profile, manage rentals, message owners, and more in the ShareStash app.</p>
        <div className="flex gap-3 justify-center">
          <a href="https://apps.apple.com" className="bg-white text-brand-dark font-bold px-5 py-2.5 rounded-xl text-sm">App Store</a>
          <a href="https://play.google.com" className="bg-brand-green text-white font-bold px-5 py-2.5 rounded-xl text-sm">Google Play</a>
        </div>
      </div>

      {/* Sign Out */}
      <button
        onClick={async () => { await logout(); router.push('/'); }}
        className="w-full bg-white border border-gray-200 text-red-500 font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-red-50 transition-colors"
      >
        <LogOut className="w-5 h-5" /> Sign Out
      </button>
    </div>
  );
}
