const MainCard = ({ searchQuery, weatherData }) => {

  if(!weatherData){
    return;
  }

  return (
    <div className="row justify-content-center mb-4">
      <div className="col-md-8">
        <div
          className="card border-0 shadow-sm p-4 text-dark position-relative overflow-hidden"
          style={{
            borderRadius: "24px",
            background: "rgba(255, 255, 255, 0.7)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0,5",
          }}
        >
          <div className="row align-items-center">
            {/* left side: info */}
            <div className="col-7">
              <h2
                className="fw-bold text-uppercase mb-2 tracking-wide "
                style={{ letterSpacing: "1px" }}
              >
                {weatherData.name}
              </h2>
      
              <h1 className="fw-bold m-0 display-2" style={{ lineHeight: "1" }}>
                {Math.trunc(weatherData.main.temp)}°C
              </h1>
              <p className="fs-5 fw-semibold text-secondary mt-2 mb-0">
                {weatherData.weather[0].description}
              </p>
            </div>

            {/* right side: big weather icon */}
            <div className="col-5 text-center">
              <span
                style={{
                  fontSize: "90px",
                  display: "block",
                  animation: "bounce 3s infinite",
                }}
              >
                <img src= {`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
