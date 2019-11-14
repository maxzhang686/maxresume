import React, { useState, useEffect } from "react";
import styled from "styled-components";
import WeeksDetail from "./WeeksDetail";
import CityDetail from "./CityDetail";

const proxyurl = "https://cors-anywhere.herokuapp.com/";

const Dashboard = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [cityId, setCityId] = useState("-33.8688,151.2093");

  const saveData = () => {
    getWeatherData(cityId).then(data => {
      setWeatherData(data);
      //console.log(data);
    });
  };
  const getWeatherData = cityId => {
    return fetch(
      `${proxyurl}https://api.darksky.net/forecast/c3ed55bedc8f402d7fcfd7078fb8f5a4/${cityId}?units=si`,
      {
        method: "GET"
      }
    )
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };

  const handleChange = name => event => {
    setCityId(event.target.value);
    console.log(cityId);
  };

  useEffect(() => saveData(), [cityId]);

  return (
    <Container>
      <Containerweather>
        <Left>
          {weatherData && weatherData.currently && (
            <div>
              <CityDetail
                data1={weatherData}
                temp={weatherData.currently.temperature}
                humidity={weatherData.currently.humidity}
                wind={weatherData.currently.windSpeed}
                condition={weatherData.currently.summary}
              />
            </div>
          )}
        </Left>

        <Right>
          <div>
            {" "}
            <strong>
              <h1>
                <strong>{weatherData.timezone}</strong>
              </h1>
            </strong>
          </div>
          <div>
            <select
              id="city"
              name="city"
              value={cityId}
              onChange={handleChange()}
            >
              <option value="-33.8688,151.2093">Sydney</option>
              <option value="35.6762,139.6503">Tokyo</option>
              <option value="48.8566,2.3522">Paris</option>
              <option value="39.9042,116.4074">Shanghai</option>
            </select>
          </div>
        </Right>
      </Containerweather>

      <Buttompart>
        {weatherData &&
          weatherData.daily &&
          weatherData.daily.data.map((day, i) => {
            if (i !== 0) {
              return (
                <WeeksDetail
                  key={i}
                  date={day.time}
                  icon={day.icon}
                  tempmin={day.temperatureLow}
                  tempmax={day.temperatureHigh}
                  sum={day.summary}
                ></WeeksDetail>
              );
            }
          })}
      </Buttompart>
    </Container>
  );
};

export default Dashboard;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: stretch;
  max-width: 1200px;
  max-height: 800px;
  min-width: 410px;
  margin: 0 auto;
`;

const Containerweather = styled.div`
  display: flex;
  flex: 6;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: #ffffffbf;
  margin: 100px 50px 0 50px;
  min-width: 767px;
`;

const Left = styled.div`
  flex: 1;
`;

const Right = styled.div`
  flex: 1;
`;

const Buttompart = styled.div`
  flex: 5;
  display: flex;
  flex-direction: row;
  background-color: #ffffffbf;
  margin: 1px 50px 50px 50px;
  justify-content: center;
  min-width: 767px;
`;
