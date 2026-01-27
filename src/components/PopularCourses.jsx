import React from 'react';
import { motion } from 'framer-motion';
import { Code, Stethoscope, Briefcase, Building2, Palette, Cpu } from 'lucide-react';

const courses = [
    { name: 'Computer Science', icon: <Code size={24} />, count: '150+ Universities' },
    { name: 'Health & Medicine', icon: <Stethoscope size={24} />, count: '80+ Universities' },
    { name: 'Business & Management', icon: <Briefcase size={24} />, count: '200+ Universities' },
    { name: 'Engineering', icon: <Building2 size={24} />, count: '120+ Universities' },
    { name: 'Arts & Design', icon: <Palette size={24} />, count: '50+ Universities' },
    { name: 'Data Science', icon: <Cpu size={24} />, count: '90+ Universities' },
];

const PopularCourses = () => {
    return (
        <section id="courses" className="section bg-light" style={{ backgroundColor: 'var(--bg-light)' }}>
            <div className="container">
                <div className="text-center mb-12">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Popular <span style={{ color: 'var(--secondary)' }}>Courses</span></h2>
                    <p style={{ color: 'var(--text-muted)' }}>Explore the most sought-after study fields by international students.</p>
                </div>

                <div className="grid grid-3" style={{ gap: '1.5rem' }}>
                    {courses.map((course, index) => (
                        <motion.div
                            key={course.name}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            style={{
                                backgroundColor: 'white',
                                padding: '1.5rem',
                                borderRadius: 'var(--radius-md)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                boxShadow: 'var(--shadow-sm)',
                                cursor: 'pointer',
                                border: '1px solid transparent'
                            }}
                            className="course-card"
                        >
                            <div style={{ backgroundColor: 'var(--bg-light)', padding: '0.75rem', borderRadius: '50%', color: 'var(--primary)' }}>
                                {course.icon}
                            </div>
                            <div>
                                <h4 style={{ fontWeight: '600', fontSize: '1.1rem' }}>{course.name}</h4>
                                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{course.count}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <style>{`
        .course-card:hover {
          border-color: var(--secondary);
          box-shadow: var(--shadow-md);
        }
        @media (max-width: 768px) {
          .grid-3 { grid-template-columns: 1fr; }
        }
      `}</style>
        </section>
    );
};

export default PopularCourses;
