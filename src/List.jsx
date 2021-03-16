import React, { useState } from "react";

const List = ({ item, id, deletefn }) => {
  const [mark, setMark] = useState(false);

  const markFunc = () => {
    setMark(!mark);
  };

  return (
    <div className="lists">
      <li
        onClick={markFunc}
        style={{ textDecorationLine: mark ? "line-through" : "" }}
      >
        {item}
      </li>
      <button
        onClick={() => {
          deletefn(id);
        }}
        className="btn"
      >
        delete
      </button>
    </div>
  );
};

export default List;
