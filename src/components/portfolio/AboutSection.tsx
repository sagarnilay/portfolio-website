import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
            About Me
          </h2>
          
          <div className="items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed text-center">
                Hi, I'm Sagar, a passionate full-stack developer with a Bachelor's degree in Information Technology from the University of Mumbai and a Master's degree in Applied Statistics from Symbiosis University.
                I specialize in modern web technologies including React, TypeScript, Next.js, Python,
                and cloud platforms. I believe in writing clean, maintainable code and creating 
                user experiences that are both beautiful and functional.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed text-center">
                When I'm not coding, you can find me swimming, surfing, or running.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">

             {/* 
              <Card className="hover-lift shadow-card">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">1+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </CardContent>
              </Card>
            */ }
      
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;