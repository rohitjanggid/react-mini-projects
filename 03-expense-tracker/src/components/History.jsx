import { useState } from "react";

const History = ({ history, setHistory }) => {
  const [selectedCategory, setSalectedCategory] = useState("All");

  const handleDeleteButton = (id) => {
    console.log("hello");
    setHistory((prevData) => prevData.filter((data) => data.id != id));
  };

  const filterTransaction = history.filter((data) => {
    if (selectedCategory == "All") return true;
    return data.category == selectedCategory;
  });

  return (
    <div className="col-md-7">
      <div
        className="card shadow-sm border-0 p-3"
        style={{ borderRadius: "16px" }}
      >
        {/* Header with Filter Dropdown */}
        <div className="d-flex justify-content-between align-item-center mb-3">
          <h5 className="fw-bold m-0 text-secondary">History</h5>
          <select
            className="form-select form-select-sm w-auto"
            style={{ borderRadius: "6px" }}
            value={selectedCategory}
            onChange={(e) => setSalectedCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="Food">Food</option>
            <option value="Rent">Rent</option>
            <option value="Salary">Salary</option>
            <option value="Entertainment">Eentertainment</option>
            <option value="Fuel">Fuel/Travel</option>
            <option value="Buy">Buy</option>
          </select>
        </div>

        {filterTransaction.length == 0 && (
          <p className="text-center text-muted my-3">No transaction found!</p>
        )}

        {filterTransaction.map((data) => (
          <div
            className="d-flex flex-column gap-2"
            style={{ maxHeight: "380px", overflowY: "auto" }}
          >
            {" "}
            <div
              className={`d-flex align-items-center justify-content-between p-3 rounded-3 border bg-light border-start ${data.type == "income" ? "border-success" : "border-danger"} border-3 mb-2`}
            >
              <div>
                <h6 className="fw-bold text-dark mb-0">{data.title}</h6>
                <small className="text-muted bg-white px-2 py-0.5 rounded border small">
                  {data.category}
                </small>
              </div>
              <div className="d-flex align-items-center gap-3">
                {data.type == "income" ? (
                  <span className="fw-bold text-success">+ ₹{data.amount}</span>
                ) : (
                  <span className="fw-bold text-danger">- ₹{data.amount}</span>
                )}
                <button
                  className="btn btn-sm btn-link text-danger text-decoration-none fw-bold p-0"
                  onClick={() => handleDeleteButton(data.id)}
                >
                  X
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
