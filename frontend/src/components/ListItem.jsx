import React from "react";

function ListItem({ item }) {
  return (
    <>
      <div className="list-item">
        <div>{item.title}</div>
        <div>
          <button>EDIT</button>
          <button>DELETE</button>
        </div>
      </div>
    </>
  );
}

export default ListItem;
