import React, { useState } from 'react';

const NewsletterModal = ({ isOpen, onClose, text, language }) => {
  if (!isOpen) return null;

  const isRTL = language === 'ar';
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    const form = e.target;
    const email = (form.email?.value || '').trim();
    const name = (form.name?.value || '').trim(); // now reading name input

    if (!email) {
      alert(isRTL ? 'الرجاء إدخال البريد الإلكتروني.' : 'Please enter an email.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name }),
      });

      const json = await res.json();

      if (!res.ok) {
        const msg = json?.error || json?.detail || json?.title || (isRTL ? 'فشل الاشتراك' : 'Subscription failed');
        alert(isRTL ? `خطأ: ${msg}` : `Error: ${msg}`);
        setLoading(false);
        return;
      }

      alert(
        isRTL
          ? 'شكرًا! تحقق من بريدك الإلكتروني لتأكيد الاشتراك (إذا كنت تستخدم تأكيد الاشتراك المزدوج).'
          : 'Thanks — check your email to confirm subscription (if using double opt-in).'
      );

      form.reset();
      onClose();
    } catch (err) {
      console.error('Subscribe error:', err);
      alert(isRTL ? 'حدث خطأ أثناء الاتصال بالخادم.' : 'An error occurred contacting the server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className={`bg-ut-dark p-8 rounded-xl shadow-2xl max-w-lg w-full transform transition-all duration-300 scale-100 border-2 border-ut-blue ${
          isRTL ? 'text-right font-arabic' : 'text-left font-sans'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-6 border-b border-ut-red pb-4">
          <h2 className="text-3xl font-bold text-ut-red">{text.h2}</h2>
          <button onClick={onClose} className="text-white text-2xl p-2 hover:text-ut-blue transition" aria-label={isRTL ? 'إغلاق' : 'Close'}>
            &times;
          </button>
        </div>

        <p className="text-gray-300 mb-6 text-lg">{text.p}</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            type="text"
            placeholder={isRTL ? 'الاسم (اختياري)' : 'Name (optional)'}
            className={`w-full p-3 rounded-lg bg-gray-800 border border-ut-blue focus:border-ut-red focus:ring-1 focus:ring-ut-red text-white placeholder-gray-500 transition duration-200 ${
              isRTL ? 'rtl' : 'ltr'
            }`}
          />
          <input
            name="email"
            type="email"
            required
            placeholder={text.placeholder}
            className={`w-full p-3 rounded-lg bg-gray-800 border border-ut-blue focus:border-ut-red focus:ring-1 focus:ring-ut-red text-white placeholder-gray-500 transition duration-200 ${
              isRTL ? 'rtl' : 'ltr'
            }`}
          />
          <button
            type="submit"
            disabled={loading}
            className={`w-full p-3 rounded-lg bg-ut-red text-white font-bold text-lg hover:bg-ut-blue transition duration-300 shadow-lg transform hover:scale-[1.02] active:scale-95 ${
              loading ? 'opacity-60 cursor-not-allowed' : ''
            }`}
          >
            {loading ? (isRTL ? 'جارٍ الإرسال...' : 'Sending...') : text.buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterModal;
