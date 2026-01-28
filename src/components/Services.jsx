import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, FileCheck, Compass, Plane, BookOpen, Users } from 'lucide-react';

const services = [
    {
        icon: <GraduationCap size={32} />,
        title: 'University & Course Selection',
        desc: 'Tailored advice to choose programs matching student goals.'
    },
    {
        icon: <Users size={32} />,
        title: 'Application & Admission Support',
        desc: 'End-to-end assistance from document preparation to submission.'
    },
    {
        icon: <FileCheck size={32} />,
        title: 'Visa Assistance',
        desc: 'Guidance on documentation, filing procedures, and interview preparation.'
    },
    {
        icon: <BookOpen size={32} />,
        title: 'Test Preparation Classes',
        desc: 'IELTS, PTE, and other language tests.'
    },
    {
        icon: <Compass size={32} />,
        title: 'Career Counseling',
        desc: 'Advice based on individual strengths and aspirations.'
    },
    {
        icon: <Plane size={32} />,
        title: 'Pre-Departure Guidance',
        desc: 'Tips and planning before leaving for overseas study.'
    }
];

const Services = () => {
    return (
        <section id="services" className="section">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our <span style={{ color: 'var(--secondary)' }}>Services</span></h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                        End-to-end support for your study abroad journey.
                    </p>
                </div>

                <div className="grid grid-3" style={{ gap: '2rem' }}>
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{
                                padding: '2rem',
                                backgroundColor: 'white',
                                borderRadius: 'var(--radius-lg)',
                                border: '1px solid #e2e8f0',
                                transition: 'all 0.3s ease'
                            }}
                            className="service-card"
                        >
                            <div style={{ color: 'var(--secondary)', marginBottom: '1.5rem', backgroundColor: 'var(--bg-light)', display: 'inline-block', padding: '1rem', borderRadius: '50%' }}>
                                {service.icon}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{service.title}</h3>
                            <p style={{ color: 'var(--text-muted)' }}>{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
            <style>{`
        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-xl);
          border-color: var(--secondary);
        }
        @media (max-width: 768px) {
          .grid-3 { grid-template-columns: 1fr; }
        }
      `}</style>
        </section>
    );
};

export default Services;
