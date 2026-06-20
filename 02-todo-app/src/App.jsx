import React, { useReducer, useState } from "react";
import Title from "./components/Title";
import InputTask from "./components/InputTask";
import Buttons from "./components/Buttons";
import TasksList from "./components/TasksList";
import TotalTask from "./components/TotalTask";

function App() {
  const [tasks, setTasks] = useState([]);
  const [selectedBtn, setSelectedBtn] = useState("all");

  const getFilteredTasks = () => {
    if (selectedBtn === "active") {
      return tasks.filter((task) => !task.completed);
    } else if (selectedBtn === "completed") {
      return tasks.filter((task) => task.completed);
    }
    return tasks;
  };

  return (
    <div className="bg-light min-vh-100 d-flex justify-content-center  p-3">
      <div
        className="card shadow-sm border-0 w-100"
        style={{ maxWidth: "550px", borderRadius: "16px" }}
      >
        <div className="card-body p-4">
          <Title />
          <InputTask setTasks={setTasks} />
          <Buttons
            selectedBtn={selectedBtn}
            setSelectedBtn={setSelectedBtn}
            tasks={tasks}
          />
          <TasksList
            Tasks={getFilteredTasks()}
            setTasks={setTasks}
          />
          <TotalTask tasks={tasks} />
        </div>
      </div>
    </div>
  );
}

export default App;
