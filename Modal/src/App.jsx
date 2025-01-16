import React, { useState } from "react";
import ModalPage from "./modalPage";

const App = () => {
  const [modal, setModal] = useState(false);

  function handleClick() {
    setModal(!modal); // Correctly toggling the modal state
  }

  function onClose() {
    setModal(false); // Ensuring modal closes on `onClose`
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Open Modal
      </button>
      {modal && <ModalPage onClose={onClose} />}
    </div>
  );
};

export default App;
