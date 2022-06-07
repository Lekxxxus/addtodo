import React, { useState } from "react";
import Modal from "react-modal/lib/components/Modal";
import { useNavigate } from "react-router-dom";

function AddPage() {
  let navigate = useNavigate();

  return (
    <>
      <div>
        <h1> THIS IS THE ADD PAGE!</h1>

        <div className="bg-[#A44200] h-96 max-w-5xl mx-auto  ">
          <div className="bg-[#7021f7] flex  h-14 w-72 mx-auto  justify-center items-center my-3">
            <button
              onClick={() => {
                navigate("/");
              }}
            >
              Back to Add Todo Page!
            </button>
          </div>
          <div className="bg-[#21a8a6] flex gap-5 justify-center items-center  ">
            <button
              className="bg-[#21f761] h-12 w-40 py-3 my-5"
              onClick={() => {
                navigate("/Profile");
              }}
            >
              Edit1
            </button>

            <div className="bg-[#21f761] h-12 w-40 py-3 my-5">
              <button
                onClick={() => {
                  navigate("/View");
                }}
              >
                View1
              </button>
            </div>
            <div className="bg-[#21f761] h-12 w-40 py-3 my-5">Delete</div>
            <button className="bg-[#21f761] h-12 w-40 py-3 my-5">
              Compelete
            </button>
          </div>
          {/* =================== */}
          <div className="bg-[#21a8a6] flex gap-5 justify-center items-center  ">
            <div className="bg-[#21f761] h-12 w-40 py-3 my-5">Edit</div>
            <div className="bg-[#21f761] h-12 w-40 py-3 my-5">View</div>
            <div className="bg-[#21f761] h-12 w-40 py-3 my-5">Delete</div>
            <button className="bg-[#21f7d7] h-12 w-40 py-3 my-5">
              Pending
            </button>
          </div>
          {/* ================== */}
          <div className="bg-[#21a8a6] flex gap-5 justify-center items-center  ">
            <div className="bg-[#21f761] h-12 w-40 py-3 my-5">Edit</div>
            <div className="bg-[#21f761] h-12 w-40 py-3 my-5">View</div>
            <div className="bg-[#21f761] h-12 w-40 py-3 my-5">
              <button
                onClick={() => {
                  navigate("/Delete");
                }}
              >
                Delete1
              </button>
            </div>
            <button className="bg-[#21f7b3] h-12 w-40 py-3 my-5">
              Ongoing
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddPage;
