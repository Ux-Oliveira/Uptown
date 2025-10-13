import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import NewsletterModal from './components/NewsletterModal';
import { content } from './assets/data';
import { FaVideo } from 'react-icons/fa';

const assetUrl = (filename) => `/${filename}`;

function FeaturePage() {
  const [language, setLanguage] = useState(
    document.documentElement.lang === 'ar' ? 'ar' : 'en'
  );
  const [showNewsletter, setShowNewsletter] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);

  const text = content[language];
  const isRTL = language === 'ar';

  // Apply direction + title dynamically
  useEffect(() => {
    document.documentElement.lang = language;
    document.title =
      language === 'ar'
        ? 'صراع داخلي - أبتاون فيلم'
        : 'Inner Conflict – Uptown Film';
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [language, isRTL]);

  // Scroll button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll-to-top handler
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Language toggle
  const toggleLanguage = () => setLanguage((prev) => (prev === 'en' ? 'ar' : 'en'));

  // Navigate to home (replace with your actual homepage route)
  const scrollToHome = () => {
    window.location.href = '/';
  };

  return (
    <div
      className="min-h-screen bg-black text-white"
      style={{
        fontFamily:
          language === 'en' ? 'Bebas Neue, sans-serif' : 'Cairo, sans-serif',
      }}
    >
      {/* Navbar */}
      <Navbar
        text={{
          home: text.nav.home,
          lang: text.nav.lang,
          newsletter: text.nav.newsletter,
        }}
        language={language}
        toggleLanguage={toggleLanguage}
        scrollToHome={scrollToHome}
        handleNewsletterClick={() => setShowNewsletter(true)}
        assetUrl={assetUrl}
      />

      {/* Newsletter modal */}
      <NewsletterModal
        isOpen={showNewsletter}
        onClose={() => setShowNewsletter(false)}
        text={{
          h2: text.newsletter.title,
          p: text.newsletter.h1,
          placeholder: text.newsletter.emailPlaceholder,
          buttonText: text.newsletter.button,
        }}
        language={language}
      />

      {/* Main Content */}
      <main className="pt-24 px-6 sm:px-12 lg:px-24 space-y-24">
        {/* Header */}
        <section className="text-center max-w-3xl mx-auto">
          <h1
            className={`text-4xl sm:text-6xl font-bold text-ut-red mb-6 ${
              isRTL ? 'font-arabic' : 'font-sans'
            }`}
          >
            {language === 'ar'
              ? 'صراع داخلي: السينما السعودية بمعايير عالمية'
              : 'Inner Conflict: Saudi Cinema with International Standards'}
          </h1>
          <p
            className={`text-gray-400 text-lg ${
              isRTL ? 'font-arabic' : 'font-sans'
            }`}
          >
            {language === 'ar'
              ? 'إنتاج من شركة أبتاون فيلم، يجمع بين الدراما والحركة والتشويق، ليقدم تجربة سينمائية سعودية فريدة ذات معايير عالمية.'
              : 'Produced by Uptown Film, combining action, drama, and suspense — delivering a Saudi cinematic experience crafted to international standards.'}
          </p>
        </section>

        {/* Paragraph 1 - Image Left */}
        <section
          className={`flex flex-col lg:flex-row items-center gap-8 ${
            isRTL ? 'lg:flex-row-reverse' : ''
          }`}
        >
          <div><a href="https://www.instagram.com/rawan_vii/p/DLYPtDPMdAn/" target="_blank"><img
            src={assetUrl('Inner.jpg')}
            alt="Inner Conflict Poster"
            className="w-full lg:w-1/2 rounded-lg shadow-2xl border-2 border-ut-blue animate-image-pulse"
          /></a></div>
          <div className="lg:w-1/2 space-y-4">
            <h2
              className={`text-3xl text-ut-blue font-bold ${
                isRTL ? 'font-arabic' : 'font-sans'
              }`}
            >
              {language === 'ar' ? 'رسائل إنسانية عميقة' : 'Deep Human Messages'}
            </h2>
            <p
              className={`text-gray-300 leading-relaxed ${
                isRTL ? 'font-arabic' : 'font-sans'
              }`}
            >
              {language === 'ar'
                ? 'يتجاوز فيلم "صراع داخلي" كونه عملاً ترفيهيًا فقط؛ إذ يحمل في جوهره رسائل إنسانية وفلسفية عميقة. يتناول الصراع الأبدي بين الخير والشر كما يتجلى داخل كل إنسان، مؤكداً أن انتصار الخير حتمي مهما طال الصراع.'
                : '“Inner Conflict” goes beyond entertainment — it conveys a deep human message about the eternal struggle between good and evil within every person. The story emphasizes that good will always prevail, giving the film an inspiring and reflective tone.'}
            </p>
          </div>
        </section>

        {/* Paragraph 2 - Image Right */}
        <section
          className={`flex flex-col lg:flex-row items-center gap-8 ${
            isRTL ? 'lg:flex-row' : 'lg:flex-row-reverse'
          }`}
        >
          <div><a href="https://www.instagram.com/laylamalillk/p/DLYGBuAoucs/" target="_blank"><img
            src={assetUrl('inner2.jpg')}
            alt="Inner Conflict Scene"
            className="w-full lg:w-1/2 rounded-lg shadow-2xl border-2 border-ut-blue animate-image-pulse"
          /></a></div>
          <div className="lg:w-1/2 space-y-4">
            <h2
              className={`text-3xl text-ut-blue font-bold ${
                isRTL ? 'font-arabic' : 'font-sans'
              }`}
            >
              {language === 'ar' ? 'الصراع الإنساني الداخلي' : 'The Inner Human Struggle'}
            </h2>
            <p
              className={`text-gray-300 leading-relaxed ${
                isRTL ? 'font-arabic' : 'font-sans'
              }`}
            >
              {language === 'ar'
                ? 'يعرض الفيلم صراعات الإنسان اليومية بين القيم النبيلة والإغراءات المدمرة. من خلال شخصيات متعددة، يُظهر الفيلم الصراع الداخلي الذي يواجهه كل فرد في سعيه نحو التوازن الأخلاقي والروحي.'
                : 'The film explores humanity’s daily internal conflicts — between noble values and destructive temptations. Through multiple characters, it portrays the complex moral and emotional struggles each person faces.'}
            </p>
          </div>
        </section>

        {/* Paragraph 3 - Image Left */}
        <section
          className={`flex flex-col lg:flex-row items-center gap-8 ${
            isRTL ? 'lg:flex-row-reverse' : ''
          }`}
        >
          <div><a href="https://www.instagram.com/p/DLXsNn5szMH/?img_index=1" target="_blank"><img
            src={assetUrl('inner3.jpg')}
            alt="Inner Conflict Cast"
            className="w-full lg:w-1/2 rounded-lg shadow-2xl border-2 border-ut-blue animate-image-pulse"
          /></a></div>
          <div className="lg:w-1/2 space-y-4">
            <h2
              className={`text-3xl text-ut-blue font-bold ${
                isRTL ? 'font-arabic' : 'font-sans'
              }`}
            >
              {language === 'ar'
                ? 'الرسالة الاجتماعية والتعليمية'
                : 'A Social and Educational Message'}
            </h2>
            <p
              className={`text-gray-300 leading-relaxed ${
                isRTL ? 'font-arabic' : 'font-sans'
              }`}
            >
              {language === 'ar'
                ? 'يخاطب الفيلم فئة الشباب تحديدًا، مقدماً تجربة ملهمة تتناول قضايا التربية الإيجابية وضبط النفس والضغوط الاجتماعية. كما يسلط الضوء على مخاطر الإدمان وأهمية الصحبة الصالحة، في دعوة للتفكير في بناء الفرد والمجتمع.'
                : '“Inner Conflict” speaks directly to youth — tackling themes of discipline, education, and social pressure. It raises awareness about addiction and the power of good companionship, turning the film into an invitation to reflect on personal and social growth.'}
            </p>
          </div>
        </section>
      </main>

      {/* Scroll to top button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-ut-red text-white p-3 rounded-full shadow-lg hover:bg-ut-blue transition-all duration-300"
          aria-label={isRTL ? 'العودة للأعلى' : 'Back to top'}
        >
          <FaVideo />
        </button>
      )}

      {/* Footer */}
      <footer className="mt-24 py-6 bg-black text-center text-gray-500 text-sm border-t border-gray-700">
        © 2025 UPTOWN FILM — All Rights Reserved.
      </footer>
    </div>
  );
}

export default FeaturePage;
