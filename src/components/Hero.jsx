import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe } from 'lucide-react';

const Hero = ({ onOpenModal }) => {
    return (
        <section id="home" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '80px', paddingBottom: '4rem' }}>
            {/* Background Image with Overlay */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: 'url("https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: -2,
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(to right, rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.6))',
                    zIndex: -1,
                }}
            />

            <div className="container" style={{ position: 'relative', zIndex: 1, color: 'white', width: '100%' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ maxWidth: '800px' }}
                >
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.1)', padding: '0.5rem 1rem', borderRadius: '50px', marginBottom: '1.5rem', backdropFilter: 'blur(5px)' }}>
                        <Globe size={16} color="var(--accent)" />
                        <span style={{ fontSize: '0.9rem', fontWeight: '500' }}>Your Trusted Global Education Partner</span>
                    </div>

                    <h1 style={{ fontSize: '3.5rem', lineHeight: '1.1', marginBottom: '1.5rem', color: 'white' }}>
                        Unlock Your Dream of <span style={{ color: 'var(--secondary)' }}>Global Education</span>
                    </h1>

                    <p style={{ fontSize: '1.125rem', color: '#e2e8f0', marginBottom: '2.5rem', lineHeight: '1.8', maxWidth: '600px' }}>
                        We guide you through every step of your international study journey.
                        From course selection to visa approval for Australia, UK, Canada, and beyond.
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <button onClick={onOpenModal} className="btn btn-primary" style={{ padding: '1rem 2rem' }}>
                            Book Free Consultation
                        </button>
                        <a href="#destinations" className="btn btn-outline" style={{ padding: '1rem 2rem' }}>
                            Explore Destinations <ArrowRight size={18} />
                        </a>
                    </div>

                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{
                        marginTop: '5rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                        maxWidth: '1000px', // Restrain slightly so it doesn't touch edges on huge screens
                        borderTop: '1px solid rgba(255,255,255,0.1)',
                        paddingTop: '2rem'
                    }}
                >
                    <div>
                        <h3 style={{ fontSize: '3.5rem', fontWeight: '800', color: 'var(--accent)', marginBottom: '0.5rem', lineHeight: 1 }}>10+</h3>
                        <p style={{ color: '#e2e8f0', fontSize: '1.25rem', fontWeight: '500' }}>Years Experience</p>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '3.5rem', fontWeight: '800', color: 'var(--accent)', marginBottom: '0.5rem', lineHeight: 1 }}>500+</h3>
                        <p style={{ color: '#e2e8f0', fontSize: '1.25rem', fontWeight: '500' }}>Students Placed</p>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '3.5rem', fontWeight: '800', color: 'var(--accent)', marginBottom: '0.5rem', lineHeight: 1 }}>100%</h3>
                        <p style={{ color: '#e2e8f0', fontSize: '1.25rem', fontWeight: '500' }}>Visa Success Rate</p>
                    </div>
                </motion.div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    h1 { fontSize: 2.5rem !important; }
                    .container > motion.div:last-child {
                        flex-direction: column;
                        gap: 2rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
