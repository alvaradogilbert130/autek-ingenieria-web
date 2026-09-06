
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavSubItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  items?: NavSubItem[];
}

const navItems: NavItem[] = [
  { label: 'Inicio', href: '/' },
  {
    label: 'Equipos Industriales',
    href: '/equipos-industriales',
    items: [
      { label: 'Hiladora de Queso', href: '/equipos-industriales/hiladora-de-queso' },
      { label: 'Tanques de Leche', href: '/equipos-industriales/tanques-de-leche' },
      { label: 'Mezclador de Carne', href: '/equipos-industriales/mezclador-de-carne' },
      { label: 'Bandas Transportadoras', href: '/equipos-industriales/bandas-transportadoras' },
      { label: 'Elevadores de Carne', href: '/equipos-industriales/elevador-de-carne' },
      { label: 'Calderas Industriales', href: '/equipos-industriales/calderas' },
    ]
  },
  { label: 'Proyectos', href: '/#portafolio' },
  { label: 'Nosotros', href: '/#nosotros' },
  { label: 'Contacto', href: '/#contacto' },
];

const AutekLogo = () => (
  <Image
    src="/images/logo.png"
    alt="Autek Ingenieria Logo"
    width={120}
    height={32}
    style={{ height: 'auto' }}
    priority
  />
);

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    setMobileDropdownOpen(null);
  };

  const toggleMobileDropdown = (label: string) => {
    setMobileDropdownOpen(mobileDropdownOpen === label ? null : label);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-background/95 shadow-md backdrop-blur-sm border-b border-border' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" onClick={handleLinkClick}>
          <AutekLogo />
        </Link>

        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => {
            if (item.items) {
              return (
                <div key={item.label} className="relative group py-2">
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>{item.label}</span>
                    <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                  </Link>
                  <div className="absolute left-0 top-full mt-1 w-56 rounded-md shadow-lg bg-card border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-250 z-50 flex flex-col p-2 space-y-1">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className="text-sm font-medium text-foreground/80 hover:text-primary hover:bg-muted/80 rounded-md px-3 py-2 transition-colors"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] bg-background overflow-y-auto">
            <nav className="flex flex-col gap-4 pt-8">
             <Link href="/" className="flex items-center gap-2 mb-4 pl-4" onClick={handleLinkClick}>
                <AutekLogo />
             </Link>
              {navItems.map((item) => {
                if (item.items) {
                  const isOpen = mobileDropdownOpen === item.label;
                  return (
                    <div key={item.label} className="flex flex-col pl-4">
                      <button
                        onClick={() => toggleMobileDropdown(item.label)}
                        className="text-lg font-medium text-foreground hover:text-primary flex items-center justify-between w-full py-2 text-left"
                      >
                        <span>{item.label}</span>
                        <ChevronDown className={cn("h-5 w-5 transition-transform duration-200", isOpen && "rotate-180")} />
                      </button>
                      {isOpen && (
                        <div className="flex flex-col pl-4 mt-1 space-y-2 border-l border-muted">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.label}
                              href={subItem.href}
                              onClick={handleLinkClick}
                              className="text-base text-foreground/80 hover:text-primary transition-colors py-2"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={handleLinkClick}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors pl-4 py-2"
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
