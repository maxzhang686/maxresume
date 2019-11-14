import React from "react";
import styled from "styled-components";
import moment from "moment";

class WeeksDetail extends React.Component {
  constructor(props) {
    super();
    //console.log("props:" + props.date);
  }
  render() {
    return (
      <Containerweather>
        <div>
          <p>
            <strong>{moment(this.props.date * 1000).format("DD MMM")}</strong>
          </p>
          <p>
            <strong>{moment(this.props.date * 1000).format("ddd")}</strong>
          </p>
        </div>
        <div>
          <img src={`./img/${this.props.icon}.png`} alt="" />
        </div>
        <Temp>
          <p>
            {this.props.tempmin.toFixed(1)}- {this.props.tempmax.toFixed(1)}°C{" "}
          </p>
        </Temp>
        <div>
          <p>{this.props.icon}</p>
        </div>
      </Containerweather>
    );
  }
}

export default WeeksDetail;

const Containerweather = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: auto;
`;

const Temp = styled.div`
  margin-top: 7px;
`;
