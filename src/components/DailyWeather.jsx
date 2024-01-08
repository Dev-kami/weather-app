import { useEffect, useState } from "react";
import WeatherItem from "./WeatherItem";
import Loading from "./Loading";
import Error from "./Error";

const DailyWeather = ({ API_KEY, cityName }) => {
  const [weeklyData, setWeeklyData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    function () {
      async function fetchWeeklyData() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=metric&cnt=7`
          );

          if (!res.ok) throw new Error("Something went wrong");

          const data = await res.json();

          setWeeklyData(data);
          setError("");
        } catch (err) {
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }

      fetchWeeklyData();
    },
    [cityName, API_KEY]
  );

  return (
    <div className="daily-weather">
      {isLoading && !error && <Loading />}
      {!isLoading && error && <Error message="No result" />}

      {!isLoading && !error && (
        <>
          <h2 className="daily-weather-title">Hourly (3 hours)</h2>
          <div className="accordion">
            {weeklyData.list?.map((weatherItem) => (
              <WeatherItem key={weatherItem.dt} weatherItem={weatherItem} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default DailyWeather;
