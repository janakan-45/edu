import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useModal } from '../components/ModalContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { openModal } = useModal();

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
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Destinations', href: '/destinations' },
    { name: 'Consultants', href: '/team' },
    { name: 'Success Stories', href: '/testimonials' },
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
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        boxShadow: 'var(--shadow-md)',
        padding: isScrolled ? '0.75rem 0' : '1rem 0', // Slight adjust for consistent look
      }}
    >
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1400px',
        padding: '0 2rem'
      }}>
        {/* Logo */}
        <Link to="/" style={{
          fontSize: '1.5rem',
          fontWeight: '800',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          color: 'var(--primary)', // Always primary
          flexShrink: 0,
          textDecoration: 'none'
        }}>
          <Globe className="w-8 h-8" color="var(--secondary)" />
          <span>Eduglobe International</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden-mobile" style={{
          display: 'flex',
          gap: '1.5rem',
          alignItems: 'center',
          flex: 1,
          justifyContent: 'center' // Center links
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              style={{
                fontSize: '0.9rem',
                fontWeight: '600', // Slightly bolder for visibility
                color: 'var(--text-body)', // Always dark
                whiteSpace: 'nowrap',
                borderBottom: location.pathname === link.href ? '2px solid var(--accent)' : '2px solid transparent',
                paddingBottom: '2px'
              }}
              className="nav-link"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden-mobile" style={{ flexShrink: 0 }}>
          <button
            onClick={openModal}
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
          style={{ color: 'var(--text-main)', display: 'none' }} // Hidden by default, shown in media query
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
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--text-main)' }}
              >
                {link.name}
              </Link>
            ))}
            <button className="btn btn-primary" onClick={() => { setIsMobileMenuOpen(false); openModal(); }}>
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
