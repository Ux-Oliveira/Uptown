import React from 'react';
import { FaRegNewspaper } from 'react-icons/fa';

const Navbar = ({ text, language, toggleLanguage, scrollToHome, scrollToFeatured, handleNewsletterClick, scrollToAbout, assetUrl }) => {
  // Navigation links with their scroll functions
  const links = [
    { name: text.home, onClick: scrollToHome },
    { name: text.featured, onClick: scrollToFeatured },
    { name: text.about, onClick: scrollToAbout },
  ];

  return (
    <nav className="fixed top-0 w-full bg-black bg-opacity-90 backdrop-blur-sm z-50 shadow-lg border-b border-ut-red">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo (Uptown Icon) */}
        <button onClick={scrollToHome} aria-label="Home">
          <img src={assetUrl('uptownicon.png')} alt="Uptown Film Logo" className="h-10 transition duration-300 hover:scale-105" />
        </button>

        {/* Navigation, Newsletter Icon & Language Switch */}
        <div className="flex items-center space-x-4">
          <div className={`flex ${language === 'ar' ? 'space-x-reverse' : ''} space-x-6 text-lg`}>
            {links.slice(0, 4).map((link, index) => (
              <button key={index} onClick={link.onClick} className="text-white hover:text-ut-red transition duration-300 relative group">
                {link.name}
                <span className={`absolute ${language === 'ar' ? 'right-0' : 'left-0'} bottom-0 h-0.5 bg-ut-red transition-all duration-300 w-0 group-hover:w-full`} />
              </button>
            ))}
          </div>

          {/* Newsletter Icon with flare/pulse (moved here) */}
          <button
            onClick={handleNewsletterClick}
            aria-label={language === 'ar' ? 'النشرة البريدية' : 'Newsletter'}
            className="relative flare-button p-2 rounded-md overflow-hidden"
            title={language === 'ar' ? 'انضم إلى النشرة' : 'Join newsletter'}
          >
            <span className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 pointer-events-none" />
            <div className="flex items-center justify-center px-3 py-2 animate-pulse-slow">
              <FaRegNewspaper className="text-ut-blue text-xl hover:text-ut-red transition duration-300" />
            </div>
          </button>

          {/* Language Change Button */}
          <button onClick={toggleLanguage} className="p-2 border border-ut-blue text-ut-blue hover:bg-ut-blue hover:text-black transition duration-300 rounded-md">
            {text.lang}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
