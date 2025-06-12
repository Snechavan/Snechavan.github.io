'use client';

import { ThemeModeProvider } from './ThemeModeContext';

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return <ThemeModeProvider>{children}</ThemeModeProvider>;
} 