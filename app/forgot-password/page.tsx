// FILE: app/forgot-password/page.tsx
'use client';
import { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import Link from 'next/link';
import { Package, ArrowLeft, Loader2, Mail, CheckCircle } from 'lucide-react';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      setSent(true);
    } catch (err: any) {
      if (err.code === 'auth/user-not-found') {
        setError('No account found with this email address.');
      } else if (err.code === 'auth/invalid-email') {
        setError('Please enter a valid email address.');
      } else {
        setError('Something went wrong. Please try again.');
      }
    }
    setLoading(false);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl border-2 border-brand-gold flex items-center justify-center mx-auto mb-4">
            <Package className="w-8 h-8 text-brand-gold" />
          </div>
          <h1 className="text-3xl font-black text-brand-dark mb-1">Reset your password</h1>
          <p className="text-gray-500">Enter your email and we&apos;ll send you a reset link</p>
        </div>

        {sent ? (
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm text-center">
            <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-brand-green" />
            </div>
            <h2 className="text-xl font-bold text-brand-dark mb-2">Check your email</h2>
            <p className="text-gray-500 text-sm mb-6">
              We sent a password reset link to <span className="font-semibold text-brand-dark">{email}</span>. Check your inbox and follow the instructions.
            </p>
            <p className="text-xs text-gray-400 mb-6">Didn&apos;t receive it? Check your spam folder or try again.</p>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => { setSent(false); setEmail(''); }}
                className="border-2 border-gray-200 text-brand-dark font-bold px-6 py-3 rounded-xl hover:border-brand-gold transition-all text-sm"
              >
                Try a different email
              </button>
              <Link href="/login" className="btn-gold text-sm flex items-center justify-center gap-2">
                <ArrowLeft className="w-4 h-4" /> Back to Sign In
              </Link>
            </div>
          </div>
        ) : (
          <>
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm space-y-5">
              {error && (
                <div className="bg-red-50 text-red-600 text-sm font-medium px-4 py-3 rounded-xl border border-red-200">
                  {error}
                </div>
              )}

              <div>
                <label className="block text-sm font-semibold text-brand-dark mb-1.5">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent text-sm"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <button type="submit" disabled={loading} className="btn-gold w-full flex items-center justify-center gap-2 disabled:opacity-50">
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Send Reset Link'}
              </button>
            </form>

            <p className="text-center text-sm text-gray-500 mt-6">
              Remember your password?{' '}
              <Link href="/login" className="text-brand-blue font-bold hover:underline">Sign in</Link>
            </p>
          </>
        )}
      </div>
    </div>
  );
}