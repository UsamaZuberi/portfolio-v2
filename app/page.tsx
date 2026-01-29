import dynamic from 'next/dynamic';
import HeroSection from '@/components/sections/HeroSection';
import SkillsSection from '@/components/sections/SkillsSection';
import InteractiveTimeline from '@/components/sections/InteractiveTimeline';
import PortfolioSection from '@/components/sections/PortfolioSection';
import SocialShare from '@/components/ui/SocialShare';

// Lazy load non-critical sections for better initial page load
const TestimonialsSection = dynamic(() => import('@/components/sections/TestimonialsSection'), {
  loading: () => (
    <div className="flex min-h-[400px] items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary-500 border-t-transparent" />
    </div>
  ),
});

const ContactSection = dynamic(() => import('@/components/sections/ContactSection'), {
  loading: () => (
    <div className="flex min-h-[400px] items-center justify-center bg-white dark:bg-gray-800">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary-500 border-t-transparent" />
    </div>
  ),
});

export default function Home() {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <InteractiveTimeline />
      <PortfolioSection />
      <TestimonialsSection />
      <div className="bg-white px-4 py-12 dark:bg-gray-900 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <SocialShare />
        </div>
      </div>
      <ContactSection />
    </>
  );
}
