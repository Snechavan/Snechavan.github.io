import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ClientLayout from './components/ClientLayout';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'CodeCanvas | Sneha Chavan - Full Stack Developer',
  description: 'Portfolio of Sneha Chavan, a Full Stack Developer specializing in React, Node.js, and creative web solutions. View projects, experience, and testimonials.',
  keywords: 'Full Stack Developer, React, Node.js, Web Development, Portfolio, Sneha Chavan, Creative Developer, Web Solutions',
  authors: [{ name: 'Sneha Chavan' }],
  creator: 'Sneha Chavan',
  publisher: 'Sneha Chavan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourdomain.com',
    title: 'CodeCanvas | Sneha Chavan - Full Stack Developer',
    description: 'Creative Full Stack Developer Portfolio showcasing React, Node.js, and innovative web solutions',
    siteName: 'CodeCanvas',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CodeCanvas Portfolio Preview'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CodeCanvas | Sneha Chavan',
    description: 'Creative Full Stack Developer Portfolio',
    creator: '@yourtwitterhandle',
    images: ['/og-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Sneha Chavan',
  jobTitle: 'Full Stack Developer',
  url: 'https://yourdomain.com',
  sameAs: [
    'https://github.com/Snechavan',
    'https://www.linkedin.com/in/sneha-chavan-789181250'
  ],
  knowsAbout: [
    'React',
    'Node.js',
    'TypeScript',
    'Web Development',
    'Full Stack Development'
  ],
  description: 'Full Stack Developer with expertise in React, Node.js, and creative web solutions',
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Your University Name'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://yourdomain.com" />
        <meta name="theme-color" content="#ffffff" />
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
