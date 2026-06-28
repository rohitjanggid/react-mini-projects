const SearchBar = ({ inputUser, setInputUser, setActiveUser }) => {
  const handleInputButton = (e) => {
    e.preventDefault();
    setActiveUser(inputUser);
    setInputUser("")
  };

  return (
    <div className="row justify-content-center mb-4">
      <div className="col-12">
        <form
          onSubmit={handleInputButton}
          className="d-flex align-items-center gap-2 p-2 shadow-lg"
          style={{
            backgroundColor: "rgba(30, 41, 59, 0,7)",
            borderRadius: "50px",
            border: "1px solid rgba(255, 255, 255, 0.1",
            backdropFilter: "blur(10px)",
          }}
        >
          <span className="fs-5 ps-3 text-muted">🔍</span>
          <input
            type="text"
            value={inputUser}
            onChange={(e) => setInputUser(e.target.value)}
            className="form-control border-0 bg-transparent text-white px-2 py-2 main-input"
            placeholder="Enter a Github username..."
            style={{ boxShadow: "none" }}
          />
          <button
            type="submit"
            className="btn text-white px-4 fw-bold text-uppercase "
            style={{
              background: "linear-gradient(135deg, #a855f7 0%, #6366f1 100%)",
              borderRadius: "50px",
              boxShadow: "0 0 15px rgba(168, 85, 247, 0.4)",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
