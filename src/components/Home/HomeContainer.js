//parent component. contains the data so its accesable for all child.
import React, { useState } from "react";
import DailyForecast from "../DailyWeather/DailyForecast";
import SearchBar from "../Search/SearchBar";
import ThreeDaysForecast from "../ForecastWeather/ThreeDaysForecast";

const HomeContainer = () => {
  const [inputText, setInputText] = useState(""); // A keresett város neve

  const handleSearch = () => {
    //keresesi adatok kuldese, api call itt lehet
    console.log(inputText);
  };

  // Állapot frissítése a SearchBar-ból
  const handleSearchChange = (text) => {
    setInputText(text);
  };

  return (
    <div>
      l0
      <SearchBar
        inputText={inputText}
        onSubmit={handleSearch}
        onInputChange={handleSearchChange}
      />
      <DailyForecast city={inputText} />
      <ThreeDaysForecast city={inputText} />
    </div>
  );
};

export default HomeContainer;
