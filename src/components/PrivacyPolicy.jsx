import React, { useEffect } from 'react';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="section" style={{ paddingTop: '8rem', minHeight: '80vh' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--primary)' }}>Privacy Policy</h1>

                <div style={{ color: 'var(--text-body)', lineHeight: '1.8' }}>
                    <p className="mb-4">Last updated: January 25, 2026</p>

                    <p className="mb-4">
                        At Edu Globe Lanka Consultancy, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data.
                    </p>

                    <h3 className="mb-4" style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginTop: '2rem' }}>1. Information We Collect</h3>
                    <p className="mb-4">
                        We collect personal information that you provide to us directly, such as your name, email address, phone number, and educational background when you fill out forms on our website or contact us for consultation.
                    </p>

                    <h3 className="mb-4" style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginTop: '2rem' }}>2. How We Use Your Information</h3>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                        <li>To provide and manage our consultancy services.</li>
                        <li>To communicate with you regarding your enquiries and applications.</li>
                        <li>To send you updates about universities, courses, and events.</li>
                        <li>To improve our website and customer service.</li>
                    </ul>

                    <h3 className="mb-4" style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginTop: '2rem' }}>3. Data Sharing</h3>
                    <p className="mb-4">
                        We do not sell your personal information. We may share your data with trusted partners, such as universities and visa authorities, solely for the purpose of processing your applications.
                    </p>

                    <h3 className="mb-4" style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginTop: '2rem' }}>4. Security</h3>
                    <p className="mb-4">
                        We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.
                    </p>

                    <h3 className="mb-4" style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginTop: '2rem' }}>5. Your Rights</h3>
                    <p className="mb-4">
                        You have the right to access, correct, or request the deletion of your personal information. Please contact us if you wish to exercise these rights.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
