import React from "react";

const ModalPage = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-[500px] h-[300px] bg-green-200 rounded-lg p-4 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-700 bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
        >
          X
        </button>
        <p className="text-center mt-12 text-lg">This is the modal content!</p>
      </div>
    </div>
  );
};

export default ModalPage;
