import React, { Component } from "react";
import { messages } from "./data";

import Binkie from "./Binkie";
import HeaderCont from "./HeaderCont";

const colors = [
  "#5F6460",
  "#AC836B",
  "#C5E199",
  "#5DC99F",
  "#3B6D81",
  "#6F677F",
  "#812A3A"
];

const randomInt = max =>
  Math.floor(Math.random() * (Math.floor(max) - Math.random(max)));

class Header extends Component {
  state = {
    message: messages[randomInt(messages.length)],
    shadow: "0 0 0 #fff"
  };

  componentDidMount() {
    setTimeout(() => this.reRainbow(), 10);
  }

  reRainbow = () => {
    const shadow = `0 0 0 ${colors[randomInt(colors.length)]}, ${randomInt(
      1
    )}vw ${randomInt(4)}vw ${randomInt(4)}vw ${
      colors[randomInt(colors.length)]
    },${randomInt(2)}vw ${randomInt(8)}vw ${randomInt(8)}vw ${
      colors[randomInt(colors.length)]
    },${randomInt(3)}vw ${randomInt(12)}vw ${randomInt(12)}vw ${
      colors[randomInt(colors.length)]
    },${randomInt(4)}vw ${randomInt(16)}vw ${randomInt(16)}vw ${
      colors[randomInt(colors.length)]
    }`;

    this.setState({ shadow });
  };

  render() {
    const { message, shadow } = this.state;
    return (
      <HeaderCont>
        <span>
          <h2>{message}</h2>
          <Binkie
            style={{ textShadow: shadow }}
            onClick={this.reRainbow}
            onMouseOver={this.reRainbow}
          >
            binkie
          </Binkie>
        </span>
      </HeaderCont>
    );
  }
}

export default Header;
