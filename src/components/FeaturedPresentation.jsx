import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
/*This handles slide index state, next/prev controls, RTL-aware button placement, and opens a details modal for the active slide.
It lets the user browse the project's highlighted films/case studies with consistent UI and a modal for more text.*/
const FeaturedPresentation = ({ text, language, assetUrl }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const slides = text.slides;
  const currentSlide = slides[currentIndex];
  const isRTL = language === 'ar';

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const toggleDetailsModal = () => setIsDetailsModalOpen((p) => !p);

  const LeftButton = isRTL ? FaChevronRight : FaChevronLeft;
  const RightButton = isRTL ? FaChevronLeft : FaChevronRight;

  return (
    <div className="container mx-auto px-4 sm:px-6">
      <h1
        className={`text-3xl sm:text-5xl font-bold text-center mb-8 sm:mb-16 ${
          isRTL ? 'font-arabic' : 'font-sans'
        } text-ut-red`}
      >
        {text.h1}
      </h1>

      <div
        className={`flex flex-col lg:flex-row items-center ${
          isRTL ? 'lg:flex-row-reverse' : ''
        } gap-8 lg:gap-12`}
      >
        {/*Image and slider controls*/}
        <div className="relative w-full lg:w-1/2 flex-shrink-0 transition-transform duration-500">
          <img
            src={assetUrl(currentSlide.image)}
            alt={currentSlide.role}
            className="w-full h-auto object-cover rounded-lg shadow-2xl border-2 border-ut-blue"
          />
          <div className="absolute inset-0 flex items-center justify-between">
            <button
              onClick={isRTL ? prevSlide : nextSlide}
              className={`p-3 text-2xl sm:text-4xl text-white bg-black bg-opacity-30 hover:bg-opacity-70 transition-all duration-300 ${
                isRTL ? 'right-0' : 'left-0'
              }`}
            >
              <LeftButton />
            </button>

            <button
              onClick={isRTL ? nextSlide : prevSlide}
              className={`p-3 text-2xl sm:text-4xl text-white bg-black bg-opacity-30 hover:bg-opacity-70 transition-all duration-300 ${
                isRTL ? 'left-0' : 'right-0'
              }`}
            >
              <RightButton />
            </button>
          </div>
        </div>

        {/*This sets up the pages info and buttons*/}
        <div className={`w-full lg:w-1/2 ${isRTL ? 'text-right' : 'text-left'}`}>
          <h2
            className={`text-2xl sm:text-4xl mb-4 text-ut-blue ${
              isRTL ? 'font-arabic' : 'font-sans'
            }`}
          >
            {currentSlide.role}
          </h2>
          <p
            className={`text-lg sm:text-xl mb-6 text-gray-300 ${
              isRTL ? 'font-arabic' : 'font-sans'
            }`}
          >
            {currentSlide.title}
          </p>

          {/*Button container for stacked layout*/}
          <div className="flex flex-col gap-4 w-full sm:w-auto">
            {/*View Details button*/}
            <button
              onClick={toggleDetailsModal}
              className={`w-full py-3 px-8 text-center bg-ut-red text-lg font-bold rounded-md hover:bg-ut-blue transition duration-300 shadow-lg ${
                isRTL ? 'font-arabic' : 'font-sans'
              }`}
            >
              {text.modalButton}
            </button>

            {/*Learn More button*/}
            <Link
              to="/FeaturePage"
              className={`w-full py-3 px-8 text-center bg-ut-red text-lg font-bold rounded-md hover:bg-ut-blue transition duration-300 shadow-lg ${
                isRTL ? 'font-arabic' : 'font-sans'
              }`}
            >
              {isRTL ? 'تعرف على المزيد' : 'Learn More'}
            </Link>
          </div>
        </div>
      </div>

      {/*Details Modal pop up*/}
      <Modal isOpen={isDetailsModalOpen} onClose={toggleDetailsModal}>
        <div className="p-6 sm:p-10 max-w-2xl w-full bg-ut-dark border-4 border-ut-red rounded-xl shadow-2xl">
          <h2
            className={`text-2xl sm:text-4xl mb-4 text-ut-red ${
              isRTL ? 'font-arabic' : 'font-sans'
            }`}
          >
            {currentSlide.title}
          </h2>
          <p
            className={`text-base sm:text-lg text-gray-200 ${
              isRTL ? 'font-arabic' : 'font-sans'
            }`}
          >
            {currentSlide.text}
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default FeaturedPresentation;
