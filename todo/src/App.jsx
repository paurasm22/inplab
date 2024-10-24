import React, { useState } from "react";
import "./App.css"; // Create this file for the styles

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="container">
      <h1>Simple To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task..."
        />
        <button onClick={addTask}>Add</button>
      </div>
      <div className="task-list">
        {tasks.map((task, index) => (
          <div className="task" key={index}>
            {task}
            <button onClick={() => removeTask(index)} className="remove-button">
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
