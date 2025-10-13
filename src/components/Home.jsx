import React from 'react';

const Home = ({ text, language, assetUrl }) => {
  const isArabic = language === 'ar';

  return (
    <div
      className="min-h-[90vh] flex flex-col justify-center items-center bg-black relative overflow-visible"
      style={{ WebkitFontSmoothing: 'antialiased' }}
    >
      {/* Motion Graphic Loop */}
      <div
        className="w-full h-[40vh] flex justify-center items-center overflow-visible bg-black"
        style={{ outline: '2px dashed rgba(255,0,0,0.15)' }} // debug outline
      >
        <img
          src={assetUrl('motion-graph.gif')}
          alt="Uptown Film Motion Graphic"
          className="h-full object-contain"
          style={{ maxHeight: '38vh' }}
        />
      </div>

      {/* Text Below GIF */}
      <div className="text-center mt-6 px-4 z-20 relative" style={{ overflow: 'visible' }}>
        {/* Company name */}
        <h1
          className={`font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-ut-red to-ut-blue ${
            isArabic
              ? 'font-arabic text-5xl sm:text-6xl md:text-6xl'
              : 'font-sans text-6xl sm:text-7xl md:text-8xl'
          }`}
          style={{
            lineHeight: 1.8,               // generous line-height so tall Arabic glyphs don't clip
            paddingTop: '8px',             // push it a bit down from the GIF
            paddingBottom: '8px',
            display: 'block',
            overflow: 'visible',
            WebkitTextStroke: '0px',
            transform: 'none',
            // debug box so you can see the element bounds
            outline: '1px solid rgba(0,255,0,0.12)',
          }}
        >
          {text.company}
        </h1>

        {/* Motto (comment/uncomment to test) */}
        <p
          className={`mt-6 text-xl text-gray-400 max-w-2xl mx-auto ${
            isArabic ? 'font-arabic text-lg md:text-xl leading-relaxed' : 'font-sans text-xl leading-relaxed'
          }`}
          style={{ outline: '1px dashed rgba(0,0,255,0.08)' }}
        >
          {text.motto}
        </p>
      </div>
    </div>
  );
};

export default Home;

