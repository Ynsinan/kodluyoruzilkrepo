import React from "react";
import "./TodoItem.css";

function Todo(props) {
  const { content, id, deleteTodo } = props;
  const line = (e) => {
    e.target.className !== "todoItem line" ? e.target.className = "todoItem line" : e.target.className = "todoItem noLine";
  }
  return (
    <div className="todoItem" onClick={line}>
      <div className="content">{content}</div>
      <button className="delete-button" value={id} onClick={deleteTodo}>Delete</button>
    </div>
  )
}

export default Todo;
