import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Addtodo from "./Addtodo";
import AddPage from "./AddPage";
import Profile from "./Profile";
import ErrorPages from "./ErrorPages";
import Update from "./Update";
import Add from "./Add";
import Delete from "./Delete";
import View from "./View";
import CModal from "./Components/CustomModal";
import Modal from "react-modal/lib/components/Modal";
import AddForm from "./AddForm";
import Mail from "./Mail";
import Addscrip from "./Addscrip";

Modal.setAppElement("#root");

function App() {
  // const [openModal, setOpenModal] = useState(false);

  // const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="App">
      <Router>
        <nav className=" flex  h-14 w-96 mx-auto bg-[#A44200]   items-center justify-evenly my-3 ">
          <Link to="/">Addtodo</Link>
          {/* <Link to="/AddPage">AddPage</Link> */}
          <Link to="/Profile">Profile</Link>
          <Link to="/update">Update</Link>
          {/* <Link to="/add">Add</Link> */}
          <Link to="/delete">Delete</Link>
          {/* <Link to="/view">View</Link>
          <Link to={"/mail"}>Mail</Link> */}
          <Link to={"/addscrip"}>Addscrip</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Addtodo />} />
          <Route path="/AddPage" element={<AddPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/update" element={<Update />} />
          <Route path="/add" element={<Add />} />
          <Route path="/delete" element={<Delete />} />
          <Route path="/view" element={<View />} />
          <Route path="/mail" element={<Mail />} />
          <Route path="/addscrip" element={<Addscrip />} />

          <Route path="*" element={<ErrorPages />} />
        </Routes>
      </Router>

      {/* <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: "grey"
          },
          content: {
            color: "orange"
          }
        }}
      >
        <h1>Modal title</h1>
        <p>Modal body</p>

        <button onClick={() => setModalIsOpen(false)}>close</button>
      </Modal> */}
      {/* <div>
        <h1> Open modal.</h1>
        <button
          onClick={() => {
            setOpenModal(true);
          }}
        >
          Open
        </button>
        <CModal closeModal={setOpenModal} modalStatus={openModal} />
      </div> */}
      {/* <AddForm /> */}
    </div>
  );
}

export default App;
