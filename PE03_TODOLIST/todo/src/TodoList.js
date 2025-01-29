import React, { useState } from "react";
import TodoTask from "./TodoTask";

const TodoList = () => {
  const [todos, setTodos] = useState([]); // State to store todos
  const [inputValue, setInputValue] = useState(""); // State to store input value

  // Function to add a new todo
  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue(""); // Clear input field
    }
  };

  // Function to delete a todo
  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="todo-list">
      <h1>ToDo List</h1>
      <div className="input-section">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a task description"
        />
        <button onClick={addTodo}>Add Task</button>
      </div>
      <div className="tasks">
        {todos.map((todo, index) => (
          <TodoTask
            key={index}
            task={todo}
            onDelete={() => deleteTodo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;