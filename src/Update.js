import React from "react";

function Update() {
  return (
    <div>
      <h1> THIS IS THE UPDATE PAGE!</h1>
      <div>
        <div className=" flex flex-col items-center gap-3">
          <h1>Are you sure you want to Update? 🥴</h1>
          <button className="h-14 w-72 bg-blue-300">YES 👌</button>
          <button className="h-14 w-72 bg-red-300">No 😈</button>
        </div>
      </div>
    </div>
  );
}

export default Update;
