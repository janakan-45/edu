import React from 'react';
import Hero from './Hero';
import { MousePointerClick } from 'lucide-react';
import { useModal } from './ModalContext';

const Home = () => {
    const { openModal } = useModal();

    return (
        <>
            <Hero />

            {/* About Preview Section */}
            <section className="section">
                <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                    <div>
                        <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'var(--bg-light)', color: 'var(--secondary)', borderRadius: '50px', fontSize: '0.9rem', fontWeight: '600', marginBottom: '1rem' }}>
                            About Eduglobe
                        </div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>
                            Empowering Your <span style={{ color: 'var(--secondary)' }}>Global Future</span>
                        </h2>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
                            Eduglobe International (Pvt) Ltd is a leading education consultancy dedicated to helping students achieve their dreams of studying abroad. With over a decade of experience, we provide end-to-end support—from university selection to visa guidance—ensuring a seamless journey to your dream destination.
                        </p>
                        <ul style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            {['Expert career counseling', 'High visa success rate', 'Partnerships with global universities'].map(item => (
                                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-body)', fontWeight: '500' }}>
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--secondary)' }} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <a href="/about" className="btn btn-outline">Read More About Us</a>
                    </div>
                    <div style={{ position: 'relative' }}>
                        <div style={{ position: 'absolute', top: -20, right: -20, width: '100px', height: '100px', background: 'var(--bg-light)', zIndex: -1, borderRadius: '50%' }} />
                        <div style={{ position: 'absolute', bottom: -20, left: -20, width: '150px', height: '150px', background: 'var(--secondary)', opacity: 0.1, zIndex: -1, borderRadius: '50%' }} />
                        <img
                            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Students"
                            style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-xl)' }}
                        />
                    </div>
                </div>
            </section>

            {/* Featured Services Section */}
            <section className="section bg-light" style={{ backgroundColor: 'var(--bg-light)' }}>
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our Core <span style={{ color: 'var(--secondary)' }}>Services</span></h2>
                        <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                            Comprehensive support services to make your study abroad journey smooth and successful.
                        </p>
                    </div>
                    <div className="grid grid-3" style={{ gap: '2rem' }}>
                        {[
                            { title: 'University Selection', desc: 'Guidance to find the perfect course and university matching your goals.' },
                            { title: 'Visa Assistance', desc: 'Expert help with visa applications, documentation, and interview prep.' },
                            { title: 'Career Counseling', desc: 'Personalized advice to align your education with your long-term career aspirations.' }
                        ].map((service, index) => (
                            <div key={index} style={{ backgroundColor: 'white', padding: '2rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', borderTop: '4px solid var(--secondary)' }}>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{service.title}</h3>
                                <p style={{ color: 'var(--text-muted)' }}>{service.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-8" style={{ marginTop: '3rem' }}>
                        <a href="/services" className="btn btn-secondary">View All Services</a>
                    </div>
                </div>
            </section>

            {/* Featured Destinations */}
            <section className="section">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Choose Your <span style={{ color: 'var(--secondary)' }}>Destination</span></h2>
                        <p style={{ color: 'var(--text-muted)' }}>Explore top study destinations with world-class universities.</p>
                    </div>
                    <div className="grid grid-4" style={{ gap: '1.5rem' }}>
                        {[
                            { name: 'Australia', desc: 'World-class universities and vibrant lifestyle.', image: 'https://picsum.photos/seed/australia/800/600' },
                            { name: 'New Zealand', desc: 'Adventure and top-tier research institutions.', image: 'https://picsum.photos/seed/nz/800/600' },
                            { name: 'Europe', desc: 'Diverse cultures and affordable study options.', image: 'https://picsum.photos/seed/europe/800/600' },
                            { name: 'Dubai', desc: 'Global business hub with modern campuses.', image: 'https://picsum.photos/seed/dubai/800/600' }
                        ].map((dest) => (
                            <div key={dest.name} style={{ position: 'relative', height: '300px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', cursor: 'pointer' }} className="destination-card">
                                <img
                                    src={dest.image}
                                    alt={dest.name}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                                    className="card-img"
                                />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '1.5rem' }}>
                                    <h3 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '0.5rem' }}>{dest.name}</h3>
                                    <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1rem' }}>{dest.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-8" style={{ marginTop: '3rem' }}>
                        <a href="/destinations" className="btn btn-outline">Explore All Destinations</a>
                    </div>
                </div>
                <style>{`
                    .destination-card:hover .card-img {
                        transform: scale(1.1);
                    }
                    @media (max-width: 768px) {
                        .grid-4 { grid-template-columns: 1fr 1fr; }
                    }
                     @media (max-width: 480px) {
                        .grid-4 { grid-template-columns: 1fr; }
                    }
                `}</style>
            </section>

            {/* Testimonials Preview */}
            <section className="section bg-light" style={{ backgroundColor: 'var(--bg-light)' }}>
                <div className="container text-center">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Student <span style={{ color: 'var(--secondary)' }}>Success</span></h2>
                    <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: 'white', padding: '3rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }}>
                        <p style={{ fontSize: '1.25rem', fontStyle: 'italic', color: 'var(--text-body)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                            "Eduglobe International made my dream of studying in Australia a reality. Their team was incredibly supportive and guided me through every step of the visa process with expertise."
                        </p>
                        <h4 style={{ fontWeight: 'bold', color: 'var(--primary)' }}>Nadeesha Perera</h4>
                        <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Satisfied Student</span>
                    </div>
                    <div className="text-center mt-8" style={{ marginTop: '2rem' }}>
                        <a href="/testimonials" style={{ color: 'var(--secondary)', fontWeight: '600', textDecoration: 'none' }}>Read More Success Stories &rarr;</a>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section" style={{ backgroundColor: 'var(--primary)', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', color: 'white', marginBottom: '1.5rem' }}>
                        Ready to Start Your Journey?
                    </h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto 2.5rem', color: '#94a3b8', fontSize: '1.125rem' }}>
                        Book a free consultation with our experts today and take the first step towards your global education.
                    </p>
                    <button onClick={openModal} className="btn btn-accent" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                        <MousePointerClick size={20} />
                        Get Started Now
                    </button>
                </div>
            </section>
        </>
    );
};

export default Home;
