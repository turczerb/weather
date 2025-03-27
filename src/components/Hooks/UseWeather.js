// custom hook fro fetch
/* useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=09552ecbeb184118aed172805251702&q=${city}&aqi=no`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
        console.log("varj" + data);
      })
      .catch(() => {
        console.log("error");
      });
  }, [city]); // 1. betolteskor fut le a komponens ures dependencia tomb
*/

import { useState, useEffect } from "react";

const UseWeather = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("Kapott adat forec:", JSON.stringify(data, null, 2)); //null, osszes kulcs marad, 2:space
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("error", error);
      });
  }, [url]);

  return { data, loading };
};

export default UseWeather;
