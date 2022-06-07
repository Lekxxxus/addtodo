import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "react-modal";

function View() {
  let navigate = useNavigate();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      THIS IS THE VIEW PAGE!
      <div>
        <div>
          <div className=" flex flex-col items-center gap-3">
            <button className="h-14 w-72 bg-blue-300">Name</button>
            <button className="h-14 w-72 bg-red-300">Description</button>
            {/* <button className="h-14 w-72 bg-green-300">Date</button> */}

            <button
              className="h-14 w-72 bg-blue-300"
              onClick={() => setModalIsOpen(true)}
            >
              Open Modal
            </button>
            <Modal
              isOpen={modalIsOpen}
              shouldCloseOnOverlayClick={false}
              onRequestClose={() => setModalIsOpen(true)}
              style={{
                overlay: {
                  backgroundColor: "grey"
                },
                content: {
                  color: "green",
                  top: "50%",
                  left: "50%",
                  right: "auto",
                  bottom: "auto",
                  marginRight: "-50%",
                  transform: "translate(-50%, -50%)"
                }
              }}
            >
              <h1>Date:</h1>

              <p>Date Upate:</p>
              <button
                className="h-14 w-72 bg-blue-300"
                onClick={() => setModalIsOpen(false)}
              >
                close
              </button>
            </Modal>

            <button
              className="h-14 w-72 bg-green-300"
              onClick={() => {
                navigate("/Update");
              }}
            >
              UpDate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default View;
