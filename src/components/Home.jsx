import React, { useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import WhyUs from './WhyUs';
import Destinations from './Destinations';
import PopularCourses from './PopularCourses';
import Services from './Services';
import Process from './Process';
import Events from './Events';
import Testimonials from './Testimonials';
import CourseSearch from './CourseSearch';
import Footer from './Footer';
import ContactModal from './ContactModal';
import { MousePointerClick } from 'lucide-react';

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <Navbar onOpenModal={openModal} />
            <main>
                <Hero onOpenModal={openModal} />
                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <CourseSearch />
                </div>
                <WhyUs />
                <Destinations />
                <PopularCourses />
                <Services />
                <Process />
                <Events />
                <Testimonials />

                {/* CTA Section */}
                <section className="section" style={{ backgroundColor: 'var(--primary)', color: 'white', textAlign: 'center' }}>
                    <div className="container">
                        <h2 style={{ fontSize: '2.5rem', color: 'white', marginBottom: '1.5rem' }}>
                            Ready to Start Your Journey?
                        </h2>
                        <p style={{ maxWidth: '600px', margin: '0 auto 2.5rem', color: '#94a3b8', fontSize: '1.125rem' }}>
                            Book a free consultation with our experts today and take the first step towards your global education.
                        </p>
                        <button onClick={openModal} className="btn btn-accent" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                            <MousePointerClick size={20} />
                            Get Started Now
                        </button>
                    </div>
                </section>
            </main>
            <Footer />
            <ContactModal isOpen={isModalOpen} onClose={closeModal} />
        </>
    );
};

export default Home;
