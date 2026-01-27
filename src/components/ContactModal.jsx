import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Globe, CheckCircle } from 'lucide-react';

const ContactModal = ({ isOpen, onClose }) => {
    const [formState, setFormState] = useState('idle');

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormState('submitting');
        setTimeout(() => {
            setFormState('success');
        }, 1500);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.6)', // Darker overlay
                        zIndex: 100,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '1rem',
                        backdropFilter: 'blur(3px)'
                    }}
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            backgroundColor: '#f0f9ff', // Very light blue background like screenshot
                            borderRadius: 'var(--radius-lg)',
                            width: '100%',
                            maxWidth: '950px', // Wider to accommodate side image
                            position: 'relative',
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column',
                            maxHeight: '90vh' // Ensure it fits on screen
                        }}
                    >
                        {/* Header */}
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '1rem 2rem',
                            borderBottom: '1px solid rgba(0,0,0,0.05)',
                            backgroundColor: 'white'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: '800', fontSize: '1.5rem' }}>
                                <Globe className="w-8 h-8" color="var(--secondary)" />
                                <span>EduGlobe<span style={{ color: 'var(--accent)' }}>.</span></span>
                            </div>
                            <button
                                onClick={onClose}
                                style={{
                                    background: '#f1f5f9',
                                    border: 'none',
                                    cursor: 'pointer',
                                    color: '#64748b',
                                    borderRadius: '50%',
                                    width: '32px',
                                    height: '32px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'all 0.2s'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.background = '#e2e8f0'}
                                onMouseLeave={(e) => e.currentTarget.style.background = '#f1f5f9'}
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Content Body */}
                        <div style={{ display: 'flex', flex: 1, overflowY: 'auto' }}>

                            {/* Left Side - Form */}
                            <div style={{ flex: '1.2', padding: '2rem 2.5rem', backgroundColor: '#f0f9ff' }}>

                                {formState === 'success' ? (
                                    <div style={{ textAlign: 'center', padding: '4rem 0' }}>
                                        <div style={{ color: 'var(--secondary)', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                                            <CheckCircle size={80} />
                                        </div>
                                        <h3 style={{ fontSize: '1.75rem', marginBottom: '0.75rem', color: 'var(--primary)' }}>Thank You!</h3>
                                        <p style={{ color: 'var(--text-body)', fontSize: '1.1rem' }}>
                                            Your enquiry has been received. One of our experts will contact you shortly.
                                        </p>
                                        <button
                                            onClick={onClose}
                                            className="btn btn-primary"
                                            style={{ marginTop: '2.5rem', width: '200px' }}
                                        >
                                            Close
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

                                        <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                                            <FormGroup label="First name*" placeholder="Please enter your first name" />
                                            <FormGroup label="Last name*" placeholder="Please enter your last name" />
                                        </div>

                                        <FormGroup label="Email address*" placeholder="Please enter your email address" type="email" />

                                        <div>
                                            <label style={labelStyle}>Mobile number*</label>
                                            <div style={{ display: 'flex', gap: '0.75rem' }}>
                                                <select style={{ ...inputStyle, width: '90px', backgroundColor: '#eee' }}>
                                                    <option>+94</option>
                                                    <option>+61</option>
                                                    <option>+44</option>
                                                    <option>+1</option>
                                                </select>
                                                <input type="tel" required style={{ ...inputStyle, flex: 1 }} placeholder="" />
                                            </div>
                                            <span style={helperStyle}>Please enter valid phone number</span>
                                        </div>

                                        <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                                            <div>
                                                <label style={labelStyle}>Your preferred study destination*</label>
                                                <select style={inputStyle} required>
                                                    <option value="">Select</option>
                                                    <option>Australia</option>
                                                    <option>United Kingdom</option>
                                                    <option>Canada</option>
                                                    <option>New Zealand</option>
                                                </select>
                                                <span style={helperStyle}>Please select where you would like to study</span>
                                            </div>
                                            <div>
                                                <label style={labelStyle}>When would you like to start?*</label>
                                                <select style={inputStyle} required>
                                                    <option value="">Select</option>
                                                    <option>Jan 2026</option>
                                                    <option>May 2026</option>
                                                    <option>Sep 2026</option>
                                                </select>
                                                <span style={helperStyle}>When would you like to start studying?</span>
                                            </div>
                                        </div>

                                        <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                                            <div>
                                                <label style={labelStyle}>Nearest Office*</label>
                                                <select style={inputStyle} required>
                                                    <option value="">Select</option>
                                                    <option>Colombo - WTC</option>
                                                    <option>Kandy</option>
                                                    <option>Jaffna</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label style={labelStyle}>Preferred mode of counselling*</label>
                                                <select style={inputStyle} required>
                                                    <option value="">Select</option>
                                                    <option>In-person</option>
                                                    <option>Virtual (Zoom)</option>
                                                    <option>Phone Call</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div style={{ marginTop: '0.5rem' }}>
                                            <p style={{ fontSize: '0.75rem', color: '#64748b', lineHeight: '1.5', marginBottom: '1rem' }}>
                                                By submitting this form, you agree to Edu Globe's <a href="/privacy" style={{ textDecoration: 'underline' }}>Privacy Policy</a> and <a href="/terms" style={{ textDecoration: 'underline' }}>Terms of Use</a>.
                                            </p>
                                            <button
                                                type="submit"
                                                className="btn btn-primary"
                                                style={{ width: '100%', padding: '1rem', fontSize: '1.1rem', backgroundColor: '#e14d2a', borderColor: '#e14d2a' }} // Warning/Orange color like IDP
                                                disabled={formState === 'submitting'}
                                            >
                                                {formState === 'submitting' ? 'Submitting...' : 'Book Free Consultation'}
                                            </button>
                                        </div>

                                    </form>
                                )}
                            </div>

                            {/* Right Side - Image */}
                            <div className="modal-image-col" style={{ flex: '0.8', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                                {/* Green Shape Background */}
                                <div style={{
                                    position: 'absolute',
                                    top: '10%',
                                    right: '-20%',
                                    width: '120%',
                                    height: '100%',
                                    backgroundColor: '#4ade80', // Green
                                    borderRadius: '50% 0 0 0',
                                    transform: 'rotate(-10deg)',
                                    zIndex: 0
                                }} />

                                {/* Student Image */}
                                <img
                                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Student"
                                    style={{
                                        position: 'relative',
                                        zIndex: 1,
                                        maxWidth: '120%',
                                        objectFit: 'contain',
                                        marginBottom: '-10px' // anchor to bottom
                                    }}
                                />
                            </div>

                        </div>
                    </motion.div>
                </div>
            )}
            <style>{`
        @media (max-width: 768px) {
            .modal-image-col { display: none !important; }
            .grid-2 { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </AnimatePresence>
    );
};

// Helper Components for Cleaner Code
const FormGroup = ({ label, placeholder, type = "text" }) => (
    <div>
        <label style={labelStyle}>{label}</label>
        <input type={type} required style={inputStyle} placeholder={placeholder} />
    </div>
);

const labelStyle = {
    display: 'block',
    marginBottom: '0.4rem',
    fontSize: '0.9rem',
    fontWeight: '600',
    color: '#be123c' // Reddish color like IDP labels in screenshot
};

const inputStyle = {
    width: '100%',
    padding: '0.8rem',
    borderRadius: '4px',
    border: '1px solid #e11d48', // Red border like screenshot
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.2s',
    backgroundColor: 'white'
};

const helperStyle = {
    fontSize: '0.75rem',
    color: '#e11d48', // Red error text color
    marginTop: '0.25rem',
    display: 'block'
};

export default ContactModal;
