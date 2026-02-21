'use client';
import { Suspense } from 'react';
import UserProfileClient from '@/components/UserProfileClient';

function UserContent() {
  return <UserProfileClient />;
}

export default function Page() {
  return (
    <Suspense fallback={<div className="flex justify-center py-32"><div className="w-8 h-8 border-4 border-brand-gold border-t-transparent rounded-full animate-spin" /></div>}>
      <UserContent />
    </Suspense>
  );
}