import React, { useState, useEffect, useRef } from 'react';
import { content } from './assets/data';
import Navbar from './components/Navbar';
import Home from './components/Home';
import FeaturedPresentation from './components/FeaturedPresentation';
import NewsletterSection from './components/Newsletter';
import About from './components/About';
import Modal from './components/Modal';

// Images are in public/ — served at root path
const assetUrl = (filename) => `/${filename}`;

function App() {
  // 'ar' for Arabic (default) or 'en' for English
  const [language, setLanguage] = useState('ar');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const text = content[language];

  // Refs for scrolling
  const homeRef = useRef(null);
  const featuredRef = useRef(null);
  const newsletterRef = useRef(null);
  const aboutRef = useRef(null);

  // Set document direction based on language
  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language === 'ar' ? 'ar' : 'en';
  }, [language]);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div
      className="min-h-screen bg-black text-white"
      style={{ fontFamily: language === 'en' ? 'Bebas Neue, sans-serif' : 'Cairo, sans-serif' }}
    >
      <Navbar
        text={text.nav}
        language={language}
        toggleLanguage={toggleLanguage}
        scrollToHome={() => scrollToSection(homeRef)}
        scrollToFeatured={() => scrollToSection(featuredRef)}
        handleNewsletterClick={toggleModal}
        scrollToAbout={() => scrollToSection(aboutRef)}
        assetUrl={assetUrl}
      />

      {/* Newsletter Modal */}
      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <div className="p-8 max-w-lg w-full bg-ut-dark border-2 border-ut-red rounded-lg shadow-2xl">
          <h1 className={`text-3xl font-bold mb-6 text-center text-ut-red ${language === 'ar' ? 'font-arabic' : 'font-sans'}`}>
            {text.newsletter.h1}
          </h1>
          <form className="flex flex-col space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder={text.newsletter.namePlaceholder}
              className={`p-3 bg-gray-900 border border-ut-blue rounded-md text-white placeholder-gray-500 transition duration-300 focus:border-ut-red focus:outline-none ${language === 'ar' ? 'text-right' : 'text-left'}`}
            />
            <input
              type="email"
              placeholder={text.newsletter.emailPlaceholder}
              className={`p-3 bg-gray-900 border border-ut-blue rounded-md text-white placeholder-gray-500 transition duration-300 focus:border-ut-red focus:outline-none ${language === 'ar' ? 'text-right' : 'text-left'}`}
            />
            <button type="submit" className="w-full py-3 bg-ut-red hover:bg-ut-blue transition duration-300 font-bold rounded-md" onClick={toggleModal}>
              {text.newsletter.button}
            </button>
          </form>
        </div>
      </Modal>

      <main className="pt-20">
        <section id="home" ref={homeRef}>
          <Home text={text} language={language} assetUrl={assetUrl} />
        </section>

        <section id="featured" ref={featuredRef} className="py-20">
          <FeaturedPresentation text={text.featured} language={language} assetUrl={assetUrl} />
        </section>

        <section id="newsletter" ref={newsletterRef} className="py-20">
          <NewsletterSection text={text.newsletter} language={language} openModal={toggleModal} />
        </section>

        <section id="about" ref={aboutRef} className="py-20 relative overflow-hidden">
          <About text={text.about} language={language} assetUrl={assetUrl} />
        </section>
      </main>

      <footer className="py-4 text-center text-xs text-gray-500">{text.footerCredit}</footer>
    </div>
  );
}

export default App;
