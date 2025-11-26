
import React from 'react';
import RevealOnScroll from './ui/RevealOnScroll';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <RevealOnScroll>
            <div className="relative">
              <div className="aspect-video bg-gradient-to-tr from-secondary to-white rounded-2xl overflow-hidden shadow-md">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-40 h-40 bg-primary/10 rounded-full flex items-center justify-center">
                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center">
                      <div className="w-10 h-10 bg-primary rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-48 bg-accent rounded-2xl -z-10"></div>
            </div>
          </RevealOnScroll>
          
          <RevealOnScroll delay={200}>
            <div>
              <span className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full mb-4">About</span>
              <h2 className="text-balance mb-6">The Philosophy Behind MnadAI</h2>
              <p className="text-muted-foreground mb-6">
                MnadAI was born from a passion for creating products that are not only beautiful to look at but also a joy to use. We believe that design is not just about how something looks, but how it works.
              </p>
              <p className="text-muted-foreground mb-8">
                Every detail in MnadAI is carefully considered, from the subtle animations that guide your interactions to the thoughtful layout that helps you stay focused on what matters most.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold mb-2">99%</div>
                  <p className="text-sm text-muted-foreground">User satisfaction rate</p>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">50+</div>
                  <p className="text-sm text-muted-foreground">Countries worldwide</p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default About;
