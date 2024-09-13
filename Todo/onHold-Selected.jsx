import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Todo multiple select & delete", completed: false },
    { id: 2, text: "AI Agent", completed: false },
    { id: 3, text: "Add progress report", completed: false },
    { id: 4, text: "Join developer communities", completed: false },
    { id: 5, text: "Mobile speaker note", completed: false },
  ]);
  const [selectedTodos, setSelectedTodos] = useState([]);
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

  const handleCheckboxChange = (id) => {
    if (selectedTodos.includes(id)) {
      setSelectedTodos(selectedTodos.filter((todoId) => todoId !== id));
    } else {
      setSelectedTodos([...selectedTodos, id]);
    }
  };

  // Mark a single task as complete
  const handleComplete = (id) => {
    // Only allow completing tasks when multi-select mode is off
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
    setTodos(todos.filter((todo) => !selectedTodos.includes(todo.id)));
    setSelectedTodos([]); // Clear selected todos
    setIsMultiSelectMode(false); // Exit multi-select mode
  };

  // Render the To-Do list
  return (
    <div>
      <h1>My Day</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <label
              onMouseDown={() => handleMouseDown(todo.id)}
              onMouseUp={handleMouseUp}
            >
              {isMultiSelectMode && (
                <input
                  type="checkbox"
                  checked={selectedTodos.includes(todo.id)}
                  onChange={() => handleCheckboxChange(todo.id)}
                />
              )}
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                  marginLeft: "10px",
                }}
                onClick={() => handleComplete(todo.id)}
              >
                {todo.text}
              </span>
            </label>
          </li>
        ))}
      </ul>

      {isMultiSelectMode && (
        <button
          onClick={handleDeleteSelected}
          disabled={selectedTodos.length === 0}
        >
          Delete Selected
        </button>
      )}
    </div>
  );
}

export default App;
