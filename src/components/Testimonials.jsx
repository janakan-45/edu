import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        name: "Shehan Perera",
        uni: "Monash University, Australia",
        text: "Edu Globe made my dream of studying in Australia a reality. Their guidance on visa processing was exceptional.",
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
        name: "Nethmi Silva",
        uni: "University of Toronto, Canada",
        text: "From choosing the right course to settling in Canada, the team was with me every step of the way.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
        name: "Ahmed Rizwan",
        uni: "University of Manchester, UK",
        text: "Professional, transparent, and supportive. I highly recommend their services to anyone looking to study abroad.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="section">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Student <span style={{ color: 'var(--secondary)' }}>Stories</span></h2>
                    <p style={{ color: 'var(--text-muted)' }}>Hear from our students who are happily studying at their dream universities.</p>
                </div>

                <div className="grid grid-3" style={{ gap: '2rem' }}>
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={t.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            style={{
                                backgroundColor: 'white',
                                padding: '2rem',
                                borderRadius: 'var(--radius-lg)',
                                boxShadow: 'var(--shadow-lg)',
                                textAlign: 'center',
                                position: 'relative'
                            }}
                        >
                            <div style={{ position: 'absolute', top: '1rem', left: '1rem', color: '#e2e8f0' }}>
                                <Quote size={40} />
                            </div>
                            <img
                                src={t.image}
                                alt={t.name}
                                style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', margin: '0 auto 1.5rem', border: '3px solid var(--bg-light)' }}
                            />
                            <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', color: 'var(--text-body)' }}>"{t.text}"</p>
                            <h4 style={{ fontWeight: '700', fontSize: '1.1rem' }}>{t.name}</h4>
                            <span style={{ fontSize: '0.85rem', color: 'var(--secondary)', fontWeight: '500' }}>{t.uni}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
            <style>{`
        @media (max-width: 768px) {
          .grid-3 { grid-template-columns: 1fr; }
        }
      `}</style>
        </section>
    );
};

export default Testimonials;
