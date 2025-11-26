
import React, { useEffect } from 'react';
import MainLayout from '../layouts/MainLayout';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Roadmap from '../components/Roadmap';

const Index: React.FC = () => {
  // Add smooth scroll behavior for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.href.includes(window.location.pathname)) {
        e.preventDefault();
        const targetElement = document.querySelector(anchor.hash);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 70, // Reduced offset
            behavior: 'smooth'
          });
          
          // Update URL without page reload
          window.history.pushState({}, '', anchor.hash);
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <MainLayout>
      <div className="flex flex-col space-y-0">
        <Hero />
        <Features />
        <Roadmap />
      </div>
    </MainLayout>
  );
};

export default Index;
