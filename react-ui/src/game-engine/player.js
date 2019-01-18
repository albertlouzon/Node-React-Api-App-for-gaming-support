import React, { Component } from "react";
export const playerSize = { height: 40, width: 40 };

export default class Player extends Component {
  constructor(props) {
    super(props);
    this.yPosition = this.props.yPosition;
    this.xPosition=this.props.xPosition
    this.state = {
    };
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.yPosition === this.props.yPosition) {
    } else {
      this.player.scrollIntoView();
    }

  }

 
  render() {
    const styles = {
      ball: {
        left: `calc(100% - ${this.props.xPosition}%)`,
        height: playerSize.height,
        width: playerSize.width,
        borderRadius: "50%",
        backgroundColor: "yellow",
        position: "relative",
        bottom: this.props.yPosition
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
