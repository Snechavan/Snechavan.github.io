'use client';

import { usePathname } from 'next/navigation';
import Navigation from './Navigation';
import ThemeAnimation from './ThemeAnimation';
import FloatingElements from './FloatingElements';

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ThemeAnimation />
      <Navigation />
      <FloatingElements />
      <main className="relative z-10">{children}</main>
    </>
  );
} 