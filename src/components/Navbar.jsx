import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Globe } from 'lucide-react';

const Navbar = ({ onOpenModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Destinations', href: '#destinations' },
    { name: 'Courses', href: '#courses' },
    { name: 'Services', href: '#services' },
    { name: 'Events', href: '#events' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent', // Keep transparent at top
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        boxShadow: isScrolled ? 'var(--shadow-md)' : 'none',
        padding: isScrolled ? '0.75rem 0' : '1.5rem 0',
      }}
    >
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1400px', // Wider container for navbar
        padding: '0 2rem'
      }}>
        {/* Logo */}
        <a href="#" style={{
          fontSize: '1.5rem',
          fontWeight: '800',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          color: isScrolled ? 'var(--primary)' : 'white',
          flexShrink: 0
        }}>
          <Globe className="w-8 h-8" color={isScrolled ? 'var(--secondary)' : 'white'} />
          <span>EduGlobe<span style={{ color: 'var(--accent)' }}>.</span></span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden-mobile" style={{
          display: 'flex',
          gap: '1.5rem',
          alignItems: 'center',
          flex: 1,
          justifyContent: 'center' // Center links
        }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                fontSize: '0.9rem',
                fontWeight: '500',
                color: isScrolled ? 'var(--text-body)' : 'rgba(255,255,255,0.9)',
                whiteSpace: 'nowrap'
              }}
              className="nav-link"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden-mobile" style={{ flexShrink: 0 }}>
          <button
            onClick={onOpenModal}
            className="btn btn-primary"
            style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem' }}
          >
            <Phone size={16} />
            Talk to Expert
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{ color: isScrolled ? 'var(--text-main)' : 'white', display: 'none' }} // Hidden by default, shown in media query
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              backgroundColor: 'white',
              padding: '2rem',
              boxShadow: 'var(--shadow-lg)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--text-main)' }}
              >
                {link.name}
              </a>
            ))}
            <button className="btn btn-primary" onClick={() => { setIsMobileMenuOpen(false); onOpenModal(); }}>
              Talk to Expert
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
        .nav-link:hover { color: var(--secondary) !important; }
      `}</style>
    </nav>
  );
};

export default Navbar;
