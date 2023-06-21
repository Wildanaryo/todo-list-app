import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import "../src/App.css";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((existingTodo) => existingTodo !== index);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <TodoInput onAddTodo={addTodo} />
      <TodoList todos={todos} onDeleteTodo={deleteTodo} />
    </div>
  );
}
