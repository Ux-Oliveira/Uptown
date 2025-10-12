import React from 'react';

const Home = ({ text, language, assetUrl }) => {
  const isArabic = language === 'ar';

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-black">
      {/* Motion Graphic Loop */}
      <div className="w-full h-1/2 flex justify-center items-center overflow-hidden bg-black">
        <img
          src={assetUrl('motion-graph.gif')}
          alt="Uptown Film Motion Graphic"
          className="h-full object-contain"
        />
      </div>

      {/* Text Below GIF */}
      <div className="text-center mt-10 px-4">
        {/* Company name
            - explicit sizes for Arabic vs English so rendering looks balanced */}
        <h1
          className={`font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-ut-red to-ut-blue
            ${isArabic
              ? 'font-arabic text-7xl sm:text-8xl md:text-9xl leading-snug'
              : 'font-sans text-6xl sm:text-7xl md:text-8xl leading-tight'
            }`}
          style={{ lineHeight: 1 }}
        >
          {text.company}
        </h1>

        {/* BIG vertical space between company and motto — adjust mt-28 if you want even more */}
        <p
          className={`mt-28 text-xl text-gray-400 max-w-2xl mx-auto
            ${isArabic ? 'font-arabic text-lg md:text-xl leading-relaxed' : 'font-sans text-xl leading-relaxed'}`}
        >
          {text.motto}
        </p>
      </div>
    </div>
  );
};

export default Home;
