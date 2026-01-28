import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const destinations = [
    {
        country: 'Australia',
        image: 'https://images.unsplash.com/photo-1523482580638-f148771cb8ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        desc: 'World-class universities and vibrant lifestyle.'
    },
    {
        country: 'United Kingdom',
        image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        desc: 'Heritage, culture and academic excellence.'
    },
    {
        country: 'Canada',
        image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        desc: 'High quality of life and welcoming communities.'
    },
    {
        country: 'New Zealand',
        image: 'https://images.unsplash.com/photo-1578559099039-556bc5cf3553?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        desc: 'Adventure and top-tier research institutions.'
    },
    {
        country: 'Europe',
        image: 'https://images.unsplash.com/photo-1467269204594-9661b133dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        desc: 'Diverse cultures and affordable study options.'
    },
    {
        country: 'Malaysia',
        image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        desc: 'Affordable education in a multicultural setting.'
    },
    {
        country: 'Dubai',
        image: 'https://images.unsplash.com/photo-1512453979798-5ea932a23518?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        desc: 'Global business hub with modern campuses.'
    },
    {
        country: 'Singapore',
        image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        desc: 'Innovation hub with world-ranked universities.'
    }
];

const Destinations = () => {
    return (
        <section id="destinations" className="section bg-light" style={{ backgroundColor: 'var(--bg-light)' }}>
            <div className="container">
                <div className="text-center mb-12">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Choose Your <span style={{ color: 'var(--secondary)' }}>Destination</span></h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                        We represent top universities in the most popular study destinations around the world.
                    </p>
                </div>

                <div className="grid grid-3" style={{ gap: '2rem' }}>
                    {destinations.map((dest, index) => (
                        <motion.div
                            key={dest.country}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            style={{
                                position: 'relative',
                                borderRadius: 'var(--radius-lg)',
                                overflow: 'hidden',
                                height: '350px',
                                cursor: 'pointer',
                                boxShadow: 'var(--shadow-md)'
                            }}
                            className="destination-card"
                        >
                            <img
                                src={dest.image}
                                alt={dest.country}
                                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                                className="card-img"
                            />
                            <div
                                style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    padding: '2rem',
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                                    color: 'white'
                                }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <h3 style={{ fontSize: '1.5rem', color: 'white' }}>{dest.country}</h3>
                                    <div style={{ background: 'white', borderRadius: '50%', padding: '0.5rem' }}>
                                        <ArrowUpRight size={20} color="var(--primary)" />
                                    </div>
                                </div>
                                <p style={{ color: 'rgba(255,255,255,0.9)', marginTop: '0.5rem', fontSize: '0.95rem' }}>{dest.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <style>{`
        .destination-card:hover .card-img {
          transform: scale(1.1);
        }
        @media (max-width: 768px) {
          .grid-3 { grid-template-columns: 1fr; }
        }
      `}</style>
        </section>
    );
};

export default Destinations;
