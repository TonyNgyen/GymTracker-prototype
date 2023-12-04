import React, { useState } from "react";
import "@/public/css/modal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <div>
      <button onClick={toggleModal} className="bg-teal-300 py-3 px-3">
        Open Modal
      </button>
      {modal && (
        <div className="modal">
          <div
            onClick={toggleModal}
            className="justify-center flex fixed w-screen h-screen top-0 left-0 right-0 bottom-0 bg-opacity-40 bg-gray-600 items-center"
          >
            <div className="bg-white px-5 py-5">
              <h2>Testing Modal</h2>
              <button onClick={toggleModal}>CLOSE</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
