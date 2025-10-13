import React, { useState, useEffect, useRef } from 'react';
import { content } from './assets/data';
import Navbar from './components/Navbar';
import Home from './components/Home';
import FeaturedPresentation from './components/FeaturedPresentation';
import NewsletterSection from './components/Newsletter';
import NewsletterModal from './components/NewsletterModal';
import About from './components/About';

const assetUrl = (filename) => `/${filename}`;

function App() {
  const [language, setLanguage] = useState('ar');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const text = content[language];

  const homeRef = useRef(null);
  const featuredRef = useRef(null);
  const newsletterRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language === 'ar' ? 'ar' : 'en';
  }, [language]);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleLanguage = () => setLanguage((prev) => (prev === 'ar' ? 'en' : 'ar'));
  const toggleModal = () => setIsModalOpen((prev) => !prev);

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

      {}
      <NewsletterModal
        isOpen={isModalOpen}
        onClose={toggleModal}
        text={text.newsletter}
        language={language}
      />

      <main className="pt-20">
        <section id="home" ref={homeRef}>
          <Home text={text} language={language} assetUrl={assetUrl} />
        </section>

        <section id="featured" ref={featuredRef} className="pt-8 pb-20">
          <FeaturedPresentation text={text.featured} language={language} assetUrl={assetUrl} />
        </section>

        <section id="newsletter" ref={newsletterRef} className="py-20">
          <NewsletterSection text={text.newsletter} language={language} openModal={toggleModal} />
        </section>

        <section id="about" ref={aboutRef} className="py-20 relative overflow-hidden">
          <About text={text.about} language={language} assetUrl={assetUrl} />
        </section>
      </main>

      <footer className="py-4 text-center text-xs text-gray-500">
        {text.footerCredit}
      </footer>
    </div>
  );
}

export default App;

