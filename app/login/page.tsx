// FILE: app/login/page.tsx — REPLACE your existing login page with this
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import Link from 'next/link';
import { Package, Eye, EyeOff, Loader2, ArrowLeft } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [resetSent, setResetSent] = useState(false);
  const [showReset, setShowReset] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(email, password);
      router.push('/browse');
    } catch (err: any) {
      setError(err.message?.includes('invalid') ? 'Invalid email or password' : 'Login failed. Please try again.');
    }
    setLoading(false);
  };

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!email.trim()) {
      setError('Please enter your email address');
      return;
    }
    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      setResetSent(true);
    } catch (err: any) {
      setError(err.message?.includes('not-found') ? 'No account found with this email' : 'Failed to send reset email. Please try again.');
    }
    setLoading(false);
  };

  // Forgot Password View
  if (showReset) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl border-2 border-brand-gold flex items-center justify-center mx-auto mb-4">
              <Package className="w-8 h-8 text-brand-gold" />
            </div>
            <h1 className="text-3xl font-black text-brand-dark mb-1">Reset password</h1>
            <p className="text-gray-500">Enter your email and we&apos;ll send you a reset link</p>
          </div>

          {resetSent ? (
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm text-center">
              <div className="bg-green-50 text-brand-green text-sm font-medium px-4 py-3 rounded-xl border border-green-200 mb-4">
                Password reset email sent! Check your inbox.
              </div>
              <p className="text-sm text-gray-500 mb-4">
                Didn&apos;t receive it? Check your spam folder or try again.
              </p>
              <button onClick={() => { setResetSent(false); setError(''); }} className="text-brand-blue font-bold text-sm hover:underline">
                Send again
              </button>
            </div>
          ) : (
            <form onSubmit={handlePasswordReset} className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm space-y-5">
              {error && (
                <div className="bg-red-50 text-red-600 text-sm font-medium px-4 py-3 rounded-xl border border-red-200">
                  {error}
                </div>
              )}

              <div>
                <label className="block text-sm font-semibold text-brand-dark mb-1.5">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent text-sm"
                  placeholder="you@example.com"
                />
              </div>

              <button type="submit" disabled={loading} className="btn-gold w-full flex items-center justify-center gap-2 disabled:opacity-50">
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Send Reset Link'}
              </button>
            </form>
          )}

          <p className="text-center text-sm text-gray-500 mt-6">
            <button onClick={() => { setShowReset(false); setError(''); setResetSent(false); }} className="text-brand-blue font-bold hover:underline inline-flex items-center gap-1">
              <ArrowLeft className="w-3 h-3" /> Back to Sign In
            </button>
          </p>
        </div>
      </div>
    );
  }

  // Login View
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl border-2 border-brand-gold flex items-center justify-center mx-auto mb-4">
            <Package className="w-8 h-8 text-brand-gold" />
          </div>
          <h1 className="text-3xl font-black text-brand-dark mb-1">Welcome back</h1>
          <p className="text-gray-500">Sign in to your ShareStash account</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm space-y-5">
          {error && (
            <div className="bg-red-50 text-red-600 text-sm font-medium px-4 py-3 rounded-xl border border-red-200">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-semibold text-brand-dark mb-1.5">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent text-sm"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-brand-dark mb-1.5">Password</label>
            <div className="relative">
              <input
                type={showPw ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 bg-gray-50 text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent text-sm"
                placeholder="Your password"
              />
              <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                {showPw ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <button type="submit" disabled={loading} className="btn-gold w-full flex items-center justify-center gap-2 disabled:opacity-50">
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Sign In'}
          </button>

          <button type="button" onClick={() => { setShowReset(true); setError(''); }} className="w-full text-center text-sm text-brand-blue font-semibold hover:underline">
            Forgot your password?
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Don&apos;t have an account?{' '}
          <Link href="/register" className="text-brand-blue font-bold hover:underline">Create one</Link>
        </p>
      </div>
    </div>
  );
}