'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ClientProviders from '../components/ClientProviders';
import ClientWrapper from '../components/ClientWrapper';
import VisualBackground from '../components/VisualBackground';
import FloatingElements3D from '../components/FloatingElements3D';
import InteractiveEffects from '../components/InteractiveEffects';
import { ReactNode } from 'react';

export default function MainLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ClientProviders>
      <ClientWrapper>
        <VisualBackground />
        <FloatingElements3D />
        <InteractiveEffects />
        <Header />
        <main className="relative z-10">
          {children}
        </main>
        <Footer />
      </ClientWrapper>
    </ClientProviders>
  );
} 