
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import Logo from './Logo';
import { useWalletConnection } from '@/hooks/useWalletConnection';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isDashboard = location.pathname === '/dashboard';
  const {
    ready,
    authenticated,
    isProcessing,
    statusLabel,
    connectWallet,
    disconnectWallet,
  } = useWalletConnection();

  const primaryGradient = authenticated
    ? "bg-gradient-to-r from-emerald-500 via-lime-500 to-emerald-600 text-white shadow-[0_4px_20px_rgba(16,185,129,0.35)] hover:shadow-[0_6px_24px_rgba(101,163,13,0.35)]"
    : "bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 text-white shadow-[0_4px_20px_rgba(37,99,235,0.35)] hover:shadow-[0_6px_24px_rgba(109,40,217,0.35)]";

  useEffect(() => {
    const handleScroll = () => {
      // Only detect if page is scrolled for shadow effect
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handlePrimaryAction = async () => {
    if (isDashboard) {
      await disconnectWallet();
      return;
    }

    if (authenticated) {
      navigate('/dashboard');
      return;
    }

    await connectWallet();
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-elastic",
        isScrolled 
          ? "bg-background/95 backdrop-blur-lg shadow-sm" 
          : "bg-background/90 backdrop-blur-md",
        "border-b border-border/40 py-2"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="/" className="transition-all duration-300">
          <Logo />
        </a>
        
        <div className="flex items-center">
          <button 
            onClick={handlePrimaryAction}
            disabled={!ready || isProcessing}
            className={cn(
              "px-4 py-2 rounded-lg text-base font-semibold transition-all duration-300",
              isDashboard
                ? "bg-destructive/10 text-destructive hover:bg-destructive/20 disabled:opacity-50"
                : cn(
                    "hover:scale-[1.02] disabled:opacity-50",
                    primaryGradient
                  )
            )}
          >
            {statusLabel}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
