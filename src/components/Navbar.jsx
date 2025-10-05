import React, { useState } from 'react';
import { FaRegNewspaper, FaBars, FaTimes } from 'react-icons/fa';
import '../components/SharedStyles.css';

/*Central navigation and control point for site interactions
like changing language, jumping to sections, opening newsletter*/

const Navbar = ({
  text,
  language,
  toggleLanguage,
  scrollToHome,
  scrollToFeatured,
  handleNewsletterClick,
  scrollToAbout,
  assetUrl,
}) => {
  const [open, setOpen] = useState(false);
  const isRTL = language === 'ar';

  const links = [
    { name: text.home, onClick: () => { scrollToHome(); setOpen(false); } },
    { name: text.featured, onClick: () => { scrollToFeatured(); setOpen(false); } },
    { name: text.about, onClick: () => { scrollToAbout(); setOpen(false); } },
  ];

  return (
    <nav className="fixed top-0 w-full bg-black bg-opacity-90 backdrop-blur-sm z-50 shadow-lg border-b border-ut-red">
      <div className="container mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
        {/*Logo to the left*/}
        <div className="flex items-center">
          <button onClick={scrollToHome} aria-label="Home" className="flex items-center">
            <img src={assetUrl('uptownicon.png')} alt="Uptown Film Logo" className="h-10 transition duration-300 hover:scale-105" />
          </button>
        </div>

        {/*Desktop menu*/}
        <div className="hidden md:flex items-center space-x-4">
          <div className={`flex ${isRTL ? 'space-x-reverse' : ''} space-x-6 text-lg`}>
            {links.map((link, idx) => (
              <button
                key={idx}
                onClick={link.onClick}
                className="text-white hover:text-ut-red transition duration-300 relative group"
              >
                {link.name}
                <span className={`absolute ${isRTL ? 'right-0' : 'left-0'} bottom-0 h-0.5 bg-ut-red transition-all duration-300 w-0 group-hover:w-full`} />
              </button>
            ))}
          </div>

          {/*Newsletter icon and language icon*/}
          <div className="flex items-center space-x-3">
            <button
              onClick={handleNewsletterClick}
              aria-label={language === 'ar' ? 'النشرة البريدية' : 'Newsletter'}
              className="relative flare-button p-2 rounded-md overflow-hidden"
              title={language === 'ar' ? 'انضم إلى النشرة' : 'Join newsletter'}
            >
              <div className="flex items-center justify-center px-3 py-2 animate-pulse-slow">
                <FaRegNewspaper className="text-ut-blue text-xl hover:text-ut-red transition duration-300" />
              </div>
            </button>

            <button onClick={toggleLanguage} className="p-2 border border-ut-blue text-ut-blue hover:bg-ut-blue hover:text-black transition duration-300 rounded-md">
              {text.lang}
            </button>
          </div>
        </div>

        {/*Mobile hamburger drop down menu*/}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={handleNewsletterClick}
            aria-label={language === 'ar' ? 'النشرة البريدية' : 'Newsletter'}
            className="relative flare-button p-2 rounded-md overflow-hidden"
            title={language === 'ar' ? 'انضم إلى النشرة' : 'Join newsletter'}
          >
            <div className="flex items-center justify-center px-3 py-2 animate-pulse-slow">
              <FaRegNewspaper className="text-ut-blue text-lg" />
            </div>
          </button>

          <button onClick={toggleLanguage} className="p-2 border border-ut-blue text-ut-blue hover:bg-ut-blue hover:text-black transition duration-300 rounded-md">
            {text.lang}
          </button>

          <button
            onClick={() => setOpen((p) => !p)}
            className="text-white text-2xl p-2"
            aria-label="Toggle menu"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/*Mobile dropdown menu*/}
      {open && (
        <div className="md:hidden bg-black bg-opacity-95 border-t border-ut-red">
          <div className={`flex flex-col ${isRTL ? 'items-end pr-6' : 'items-start pl-6'} py-6 space-y-4`}>
            {links.map((link, idx) => (
              <button
                key={idx}
                onClick={link.onClick}
                className="text-white text-lg hover:text-ut-red transition duration-200"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

