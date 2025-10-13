import React from 'react';
import '../components/SharedStyles.css';
import { FaInstagram, FaFacebook, FaLinkedin, FaMapMarkedAlt, FaVideo, FaTwitter } from 'react-icons/fa';
/*About section component that shows company info and social links.
Provides the company description and contact/social entry points for users.*/
const About = ({ text, language, assetUrl, scrollToHome }) => {
  const isRTL = language === 'ar';

  return (
    <div className="container mx-auto px-4 md:px-6 relative">
      {/* sliding backgrounds */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="about-background-slide clearer-slide"
          style={{ backgroundImage: `url(${assetUrl('background.png')})`, backgroundSize: 'cover', opacity: 0.22 }}
        />
        <div
          className="about-background-slide clearer-slide"
          style={{ backgroundImage: `url(${assetUrl('background2.png')})`, backgroundSize: 'cover', top: '20%', opacity: 0.16, animationDelay: '6s' }}
        />
      </div>

      {/* content */}
      <div className={`relative z-10 p-6 md:p-10 bg-black bg-opacity-85 rounded-lg ${isRTL ? 'text-right font-arabic' : 'text-left font-sans'}`}>
        <h2 className={`text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-ut-red ${isRTL ? 'font-arabic' : 'font-sans'}`}>{text.h2}</h2>
        <p className="mb-4 text-gray-300 text-base md:text-lg">{text.p1}</p>
        <p className="mb-6 text-gray-300 text-base md:text-lg">{text.p2}</p>

        <h3 className={`text-xl md:text-3xl font-semibold mb-4 text-ut-blue ${isRTL ? 'font-arabic' : 'font-sans'}`}>{text.services}</h3>
        <ul className="space-y-2 md:space-y-3 mb-6 md:mb-10 list-disc list-inside text-gray-300 text-sm md:text-lg" style={{ listStylePosition: isRTL ? 'inside' : 'outside' }}>
          {text.serviceItems.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className={`text-ut-red ${isRTL ? 'ml-2' : 'mr-2'}`}>&#x2022;</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/*social icons made responsive for mobile phones*/}
        <div className={`flex ${isRTL ? 'justify-end' : 'justify-start'} gap-6 pt-4 border-t border-gray-700 flex-wrap`}>
          {[
            { icon: FaInstagram, url: 'https://www.instagram.com/films_ut/' },
            { icon: FaFacebook, url: 'https://www.facebook.com/people/UP-Town/pfbid02Lfgi9hW3hgwRns8zW1AbqiH8TEXpsbwvUoBT2SmKDpWEULveXYSjC6JxQse9PPA9l/?ref=_ig_profile_ac' },
            { icon: FaLinkedin, url: 'https://www.linkedin.com/company/uptown-film/' },
            { icon: FaMapMarkedAlt, url: 'https://maps.app.goo.gl/PCCNDF2rbpz8Y61R7' },
            { icon: FaTwitter, url: 'https://x.com/films_ut' },
      
          ].map((link, index) => {
            const Icon = link.icon;
            return (
              <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="text-white text-2xl md:text-3xl hover:text-ut-red transition duration-300 hover:scale-110">
                <Icon />
              </a>
            );
          })}
        </div>
      </div>

      {/*scroll to top button*/}
      <button
        onClick={() => (typeof scrollToHome === 'function' ? scrollToHome() : window.scrollTo({ top: 0, behavior: 'smooth' }))}
        aria-label="Scroll to Top"
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-black bg-opacity-70 p-3 rounded-full shadow-lg hover:scale-110 transition duration-300"
      >
        <FaVideo className="text-ut-red text-3xl" />
      </button>
    </div>
  );
};

export default About;






