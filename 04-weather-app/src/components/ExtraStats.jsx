const ExtraStats = ({weatherData}) => {

  if(!weatherData){
    return <p>Loading...</p>
  }

  return (
    <div className="row g-3 justify-content-center">
      {/* humidity */}
      <div className="col-6 col-md-3">
        <div
          className="card border-0 shadow-sm p-3 text-center h-100"
          style={{
            borderRadius: "16px",
            background: "rgba(255, 255, 255, 0.6",
          }}
        >
          <span className="fs-3 mb-1">💧</span>
          <p
            className="text-muted small text-uppercase fw-bold mb-1"
            style={{ fontSize: "11px" }}
          >
            Humidity
          </p>
          <h5 className="fw-bold m-0 text-dark">{weatherData.main.humidity}%</h5>
        </div>
      </div>

      {/* wind speed */}
      <div className="col-6 col-md-3">
        <div
          className="card border-0 shadow-sm p-3 text-center h-100"
          style={{
            borderRadius: "16px",
            background: "rgba(255, 255, 255, 0.6",
          }}
        >
          <span className="fs-3 mb-1">💨</span>
          <p
            className="text-muted small text-uppercase fw-bold mb-1"
            style={{ fontSize: "11px" }}
          >
            Wind Speed
          </p>
          <h5 className="fw-bold m-0 text-dark">{weatherData.wind.speed} m/s</h5>
        </div>
      </div>

      {/* Visibility */}
      <div className="col-6 col-md-3">
        <div
          className="card border-0 shadow-sm p-3 text-center h-100"
          style={{
            borderRadius: "16px",
            background: "rgba(255, 255, 255, 0.6",
          }}
        >
          <span className="fs-3 mb-1">👁️</span>
          <p
            className="text-muted small text-uppercase fw-bold mb-1"
            style={{ fontSize: "11px" }}
          >
            Visibility
          </p>
          <h5 className="fw-bold m-0 text-dark">{weatherData.visibility/1000} km</h5>
        </div>
      </div>

      {/* Pressure */}
      <div className="col-6 col-md-3">
        <div
          className="card border-0 shadow-sm p-3 text-center h-100"
          style={{
            borderRadius: "16px",
            background: "rgba(255, 255, 255, 0.6",
          }}
        >
          <span className="fs-3 mb-1">⏲️</span>
          <p
            className="text-muted small text-uppercase fw-bold mb-1"
            style={{ fontSize: "11px" }}
          >
            Pressure
          </p>
          <h5 className="fw-bold m-0 text-dark">{weatherData.main.pressure} hPa</h5>
        </div>
      </div>
    </div>
  );
};

export default ExtraStats;
