import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/Modals/ProjectModal';
import CertModal from './components/Modals/CertModal';
import Toast from './components/Toast';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [isToastActive, setIsToastActive] = useState(false);

  const showToast = (msg) => {
    setToastMessage(msg);
    setIsToastActive(true);
    setTimeout(() => {
      setIsToastActive(false);
    }, 3000);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
        setIsCertModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <About showToast={showToast} />
        <Skills />
        <Projects onOpenModal={(project) => setSelectedProject(project)} />
        <Education />
        <Certifications onOpenCertModal={() => setIsCertModalOpen(true)} />
        <Contact showToast={showToast} />
      </main>
      <Footer />

      {/* Modals */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      <CertModal isOpen={isCertModalOpen} onClose={() => setIsCertModalOpen(false)} />

      {/* Toast Alert */}
      <Toast toastMessage={toastMessage} isToastActive={isToastActive} />
    </div>
  );
}
