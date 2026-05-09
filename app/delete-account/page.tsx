'use client';
// app/delete-account/page.tsx
// Place at: sharestash-web/app/delete-account/page.tsx
// Submit this URL to Google Play Console → App content → Data safety → Data deletion

import { useState } from 'react';

export default function DeleteAccountPage() {
  const [step, setStep]         = useState<'form' | 'confirm' | 'success' | 'error'>('form');
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [reason, setReason]     = useState('');
  const [loading, setLoading]   = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setErrorMsg('Email and password are required.');
      return;
    }
    setErrorMsg('');
    setStep('confirm');
  };

  const handleConfirm = async () => {
    setLoading(true);
    setErrorMsg('');
    try {
      const res = await fetch('/api/delete-account', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), password, reason }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStep('success');
      } else {
        setErrorMsg(data.error || 'Deletion failed. Please try again.');
        setStep('error');
      }
    } catch {
      setErrorMsg('Network error. Please try again.');
      setStep('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      {/* Header */}
      <div style={styles.header}>
        <span style={styles.headerTitle}>ShareStash</span>
      </div>

      <div style={styles.card}>

        {/* ── FORM STEP ── */}
        {step === 'form' && (
          <>
            <div style={styles.iconWrap}>🗑️</div>
            <h2 style={styles.title}>Delete Your Account</h2>
            <p style={styles.subtitle}>
              Enter your ShareStash credentials to permanently delete your account
              and all associated data including listings, rental history, messages,
              and payment information.
            </p>

            <div style={styles.warningBox}>
              <strong>⚠️ This action is permanent and cannot be undone.</strong>
              <ul style={styles.warningList}>
                <li>All your listings will be removed</li>
                <li>Your rental history will be deleted</li>
                <li>All messages will be permanently erased</li>
                <li>Any pending payouts will be forfeited</li>
                <li>Active rentals must be completed first</li>
              </ul>
            </div>

            <form onSubmit={handleSubmit} style={styles.form}>
              <label style={styles.label}>Email address</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                style={styles.input}
              />

              <label style={styles.label}>Password</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Your ShareStash password"
                required
                style={styles.input}
              />

              <label style={styles.label}>Reason for leaving (optional)</label>
              <select
                value={reason}
                onChange={e => setReason(e.target.value)}
                style={styles.input}
              >
                <option value="">Select a reason...</option>
                <option value="not_using">I no longer use ShareStash</option>
                <option value="privacy">Privacy concerns</option>
                <option value="switching">Switching to another service</option>
                <option value="bad_experience">Had a bad experience</option>
                <option value="other">Other</option>
              </select>

              {errorMsg && <p style={styles.errorText}>{errorMsg}</p>}

              <button type="submit" style={styles.deleteBtn}>
                Continue to Confirm Deletion
              </button>

              <a href="https://joinsharestash.com" style={styles.cancelLink}>
                Cancel — Keep My Account
              </a>
            </form>
          </>
        )}

        {/* ── CONFIRM STEP ── */}
        {step === 'confirm' && (
          <>
            <div style={styles.iconWrap}>⚠️</div>
            <h2 style={styles.title}>Are you absolutely sure?</h2>
            <p style={styles.subtitle}>
              You are about to permanently delete the account for{' '}
              <strong>{email}</strong>. This cannot be reversed.
            </p>

            <button
              onClick={handleConfirm}
              disabled={loading}
              style={{ ...styles.deleteBtn, opacity: loading ? 0.6 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
            >
              {loading ? 'Deleting...' : 'Yes, Permanently Delete My Account'}
            </button>

            <button onClick={() => setStep('form')} style={styles.backBtn}>
              Go Back
            </button>
          </>
        )}

        {/* ── SUCCESS STEP ── */}
        {step === 'success' && (
          <>
            <div style={styles.iconWrap}>✅</div>
            <h2 style={{ ...styles.title, color: '#1D9E75' }}>Account Deleted</h2>
            <p style={styles.subtitle}>
              Your ShareStash account and all associated data have been
              permanently deleted. We're sorry to see you go.
            </p>
            <p style={styles.subtitle}>
              Questions?{' '}
              <a href="mailto:support@joinsharestash.com" style={{ color: '#F55151' }}>
                support@joinsharestash.com
              </a>
            </p>
          </>
        )}

        {/* ── ERROR STEP ── */}
        {step === 'error' && (
          <>
            <div style={styles.iconWrap}>❌</div>
            <h2 style={{ ...styles.title, color: '#DC3545' }}>Deletion Failed</h2>
            <p style={styles.subtitle}>{errorMsg}</p>
            <p style={styles.subtitle}>
              This may be because your password was incorrect, or you have
              active rentals that must be completed first.
            </p>
            <button
              onClick={() => { setStep('form'); setErrorMsg(''); }}
              style={styles.backBtn}
            >
              Try Again
            </button>
            <p style={styles.subtitle}>
              Need help?{' '}
              <a href="mailto:support@joinsharestash.com" style={{ color: '#F55151' }}>
                Contact Support
              </a>
            </p>
          </>
        )}
      </div>

      <p style={styles.footer}>
        © {new Date().getFullYear()} ShareStash ·{' '}
        <a href="/privacy" style={styles.footerLink}>Privacy Policy</a> ·{' '}
        <a href="/terms" style={styles.footerLink}>Terms of Service</a>
      </p>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: '100vh',
    backgroundColor: '#F8F9FA',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px 16px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },
  header: {
    marginBottom: 32,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 700,
    color: '#2A2A36',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 40,
    maxWidth: 520,
    width: '100%',
    boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
  },
  iconWrap: {
    fontSize: 48,
    textAlign: 'center',
    marginBottom: 16,
    display: 'block',
  },
  title: {
    fontSize: 24,
    fontWeight: 700,
    color: '#2A2A36',
    textAlign: 'center',
    margin: '0 0 12px',
  },
  subtitle: {
    fontSize: 15,
    color: '#555',
    textAlign: 'center',
    lineHeight: 1.6,
    margin: '0 0 20px',
  },
  warningBox: {
    backgroundColor: '#FFF3CD',
    border: '1px solid #FFC107',
    borderRadius: 10,
    padding: 16,
    marginBottom: 24,
    fontSize: 14,
    color: '#856404',
    lineHeight: 1.6,
  },
  warningList: {
    margin: '8px 0 0',
    paddingLeft: 20,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
  label: {
    fontSize: 14,
    fontWeight: 600,
    color: '#2A2A36',
    marginBottom: 6,
    marginTop: 12,
  },
  input: {
    width: '100%',
    padding: '12px 14px',
    borderRadius: 10,
    border: '1px solid #E0E0E0',
    fontSize: 15,
    color: '#2A2A36',
    backgroundColor: '#FAFAFA',
    boxSizing: 'border-box',
    outline: 'none',
  },
  deleteBtn: {
    backgroundColor: '#DC3545',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: 12,
    padding: '16px 24px',
    fontSize: 15,
    fontWeight: 700,
    cursor: 'pointer',
    width: '100%',
    marginTop: 24,
  },
  cancelLink: {
    display: 'block',
    textAlign: 'center',
    marginTop: 12,
    fontSize: 14,
    color: '#666',
    textDecoration: 'none',
  },
  backBtn: {
    backgroundColor: 'transparent',
    color: '#2A2A36',
    border: '1px solid #E0E0E0',
    borderRadius: 12,
    padding: '14px 24px',
    fontSize: 15,
    cursor: 'pointer',
    width: '100%',
    marginTop: 12,
  },
  errorText: {
    color: '#DC3545',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 8,
  },
  footer: {
    marginTop: 32,
    fontSize: 13,
    color: '#999',
    textAlign: 'center',
  },
  footerLink: {
    color: '#999',
    textDecoration: 'none',
  },
};