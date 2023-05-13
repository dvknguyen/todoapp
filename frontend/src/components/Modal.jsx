import React from "react";
import ReactDOM from "react-dom";

function Modal({ open, onClose }) {
  const mode = "create";
  const handleChange = () => {
    console.log("changing");
  };
  if (!open) {
    return null;
  }
  return ReactDOM.createPortal(
    <>
      <div className="overlay">
        <div className="modal">
          <h1>Let's {mode} your task!</h1>
          <button onClick={onClose}>X</button>
          <form>
            <input
              required
              type="text"
              name="taskTitle"
              maxLength={30}
              placeholder="Name of your task"
              onChange={handleChange}
            />
            <input
              required
              type="text"
              name="Task Description"
              maxLength={255}
              placeholder="Describe your task"
            />
            <input
              required
              type="date"
              name="Task Description"
              maxLength={255}
              placeholder="Describe your task"
            />
          </form>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default Modal;
