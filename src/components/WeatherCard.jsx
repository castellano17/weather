import React from "react";

const WeatherCard = ({ weather, temps }) => {
  return (
    <section>
      <h2>
        {weather?.name}, {weather?.sys.country}
      </h2>
      <div>
        <img
          src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`}
          alt="icon weather"
        />
      </div>
      <h3>{temps?.celsius} &deg;k</h3>
      <ul>
        <li>
          {weather?.weather[0].main}, {weather?.weather[0].description}
        </li>
        <li>
          <span>Wind Speed: </span>
          {weather?.wind.speed} m/seg
        </li>
        <li>
          <span>Clouds: </span>
          {weather?.clouds.all} %
        </li>
        <li>
          <span>Pressure: </span>
          {weather?.main.pressure} hPa
        </li>
      </ul>
      <button>°C/°F</button>
    </section>
  );
};

export default WeatherCard;
