const TotalTask = ({ tasks }) => {
  const totalLeftTask = tasks.filter((task) => !task.completed).length;

  return (
    <div className="text-end text-muted mt-4 small fw-medium">
      Total Tasks Left: {totalLeftTask}
    </div>
  );
};

export default TotalTask;
