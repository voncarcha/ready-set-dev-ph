import dynamic from 'next/dynamic';
import HeaderSection from '@/components/home/HeaderSection';
import BrandSection from '@/components/home/BrandSection';
import ServicesSection from '@/components/home/ServicesSection';
import WhoWeAreSection from '@/components/home/WhoWeAreSection';
import ProjectSection from '@/components/home/ProjectSection';
import ContactSection from '@/components/home/ContactSection';

const TopNav = dynamic(() => import('@/components/global/TopNav'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative min-h-[100vh]">
      <TopNav />
      <HeaderSection />
      <BrandSection />
      <WhoWeAreSection />
      <ServicesSection />
      <ProjectSection />
      <ContactSection />
    </main>
  );
}
