const CurrentlySelectedDay = ({ weatherItem }) => {
  const { wind, main, clouds } = weatherItem;
  const seaLevel = main.sea_level;
  const humidity = main.humidity;
  const windspeed = wind.speed;
  const feelsLike = main.feels_like;
  const pressure = main.pressure;

  return (
    <div className="toggle-details">
      <div className="col1">
        <div>
          <p>Pressure:</p>
          <p>{pressure}</p>
        </div>

        <div>
          <p>Clouds:</p>
          <p>{clouds.all}%</p>
        </div>

        <div>
          <p>Sea level:</p>
          <p>{seaLevel}m</p>
        </div>
      </div>
      <div className="col2">
        <div>
          <p>Humidity:</p>
          <p>{humidity}</p>
        </div>

        <div>
          <p>Wind speed:</p>
          <p>{windspeed} m/s</p>
        </div>

        <div>
          <p>Feels like:</p>
          <p>{feelsLike}°C</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentlySelectedDay;
