import React from "react";

function Modal({ children }) {
  return (
    <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-gray-900 bg-opacity-50 z-50 ">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-8">
        {children}
      </div>
    </div>
  );
}

export default Modal;
