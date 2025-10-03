import React from 'react';

const Home = ({ text, language, assetUrl }) => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-black">
      {/* Motion Graphic Loop */}
      <div className="w-full h-1/2 flex justify-center items-center overflow-hidden bg-black">
        <img src={assetUrl('motion-graph.gif')} alt="Uptown Film Motion Graphic" className="h-full object-contain" />
      </div>

      {/* Text Below GIF */}
      <div className="text-center mt-10">
        <h1 className={`text-7xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-ut-red to-ut-blue ${language === 'ar' ? 'font-arabic' : 'font-sans'}`}>
          {text.company}
        </h1>
        <p className={`mt-4 text-xl text-gray-400 max-w-2xl mx-auto ${language === 'ar' ? 'font-arabic' : 'font-sans'}`}>
          {text.motto}
        </p>
      </div>
    </div>
  );
};

export default Home;
