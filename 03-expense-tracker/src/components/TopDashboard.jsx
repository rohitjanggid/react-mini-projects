const TopDashboard = ({ history }) => {
  // total deposit
  const incomeArray = history.filter((data) => data.type == "income");

  const depositAmount = incomeArray.reduce((total, currentItem) => {
    return total + currentItem.amount;
  }, 0);

  // total withdraw
  const expenseArray = history.filter((data) => data.type == "expense");

  const totalWithdraw = expenseArray.reduce((total, currentItem) => {
    return total + currentItem.amount;
  }, 0)

  // net Balance
  const netBalance = depositAmount - totalWithdraw;

  return (
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
            <h3 className="fw-bold text-primary m-0">₹{netBalance}</h3>
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
            <h6 className="text-muted text-uppercase small fw-bold">
              Total deposit
            </h6>
            <h3 className="fw-bold text-success m-0">₹{depositAmount}</h3>
          </div>
        </div>
      </div>
      {/* total expense card */}
      <div className="col-md-4">
        <div className="card shadow-sm border-0 border-start border-danger border-4">
          <div className="card-body">
            <h6 className="text-muted text-uppercase small fw-bold">
              Total withdraw
            </h6>
            <h3 className="fw-bold text-danger m-0">₹{totalWithdraw}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopDashboard;
