const Buttons = ({ dispatch , inputNum}) => {
  const handleIncrementButton = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrementButton = () => {
    dispatch({ type: "DECREMENT" });
  };

  const handleClearButton = () => {
    dispatch({ type: "CLEAR" });
  };

  const handleInput = (number) => {
    dispatch({ payload: number, type: "INPUT" });
  };

  const handleAddButton = () => {
    dispatch({ type: "ADD" });
  };

  const handleMinsButton = () => {
    dispatch({ type: "MINS" });
  };

  return (
    <>
      <div className="card-body d-flex gap-2 justify-content-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleIncrementButton}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleDecrementButton}
        >
          -1
        </button>

        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleClearButton}
        >
          clear
        </button>
      </div>

      <div className="card-body d-flex gap-2 justify-content-center">
        <input
          type="text"
          value={inputNum}
          className="input-box"
          placeholder="Enter number"
          onChange={(e) => handleInput(Number(e.target.value) || 0)}
        />
        <button
          type="button"
          className="btn btn-success"
          onClick={handleAddButton}
        >
          plus
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={handleMinsButton}
        >
          mins
        </button>
      </div>
    </>
  );
};

export default Buttons;
