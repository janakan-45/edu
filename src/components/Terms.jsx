import React, { useEffect } from 'react';

const Terms = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="section" style={{ paddingTop: '8rem', minHeight: '80vh' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--primary)' }}>Terms and Conditions</h1>

                <div style={{ color: 'var(--text-body)', lineHeight: '1.8' }}>
                    <p className="mb-4">Last updated: January 25, 2026</p>

                    <h3 className="mb-4" style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginTop: '2rem' }}>1. Introduction</h3>
                    <p className="mb-4">
                        Welcome to Edu Globe Lanka Consultancy. These Terms and Conditions govern your use of our website and services. By accessing or using our services, you agree to be bound by these terms.
                    </p>

                    <h3 className="mb-4" style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginTop: '2rem' }}>2. Services</h3>
                    <p className="mb-4">
                        Edu Globe Lanka provides educational consultancy services, including but not limited to university admissions, visa assistance, and career counseling. We strive to provide accurate information but do not guarantee admission or visa approval, as these decisions are made by third-party institutions and governments.
                    </p>

                    <h3 className="mb-4" style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginTop: '2rem' }}>3. User Responsibilities</h3>
                    <p className="mb-4">
                        You agree to provide accurate and complete information when submitting forms or applications through our services. Misrepresentation of documents or information may result in the termination of our services.
                    </p>

                    <h3 className="mb-4" style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginTop: '2rem' }}>4. Intellectual Property</h3>
                    <p className="mb-4">
                        All content on this website, including text, graphics, logos, and images, is the property of Edu Globe Lanka Consultancy and is protected by copyright laws.
                    </p>

                    <h3 className="mb-4" style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginTop: '2rem' }}>5. Limitation of Liability</h3>
                    <p className="mb-4">
                        Edu Globe Lanka shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or inability to access our website.
                    </p>

                    <h3 className="mb-4" style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginTop: '2rem' }}>6. Contact Us</h3>
                    <p className="mb-4">
                        If you have any questions about these Terms, please contact us at info@eduglobe.lk.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Terms;
