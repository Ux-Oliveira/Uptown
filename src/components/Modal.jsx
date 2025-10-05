import React from 'react';

/*Renders a centered overlay when is Open is true. Clicking outside or the close button triggers onClose.
With this file, I've avoided duplicating modal overlay logic and styling across components*/

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const isRTL = document?.documentElement?.dir === 'rtl';

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 transition-opacity duration-300" onClick={onClose}>
      <div className="relative" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-0 right-0 m-4 text-white text-3xl font-bold hover:text-ut-red transition duration-200 z-50"
          style={{
            right: isRTL ? 'auto' : 0,
            left: isRTL ? 0 : 'auto',
          }}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;

