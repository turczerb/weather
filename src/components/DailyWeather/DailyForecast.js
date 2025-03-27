import { useState, useEffect } from "react";
import DataContainer from "../Container/DataContainer";
import UseWeather from "../Hooks/UseWeather";

const DailyForecast = ({ city }) => {
  if (!city) return <p>Adj meg egy várost!</p>; // Csak akkor fut le a fetch, ha van city

  const { data, loading } = UseWeather(
    `https://api.weatherapi.com/v1/current.json?key=09552ecbeb184118aed172805251702&q=${city}&aqi=no`
  );

  console.log("tartlom" + city);
  console.log("data" + data);

  return (
    <div>
      napi elorejelzes
      <div>
        <div>
          {data ? (
            <DataContainer cityname={data.location.name} weatherData={data} />
          ) : (
            <p>Adatok betöltése...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DailyForecast;
