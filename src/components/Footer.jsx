import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" style={{ backgroundColor: 'var(--primary)', color: 'white', paddingTop: '5rem', paddingBottom: '2rem' }}>
            <div className="grid grid-4" style={{ gap: '3rem', marginBottom: '3rem' }}>
                {/* Brand */}
                <div style={{ gridColumn: 'span 1' }}>
                    <h2 style={{ color: 'white', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        Eduglobe<span style={{ color: 'var(--accent)' }}>.</span>
                    </h2>
                    <p style={{ color: '#94a3b8', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                        Eduglobe International (Pvt) Ltd is a Sri Lankan education consultancy specializing in study abroad advisory services for students seeking higher education opportunities in top international destinations.
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
                        <li><a href="/" className="footer-link">Home</a></li>
                        <li><a href="/destinations" className="footer-link">Destinations</a></li>
                        <li><a href="/courses" className="footer-link">Courses</a></li>
                        <li><a href="/services" className="footer-link">Services</a></li>
                        <li><a href="/testimonials" className="footer-link">Success Stories</a></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h3 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.1rem' }}>Our Services</h3>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#cbd5e1' }}>
                        <li>University & Course Selection</li>
                        <li>Application & Admission Support</li>
                        <li>Visa Assistance</li>
                        <li>Career Counseling</li>
                        <li>Pre-Departure Guidance</li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.1rem' }}>Contact Us</h3>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: '#cbd5e1' }}>
                        <li style={{ display: 'flex', gap: '1rem' }}>
                            <MapPin size={24} style={{ flexShrink: 0, color: 'var(--accent)', marginTop: '5px' }} />
                            <div>
                                <span style={{ display: 'block', fontWeight: 'bold' }}>Head Office:</span>
                                <span>Level 37, West Tower,<br />World Trade Center,<br />Colombo 00100, Sri Lanka</span>
                            </div>
                        </li>
                        <li style={{ display: 'flex', gap: '1rem' }}>
                            <MapPin size={24} style={{ flexShrink: 0, color: 'var(--accent)', marginTop: '5px' }} />
                            <div>
                                <span style={{ display: 'block', fontWeight: 'bold' }}>Kandy Branch:</span>
                                <span>No. 621, Peradeniya Road,<br />Kandy 20000, Sri Lanka</span>
                            </div>
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
                <p>© {new Date().getFullYear()} Eduglobe International (Pvt) Ltd. All rights reserved.</p>
                <div style={{ marginTop: '1rem', fontSize: '0.9rem', display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                    <a href="/terms" style={{ color: '#64748b' }} className="footer-link">Terms & Conditions</a>
                    <a href="/privacy" style={{ color: '#64748b' }} className="footer-link">Privacy Policy</a>
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
        </footer >
    );
};

export default Footer;
