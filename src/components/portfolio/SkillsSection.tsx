import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js', 'HTML5/CSS3'],
      icon: '🎨'
    },
    {
      title: 'Cloud & DevOps',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Git'],
      icon: '☁️'
    },
    {
      title: 'Backend Development',
      skills: ['Node.js', 'Python', 'Express.js', 'PostgreSQL', 'MongoDB', 'Redis'],
      icon: '⚙️'
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
            Skills & Expertise
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="hover-lift shadow-card card-gradient">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-2">{category.icon}</div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex}
                        className="text-sm text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full text-center"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Additional skills showcase */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold mb-8 text-foreground">
              Technologies I Love Working With
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'React', 'TypeScript', 'Next.js', 'Python', 'AWS', 'Docker', 
                'PostgreSQL', 'MongoDB', 'Tailwind CSS', 'Git', 'Linux', 'Kubernetes'
              ].map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full hover-lift text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;