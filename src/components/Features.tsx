
import React, { useState } from 'react';
import { 
  Wallet, 
  Coins, 
  CreditCard, 
  Send, 
  Droplets, 
  Gauge, 
  TrendingUp, 
  DollarSign, 
  ClipboardList, 
  Terminal 
} from 'lucide-react';
import RevealOnScroll from './ui/RevealOnScroll';
import FeatureCard from './FeatureCard';
import { cn } from '@/lib/utils';

const Features: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const features = [
    {
      icon: Wallet,
      title: "Wallet Management",
      description: "Securely set up and manage your Monad Mainnet wallet with a single command.",
      category: "wallet"
    },
    {
      icon: Coins,
      title: "Token Creation",
      description: "Effortlessly deploy custom ERC-20 tokens on Monad Mainnet.",
      category: "tokens"
    },
    {
      icon: CreditCard,
      title: "Balance Tracking",
      description: "Instantly check your MONAD balance with real-time updates.",
      category: "wallet"
    },
    {
      icon: Send,
      title: "Transaction Power",
      description: "Send MONAD tokens or sign messages with seamless blockchain integration.",
      category: "transactions"
    },
    {
      icon: Droplets,
      title: "Funding Guidance",
      description: "Get clear instructions on sourcing MON liquidity for Monad Mainnet operations.",
      category: "resources"
    },
    {
      icon: Gauge,
      title: "Gas Insights",
      description: "Monitor gas prices to optimize transactions efficiently.",
      category: "transactions"
    },
    {
      icon: TrendingUp,
      title: "Token Trends",
      description: "Discover trending tokens on Monad Mainnet with live explorer data.",
      category: "tokens"
    },
    {
      icon: DollarSign,
      title: "Price Checker",
      description: "Fetch real-time token prices from CoinGecko for informed decisions.",
      category: "tokens"
    },
    {
      icon: ClipboardList,
      title: "History Explorer",
      description: "Review recent transactions with detailed explorer links.",
      category: "transactions"
    },
    {
      icon: Terminal,
      title: "User-Friendly Commands",
      description: "Interact with MnadAI using simple, natural commands for a seamless experience.",
      category: "resources"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Features' },
    { id: 'wallet', label: 'Wallet' },
    { id: 'tokens', label: 'Tokens' },
    { id: 'transactions', label: 'Transactions' },
    { id: 'resources', label: 'Resources' }
  ];

  const filteredFeatures = activeCategory === 'all' 
    ? features 
    : features.filter(feature => feature.category === activeCategory);

  return (
    <section id="features" className="py-16 md:py-20 px-6 md:px-12 lg:px-24 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full mb-4">Features</span>
            <h2 className="text-balance mb-4">Blockchain Simplified with AI</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Experience the future of blockchain interaction through our advanced AI agent built specifically for Monad.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <div className="mb-10 flex justify-center">
            <div className="flex flex-wrap gap-2 bg-background/50 backdrop-blur-sm p-1 rounded-full border border-border/40">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={cn(
                    "px-4 py-2 text-sm rounded-full transition-all",
                    activeCategory === category.id 
                      ? "bg-primary text-primary-foreground" 
                      : "hover:bg-background"
                  )}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFeatures.map((feature, index) => (
            <RevealOnScroll key={feature.title} delay={index * 50}>
              <FeatureCard 
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
