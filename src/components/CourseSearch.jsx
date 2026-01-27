import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, ChevronDown } from 'lucide-react';

const CourseSearch = () => {
    const [subject, setSubject] = useState('');
    const [country, setCountry] = useState('');

    return (
        <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-xl)',
            marginTop: '-4rem',
            position: 'relative',
            zIndex: 10,
            maxWidth: '1000px',
            margin: '-4rem auto 0 auto',
            border: '1px solid #e2e8f0'
        }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>
                I want to study <span style={{ color: 'var(--secondary)' }}>...</span>
            </h3>

            <div className="search-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1.5fr 1fr', gap: '1rem' }}>
                <div style={{ position: 'relative' }}>
                    <Search size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                    <input
                        type="text"
                        placeholder="Enter subject (e.g. Computer Science)"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '1rem 1rem 1rem 3rem',
                            borderRadius: 'var(--radius-md)',
                            border: '1px solid #cbd5e1',
                            fontSize: '1rem',
                            outline: 'none'
                        }}
                    />
                </div>

                <div style={{ position: 'relative' }}>
                    <MapPin size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                    <select
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '1rem 1rem 1rem 3rem',
                            borderRadius: 'var(--radius-md)',
                            border: '1px solid #cbd5e1',
                            fontSize: '1rem',
                            appearance: 'none',
                            outline: 'none',
                            backgroundColor: 'white'
                        }}
                    >
                        <option value="">Select Destination</option>
                        <option value="Australia">Australia</option>
                        <option value="UK">United Kingdom</option>
                        <option value="Canada">Canada</option>
                        <option value="NZ">New Zealand</option>
                    </select>
                    <ChevronDown size={20} style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', pointerEvents: 'none' }} />
                </div>

                <button className="btn btn-primary" style={{ width: '100%', fontSize: '1.1rem' }}>
                    Search
                </button>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .search-grid { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </div>
    );
};

export default CourseSearch;
