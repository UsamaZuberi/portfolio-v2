import HeroSection from '@/components/sections/HeroSection';
import SkillsSection from '@/components/sections/SkillsSection';
import InteractiveTimeline from '@/components/sections/InteractiveTimeline';
import PortfolioSection from '@/components/sections/PortfolioSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ContactSection from '@/components/sections/ContactSection';
import SocialShare from '@/components/ui/SocialShare';

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
