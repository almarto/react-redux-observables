import React from "react";

const Todo = ({ onClick, completed, text }) => (
  <li
    className="todo"
    onClick={onClick}
    style={{
      textDecoration: completed ? "line-through" : "none"
    }}
  >
    {text}
  </li>
);

export default Todo;
