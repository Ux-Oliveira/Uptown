import React from 'react';

const NewsletterModal = ({ isOpen, onClose, text, language }) => {
    if (!isOpen) return null;

    const isRTL = language === 'ar';

    //Simple mock-up form submission handler
    const handleSubmit = (e) => {
        e.preventDefault();
        //In the finished application, I would handle subscription logic here.
        alert(isRTL ? 'شكراً لاشتراكك في النشرة الإخبارية!' : 'Thank you for subscribing to our newsletter!');
        onClose();
    };

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm p-4"
            onClick={onClose} //This allows closing by clicking outside the modal
        >
            <div 
                className={`bg-ut-dark p-8 rounded-xl shadow-2xl max-w-lg w-full transform transition-all duration-300 scale-100 border-2 border-ut-blue 
                    ${isRTL ? 'text-right font-arabic' : 'text-left font-sans'}`}
                onClick={e => e.stopPropagation()} //While this prevents closing when clicking inside the modal
            >
                <div className="flex justify-between items-start mb-6 border-b border-ut-red pb-4">
                    <h2 className="text-3xl font-bold text-ut-red">
                        {text.h2}
                    </h2>
                    <button 
                        onClick={onClose} 
                        className="text-white text-2xl p-2 hover:text-ut-blue transition"
                        aria-label={isRTL ? 'إغلاق' : 'Close'}
                    >
                        &times;
                    </button>
                </div>
                
                <p className="text-gray-300 mb-6 text-lg">
                    {text.p}
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="email"
                        required
                        placeholder={text.placeholder}
                        className={`w-full p-3 rounded-lg bg-gray-800 border border-ut-blue focus:border-ut-red focus:ring-1 focus:ring-ut-red text-white placeholder-gray-500 transition duration-200 
                            ${isRTL ? 'rtl' : 'ltr'}`}
                    />
                    <button
                        type="submit"
                        className="w-full p-3 rounded-lg bg-ut-red text-white font-bold text-lg hover:bg-ut-blue transition duration-300 shadow-lg transform hover:scale-[1.02] active:scale-95"
                    >
                        {text.buttonText}
                    </button>
                </form>
            </div>
        </div>
    );
};


export default NewsletterModal;
