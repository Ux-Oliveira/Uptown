import React from 'react';
import '../components/SharedStyles.css'; // Import custom styles

const NewsletterSection = ({ text, language, openModal }) => {
    const isRTL = language === 'ar';
    return (
        <div className="flex flex-col items-center justify-center h-96 bg-ut-dark">
            <h2 className={`text-4xl font-bold mb-10 text-white ${isRTL ? 'font-arabic' : 'font-sans'}`}>
                {text.title}
            </h2>
            
            <button
                onClick={openModal}
                className={`flare-button py-4 px-12 bg-ut-red text-2xl font-bold rounded-xl text-white shadow-xl transition duration-300 hover:scale-[1.05] relative animate-pulse-slow`}
                style={{
                    backgroundColor: '#E02B37', // Ensure solid background for flare effect
                    boxShadow: '0 0 15px rgba(224, 43, 55, 0.7)' // Pulsating shadow
                }}
            >
                <span className={`relative z-10 ${isRTL ? 'font-arabic' : 'font-sans'}`}>
                    {text.incentiveButton}
                </span>
            </button>
        </div>
    );
};

export default NewsletterSection;