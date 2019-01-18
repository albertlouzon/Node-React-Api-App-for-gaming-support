import React, { Component } from "react";
import {playerSize} from './player'
import Player from './player'
import Block0 from './block0'
const speed = 1;
const initialWorldHeight = 400
const block0Size = {height:50,width:50,yPosition:1800,xPosition: 400}
export default class World extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isGameStarted: false,
      yPosition: 50,
      worldHeight: initialWorldHeight,
      xPosition:50
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ yPosition: this.state.yPosition - speed, worldHeight: this.state.worldHeight + speed });
    }, 1);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  componentWillUpdate(nextProps, nextState) {
    const deltaTop = initialWorldHeight+block0Size.height
    const Yblock0 = -block0Size.yPosition + deltaTop

    const minBlock0 = block0Size.xPosition - 375
    const maxBlock0 = block0Size.xPosition - 335

    if (
      nextState.yPosition ===
      this.state.yPosition
    ) {

    } else {
      console.log('yPlayer: ', nextState.yPosition , '  and yblock : ',Yblock0 )
     if(nextState.yPosition=== Yblock0){
       alert('Y colision detected')
     }
    }


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
    document.addEventListener("keydown", this.handleXposition);

    const styles = {
      bigBox: {
        height: this.state.worldHeight,
        width: "100vw",
        backgroundColor: "lightblue",
        position: 'absolute',
      },


    };
    return (
      <div style={styles.bigBox}>
    
        <Player yPosition={this.state.yPosition} xPosition={this.state.xPosition}/>

        <Block0  height={block0Size.height} xPosition={block0Size.xPosition}    width={block0Size.width}    yPosition={block0Size.yPosition + this.state.yPosition} />

          {" "}
        </div>  
    );
  }
}
