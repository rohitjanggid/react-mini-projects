import { useState } from "react";

const InputTask = ({ setTasks }) => {
  const [taskTitle, setTaskTitle] = useState("");

  const handleAddTask = (e) => {

    e.preventDefault();

    if (taskTitle.trim() === "") return;

    const newTask = {
      id: Date.now(),
      title: taskTitle,
      completed: false,
    };

    setTasks((prevTask) => [newTask, ...prevTask]);

    setTaskTitle("");
  };

  return (
    <form onSubmit={handleAddTask} className="input-group mb-4">
      <input
        type="text"
        className="form-control form-control-lg fs-6"
        placeholder="Enter your task here..."
        style={{ borderRadius: "8px 0 0 8px" }}
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <button
      type="submit"
        className="btn btn-primary px-4 fw-semibold"
        style={{ borderRadius: "0 8px 8px 0" }}
      >
        Add Task
      </button>
    </form>
  );
};

export default InputTask;
