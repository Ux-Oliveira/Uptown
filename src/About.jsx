import React from 'react';
import '../components/SharedStyles.css'; // Import custom styles
import { FaInstagram, FaFacebook, FaLinkedin, FaMapMarkedAlt } from 'react-icons/fa';
import { FaVideo } from 'react-icons/fa';

const About = ({ text, language, assetUrl }) => {
  const isRTL = language === 'ar';

  return (
    <div className="container mx-auto px-6 relative">
      {/* Two sliding backgrounds */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="about-background-slide clearer-slide"
          style={{
            backgroundImage: `url(${assetUrl('background.png')})`,
            backgroundSize: 'cover',
            opacity: 0.22,
          }}
        />
        <div
          className="about-background-slide clearer-slide"
          style={{
            backgroundImage: `url(${assetUrl('background2.png')})`,
            backgroundSize: 'cover',
            top: '20%',
            opacity: 0.16,
            animationDelay: '6s',
          }}
        />
      </div>

      {/* Content */}
      <div
        className={`relative z-10 p-10 bg-black bg-opacity-85 rounded-lg ${
          isRTL ? 'text-right font-arabic' : 'text-left font-sans'
        }`}
      >
        <h2
          className={`text-4xl font-bold mb-6 text-ut-red ${
            isRTL ? 'font-arabic' : 'font-sans'
          }`}
        >
          {text.h2}
        </h2>
        <p className="mb-4 text-gray-300 text-lg">{text.p1}</p>
        <p className="mb-8 text-gray-300 text-lg">{text.p2}</p>

        <h3
          className={`text-3xl font-semibold mb-4 text-ut-blue ${
            isRTL ? 'font-arabic' : 'font-sans'
          }`}
        >
          {text.services}
        </h3>
        <ul
          className="space-y-3 mb-10 list-disc list-inside text-gray-300 text-lg"
          style={{ listStylePosition: isRTL ? 'inside' : 'outside' }}
        >
          {text.serviceItems.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className={`text-ut-red ${isRTL ? 'ml-2' : 'mr-2'}`}>&#x2022;</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Social Media Links */}
        <div
          className={`flex ${
            isRTL ? 'justify-end space-x-reverse' : 'justify-start'
          } space-x-6 pt-4 border-t border-gray-700`}
        >
          {[
            { icon: FaInstagram, url: 'https://www.instagram.com/films_ut/' },
            { icon: FaFacebook, url: '#' },
            { icon: FaLinkedin, url: '#' },
            { icon: FaMapMarkedAlt, url: '#' },
          ].map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-3xl hover:text-ut-red transition duration-300 hover:scale-110"
              >
                <Icon />
              </a>
            );
          })}
        </div>
      </div>

      {/* Scroll to Top Button (Video Icon) */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to Top"
        className="fixed bottom-8 right-8 bg-black bg-opacity-70 p-3 rounded-full shadow-lg hover:scale-110 transition duration-300"
      >
        <FaVideo className="text-ut-red text-3xl" />
      </button>
    </div>
  );
};

export default About;
