import React, { useState } from "react";

function ToDoList(props) {
  const [click, setClick] = useState(false);

  function clicked() {
    setClick((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li
        onClick={clicked}
        style={{ textDecoration: click ? "line-through" : "none" }}
      >
        {props.text}
      </li>
    </div>
  );
}

export default ToDoList;
