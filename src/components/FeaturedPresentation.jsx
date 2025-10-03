import React, { useState } from 'react';
import Modal from './Modal';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const FeaturedPresentation = ({ text, language, assetUrl }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const slides = text.slides;
  const currentSlide = slides[currentIndex];
  const isRTL = language === 'ar';

  const nextSlide = () => setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const toggleDetailsModal = () => setIsDetailsModalOpen((p) => !p);

  const LeftButton = isRTL ? FaChevronRight : FaChevronLeft;
  const RightButton = isRTL ? FaChevronLeft : FaChevronRight;

  return (
    <div className="container mx-auto px-4 md:px-6">
      {/* H1 */}
      <h1 className={`text-3xl md:text-5xl font-bold text-center mb-8 ${isRTL ? 'font-arabic' : 'font-sans'} text-ut-red`}>
        {text.h1}
      </h1>

      {/* Layout: mobile stacked, desktop two-column */}
      <div className={`flex flex-col md:flex-row md:items-start gap-6 md:gap-12`}>
        {/* Image area */}
        <div className="w-full md:w-1/2 flex items-center justify-center relative">
          <img
            src={assetUrl(currentSlide.image)}
            alt={currentSlide.role}
            className="w-full max-w-full md:max-w-none max-h-[48vh] md:max-h-[56vh] object-contain rounded-lg shadow-2xl border-2 border-ut-blue"
          />

          {/* nav buttons overlay */}
          <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
            <button
              onClick={isRTL ? prevSlide : nextSlide}
              className={`pointer-events-auto p-3 text-2xl md:text-3xl text-white bg-black bg-opacity-30 hover:bg-opacity-70 transition-all duration-300 ${isRTL ? 'right-2' : 'left-2'}`}
              aria-label={isRTL ? 'السابق' : 'Previous'}
            >
              <LeftButton />
            </button>

            <button
              onClick={isRTL ? nextSlide : prevSlide}
              className={`pointer-events-auto p-3 text-2xl md:text-3xl text-white bg-black bg-opacity-30 hover:bg-opacity-70 transition-all duration-300 ${isRTL ? 'left-2' : 'right-2'}`}
              aria-label={isRTL ? 'التالي' : 'Next'}
            >
              <RightButton />
            </button>
          </div>
        </div>

        {/* Info area (always visible under image on mobile; right column on desktop) */}
        <div className="w-full md:w-1/2">
          <h2 className={`text-2xl md:text-4xl mb-3 text-ut-blue ${isRTL ? 'font-arabic' : 'font-sans'}`}>{currentSlide.role}</h2>
          <p className={`text-lg md:text-xl mb-4 text-gray-300 ${isRTL ? 'font-arabic' : 'font-sans'}`}>{currentSlide.title}</p>
          <p className={`text-base md:text-lg mb-6 text-gray-300 ${isRTL ? 'font-arabic' : 'font-sans'}`}>{currentSlide.text}</p>

          {/* Keep view details for desktop, but info is already visible */}
          <div className="flex gap-3">
            <button
              onClick={toggleDetailsModal}
              className={`py-2 px-4 bg-ut-red text-white rounded-md hover:bg-ut-blue transition duration-200 ${isRTL ? 'font-arabic' : 'font-sans'}`}
            >
              {text.modalButton}
            </button>

            <div className="flex items-center gap-2">
              {/* small indicators */}
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-3 h-3 rounded-full ${i === currentIndex ? 'bg-ut-red' : 'bg-gray-600'} transition-all`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Details modal (unchanged) */}
      <Modal isOpen={isDetailsModalOpen} onClose={toggleDetailsModal}>
        <div className="p-6 md:p-10 max-w-2xl w-full bg-ut-dark border-4 border-ut-red rounded-xl shadow-2xl">
          <h2 className={`text-2xl md:text-4xl mb-4 text-ut-red ${isRTL ? 'font-arabic' : 'font-sans'}`}>{currentSlide.title}</h2>
          <p className={`text-base md:text-lg text-gray-200 ${isRTL ? 'font-arabic' : 'font-sans'}`}>{currentSlide.text}</p>
        </div>
      </Modal>
    </div>
  );
};

export default FeaturedPresentation;
