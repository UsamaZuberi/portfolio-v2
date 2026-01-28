import HeroSection from '@/components/sections/HeroSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import EducationSection from '@/components/sections/EducationSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import ContactSection from '@/components/sections/ContactSection';
import SocialShare from '@/components/ui/SocialShare';

export default function Home() {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <PortfolioSection />
      <div className="bg-white px-4 py-12 sm:px-6 lg:px-8 dark:bg-gray-900">
        <div className="container mx-auto max-w-4xl">
          <SocialShare />
        </div>
      </div>
      <ContactSection />
    </>
  );
}
