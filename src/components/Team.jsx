import React from 'react';
import { motion } from 'framer-motion';
import { User, Award, Star } from 'lucide-react';

const teamMembers = [
    {
        name: 'Isthiquar Manaff',
        role: 'CEO / Director',
        exp: '25+ years expertise',
        isLeader: true
    },
    {
        name: 'Nifra Hazeer',
        role: 'Head of Int. Compliances & Admissions',
        exp: '8+ years experience',
        isLeader: true
    },
    {
        name: 'Methmi Weerarathne',
        role: 'Senior Executive',
        dept: 'International Admissions'
    },
    {
        name: 'Fathima Sajana',
        role: 'Assistant Manager',
        dept: ''
    },
    {
        name: 'Rebbecca Frank',
        role: 'Assistant Manager',
        dept: ''
    },
    {
        name: 'Rashmi Kavindya',
        role: 'Executive',
        dept: 'International Admissions'
    },
    {
        name: 'Ruweeda Ameer',
        role: 'Executive',
        dept: 'International Admissions'
    },
    {
        name: 'Nabeela Nawshad',
        role: 'Executive',
        dept: 'International Admissions'
    }
];

const Team = () => {
    return (
        <section id="team" className="section bg-light" style={{ backgroundColor: 'var(--bg-light)' }}>
            <div className="container">
                <div className="text-center mb-12">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Meet Our <span style={{ color: 'var(--secondary)' }}>Experts</span></h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                        Our team brings industry experience in international education and student advising.
                    </p>
                </div>

                {/* Leadership Section */}
                <div className="mb-12">
                    <h3 style={{ textAlign: 'center', fontSize: '1.8rem', marginBottom: '2rem', color: 'var(--primary)' }}>Leadership</h3>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                        {teamMembers.filter(m => m.isLeader).map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                style={{
                                    backgroundColor: 'white',
                                    padding: '2rem',
                                    borderRadius: 'var(--radius-lg)',
                                    boxShadow: 'var(--shadow-lg)',
                                    width: '100%',
                                    maxWidth: '350px',
                                    textAlign: 'center',
                                    borderTop: '4px solid var(--accent)'
                                }}
                            >
                                <div style={{ width: '80px', height: '80px', background: 'var(--bg-light)', borderRadius: '50%', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Award size={40} color="var(--accent)" />
                                </div>
                                <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{member.name}</h4>
                                <p style={{ color: 'var(--secondary)', fontWeight: '600', marginBottom: '0.5rem' }}>{member.role}</p>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{member.exp}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Core Team Section */}
                <div>
                    <h3 style={{ textAlign: 'center', fontSize: '1.8rem', marginBottom: '2rem', color: 'var(--primary)' }}>Core Team</h3>
                    <div className="grid grid-3" style={{ gap: '2rem' }}>
                        {teamMembers.filter(m => !m.isLeader).map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                style={{
                                    backgroundColor: 'white',
                                    padding: '1.5rem',
                                    borderRadius: 'var(--radius-lg)',
                                    boxShadow: 'var(--shadow-md)',
                                    textAlign: 'center',
                                    borderLeft: '4px solid var(--secondary)'
                                }}
                            >
                                <div style={{ marginBottom: '1rem', display: 'inline-block', padding: '0.5rem', borderRadius: '50%', background: 'rgba(79, 168, 154, 0.1)' }}>
                                    <User size={24} color="var(--secondary)" />
                                </div>
                                <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>{member.name}</h4>
                                <p style={{ color: 'var(--text-body)', fontSize: '0.95rem', fontWeight: '500' }}>{member.role}</p>
                                {member.dept && <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{member.dept}</p>}
                            </motion.div>
                        ))}
                    </div>
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

export default Team;
