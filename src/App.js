import React, { useState } from "react";
import "./App.css";
import List from "./List";

function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const addInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setItems((prevItem) => {
      return [...prevItem, input];
    });
    setInput("");
  };

  const deleteBtn = (id) => {
    setItems((prevItem) => {
      return prevItem.filter((item, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="container">
        <div className="header">
          <h1>Gautham Todo App</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            onChange={addInput}
            value={input}
            type="text"
            placeholder="Enter todo"
            className="inputting"
          ></input>
          <button type="submit" className="btn">
            Add
          </button>
        </form>

        <div className="items">
          <ol>
            {items.map((item, index) => (
              <List item={item} key={index} id={index} deletefn={deleteBtn} />
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
