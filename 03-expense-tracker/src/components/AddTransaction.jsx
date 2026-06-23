import { useState } from "react";

const AddTransaction = ({ setHistory }) => {
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    type: "expense",
    category: "Food",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!formData.title.trim() || !formData.amount) {
      alert("Enter all data!");
      return;
    }

    const newTransaction = {
      id: Date.now(),
      title: formData.title,
      amount: Number(formData.amount),
      type: formData.type,
      category: formData.category,
    };

    setHistory((prevData) => [newTransaction, ...prevData])

    setFormData({
      title: "",
      amount: "",
      type: "expense",
      category: "Food",
    });
  };

  return (
    <div className="col-md-5">
      <div
        className="card shadow-sm border-0 p-3"
        style={{ borderRadius: "16px" }}
      >
        <h5 className="fw-bold mb-3 text-secondary">Add New Transaction</h5>
        <form onSubmit={handleFormSubmit}>
          {/* title Input */}
          <div className="mb-3">
            <label className="form-label small fw-semibold text-muted">
              Transaction Title
            </label>
            <input
              name="title"
              type="text"
              className="form-control"
              placeholder="e.g., Room Rent, Salary"
              value={formData.title}
              onChange={handleInputChange}
            />
          </div>

          {/* Amount Input */}
          <div className="mb-3">
            <label className="form-label small fw-semibold text-muted">
              Amount (₹)
            </label>
            <input
              name="amount"
              type="number"
              className="form-control"
              placeholder="e.g., 500"
              value={formData.amount}
              onChange={handleInputChange}
            />
          </div>

          {/* Type Select (Income/Expense) */}
          <div className="mb-3">
            <label className="form-label small fw-semibold text-muted">
              Transaction Type
            </label>
            <select
              name="type"
              className="form-select"
              style={{ borderRadius: "8px" }}
              value={formData.type}
              onChange={handleInputChange}
            >
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </select>
          </div>

          {/* Category Select */}
          <div className="mb-3">
            <label className="form-label small fw-semibold text-muted">
              Category
            </label>
            <select
              name="category"
              className="form-select"
              value={formData.category}
              onChange={handleInputChange}
            >
              <option value="Food">Food & Drinks</option>
              <option value="Rent">Rent</option>
              <option value="Salary">Salary</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Fuel">Fuel/Travel</option>
              <option value="Buy">Buy</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-dark w-100 fw-semibold py-2 mt-2"
          >
            Add Transaction
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTransaction;
