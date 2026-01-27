import React from 'react';
import { motion } from 'framer-motion';

const steps = [
    { num: '01', title: 'Consultation', desc: 'Meet our experts to discuss your career goals and preferences.' },
    { num: '02', title: 'Shortlisting', desc: 'We help you choose the best course and university based on your profile.' },
    { num: '03', title: 'Application', desc: 'Our team manages your application process ensuring zero errors.' },
    { num: '04', title: 'Visa & Departure', desc: 'Complete visa guidance and pre-departure briefing for a safe journey.' }
];

const Process = () => {
    return (
        <section id="process" className="section" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
            <div className="container">
                <h2 className="text-center" style={{ fontSize: '2.5rem', marginBottom: '4rem', color: 'white' }}>
                    Your Journey to <span style={{ color: 'var(--accent)' }}>Success</span>
                </h2>

                <div className="grid grid-4" style={{ gap: '2rem' }}>
                    {steps.map((step, index) => (
                        <div key={index} style={{ position: 'relative' }}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                style={{
                                    backgroundColor: 'rgba(255,255,255,0.05)',
                                    padding: '2rem',
                                    borderRadius: 'var(--radius-lg)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    height: '100%'
                                }}
                            >
                                <div
                                    style={{
                                        fontSize: '3.5rem',
                                        fontWeight: '800',
                                        color: 'rgba(255,255,255,0.1)',
                                        position: 'absolute',
                                        top: '0.5rem',
                                        right: '1.5rem',
                                        lineHeight: 1
                                    }}
                                >
                                    {step.num}
                                </div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white', position: 'relative', zIndex: 1 }}>{step.title}</h3>
                                <p style={{ color: '#94a3b8', lineHeight: '1.6', position: 'relative', zIndex: 1 }}>{step.desc}</p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
        @media (max-width: 768px) {
          .grid-4 { grid-template-columns: 1fr; }
        }
      `}</style>
        </section>
    );
};

export default Process;
