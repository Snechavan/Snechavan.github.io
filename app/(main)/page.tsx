import dynamic from 'next/dynamic';

const HeroSection = dynamic(() => import('../components/HeroSection'), {
  ssr: true
});

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
    </div>
  );
} 