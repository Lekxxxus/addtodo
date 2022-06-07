import React from "react";
import dota2 from "./images/dota2.png";
import { useNavigate } from "react-router-dom";

function Addscrip() {
  let navigate = useNavigate();

  return (
    <div>
      <div>
        <h1>Description</h1>
        <div>
          <div className=" flex flex-col items-center gap-3 my-3">
            <button
              className="h-14 w-72 bg-blue-300"
              onClick={() => {
                navigate("/Addscrip");
              }}
            >
              Rarara!!! 🍜 🍣 !!!
            </button>
            <button
              className="h-14 w-72 bg-red-300"
              onClick={() => {
                navigate("/");
              }}
            >
              NO 😱
            </button>
          </div>
        </div>
        <div>
          <img src={dota2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Addscrip;
