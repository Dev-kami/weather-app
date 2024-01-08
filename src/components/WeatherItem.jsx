import { useState } from "react";
import CurrentlySelectedDay from "./CurrentlySelectedDay";

const WeatherItem = ({ weatherItem }) => {
  const { weather, main, dt_txt: date } = weatherItem;
  const description = weather[0].description;
  const icon = weather[0].icon;
  const [isActive, setIsActive] = useState(false);

  const todayLocal = new Date(date).toUTCString();

  const handleClick = () => {
    setIsActive((isActive) => !isActive);
  };

  return (
    <>
      <div className="weather-item" onClick={handleClick}>
        <div className="col1">
          <img
            className="small-icon"
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="weather icon"
          />
          <span className="day">{todayLocal}</span>
        </div>

        <div className="col2">
          <span>{description}</span>
          <p className="min_max">
            <span>
              {Math.floor(main.temp_max)} °C / {Math.floor(main.temp_min)} °C
            </span>
          </p>
        </div>
      </div>
      {isActive && <CurrentlySelectedDay weatherItem={weatherItem} />}
    </>
  );
};

export default WeatherItem;
