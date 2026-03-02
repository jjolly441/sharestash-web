// FILE: app/not-found.tsx — Place this directly in the app folder (NOT in a subfolder)
import Link from 'next/link';
import { Package, Search, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 rounded-2xl border-2 border-gray-200 flex items-center justify-center mx-auto mb-6">
          <Package className="w-10 h-10 text-gray-300" />
        </div>
        <h1 className="text-6xl font-black text-brand-dark mb-2">404</h1>
        <h2 className="text-xl font-bold text-gray-400 mb-4">Page not found</h2>
        <p className="text-gray-500 text-sm mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-brand-dark font-bold px-6 py-3 rounded-xl hover:border-brand-gold transition-all text-sm">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <Link href="/browse" className="btn-gold text-sm inline-flex items-center justify-center gap-2">
            <Search className="w-4 h-4" /> Browse Items
          </Link>
        </div>
      </div>
    </div>
  );
}