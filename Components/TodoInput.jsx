import React, { useState } from "react";
import "../src/App.css";

export default function TodoInput({ onAddTodo }) {
  const [inputValue, setInputValue] = useState("");

  const inputChange = (event) => {
    setInputValue(event.target.value);
  };

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      onAddTodo(inputValue);
      setInputValue("");
    }
  };

  return (
    <div>
      <input
        className="input-box"
        type="text"
        value={inputValue}
        onChange={inputChange}
      />
      <button className="save-button" onClick={addTodo}>
        Save
      </button>
    </div>
  );
}
