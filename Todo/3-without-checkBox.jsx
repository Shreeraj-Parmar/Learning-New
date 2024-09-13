import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Todo multiple select & delete",
      completed: false,
      selected: false,
    },
    { id: 2, text: "AI Agent", completed: false, selected: false },
    { id: 3, text: "Add progress report", completed: false, selected: false },
    {
      id: 4,
      text: "Join developer communities",
      completed: false,
      selected: false,
    },
    { id: 5, text: "Mobile speaker note", completed: false, selected: false },
  ]);
  const [isMultiSelectMode, setIsMultiSelectMode] = useState(false);
  const [timer, setTimer] = useState(null);

  // Handle long press to activate multi-select mode
  const handleMouseDown = (id) => {
    const newTimer = setTimeout(() => {
      setIsMultiSelectMode(true);
    }, 500); // Long press threshold (500ms)
    setTimer(newTimer);
  };

  const handleMouseUp = () => {
    clearTimeout(timer);
  };

  // Handle task selection when in multi-select mode
  const handleSelectTodo = (id) => {
    if (isMultiSelectMode) {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, selected: !todo.selected } : todo
        )
      );
      const hasSelectedTodos = todos.some((todo) =>
        todo.id === id ? !todo.selected : todo.selected
      );
      if (!hasSelectedTodos) {
        setIsMultiSelectMode(false);
      }
    } else {
      // If not in multi-select mode, mark the task as complete
      handleComplete(id);
    }
  };

  // Mark a single task as complete
  const handleComplete = (id) => {
    if (!isMultiSelectMode) {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    }
  };

  // Delete selected todos and reset multi-select mode
  const handleDeleteSelected = () => {
    setTodos(todos.filter((todo) => !todo.selected));
    setIsMultiSelectMode(false); // Exit multi-select mode
  };

  // Define styles based on todo's state
  const getTodoStyle = (todo) => {
    if (todo.selected) {
      return {
        backgroundColor: "#d1e7dd", // light green
        borderColor: "#0f5132", // dark green border
        color: "#0f5132", // dark green text
      };
    }
    if (todo.completed) {
      return {
        backgroundColor: "#f8d7da", // light red for completed
        borderColor: "#842029", // dark red border
        color: "#842029", // dark red text
      };
    }
    return {
      backgroundColor: "#fff", // default white background
      borderColor: "#ced4da", // default gray border
      color: "#000", // default black text
    };
  };

  return (
    <div>
      <h1>My Day</h1>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onMouseDown={() => handleMouseDown(todo.id)}
            onMouseUp={handleMouseUp}
            onClick={() => handleSelectTodo(todo.id)}
            style={{
              ...getTodoStyle(todo),
              border: "1px solid",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
          </li>
        ))}
      </ul>

      {/* Delete selected todos button (visible only in multi-select mode) */}
      {isMultiSelectMode && (
        <button
          onClick={handleDeleteSelected}
          disabled={!todos.some((todo) => todo.selected)}
        >
          Delete Selected
        </button>
      )}
    </div>
  );
}

export default App;
