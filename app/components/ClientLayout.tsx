'use client';

import { ThemeModeProvider } from './ThemeModeContext';
import { AuthProvider } from '../context/AuthContext';
import InteractiveEffects from './InteractiveEffects';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeModeProvider>
      <AuthProvider>
        <InteractiveEffects />
        {children}
      </AuthProvider>
    </ThemeModeProvider>
  );
} 