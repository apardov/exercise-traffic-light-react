import React from "react";

export default class TrafficLight extends React.Component {
  constructor() {
    super();
    this.state = {
      clickedLight: null,
    };
  }
  render() {
    console.log(this.state);
    let redSelected = "";

    redSelected =
      this.state.clickedLight === "red"
        ? (redSelected = " selected")
        : (redSelected = " " + null);

    let yellowSelected = "";

    yellowSelected =
      this.state.clickedLight === "yellow"
        ? (yellowSelected = " selected")
        : (yellowSelected = " " + null);
    let greenSelected = "";

    greenSelected =
      this.state.clickedLight === "green"
        ? (greenSelected = " selected")
        : (greenSelected = " " + null);

    return (
      <div>
        <div id="trafficTop"></div>
        <div id="container">
          <div
            className={"red light" + redSelected}
            onClick={() => this.setState({ clickedLight: "red" })}
          ></div>
          <div
            className={"yellow light" + yellowSelected}
            onClick={() => this.setState({ clickedLight: "yellow" })}
          ></div>
          <div
            className={"green light" + greenSelected}
            onClick={() => this.setState({ clickedLight: "green" })}
          ></div>
        </div>
      </div>
    );
  }
}
