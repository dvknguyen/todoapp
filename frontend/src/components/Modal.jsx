import React, { useState } from "react";
import ReactDOM from "react-dom";

function Modal({ mode, open, onClose, getData }) {
  const [data, setData] = useState({
    user_email: "duy@duy.de",
    task_title: "",
    progress: 0,
    deadline: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };
  if (!open) {
    return null;
  }

  const postData = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/todos/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.status === 200) {
        onClose();
        getData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return ReactDOM.createPortal(
    <>
      <div className="overlay">
        <div className="modal">
          <div className="modal-header">
            <h1>Let's {mode} your task!</h1>
            <button onClick={onClose}>X</button>
          </div>
          <form>
            <div className="form-container">
              <input
                required
                type="text"
                name="task_title"
                maxLength={50}
                value={data.task_title}
                placeholder="Name of your task"
                onChange={handleChange}
              />
              <input
                required
                type="number"
                name="progress"
                value={data.progress}
                placeholder="Your progress"
                onChange={handleChange}
              />
              <input
                required
                type="text"
                name="deadline"
                maxLength={255}
                value={data.deadline}
                onChange={handleChange}
              />
            </div>
            <input type="submit" onClick={postData} />
          </form>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default Modal;
