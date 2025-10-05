import React from 'react';
import '../components/SharedStyles.css';

/*Shows title, short description and a big Call To Action. Opening newsletter modal via openModal prop*/

const NewsletterSection = ({ text, language, openModal }) => {
  const isRTL = language === 'ar';
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 md:px-6 bg-ut-dark">
      <h2 className={`text-2xl md:text-4xl font-bold mb-6 text-white ${isRTL ? 'font-arabic' : 'font-sans'}`}>
        {text.title}
      </h2>

      <p className={`max-w-xl text-center text-gray-300 mb-6 ${isRTL ? 'font-arabic' : 'font-sans'}`}>{text.h1}</p>

      <button
        onClick={openModal}
        className="flare-button py-3 px-8 bg-ut-red text-lg font-bold rounded-xl text-white shadow-xl transition duration-300 hover:scale-[1.03] animate-pulse-slow"
        style={{ boxShadow: '0 0 18px rgba(224,43,55,0.65)' }}
      >
        <span className={`${isRTL ? 'font-arabic' : 'font-sans'}`}>{text.incentiveButton}</span>
      </button>
    </div>
  );
};

export default NewsletterSection;

