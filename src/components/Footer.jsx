import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" style={{ backgroundColor: 'var(--primary)', color: 'white', paddingTop: '5rem', paddingBottom: '2rem' }}>
            <div className="container">
                <div className="grid grid-4" style={{ gap: '3rem', marginBottom: '3rem' }}>
                    {/* Brand */}
                    <div style={{ gridColumn: 'span 1' }}>
                        <h2 style={{ color: 'white', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            EduGlobe<span style={{ color: 'var(--accent)' }}>.</span>
                        </h2>
                        <p style={{ color: '#94a3b8', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                            Edu Globe Lanka Consultancy is your trusted partner for international education, helping you achieve your dreams of studying abroad.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a href="https://instagram.com" className="social-icon"><Instagram size={20} /></a>
                            <a href="https://facebook.com" className="social-icon"><Facebook size={20} /></a>
                            <a href="https://linkedin.com" className="social-icon"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.1rem' }}>Quick Links</h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#cbd5e1' }}>
                            <li><a href="#" className="footer-link">Home</a></li>
                            <li><a href="#about" className="footer-link">About Us</a></li>
                            <li><a href="#services" className="footer-link">Services</a></li>
                            <li><a href="#destinations" className="footer-link">Destinations</a></li>
                            <li><a href="#contact" className="footer-link">Contact</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.1rem' }}>Our Services</h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#cbd5e1' }}>
                            <li>Student Counseling</li>
                            <li>Visa Application</li>
                            <li>University Admissions</li>
                            <li>Scholarship Help</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.1rem' }}>Contact Us</h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: '#cbd5e1' }}>
                            <li style={{ display: 'flex', gap: '1rem' }}>
                                <MapPin size={24} style={{ flexShrink: 0, color: 'var(--accent)' }} />
                                <span>Level 37, West Tower,<br />World Trade Center,<br />Colombo, Sri Lanka</span>
                            </li>
                            <li style={{ display: 'flex', gap: '1rem' }}>
                                <Phone size={20} style={{ flexShrink: 0, color: 'var(--accent)' }} />
                                <div>
                                    <a href="tel:+94778181819" style={{ display: 'block' }}>+94 77 818 1819</a>
                                    <a href="tel:+94775569175" style={{ display: 'block' }}>+94 77 556 9175</a>
                                </div>
                            </li>
                            <li style={{ display: 'flex', gap: '1rem' }}>
                                <Mail size={20} style={{ flexShrink: 0, color: 'var(--accent)' }} />
                                <a href="mailto:info@eduglobe.lk">info@eduglobe.lk</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid #334155', paddingTop: '2rem', textAlign: 'center', color: '#64748b' }}>
                    <p>© {new Date().getFullYear()} Edu Globe Lanka Consultancy. All rights reserved.</p>
                    <div style={{ marginTop: '1rem', fontSize: '0.9rem', display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                        <a href="/terms" style={{ color: '#64748b' }} className="footer-link">Terms & Conditions</a>
                        <a href="/privacy" style={{ color: '#64748b' }} className="footer-link">Privacy Policy</a>
                    </div>
                </div>
            </div>
            <style>{`
        .social-icon {
          background: rgba(255,255,255,0.1);
          padding: 0.5rem;
          border-radius: 50%;
          color: white;
          transition: all 0.3s;
          display: flex;
        }
        .social-icon:hover {
          background: var(--accent);
          transform: translateY(-3px);
        }
        .footer-link:hover {
          color: var(--accent);
          padding-left: 5px;
        }
        @media (max-width: 768px) {
          .grid-4 { grid-template-columns: 1fr; }
        }
      `}</style>
        </footer>
    );
};

export default Footer;
