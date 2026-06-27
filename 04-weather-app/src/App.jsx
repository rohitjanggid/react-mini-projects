import "./App.css";
import InputSection from "./components/InputSection";
import MainCard from "./components/MainCard";
import ExtraStats from "./components/ExtraStats";
import { useEffect, useState } from "react";

function App() {
  const [inputCity, setInputCity] = useState("");
  const [searchQuery, setSearchQuery] = useState("anupgarh");
  const [error, setError] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&units=metric&appid=a2ba8a06b267d9beb2dc93ca70c3664c`,
        );
        const data = await response.json();
        if(data.cod == 404){
          alert("Please, enter right city name!");
          return;
        }
        setWeatherData(data);
        
      } catch (error) {
        console.error("Data fetch karne mein error aayi:", error);
      }
    };

    fetchData();
  }, [searchQuery]);


  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center p-3"
      style={{
        background: "linear-gradient(135deg, #fef3c7 0%, #e0f2fe 100%)",
        fontFamily: "sans-serif",
      }}
    >
      <div className="container" style={{ maxWidth: "850px" }}>
        <InputSection
          inputCity={inputCity}
          setInputCity={setInputCity}
          setSearchQuery={setSearchQuery}
        />
        <MainCard searchQuery={searchQuery} weatherData={weatherData} />
        <ExtraStats weatherData={weatherData} />
      </div>
    </div>
  );
}

export default App;
