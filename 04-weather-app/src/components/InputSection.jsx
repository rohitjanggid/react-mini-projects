const InputSection = ({ inputCity, setInputCity, setSearchQuery }) => {
  const handleInputButton = (e) => {
    e.preventDefault();
    setSearchQuery(inputCity);
    setInputCity("")
  };

  return (
    <div className="row justify-content-center mb-4">
      <div className="col-md-8">
        <form
          className="d-flex gap-2 bg-white p-2 shadow-sm rounded-pill"
          onSubmit={handleInputButton}
        >
          <input
            id="cityInput"
            name="cityInput"
            type="text"
            value={inputCity}
            onChange={(e) => setInputCity(e.target.value)}
            className="form-control border-0 px-4 py-2 my-auto"
            placeholder="Search city (e.g., Delhi, London)..."
            style={{ boxShadow: "none", borderRadius: "20px" }}
          />
          <button
            type="submit"
            className="btn btn-primary px-4 fw-semibold text-uppercase rounded-pill shadow-sm"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default InputSection;
