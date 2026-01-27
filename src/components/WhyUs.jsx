import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, TrendingUp, HeartHandshake } from 'lucide-react';

const WhyUs = () => {
    return (
        <section className="section bg-light" style={{ backgroundColor: 'var(--bg-white)', textAlign: 'center' }}>
            <div className="container">
                <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Why Choose <span style={{ color: 'var(--secondary)' }}>Us?</span></h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ padding: '2rem' }}
                    >
                        <div style={{ margin: '0 auto 1.5rem', color: 'var(--accent)', background: 'rgba(245, 158, 11, 0.1)', padding: '1.5rem', borderRadius: '50%', width: 'fit-content' }}>
                            <ShieldCheck size={40} />
                        </div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Certified Experts</h3>
                        <p style={{ color: 'var(--text-muted)' }}>Our team consists of certified education counsellors with years of experience in the industry.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        style={{ padding: '2rem' }}
                    >
                        <div style={{ margin: '0 auto 1.5rem', color: 'var(--secondary)', background: 'rgba(14, 165, 233, 0.1)', padding: '1.5rem', borderRadius: '50%', width: 'fit-content' }}>
                            <TrendingUp size={40} />
                        </div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>High Success Rate</h3>
                        <p style={{ color: 'var(--text-muted)' }}>We pride ourselves on our 99% visa success rate and successful university placements.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        style={{ padding: '2rem' }}
                    >
                        <div style={{ margin: '0 auto 1.5rem', color: 'var(--primary)', background: 'rgba(15, 23, 42, 0.1)', padding: '1.5rem', borderRadius: '50%', width: 'fit-content' }}>
                            <HeartHandshake size={40} />
                        </div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Personalized Support</h3>
                        <p style={{ color: 'var(--text-muted)' }}>We treat every student's journey as our own, providing dedicated support at every step.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
