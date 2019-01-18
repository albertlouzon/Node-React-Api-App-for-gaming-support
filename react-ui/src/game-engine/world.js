import React, { Component } from "react";

const speed = 1;
const playerSize = { height: 40, width: 40 };

export default class World extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isGameStarted: false,
      bottom: 50,
      worldHeight: 400,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ bottom: this.state.bottom - speed, worldHeight: this.state.worldHeight + speed });
    }, 1);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentWillUpdate(nextProps, nextState) {
    if (
      nextState.bottom ===
      this.state.bottom
    ) {


    } else {
      console.log('ya du mouvement')
      this.ball.scrollIntoView();
    }
  }

  render() {
    const styles = {
      bigBox: {
        height: this.state.worldHeight,
        width: "100vw",
        backgroundColor: "red",
        position: 'absolute',
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

    };
    return (
      <div style={styles.bigBox}>
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
