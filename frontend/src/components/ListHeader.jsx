import React, { useState } from "react";
import Modal from "./Modal";

export default function ListHeader({ title, getData }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="list-header">
      <h1>{title}</h1>
      <div className="button-container">
        <button className="add" onClick={() => setIsOpen(true)}>
          ADD
        </button>
        <Modal
          mode={"create"}
          open={isOpen}
          onClose={() => setIsOpen(false)}
          getData={getData}
        />
        <button className="signout">SIGN OUT</button>
      </div>
    </div>
  );
}
