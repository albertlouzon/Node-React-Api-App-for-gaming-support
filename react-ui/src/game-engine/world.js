import React, { Component } from "react";
import {playerSize} from './player'
import Player from './player'
import Block0 from './block0'
const speed = 1;

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


    };
    return (
      <div style={styles.bigBox}>
      <Block0  height={50}    width={50}    bottom={0} />
        <Player bottom={this.state.bottom}   />
          {" "}
        </div>
    );
  }
}
