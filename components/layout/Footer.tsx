import React from 'react';
import Link from 'next/link';
import type { SocialLink, NavLink } from '@/types';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const navLinks: NavLink[] = [
    { label: 'Home', href: '#hero', ariaLabel: 'Navigate to home section' },
    { label: 'Skills', href: '#skills', ariaLabel: 'Navigate to skills section' },
    { label: 'My Journey', href: '#timeline', ariaLabel: 'Navigate to timeline section' },
    { label: 'Portfolio', href: '#portfolio', ariaLabel: 'Navigate to portfolio section' },
    { label: 'Testimonials', href: '#testimonials', ariaLabel: 'Navigate to testimonials section' },
    { label: 'Contact', href: '#contact', ariaLabel: 'Navigate to contact section' },
  ];

  const socialLinks: SocialLink[] = [
    {
      platform: 'GitHub',
      url: 'https://github.com/usamazuberi',
      icon: 'github',
      ariaLabel: 'Visit my GitHub profile',
    },
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: 'linkedin',
      ariaLabel: 'Visit my LinkedIn profile',
    },
    {
      platform: 'Twitter',
      url: 'https://x.com/usamazuberi',
      icon: 'twitter',
      ariaLabel: 'Visit my Twitter/X profile',
    },
    {
      platform: 'WhatsApp',
      url: 'https://wa.me/923062435762',
      icon: 'whatsapp',
      ariaLabel: 'Chat with me on WhatsApp',
    },
  ];

  const getSocialIcon = (icon: string) => {
    switch (icon) {
      case 'github':
        return (
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        );
      case 'linkedin':
        return (
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        );
      case 'twitter':
        return (
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        );
      case 'whatsapp':
        return (
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        );
      default:
        return null;
    }
  };

  return (
    <footer
      className="relative overflow-hidden border-t border-gray-800 bg-gray-900 py-8 text-white dark:border-gray-800 dark:bg-gray-950"
      role="contentinfo"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two Column Layout */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Left: Brand & Social */}
          <div className="space-y-4">
            <div>
              <h3 className="mb-2 bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text font-heading text-xl font-bold text-transparent">
                Usama Zuberi
              </h3>
              <p className="text-sm text-gray-400">
                Front-end Web Developer specializing in React and Next.js
              </p>
            </div>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 transition-colors hover:text-primary-400"
                  aria-label={social.ariaLabel}
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    {getSocialIcon(social.icon)}
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* Right: Quick Links */}
          <div className="space-y-4 md:text-right">
            <h4 className="text-sm font-semibold text-gray-300">Navigation</h4>
            <div className="flex flex-wrap gap-x-4 gap-y-2 md:justify-end">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-400 transition-colors hover:text-primary-400"
                  aria-label={link.ariaLabel}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a
              href="mailto:usama.zuberi1010@gmail.com"
              className="inline-block text-sm text-gray-400 transition-colors hover:text-primary-400"
            >
              usama.zuberi1010@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          <p>&copy; {currentYear} Muhammad Usama Zuberi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
