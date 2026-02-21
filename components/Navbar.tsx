'use client';
import Link from 'next/link';
import { useAuth } from '@/lib/auth';
import { Package, Search, User, LogOut, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-brand-dark sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg border-2 border-brand-gold flex items-center justify-center group-hover:bg-brand-gold/10 transition-colors">
              <Package className="w-5 h-5 text-brand-gold" />
            </div>
            <span className="text-xl font-bold text-white">ShareStash</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/browse" className="flex items-center gap-1.5 text-gray-300 hover:text-brand-gold transition-colors text-sm font-medium">
              <Search className="w-4 h-4" />
              Browse
            </Link>
            {user ? (
              <>
                <Link href="/profile" className="flex items-center gap-1.5 text-gray-300 hover:text-brand-gold transition-colors text-sm font-medium">
                  <User className="w-4 h-4" />
                  {user.displayName || 'Profile'}
                </Link>
                <button onClick={logout} className="flex items-center gap-1.5 text-gray-400 hover:text-red-400 transition-colors text-sm font-medium">
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                  Sign In
                </Link>
                <Link href="/register" className="btn-gold text-sm !py-2 !px-4">
                  Get Started
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu toggle */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-300">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-800 mt-2 pt-4 space-y-3">
            <Link href="/browse" onClick={() => setMenuOpen(false)} className="block text-gray-300 hover:text-brand-gold text-sm font-medium">
              Browse Items
            </Link>
            {user ? (
              <>
                <Link href="/profile" onClick={() => setMenuOpen(false)} className="block text-gray-300 hover:text-brand-gold text-sm font-medium">
                  Profile
                </Link>
                <button onClick={() => { logout(); setMenuOpen(false); }} className="block text-gray-400 hover:text-red-400 text-sm font-medium">
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link href="/login" onClick={() => setMenuOpen(false)} className="block text-gray-300 hover:text-white text-sm font-medium">
                  Sign In
                </Link>
                <Link href="/register" onClick={() => setMenuOpen(false)} className="block text-brand-gold font-bold text-sm">
                  Get Started
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
