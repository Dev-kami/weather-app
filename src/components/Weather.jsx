const Weather = ({ weatherInfo }) => {
  const { name, weather, wind, main } = weatherInfo;

  if (weather === undefined) return;

  const description = weather[0].description;
  const icon = weather[0].icon;

  return (
    <div className="weather">
      <div className="row1">
        <div>
          <h2 className="weather-name">{name}</h2>
          <p className="weather-description">{description}</p>
        </div>
        <img
          className="large-icon"
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={name}
        />
      </div>
      <div className="row2">
        <div className="weather-deg">
          <h1>{Math.floor(main.temp)}°C</h1>
        </div>

        <div className="details-title">
          <div>
            <p>Details</p>
          </div>
          <div>
            <p>Feels Like</p>
            <p>{Math.ceil(main.feels_like)} °C</p>
          </div>
          <div>
            <p>Wind</p>
            <p>{wind.speed} m/s</p>
          </div>
          <div>
            <p>Humidity</p>
            <p>{main.humidity} %</p>
          </div>
          <div>
            <p>Pressure</p>
            <p>{main.pressure} hPa</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
