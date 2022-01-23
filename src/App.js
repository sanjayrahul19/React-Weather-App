import React, { useState } from "react";
import Card from "./components/Card";
import Axios from "axios";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [temps, setTemps] = useState("");
  const [tempDesc, setTempDesc] = useState("");
  const [icons, setIcons] = useState("");
  const [name, setName] = useState("");
  const [humidity, setHumidity] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=96a8f2248272d90300c8083495692c1f&units=metric`;

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const weatherApi = async () => {
    try {
      const response = await Axios.get(url);
      console.log(response);
      const temp = response.data.main.temp;
      const tempDes = response.data.weather[0].description;
      const icon = response.data.weather[0].icon;
      const place = response.data.name;
      const humid = response.data.main.humidity;
      const imageUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
      setTemps(temp);
      setTempDesc(tempDes);
      setIcons(imageUrl);
      setName(place);
      setHumidity(humid);
      setInput("");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <h1 className="heading">Weather App</h1>
      <Card
        weatherApi={weatherApi}
        handleChange={handleChange}
        name={input}
        temp={temps}
        tempDesc={tempDesc}
        icon={icons}
        place={name}
        humidity={humidity}
      />
    </div>
  );
};

export default App;
