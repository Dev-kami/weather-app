import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Weather from "./components/Weather";
import DailyWeather from "./components/DailyWeather";
import Loading from "./components/Loading";
import Error from "./components/Error";

const API_KEY = "01657fdec5a430dcf327b25d153dc061";

function App() {
  const [cityName, setCityName] = useState("London");
  const [isLoading, setIsLoading] = useState(false);
  const [weatherInfo, setWeatherInfo] = useState([]);
  const [error, setError] = useState("");

  useEffect(
    function () {
      const controller = new AbortController();
      async function fetchWeather() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`,
            { signal: controller.signal }
          );
          if (!res.ok) throw new Error("Something went wrong");

          const data = await res.json();
          if (data === "") throw new Error("Not found");

          setWeatherInfo(data);
        } catch (err) {
          if (err.name !== "AbortError") {
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }

      fetchWeather();

      return () => controller.abort();
    },
    [cityName]
  );

  return (
    <div>
      <Header cityName={cityName} setCityName={setCityName} />
      {isLoading && !error && <Loading />}
      {!isLoading && error && <Error message={error && "No result"} />}
      {!isLoading && !error && (
        <Main>
          <Weather weatherInfo={weatherInfo} />
          <DailyWeather API_KEY={API_KEY} cityName={cityName} />
        </Main>
      )}
    </div>
  );
}

export default App;
