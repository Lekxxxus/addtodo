import React from "react";
import { useNavigate } from "react-router-dom";

function Add() {
  let navigate = useNavigate();

  return (
    <div>
      <h1> THIS IS THE ADD PAGE!</h1>
      <div>
        <div className=" flex flex-col items-center gap-3">
          <h1>Are you sure you want to Add? 🥴</h1>
          <button
            className="h-14 w-72 bg-blue-300"
            onClick={() => {
              navigate("/Mail");
            }}
          >
            YES 👌
          </button>
          <button
            className="h-14 w-72 bg-red-300"
            onClick={() => {
              navigate("/");
            }}
          >
            NO 😈!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Add;
