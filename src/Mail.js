import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import { useFormik } from "formik";

const initialValues = {
  name: "lexus",
  email: "",
  channel: ""
};

const onSubmit = (values) => {
  console.log("Form date", values);
};

const validate = (values) => {
  let errors = {};

  if (!values.name) {
    errors.name = "Required";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email format";
  }

  if (!values.channel) {
    errors.channel = "Required";
  }

  return errors;
};

function Addtodo() {
  let navigate = useNavigate();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  });

  // console.log("Form values", formik.values);
  // console.log("Form errors", formik.errors);

  return (
    <div>
      THIS IS THE ADD TO DO PAGE!
      <div>
        <div className="   ">
          {/* <div className=" flex  h-14 w-72 mx-auto bg-slate-600 justify-center items-center my-3 ">
            <h1 className="">Add To Do Title</h1>
          </div> */}
          <div className=" flex flex-col items-center gap-3">
            {/* <button className="h-14 w-72 bg-blue-300">Name</button>
            <button className="h-14 w-72 bg-red-300">Description</button>
            <button className="h-14 w-72 bg-blue-300">Date</button> */}

            {/* <button
              className="h-14 w-72 bg-green-300"
              onClick={() => {
                navigate("/Add");
              }}
            >
              Add1
            </button> */}
            <button
              className="h-14 w-72 bg-red-300"
              onClick={() => setModalIsOpen(true)}
            >
              Open Add Page!!!!
            </button>
            <Modal
              isOpen={modalIsOpen}
              shouldCloseOnOverlayClick={false}
              onRequestClose={() => setModalIsOpen(false)}
              style={{
                overlay: {
                  backgroundColor: "grey"
                },
                content: {
                  color: "blue",
                  top: "50%",
                  left: "50%",
                  right: "auto",
                  bottom: "auto",
                  marginRight: "-50%",
                  transform: "translate(-50%, -50%)"
                }
              }}
            >
              <div>
                <form onSubmit={formik.handleSubmit}>
                  <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      onChange={formik.handleChange}
                      value={formik.values.name}
                    />
                    {formik.errors.name ? (
                      <div className="form-errors">{formik.errors.name}</div>
                    ) : null}
                  </div>

                  <div className="form-control">
                    <label htmlFor="email">E-mail</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                    {formik.errors.email ? (
                      <div className="form-errors">{formik.errors.email}</div>
                    ) : null}
                  </div>

                  <div className="form-control">
                    <label htmlFor="channel">Channel</label>
                    <input
                      type="text"
                      id="channel"
                      name="channel"
                      onChange={formik.handleChange}
                      value={formik.values.channel}
                    />
                    {formik.errors.channel ? (
                      <div className="form-errors">{formik.errors.channel}</div>
                    ) : null}
                  </div>
                  <button
                    className="bg-[#21f761] h-12 w-40  my-2  "
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
              </div>
              {/* <h1>ADD</h1>
              <h1>ADD PAGE</h1> */}
              <button
                className="h-14 w-72 bg-blue-300"
                onClick={() => setModalIsOpen(false)}
              >
                Close Add Page
              </button>
            </Modal>
          </div>
        </div>
        <div className=" flex flex-col items-center gap-3 my-3">
          <button
            className="h-14 w-72 bg-blue-300"
            onClick={() => {
              navigate("/Addscrip");
            }}
          >
            Description 👌!!!
          </button>
          <button
            className="h-14 w-72 bg-red-300"
            onClick={() => {
              navigate("/");
            }}
          >
            NO 😈
          </button>
        </div>
      </div>
    </div>
  );
}

export default Addtodo;
