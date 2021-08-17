import React, { useState } from "react";
import TodoList from "./ToDoList";

function App() {
  const [text, setText] = useState("");
  const [items, setItem] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setText(newValue);
  }

  function addItem() {
    setItem((prevItem) => {
      return [...prevItem, text];
    });

    setText("");
  }

  function deleteItem(id) {
    setItem((previtem) => {
      return previtem.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <div className="form">
        <input onChange={handleChange} type="text" value={text} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>

      <div>
        <ul>
          {items.map((todoItem, index) => (
            <TodoList
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
