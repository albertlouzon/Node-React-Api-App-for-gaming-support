import React, { Component } from "react";

const topDelta = 400;
const screeHeight = window.screen.height;
const speed = 1;
const playerSize = { height: 40, width: 40 };
export default class World extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isGameStarted: false,
      bottom: -50,
      deltaTop: 50,
      worldHeight: 300,
      blockTop: 300
    };
    this.w = true;
  }

  componentDidMount() {
    this.ball.scrollIntoView();
    this.interval = setInterval(() => {
      this.setState({
        bottom: this.state.bottom - speed,
        worldHeight: this.state.worldHeight + speed
      });
      this.ball.scrollIntoView();
      if (
        this.state.bottom + this.state.deltaTop - playerSize.height ===
        this.state.blockTop
      ) {
        alert("ok");
      }
    }, 1);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const styles = {
      bigBox: {
        height: this.state.worldHeight,
        width: "100vw",
        backgroundColor: "red",
        position: "absolute"
      },

      ball: {
        left: 400,
        height: playerSize.height,
        width: playerSize.width,
        borderRadius: "50%",
        backgroundColor: "yellow",
        position: "relative",
        bottom: this.state.bottom
      },
      block: {
        position: "relative",
        height: this.state.deltaTop,
        width: 50,
        backgroundColor: "green",
        left: 400,
        bottom: this.state.worldHeight - 300
      }
    };
    return (
      <div style={styles.bigBox} id="main-box">
        <div style={styles.block} />
        <div
          style={styles.ball}
          ref={el => {
            this.ball = el;
          }}
        >
          {" "}
        </div>
      </div>
    );
  }
}
