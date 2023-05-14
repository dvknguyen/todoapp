import React, { useState } from "react";
import Modal from "./Modal";

function ListItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="list-item">
        <div>{item.title}</div>
        <div>
          <button onClick={() => setIsOpen(true)}>EDIT</button>
          <Modal mode={"edit"} open={isOpen} onClose={() => setIsOpen(false)} />
          <button>DELETE</button>
        </div>
      </div>
    </>
  );
}

export default ListItem;
