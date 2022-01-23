import React from "react";
import "./Card.css";

const Card = ({
  weatherApi,
  handleChange,
  temp,
  tempDesc,
  icon,
  name,
  place,
  humidity,
}) => {
  return (
    <div className="card">
      <div className="cardTitle">
        <h1>We Know The Future!</h1>
        <p>
          We are the weather forecast system.
          <br />
          Our experts check the information with the most modern satellite
          equipment and powerful servers.And they will give you the most
          accurate results.
        </p>
        <input
          type="text"
          placeholder="Enter The City Name"
          onChange={handleChange}
          value={name}
        />
        <button className="searchButton" onClick={weatherApi}>
          Search
        </button>
      </div>
      {temp == false ? (
        <img
          src="https://i0.wp.com/codemyui.com/wp-content/uploads/2015/07/animated-weather-icons-in-css.gif?fit=880%2C440&ssl=1"
          alt="image"
          className="image"
        />
      ) : (
        <div className="cardRightSide">
          <h1 className="place">{place}</h1>
          <h1 className="temp">Temp: {temp} °C</h1>
          <p>{tempDesc}</p>
          <h1 className="humidity">Humidity: {humidity}%</h1>
          {temp && <img src={icon} className="icon" alt="icon" />}
        </div>
      )}
    </div>
  );
};

export default Card;
