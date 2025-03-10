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
        setData(data);
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
};

export default UseWeather;
