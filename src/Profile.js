import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function Profile() {
  let navigate = useNavigate();
  let { username } = useParams();
  return (
    <div>
      THIS IS EDIT TO DO PAGE {username}!
      <button
        className="h-10 w-44 bg-blue-300"
        onClick={() => {
          navigate("/AddPage");
        }}
      >
        Change to about page
      </button>
      <div>
        <div className=" flex  h-14 w-72 mx-auto bg-slate-600 justify-center items-center my-3 ">
          Edit To do
        </div>
        <div>
          <div className=" flex flex-col items-center gap-3">
            <button className="h-14 w-72 bg-blue-300">Name</button>
            <button className="h-14 w-72 bg-red-300">Description</button>
            <button className="h-14 w-72 bg-blue-300">Date</button>
            <button
              className="h-14 w-72 bg-green-300"
              onClick={() => {
                navigate("/Update");
              }}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
