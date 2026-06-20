const TasksList = ({ Tasks, setTasks }) => {
  const handleCheckboxChange = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const handleDeleteButton = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div className="d-flex flex-column gap-2">
      {/* Active Task Item Example */}
      {Tasks.map((task) => (
        <div
          key={task.id}
          className="d-flex align-items-center justify-content-between p-3 rounded-3 border bg-light"
          style={{ opacity: task.completed ? 0.6 : undefined }}
        >
          <div className="d-flex align-items-center gap-3">
            <input
              type="checkbox"
              defaultChecked={task.completed}
              className="form-check-input m-0"
              style={{ width: "18px", height: "18px", cursor: "pointer" }}
              onChange={() => handleCheckboxChange(task.id)}
            />
            <span
              className={`fw-medium text-dark ${task.completed && "text-decoration-line-through"}`}
            >
              {task.title}
            </span>
          </div>
          <button
            className="btn btn-link text-danger text-decoration-none fw-semibold p-0"
            onClick={() => handleDeleteButton(task.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TasksList;
