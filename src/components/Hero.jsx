import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe } from 'lucide-react';
import { useModal } from '../components/ModalContext';
import Counter from './Counter';

const Hero = () => {
    const { openModal } = useModal();

    return (
        <section id="home" className="hero-section">
            {/* Hero Image */}
            <img
                src="/home.png"
                alt="Study Abroad"
                className="hero-image"
            />

            <div className="overlay-gradient desktop-only"></div>

            <div className="container hero-content-wrapper">
                <motion.div
                    className="hero-main"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Hidden text for SEO/Accessibility */}
                    <div style={{ display: 'none' }}>
                        <h1>Unlock Your Dream of Global Education</h1>
                        <p>Eduglobe International (Pvt) Ltd</p>
                    </div>

                    <div className="hero-buttons">
                        <button onClick={openModal} className="btn btn-primary shadow-btn">
                            Book Free Consultation
                        </button>
                        <a href="/destinations" className="btn btn-outline frosted-btn">
                            Explore Destinations <ArrowRight size={18} />
                        </a>
                    </div>

                </motion.div>
            </div>

            {/* Stats section */}
            <motion.div
                className="hero-stats"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <div className="container">
                    <div className="stats-grid">
                        <div className="stat-item">
                            <h3 className="stat-number">
                                <Counter value={10} suffix="+" />
                            </h3>
                            <p className="stat-label">Years Experience</p>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <h3 className="stat-number">
                                <Counter value={500} suffix="+" />
                            </h3>
                            <p className="stat-label">Students Placed</p>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <h3 className="stat-number">
                                <Counter value={100} suffix="%" />
                            </h3>
                            <p className="stat-label">Visa Success Rate</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            <style>{`
                .hero-section {
                    position: relative;
                    padding-top: 80px; /* Navbar height */
                    display: flex;
                    flex-direction: column;
                    background-color: #eeffff;
                    z-index: 0; /* Create stacking context */
                }

                .hero-image {
                    width: 100%;
                    height: auto;
                    display: block;
                    object-fit: contain;
                    /* Ensure image is not hidden behind background */
                    position: relative; 
                    z-index: 0;
                }

                .hero-content-wrapper {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    width: 100%;
                    position: relative;
                    z-index: 2; /* Clearly above image */
                }

                .hero-buttons {
                    display: flex;
                    gap: 1rem;
                    flex-wrap: wrap;
                    margin-top: 2rem;
                    justify-content: center; /* Center buttons on mobile */
                }

                .hero-stats {
                    position: relative;
                    background-color: white;
                    padding: 2rem 0;
                    border-top: 4px solid var(--secondary);
                    box-shadow: 0 -10px 30px rgba(0,0,0,0.1);
                    z-index: 10;
                    margin-top: auto; /* Push to bottom if flex container */
                }

                .stats-grid {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 2rem;
                }

                .stat-item {
                    text-align: center;
                }

                .stat-number {
                    font-size: 2.5rem; /* Smoother responsive font */
                    font-weight: 800;
                    color: var(--accent);
                    margin-bottom: 0;
                    line-height: 1;
                }

                .stat-label {
                    color: var(--primary);
                    font-size: 1rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                .stat-divider {
                    width: 1px;
                    height: 60px;
                    background: #cbd5e1;
                    display: none;
                }

                .desktop-only { display: none; }
                
                .shadow-btn {
                    padding: 1rem 2rem;
                    box-shadow: 0 4px 14px 0 rgba(0,0,0,0.39);
                }
                
                .frosted-btn {
                    padding: 1rem 2rem;
                    background: transparent;
                    color: var(--primary);
                    border: 2px solid var(--primary);
                    font-weight: 600;
                    transition: all 0.3s ease;
                }
                
                .frosted-btn:hover {
                    background: var(--primary);
                    color: white;
                }

                /* Desktop Styles */
                @media (min-width: 769px) {
                    .hero-section {
                        min-height: 100vh;
                        padding-bottom: 0;
                        align-items: center;
                        justify-content: center;
                        display: block; /* Reset flex for relative positioning context */
                    }

                    .hero-image {
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        height: 100%;
                        width: 100%;
                        object-fit: contain; /* Show full image without cropping */
                        z-index: 0; /* Base layer */
                    }

                    .overlay-gradient {
                        display: none; /* No overlay on contained image to avoid masking whitespace */
                    }
                    
                    .hero-content-wrapper {
                        position: relative;
                        height: 100%; /* Full height to allow positioning */
                        min-height: 100vh; /* Match section */
                        z-index: 2; /* Above overlay */
                        justify-content: center;
                        padding-bottom: 15rem; /* Space for stats */
                    }

                    .hero-buttons {
                        justify-content: flex-start; /* Left align on desktop */
                        margin-top: 5rem;
                    }

                    .hero-stats {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        background-color: rgba(255, 255, 255, 0.95);
                        backdrop-filter: blur(10px);
                        z-index: 10;
                    }

                    .stat-divider { display: block; }

                    .stat-number { font-size: 3.5rem; }
                    .stat-label { font-size: 1.1rem; }
                    
                    /* Override frosted btn for desktop (optional to keep it looking good on image) */
                    /* Making it solid white/transparent with primary border ensuring visibility */
                    .frosted-btn {
                        background: rgba(255, 255, 255, 0.9); 
                        border-color: white;
                        color: var(--primary);
                    }
                    .frosted-btn:hover {
                        background: white;
                        color: var(--primary);
                        transform: translateY(-2px);
                    }
                    
                    .hero-main {
                       max-width: 800px;
                       padding-top: 0; 
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
