import React from 'react';
import Navigation from '@/components/portfolio/Navigation';
import HeroSection from '@/components/portfolio/HeroSection';
import AboutSection from '@/components/portfolio/AboutSection';
import SkillsSection from '@/components/portfolio/SkillsSection';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import ContactSection from '@/components/portfolio/ContactSection';
import CertificationsSection from '@/components/portfolio/CertificationsSection';
import { useScrollSpy } from '@/hooks/useScrollSpy';

const Index = () => {
  const sections = ['home', 'experience', 'focus', 'projects', 'certifications', 'contact'];
  const activeSection = useScrollSpy(sections);

  return (
    <div className="min-h-screen">
      <Navigation activeSection={activeSection} />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="site-footer section-wrap">
        <span>© {new Date().getFullYear()} Sagar Nilay</span><span>Enterprise support · Windows infrastructure · Cloud &amp; security</span><a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
};

export default Index;
