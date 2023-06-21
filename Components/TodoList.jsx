import React from "react";
// import "../src/App.css";

export default function TodoList({ todos, onDeleteTodo }) {
  return (
    <div>
      <ul className="title-list">
        Today List
        {todos.map((todo, index) => (
          <div className="list-input" key={index}>
            {todo}
            <button onClick={() => onDeleteTodo(todo)}>X</button>
          </div>
        ))}
      </ul>
    </div>
  );
}
