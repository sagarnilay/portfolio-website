import React from 'react';
import Navigation from '@/components/portfolio/Navigation';
import HeroSection from '@/components/portfolio/HeroSection';
import AboutSection from '@/components/portfolio/AboutSection';
import SkillsSection from '@/components/portfolio/SkillsSection';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import ContactSection from '@/components/portfolio/ContactSection';
import { useScrollSpy } from '@/hooks/useScrollSpy';

const Index = () => {
  const sections = ['home', 'about', 'skills', 'projects', 'contact'];
  const activeSection = useScrollSpy(sections);

  return (
    <div className="min-h-screen">
      <Navigation activeSection={activeSection} />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Let's Connect</h3>
            <div className="flex justify-center space-x-6 mb-6">
              <a href="https://github.com/sagarnilay" target="_blank" rel="noopener noreferrer" 
                 className="hover:text-primary-glow transition-smooth">
                GitHub
              </a>
              <a href="https://linkedin.com/in/sagar-nilay" target="_blank" rel="noopener noreferrer"
                 className="hover:text-primary-glow transition-smooth">
                LinkedIn
              </a>
              <a href="mailto:sjnilay@gmail.com"
                 className="hover:text-primary-glow transition-smooth">
                Email
              </a>
            </div>
            <p className="text-primary-foreground/80">
              © 2025 Sagar Nilay.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
