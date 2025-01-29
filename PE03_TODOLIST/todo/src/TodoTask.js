import React from "react";

const TodoTask = ({ task, onDelete }) => {
  return (
    <div className="todo-task">
      <span>{task}</span>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default TodoTask;