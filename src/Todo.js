
import React, {useState} from "react";

function Todo(){
    


    const [todoItems, updateTodoItems] = useState([]); // Changed variable names
  const [newTask, setNewTask] = useState(""); // Changed task variable name

  const addTodo = () => {
    if (newTask.trim() !== "") {
      updateTodoItems([...todoItems, newTask]);
      setNewTask(""); // Clear input field
    }
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        value={newTask} // Changed variable name
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter task..."
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todoItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}


export default Todo;
