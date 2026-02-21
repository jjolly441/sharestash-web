import Link from 'next/link';
import { Package } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Package className="w-6 h-6 text-brand-gold" />
            <span className="text-lg font-bold text-brand-dark">ShareStash</span>
          </div>
          <div className="flex gap-8 text-sm">
            <Link href="/privacy" className="text-brand-blue font-semibold hover:underline">Privacy Policy</Link>
            <Link href="/terms" className="text-brand-blue font-semibold hover:underline">Terms of Service</Link>
            <Link href="/help" className="text-brand-blue font-semibold hover:underline">Help Center</Link>
          </div>
          <p className="text-xs text-gray-400">&copy; 2026 ShareStash. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
