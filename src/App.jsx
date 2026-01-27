import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import Home from './components/Home';
import Terms from './components/Terms';
import PrivacyPolicy from './components/PrivacyPolicy';

// Layout wrapper to include Navbar/Footer
const Layout = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="app">
      {/* Navbar is inside Home for now because of prop drilling pattern in original, 
            but standard is to have it in Layout. 
            However, Home component ALREADY has Navbar inside it from my copy-paste.
            Wait, I should remove Navbar/Footer from Home.jsx if I put them in Layout.
            OR leave Home.jsx as "Page with Navbar" and Terms/Privacy as "Pages with Navbar".
            Let's check Home.jsx again.
        */}
      {children}
    </div>
  );
};

// Actually, looking at Home.jsx, it has Navbar and Footer.
// I should allow Home.jsx to manage its own layout or refactor.
// Simpler for now: Privacy and Terms will duplicate the Layout structure (Navbar + Content + Footer).
// Or better: Let's clean up Home.jsx to NOT have Navbar/Footer, and put them in App.
// But Home.jsx has complex state passing to Navbar (onOpenModal).
// I'll stick to: Home manages itself. Terms/Privacy will use a Wrapper that has Navbar/Footer.

const PageWrapper = ({ Component }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="app">
      <Navbar onOpenModal={openModal} />
      <main>
        <Component />
      </main>
      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<PageWrapper Component={Terms} />} />
        <Route path="/privacy" element={<PageWrapper Component={PrivacyPolicy} />} />
      </Routes>
    </Router>
  );
}

export default App;
