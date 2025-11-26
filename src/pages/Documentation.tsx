
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

const Documentation: React.FC = () => {
  // Array of documentation sections
  const sections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      content: [
        {
          subtitle: 'What is MnadAI?',
          text: 'MnadAI is an advanced AI agent built specifically for the Monad blockchain. By leveraging cutting-edge artificial intelligence, MnadAI enables users to interact with blockchain technology through natural language, making complex operations like token creation, asset management, and transaction analysis accessible to everyone.'
        },
        {
          subtitle: 'Connecting Your Wallet',
          text: 'To start using MnadAI, click the "Get Started" button on the homepage. You\'ll be prompted to connect your wallet using Privy. Once connected, you\'ll be redirected to the dashboard where you can start interacting with the AI agent.'
        }
      ]
    },
    {
      id: 'commands',
      title: 'Basic Commands',
      content: [
        {
          subtitle: 'Wallet Management',
          text: 'Check your wallet balance with "balance" or "check balance". View your wallet address with "my address" or "show address".'
        },
        {
          subtitle: 'Token Creation',
          text: 'Create a new token with "create token [NAME] [SYMBOL] [SUPPLY]". For example: "create token MyToken MTK 1000000".'
        },
        {
          subtitle: 'Transactions',
          text: 'Send tokens with "send [AMOUNT] [TOKEN] to [ADDRESS]". For example: "send 10 MONAD to 0x123...". Check transaction status with "status [TX_HASH]".'
        }
      ]
    },
    {
      id: 'advanced',
      title: 'Advanced Features',
      content: [
        {
          subtitle: 'Token Analytics',
          text: 'Get token price information with "price [TOKEN]". View trending tokens with "trending tokens" or "popular tokens".'
        },
        {
          subtitle: 'Gas Optimization',
          text: 'Check current gas prices with "gas price" or "gas fees". Optimize your transaction with "optimize transaction" or "suggest gas".'
        },
        {
          subtitle: 'Transaction History',
          text: 'View your transaction history with "show history" or "recent transactions". Get detailed information about a specific transaction with "details [TX_HASH]".'
        }
      ]
    },
    {
      id: 'resources',
      title: 'Additional Resources',
      content: [
        {
          subtitle: 'Funding Guidance',
          text: 'Ask "fund account" or "how do I get MON" to receive curated steps for sourcing MONAD liquidity on Monad Mainnet.'
        },
        {
          subtitle: 'Help & Support',
          text: 'If you\'re stuck or need assistance, simply type "help" or "support" to get a list of available commands and resources.'
        }
      ]
    }
  ];

  return (
    <MainLayout>
      <div className="section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <h1 className="text-4xl font-bold mb-4">Documentation</h1>
            <p className="text-xl text-muted-foreground">
              Learn how to interact with the MnadAI AI agent on Monad Mainnet
            </p>
          </div>

          <div className="flex flex-col space-y-10">
            {sections.map((section, index) => (
              <div key={section.id} id={section.id} className="scroll-mt-24">
                <RevealItem delay={index * 100}>
                  <h2 className="text-2xl font-semibold mb-6">{section.title}</h2>
                  
                  <div className="grid gap-6">
                    {section.content.map((item, i) => (
                      <div key={i} className="glass-effect p-6 rounded-xl">
                        <h3 className="text-lg font-medium mb-2">{item.subtitle}</h3>
                        <p className="text-muted-foreground">{item.text}</p>
                      </div>
                    ))}
                  </div>
                  
                  {index < sections.length - 1 && (
                    <Separator className="mt-10" />
                  )}
                </RevealItem>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

// Simple reveal animation component for documentation sections
const RevealItem: React.FC<{
  children: React.ReactNode;
  delay?: number;
  className?: string;
}> = ({ children, delay = 0, className }) => {
  return (
    <div
      className={cn(
        "opacity-0 animate-fade-in",
        className
      )}
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      {children}
    </div>
  );
};

export default Documentation;
