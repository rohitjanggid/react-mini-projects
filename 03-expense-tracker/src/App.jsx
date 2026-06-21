import "./App.css";
import React from "react";

function App() {
  return (
    <div
      className="bg-light min-vh-100 p-4"
      style={{ fontFamily: "sans-serif" }}
    >
      <div className="container" style={{ maxWidth: "900px" }}>
        {/* main heading */}
        <h2 className="text-center fw-bold text-dark md-4">
          💰 Multi-Category Expense Tracker
        </h2>

        {/* 1. TOP DASHBOARD (3 CARDS) */}
        <div className="row g-3 mb-4">
          {/* Net Balance Card */}
          <div className="col-md-4">
            <div
              className="card shadow-sm border-0 border-start border-primary border-4"
              style={{ borderRadius: "12px" }}
            >
              <div className="card-body">
                <h6 className="text-muted text-uppercase small fw-bold">
                  Net Balance
                </h6>
                <h3 className="fw-bold text-primary m-0">₹38,000</h3>
              </div>
            </div>
          </div>
          {/* total monthly Income card */}
          <div className="col-md-4">
            <div
              className="card shadow-sm border-0 border-start border-success border-4"
              style={{ borderRadius: "12px" }}
            >
              <div className="card-body">
                <h6 className="text-muted text-uppercase small fw-bold">Total Monthly Income</h6>
                <h3 className="fw-bold text-success m-0">₹50,000</h3>
              </div>
            </div>
          </div>
          {/* total expense card */}
          <div className="col-md-4">
            <div className="card shadow-sm border-0 border-start border-danger border-4">
              <div className="card-body">
                <h6 className="text-muted text-uppercase small fw-bold"> Total expense</h6>
                <h3 className="fw-bold text-danger m-0">₹12,000</h3>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN CONTENT ROW (FORM + LIST) */}
        <div className="row g-4"></div>
      </div>
    </div>
  );
}

export default App;
