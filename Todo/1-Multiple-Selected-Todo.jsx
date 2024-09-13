import React, { useState } from "react";

function App() {
  // State to store todos
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [selectedTodos, setSelectedTodos] = useState([]);

  // Add a new todo
  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  // Toggle completed status
  const handleCheckboxChange = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Handle multiple selection
  const handleSelectTodo = (id) => {
    console.log("selected id is : ", id);
    if (selectedTodos.includes(id)) {
      console.log(
        "filteret ids",
        selectedTodos.filter((todoId) => todoId !== id)
      );
      setSelectedTodos(selectedTodos.filter((todoId) => todoId !== id));
    } else {
      setSelectedTodos([...selectedTodos, id]);
    }
  };

  // Delete selected todos
  const handleDeleteSelected = () => {
    setTodos(todos.filter((todo) => !selectedTodos.includes(todo.id)));
    setSelectedTodos([]);
  };

  return (
    <div>
      <h1>To-Do List</h1>

      {/* Input to add a new to-do */}
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Enter new to-do"
      />
      <button onClick={handleAddTodo}>Add To-Do</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={selectedTodos.includes(todo.id)} // true or false
                onChange={() => handleSelectTodo(todo.id)}
              />
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                  marginLeft: "10px",
                }}
              >
                {todo.text}
              </span>
            </label>
            <button onClick={() => handleCheckboxChange(todo.id)}>
              {todo.completed ? "Undo" : "Complete"}
            </button>
          </li>
        ))}
      </ul>

      {/* Button to delete selected todos */}
      <button
        onClick={handleDeleteSelected}
        disabled={selectedTodos.length === 0}
      >
        Delete Selected To-Dos
      </button>
    </div>
  );
}

export default App;
