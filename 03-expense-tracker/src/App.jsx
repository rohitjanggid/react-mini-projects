import "./App.css";
import React, { useEffect, useState } from "react";
import Title from "./components/Title";
import AddTransaction from "./components/AddTransaction";
import History from "./components/History";
import TopDashboard from "./components/TopDashboard";

function App() {
  const [history, setHistory] = useState(() => {
    const lacalData = localStorage.getItem("transactions");
    return lacalData ? JSON.parse(lacalData): [];
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(history));
  }, [history]);

  return (
    <div
      className="bg-light min-vh-100 p-4"
      style={{ fontFamily: "sans-serif" }}
    >
      <div className="container" style={{ maxWidth: "900px" }}>
        <Title />
        <TopDashboard history={history} />
        <div className="row g-4">
          <AddTransaction setHistory={setHistory} />
          <History
            history={history}
            setHistory={setHistory}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
