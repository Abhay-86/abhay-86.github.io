'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/toggle';
import { MenuIcon, X } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Features', href: '#features' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          Logo
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                pathname === link.href ? 'text-primary' : 'text-muted-foreground'
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right side - Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <ModeToggle />
          <Button variant="outline" size="sm">
            Sign In
          </Button>
          <Button size="sm">Get Started</Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <ModeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 hover:bg-accent rounded-md"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="flex flex-col space-y-2 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  'block text-sm font-medium hover:text-primary py-2',
                  pathname === link.href ? 'text-primary' : 'text-muted-foreground'
                )}
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex gap-2 pt-4">
              <Button variant="outline" size="sm" className="w-full">
                Sign In
              </Button>
              <Button size="sm" className="w-full">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}