import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-gradient">
      <div className="container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Hi, I'm <span className="text-primary-glow">Sagar</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 animate-fade-in delay-100">
            Full Stack Developer
          </p>
          <p className="text-lg mb-12 text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in delay-200">
            I am full-stack developer that loves to create beautiful and functional web applications that solve real-world problems. 
            Passionate about clean code, intuitive design, and cutting-edge technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-300">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={scrollToProjects}
              className="hover-lift bg-white text-primary hover:bg-white/90"
            >
              View My Work
            </Button>
            <Button 
              size="lg" 
              variant="secondary"
              onClick={scrollToContact}
              className="hover-lift  bg-white text-primary hover:bg-white/90"
            >
              Get In Touch
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;