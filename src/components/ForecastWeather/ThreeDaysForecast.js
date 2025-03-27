import React, { useState, useEffect } from "react";
import DataContainer from "../Container/DataContainer";
import UseWeather from "../Hooks/UseWeather";

const ThreeDayysForecast = ({ city }) => {
  if (!city) return <p>Adj meg egy várost!</p>; // Csak akkor fut le a fetch, ha van city
  const { data, loading } = UseWeather(
    `https://api.weatherapi.com/v1/forecast.json?key=09552ecbeb184118aed172805251702&q=${city}&days=3&aqi=no`
  );
  console.log("tartlom2" + city);
  console.log("data2" + data);
  console.log("Kapott adat:", JSON.stringify(data, null, 2));
  console.log("3napos:", data ? data.forecast.forecastday[0].hour[12] : data);
  return (
    <div>
      <div>3 napos elorejelyes</div>
      {data ? (
        <div>
          <DataContainer
            cityname={data.location.name}
            weatherData={data.forecast.forecastday[0].hour[12]}
          />
          <DataContainer
            cityname={data.location.name}
            weatherData={data.forecast.forecastday[1].hour[12]}
          />
          <DataContainer
            cityname={data.location.name}
            weatherData={data.forecast.forecastday[2].hour[12]}
          />
        </div>
      ) : (
        <p>Adatok betöltése...</p>
      )}
    </div>
  );
};

export default ThreeDayysForecast;
