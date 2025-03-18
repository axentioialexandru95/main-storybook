import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import { Button } from 'flowbite-react';
import ThemeToggle from '../ThemeToggle';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
          scrolled ? 'glass' : 'bg-transparent'
        }`}
      >
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image src="/logo.svg" alt="Phantom Tech" width={150} height={40} priority className="relative z-10" />
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <NavLink href="#solutions">Solutions</NavLink>
              <NavLink href="#features">Features</NavLink>
              <NavLink href="#pricing">Pricing</NavLink>
              <NavLink href="#founder">About</NavLink>
            </div>

            <div className="flex items-center space-x-5">
              <ThemeToggle className="mr-2" />
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="dark:text-text-muted text-gray-600 hover:text-primary transition-colors"
              >
                <FaGithub className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="dark:text-text-muted text-gray-600 hover:text-primary transition-colors"
              >
                <FaTwitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="dark:text-text-muted text-gray-600 hover:text-primary transition-colors"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <div className="hidden md:block">
                <Button 
                  color="blue"
                  size="sm"
                  className="bg-primary dark:text-text text-white hover:bg-primary-light transition-all duration-300"
                >
                  Book a Call
                </Button>
              </div>
              
              {/* Mobile menu button */}
              <button
                className="md:hidden dark:text-text-muted text-gray-600 hover:text-primary"
                onClick={toggleMobileMenu}
              >
                {mobileMenuOpen ? <FaTimes className="h-5 w-5" /> : <FaBars className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 glass pt-24 px-4"
        >
          <div className="flex flex-col space-y-6 items-center">
            <MobileNavLink href="#solutions" onClick={() => setMobileMenuOpen(false)}>Solutions</MobileNavLink>
            <MobileNavLink href="#features" onClick={() => setMobileMenuOpen(false)}>Features</MobileNavLink>
            <MobileNavLink href="#pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</MobileNavLink>
            <MobileNavLink href="#founder" onClick={() => setMobileMenuOpen(false)}>About</MobileNavLink>
            
            <Button 
              color="blue"
              size="lg"
              className="w-full mt-8 bg-primary dark:text-text text-white hover:bg-primary-light"
            >
              Book a Call
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  return (
    <a
      href={href}
      className="dark:text-text text-gray-800 hover:text-primary font-medium transition-colors px-3 py-2 relative group"
    >
      {children}
      <span 
        className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 group-hover:w-full transition-all duration-300"
      />
    </a>
  );
};

interface MobileNavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ href, children, onClick }) => {
  return (
    <a
      href={href}
      className="dark:text-text text-gray-800 hover:text-primary font-medium text-xl transition-colors px-4 py-3 w-full text-center"
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default Navbar;
