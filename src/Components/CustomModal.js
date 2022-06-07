import React from "react";
import Modal from "react-modal/dist/react-modal";

function CustomModal({ closeModal, modalStatus }) {
  return (
    <Modal
      isOpen={modalStatus}
      parentSelector={() => document.querySelector("#root")}
      className="bg-red-500"
    >
      <div className="  mx-auto">
        <button onClick={() => closeModal(false)}> X </button>
        <div className="title">
          <h1>are you sure you want to continue?</h1>
        </div>
        <div className="body">
          <p>
            The next page is awsome! you should move foward you will enjoy it.
          </p>
        </div>
        <div className="footer">
          <button onClick={() => closeModal(false)}>Cancel</button>
          <button>Continue</button>
        </div>
      </div>
    </Modal>
  );
}

export default CustomModal;
