
import React, { useState } from 'react';
import { ChevronRight, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import RevealOnScroll from './ui/RevealOnScroll';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    {
      id: 'overview',
      title: 'Project Overview',
      content: `MnadAI is an advanced AI agent built specifically for the Monad blockchain. 
        By leveraging cutting-edge artificial intelligence, MnadAI enables users to interact 
        with blockchain technology through natural language, making complex operations 
        like token creation, asset management, and transaction analysis accessible to everyone.`
    },
    {
      id: 'technology',
      title: 'Technology',
      content: `Built on a foundation of transformer-based language models and 
        blockchain-specific training, MnadAI seamlessly integrates with Monad's high-performance 
        architecture. Our agent can process thousands of blockchain operations per second, 
        analyze smart contracts for vulnerabilities, and help users navigate the emerging 
        Monad ecosystem with confidence and ease.`
    },
    {
      id: 'team',
      title: 'Team',
      content: `Our team combines expertise in artificial intelligence, blockchain development, 
        and user experience design. With backgrounds from leading tech companies and 
        research institutions, we're united by our vision to make blockchain technology 
        more accessible and useful through conversational AI interfaces.`
    },
    {
      id: 'vision',
      title: 'Vision',
      content: `We envision a future where interacting with blockchain technology is as 
        simple as having a conversation. MnadAI aims to become the standard interface 
        for Monad users, from beginners taking their first steps into web3 to advanced 
        developers building complex applications. Our mission is to accelerate Monad's 
        adoption by removing technical barriers and empowering users with AI-enhanced capabilities.`
    }
  ];

  return (
    <>
      {/* Overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div 
        className={cn(
          "fixed top-0 right-0 h-full w-full md:w-[450px] bg-background z-50 shadow-xl transition-transform duration-300 ease-elastic",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-6 border-b">
            <h2 className="text-xl font-semibold">About MnadAI</h2>
            <button onClick={onClose} className="p-2 hover:bg-muted rounded-full">
              <X size={20} />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            <div className="flex h-full">
              {/* Sidebar navigation */}
              <div className="w-1/3 border-r p-4">
                <nav className="space-y-1">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={cn(
                        "w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center justify-between group",
                        activeSection === section.id 
                          ? "bg-primary/10 text-primary" 
                          : "hover:bg-muted"
                      )}
                    >
                      <span>{section.title}</span>
                      <ChevronRight 
                        size={16} 
                        className={cn(
                          "transform transition-transform",
                          activeSection === section.id ? "rotate-90" : "group-hover:translate-x-1"
                        )} 
                      />
                    </button>
                  ))}
                </nav>
              </div>
              
              {/* Content area */}
              <div className="w-2/3 p-6">
                {sections.map((section) => (
                  <div
                    key={section.id}
                    className={cn(
                      "space-y-4 transition-all",
                      activeSection === section.id ? "block" : "hidden"
                    )}
                  >
                    <h3 className="text-xl font-semibold">{section.title}</h3>
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
