import React, { useState } from "react";
import Modal from "./Modal";

function ListItem({ item, getData }) {
  const { id } = item;
  const [isOpen, setIsOpen] = useState(false);

  const onDelete = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:8000/todos/${id}`, {
      method: "DELETE",
    });
    if (response.status === 204 || response.status === 200) {
      getData();
    }
  };
  return (
    <>
      <div className="list-item">
        <div>{item.title}</div>
        <div>
          <button onClick={() => setIsOpen(true)}>EDIT</button>
          <Modal mode={"edit"} open={isOpen} onClose={() => setIsOpen(false)} />
          <button onClick={onDelete}>DELETE</button>
        </div>
      </div>
    </>
  );
}

export default ListItem;
