import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe } from 'lucide-react';
import { useModal } from '../components/ModalContext';

const Hero = () => {
    const { openModal } = useModal();

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
                    backgroundImage: 'url("/home-banner.png")',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundColor: '#eeffff', // Fallback/filler color matching sky blue vibe often found in eduglobe branding if logical, or just clean
                    zIndex: -2,
                }}
            />
            {/* Subtle overlay for better button visibility if needed, or remove if image is self-sufficient */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0,0,0,0.1)', // Very light overlay
                    zIndex: -1,
                }}
            />

            <div className="container" style={{ position: 'relative', zIndex: 1, color: 'white', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ maxWidth: '800px', marginTop: '10rem' }} // Push buttons down to align with empty space in design likely
                >
                    {/* Hiding text as it is in the banner image, but keeping semantics if possible, or just removing to be clean as requested */}
                    <div style={{ display: 'none' }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.1)', padding: '0.5rem 1rem', borderRadius: '50px', marginBottom: '1.5rem', backdropFilter: 'blur(5px)' }}>
                            <Globe size={16} color="var(--secondary)" />
                            <span style={{ fontSize: '0.9rem', fontWeight: '500' }}>Eduglobe International (Pvt) Ltd</span>
                        </div>

                        <h1 style={{ fontSize: '3.5rem', lineHeight: '1.1', marginBottom: '1.5rem', color: 'white' }}>
                            Unlock Your Dream of <span style={{ color: 'var(--secondary)' }}>Global Education</span>
                        </h1>

                        <p style={{ fontSize: '1.125rem', color: '#e2e8f0', marginBottom: '2.5rem', lineHeight: '1.8', maxWidth: '700px' }}>
                            To empower students with personalized, transparent, and expert guidance that simplifies the global education journey — from university selection and application to visa assistance.
                        </p>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '5rem' }}>
                        <button onClick={openModal} className="btn btn-primary" style={{ padding: '1rem 2rem', boxShadow: '0 4px 14px 0 rgba(0,0,0,0.39)' }}>
                            Book Free Consultation
                        </button>
                        <a href="/destinations" className="btn btn-outline" style={{ padding: '1rem 2rem', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(5px)' }}>
                            Explore Destinations <ArrowRight size={18} />
                        </a>
                    </div>

                </motion.div>

                {/* Stats section - Keeping as it adds value at bottom */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{
                        marginTop: 'auto', // Push to bottom
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                        maxWidth: '1000px',
                        borderTop: '1px solid rgba(255,255,255,0.2)',
                        paddingTop: '2rem',
                        marginBottom: '2rem'
                    }}
                >
                    <div>
                        <h3 style={{ fontSize: '3.5rem', fontWeight: '800', color: 'var(--accent)', marginBottom: '0.5rem', lineHeight: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>10+</h3>
                        <p style={{ color: 'white', fontSize: '1.25rem', fontWeight: '500', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>Years Experience</p>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '3.5rem', fontWeight: '800', color: 'var(--accent)', marginBottom: '0.5rem', lineHeight: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>500+</h3>
                        <p style={{ color: 'white', fontSize: '1.25rem', fontWeight: '500', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>Students Placed</p>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '3.5rem', fontWeight: '800', color: 'var(--accent)', marginBottom: '0.5rem', lineHeight: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>100%</h3>
                        <p style={{ color: 'white', fontSize: '1.25rem', fontWeight: '500', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>Visa Success Rate</p>
                    </div>
                </motion.div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    /* On mobile, standard cover might crop text. 
                       We might want to adjust position or size, 
                       but cover is usually best for full height heroes. */
                    .container > motion.div:first-child {
                        margin-top: 5rem !important;
                    }
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
