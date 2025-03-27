const DataContainer = ({ weatherData }) => {
  if (!weatherData) {
    return <p>Adatok nem elérhetőek.</p>;
  }

  const { location, current } = weatherData;
  return (
    <div>
      <div>
        <div className="weather-details">
          {current?.temp_c && <p>Hőmérséklet: {current.temp_c}°C</p>}
          {current?.condition?.text && (
            <p>Időjárás: {current.condition.text}</p>
          )}
          {current?.wind_kph && <p>Szélsebesség: {current.wind_kph} km/h</p>}
          {current?.humidity && <p>Páratartalom: {current.humidity}%</p>}
        </div>
      </div>
    </div>
  );
};

export default DataContainer;
