import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, TrendingUp, HeartHandshake } from 'lucide-react';

const WhyUs = () => {
    return (
        <section className="section bg-light" style={{ backgroundColor: 'var(--bg-white)', textAlign: 'center' }}>
            <div className="container">
                <div className="mb-12">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Our <span style={{ color: 'var(--secondary)' }}>Mission & Values</span></h2>
                    <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--text-body)' }}>
                        To empower students with personalized, transparent, and expert guidance that simplifies the global education journey — from university selection and application to visa assistance and pre-departure support.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ padding: '2rem', backgroundColor: 'var(--bg-light)', borderRadius: 'var(--radius-lg)' }}
                    >
                        <div style={{ margin: '0 auto 1.5rem', color: 'var(--accent)', background: 'rgba(245, 158, 11, 0.1)', padding: '1.5rem', borderRadius: '50%', width: 'fit-content' }}>
                            <ShieldCheck size={40} />
                        </div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Integrity</h3>
                        <p style={{ color: 'var(--text-muted)' }}>We provide open, honest guidance at every step of your journey, ensuring you make informed decisions.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        style={{ padding: '2rem', backgroundColor: 'var(--bg-light)', borderRadius: 'var(--radius-lg)' }}
                    >
                        <div style={{ margin: '0 auto 1.5rem', color: 'var(--secondary)', background: 'rgba(79, 168, 154, 0.1)', padding: '1.5rem', borderRadius: '50%', width: 'fit-content' }}>
                            <HeartHandshake size={40} />
                        </div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Commitment</h3>
                        <p style={{ color: 'var(--text-muted)' }}>We are dedicated to supporting you throughout the entire process, from application to arrival.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        style={{ padding: '2rem', backgroundColor: 'var(--bg-light)', borderRadius: 'var(--radius-lg)' }}
                    >
                        <div style={{ margin: '0 auto 1.5rem', color: 'var(--primary)', background: 'rgba(36, 62, 92, 0.1)', padding: '1.5rem', borderRadius: '50%', width: 'fit-content' }}>
                            <TrendingUp size={40} />
                        </div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Excellence</h3>
                        <p style={{ color: 'var(--text-muted)' }}>We maintain high standards and continuously improve our services to ensure your success.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
