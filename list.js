import { useState } from "react";
import "./Liststyle.css";
function Todo() {
  const [tasks, setTasks] = useState(["Wake up", "Walking", "Eating"]);

  const handleAdd = () => {
    const newTask = document.getElementById("getTask").value;
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      document.getElementById("getTask").value = "";
    }
  };
  const handleEdit = (index) => {
    setTasks((t) => t.filter((element, i) => i !== index));
  };
  const handleUp = (index) => {
    const updateTask = [...tasks];
    if (index > 0) {
      [updateTask[index], updateTask[index - 1]] = [
        updateTask[index - 1],
        updateTask[index],
      ];
      setTasks(updateTask);
    }
  };
  const handleDown = (index) => {
    const updateTask = [...tasks];
    if (index < tasks.length - 1) {
      [updateTask[index], updateTask[index + 1]] = [
        updateTask[index + 1],
        updateTask[index],
      ];
      setTasks(updateTask);
    }
  };

  return (
    <>
      <div className="List">
        <h1>TO-DO-LIST</h1>
        <input type="text" placeholder="Enter Tasks" id="getTask" />
        <button className="add-button" onClick={handleAdd}>
          Add
        </button>

        <ul>
          {tasks.map((task, index) => (
            <li key={index} className="text">
              {task}
              <button
                className="delete-button"
                onClick={() => handleEdit(index)}
              >
                X
              </button>
              <button className="move-button" onClick={() => handleUp(index)}>
                Up
              </button>
              <button className="move-button" onClick={() => handleDown(index)}>
                Down
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default Todo;
