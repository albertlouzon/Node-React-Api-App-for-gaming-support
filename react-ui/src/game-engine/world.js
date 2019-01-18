import React, { Component } from "react";
import {playerSize} from './player'
import Player from './player'
import Block0 from './block0'
const speed = 1;
const initialWorldHeight = 400
const block0Size = {height:50,width:50,position:2500}
export default class World extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isGameStarted: false,
      bottom: 50,
      worldHeight: initialWorldHeight,
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
      console.log(nextState.bottom)
     if(nextState.bottom=== (-block0Size.position+initialWorldHeight+block0Size.height)){
       alert('c dar')
     }
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
    
        <Player bottom={this.state.bottom} />

        <Block0  height={block0Size.height}    width={block0Size.width}    bottom={block0Size.position + this.state.bottom} />

          {" "}
        </div>
    );
  }
}
