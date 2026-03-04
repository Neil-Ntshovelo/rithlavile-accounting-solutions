import React, { useEffect, useRef, useState } from 'react';

const Modal = ({ isOpen, onClose, service }) => {
  const [isVisible, setIsVisible] = useState(false);
  const modalRef = useRef(null);

  // Handle opening/closing with animation delay
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      // Focus trap logic could go here
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300); // Match CSS transition duration
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" 
      role="dialog" 
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop with blur and fade animation */}
      <div 
        className={`absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`} 
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Content */}
      <div 
        ref={modalRef}
        className={`relative w-full max-w-lg bg-white rounded-2xl shadow-2xl transform transition-all duration-300 ease-out ${
          isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-50 rounded-lg">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 id="modal-title" className="text-xl font-bold text-gray-800">
              {service?.title || 'Service Details'}
            </h3>
          </div>
          <button 
            className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500" 
            onClick={onClose}
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5">
          <p className="text-gray-600 leading-relaxed">
            {service?.description || 'Click the button below to proceed with this service request.'}
          </p>
          
          {/* Optional: Add a visual element if available */}
          {service?.image && (
            <div className="mt-4 rounded-lg overflow-hidden">
              <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-5 bg-gray-50 rounded-b-2xl flex flex-col sm:flex-row justify-end gap-3">
          <button 
            className="w-full sm:w-auto px-5 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
            onClick={onClose}
          >
            Cancel
          </button>
          <button 
            className="w-full sm:w-auto px-5 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-sm transition-colors"
            onClick={() => {
              console.log('Confirmed:', service);
              onClose();
            }}
          >
            Confirm Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;