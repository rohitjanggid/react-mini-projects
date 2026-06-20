const Buttons = ({ selectedBtn, setSelectedBtn, tasks }) => {
  // for active button
  const activeCount = tasks.filter((task) => !task.completed).length;
  // for completed button
  const completedCount = tasks.filter((task) => task.completed).length;

  return (
    <div
      className="nav nav-pills bg-light p-1 rounded-3 mb-4 d-flex"
      style={{ gap: "4px" }}
    >
      <button
        className={`nav-link  flex-fill fw-semibold text-center py-2 ${selectedBtn === "all" ? "active" : ""}`}
        style={{ borderRadius: "8px" }}
        onClick={() => setSelectedBtn("all")}
      >
        All ({tasks.length})
      </button>
      <button
        className={`nav-link flex-fill fw-semibold text-center py-2 ${selectedBtn === "active" ? "active" : ""}`}
        style={{ borderRadius: "8px" }}
        onClick={() => setSelectedBtn("active")}
      >
        Active ({activeCount})
      </button>
      <button
        className={`nav-link flex-fill fw-semibold text-center py-2 ${selectedBtn === "completed" ? "active" : ""}`}
        style={{ borderRadius: "8px" }}
        onClick={() => setSelectedBtn("completed")}
      >
        Completed ({completedCount})
      </button>
    </div>
  );
};

export default Buttons;
