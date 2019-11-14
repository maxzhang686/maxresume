import React from "react";
import styled from "styled-components";

class CityDetail extends React.Component {
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
    return (
      <WeatherLeftPart>
        <TempContainer>
          <strong>{this.props.temp} °C</strong>
        </TempContainer>

        <WeatherContainer>
          <h3>{this.props.condition}</h3>
        </WeatherContainer>

        <OtherContainer>
          <div>
            <h5>HUMIDITY</h5>
            <h5>{this.props.humidity}%</h5>
          </div>
          <div>
            <Line></Line>
          </div>
          <div>
            <h5>WIND</h5>
            <h5>{this.props.wind}K/m</h5>
          </div>
        </OtherContainer>
      </WeatherLeftPart>
    );
  }
}

export default CityDetail;

const WeatherLeftPart = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  justify-content: center;
  align-items: center;
  color: black;
`;

const TempContainer = styled.div`
  justify-content: center;
  font-size: 50px;
  display: flex;

  text-align: center;
`;
const OtherContainer = styled.div`
  display: flex;

  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  width: 60%;
`;

const WeatherContainer = styled.div`
  margin: 30px auto;
  display: flex;
`;

const Line = styled.div`
  float: left;
  border-left: solid 2px;
  height: 90px;
`;
