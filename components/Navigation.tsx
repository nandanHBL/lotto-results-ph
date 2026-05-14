'use client';

import Link from 'next/link';
import { useState } from 'react';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/6-58-ultra', label: '6/58 Ultra' },
    { href: '/6-55-grand', label: '6/55 Grand' },
    { href: '/3d-swertres', label: '3D Swertres' },
    { href: '/jackpot-tracker', label: 'Jackpot Tracker' },
    { href: '/draw-schedule', label: 'Draw Schedule' },
    { href: '/lucky-pick', label: 'Lucky Pick' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-card border-b border-border backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center font-bold text-primary-foreground text-lg font-heading">
              LR
            </div>
            <span className="font-bold text-lg text-secondary hidden md:inline font-heading">
              Lotto Results PH
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded text-sm font-medium text-foreground hover:text-secondary hover:bg-primary/10 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-primary/10 rounded transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-2 pb-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 rounded text-sm font-medium text-foreground hover:text-secondary hover:bg-primary/10 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
