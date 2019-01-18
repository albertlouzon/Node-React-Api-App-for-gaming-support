import React, { Component } from "react";
export const playerSize = { height: 40, width: 40 };

export default class Player extends Component {
  constructor(props) {
    super(props);
    this.bottom = this.props.bottom;
    this.state = {
      xPosition: 50
    };
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.bottom === this.props.bottom) {
    } else {
      console.log("ya du mouvement");
      this.player.scrollIntoView();
    }

    document.addEventListener("keydown", this.handleXposition);
  }

  handleXposition = e => {
    // if (this.state.xPosition === 100) return;

    switch (e.key) {
      case "q":
        this.setState({
          xPosition: this.state.xPosition + 1
        });
        break;
      case "d":
      case "q":
        this.setState({
          xPosition: this.state.xPosition - 1
        });
        break;
      default:
        break;
    }
  };

  render() {
    const styles = {
      ball: {
        left: `calc(100% - ${this.state.xPosition}%)`,
        height: playerSize.height,
        width: playerSize.width,
        borderRadius: "50%",
        backgroundColor: "yellow",
        position: "relative",
        bottom: this.props.bottom
      }
    };
    return (
      <div
        style={styles.ball}
        ref={el => {
          this.player = el;
        }}
      />
    );
  }
}
