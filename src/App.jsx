import React from 'react'; // Force Rebuild
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import Home from './components/Home';
import About from './components/About';
import Team from './components/Team';
import Destinations from './components/Destinations';
import PopularCourses from './components/PopularCourses';
import CourseSearch from './components/CourseSearch';
import Services from './components/Services';
import Events from './components/Events';
import Testimonials from './components/Testimonials';
import Terms from './components/Terms';
import PrivacyPolicy from './components/PrivacyPolicy';
import { ModalProvider, useModal } from './components/ModalContext';

// ScrollToTop component to handle scroll position on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const LayoutSource = ({ children }) => {
  const { isModalOpen, closeModal } = useModal();

  return (
    <div className="app">
      <Navbar />
      <main style={{ paddingTop: '0' }}>
        {children}
      </main>
      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

const Layout = ({ children }) => {
  return (
    <ModalProvider>
      <LayoutSource>{children}</LayoutSource>
    </ModalProvider>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/destinations" element={<div className="section-padding"><Destinations /></div>} />
          <Route path="/courses" element={<div className="section-padding"><PopularCourses /><div className="container"><CourseSearch /></div></div>} />
          <Route path="/services" element={<div className="section-padding"><Services /></div>} />
          <Route path="/team" element={<div className="section-padding"><Team /></div>} />
          <Route path="/testimonials" element={<div className="section-padding"><Testimonials /></div>} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
