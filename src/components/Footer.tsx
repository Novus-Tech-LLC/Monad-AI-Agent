
import React from 'react';
import { Instagram, Twitter, Linkedin, Github } from 'lucide-react';
import Logo from './Logo';

const footerLinks = [
  {
    title: 'Product',
    links: [
      { label: 'Dashboard', href: '/dashboard' },
      { label: 'Documentation', href: '/documentation' },
      { label: 'Roadmap', href: '#roadmap' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Monad Mainnet', href: 'https://monad.xyz' },
      { label: 'Status Page', href: 'https://status.monad.xyz' },
      { label: 'Brand Assets', href: 'https://novustechllc.com' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Novus Tech LLC', href: 'https://novustechllc.com' },
      { label: 'Support', href: 'mailto:hello@novustechllc.com' },
      { label: 'Privacy', href: '/privacy' },
    ],
  },
];

const socialLinks = [
  { icon: Twitter, href: 'https://x.com/novustch', label: 'Twitter' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/novustechllc', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/Novus-Tech-LLC', label: 'GitHub' },
  { icon: Instagram, href: 'https://instagram.com/novustech', label: 'Instagram' },
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-border/50 bg-background/95">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />
        <div className="absolute bottom-0 right-8 h-40 w-40 rounded-full bg-amber-400/20 blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-14 sm:px-10 lg:px-12">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md space-y-6">
            <Logo className="h-16" />
            <p className="text-base text-muted-foreground">
              AI-native orchestration for Monad Mainnet teams. Automate wallets, settlements, and
              market intelligence with enterprise-grade guardrails.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <a
                href="mailto:hello@novustechllc.com"
                className="inline-flex items-center rounded-full border border-border/60 px-4 py-2 text-foreground transition hover:border-primary hover:text-primary"
              >
                Contact Sales
              </a>
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-primary">
                Mainnet Ready
              </span>
            </div>
          </div>

          <div className="grid flex-1 grid-cols-2 gap-8 text-sm sm:grid-cols-3">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <p className="mb-3 text-sm font-semibold text-foreground/80">{section.title}</p>
                <ul className="space-y-2 text-muted-foreground">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="transition hover:text-foreground"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-border/40 pt-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {currentYear} MnadAI · Built by Novus Tech LLC.</p>
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-background/60 text-muted-foreground transition hover:border-primary hover:text-primary"
                aria-label={social.label}
              >
                <social.icon className="h-4 w-4 transition group-hover:scale-110" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
