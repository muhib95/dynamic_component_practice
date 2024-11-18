import React from 'react';

const Modal = ({isOpen,onClose,title,children}) => {
    if (!isOpen) return null;
    const handleBackdropClick = (e) => {
        // Ensure the click is on the backdrop, not the modal content
        if (e.target === e.currentTarget) {
          onClose();
        }
      };
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={handleBackdropClick}>
        <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6" onClick={(e) => e.stopPropagation()}>
          <div className="flex justify-between items-center border-b pb-3">
            <h3 className="text-lg font-semibold">{title}</h3>
            <button
              className="text-gray-500 hover:text-gray-800"
              onClick={onClose}
            >
              ×
            </button>
          </div>
          <div className="mt-4">{children}</div>
          <div className="flex justify-end mt-6">
            <button
              className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
};

export default Modal;