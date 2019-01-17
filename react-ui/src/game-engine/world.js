import React, { Component } from 'react'

const worldHeight = 20000
const topDelta = 400
const screeHeight= window.screen.height
const speed = 1
const playerSize = {height:40,width:40}

export default class World extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      isGameStarted:false,
      top:worldHeight,
      blockTop:19500,
      deltaTop:50,
    }
    this.w = true
  }
  
  componentDidMount() {
    this.ballMagnetic.scrollIntoView()
    this.interval = setInterval(() => {this.setState({top:this.state.top -speed});
    this.ballMagnetic.scrollIntoView()  
    if(this.state.top-this.state.deltaTop-playerSize.height === this.state.blockTop){
      alert('ok')
    }
  }, 1);


  }
  
  componentWillUnmount() {
    clearInterval(this.interval);
  }


  
  


  render() {

    const   styles = {
      bigBox :{
          height : worldHeight,
          width : '50vw',
          backgroundColor:'red'
      },
    
      ballMagnetic:{
        position:'absolute',
        height:screeHeight/2,
        top:this.state.top-screeHeight/2

      },
      ball:{
        left:400,
        height:playerSize.height,
        width:playerSize.width,
        borderRadius:'50%',
        backgroundColor:'yellow',
        position:'absolute',
        bottom:0
      },
      block:{
        position:'absolute',
        height:this.state.deltaTop,
        width:50,
        backgroundColor:'green',  
        left:400,
        top:this.state.blockTop
      }
    }
    return (
      <div style={styles.bigBox} >
      <div style={styles.block}></div>
        <div style={styles.ballMagnetic} ref={(el) => { this.ballMagnetic = el; }}>
        <div style={styles.ball} ref={(el) => { this.ball = el; }} > </div>
        </div>
      </div>
    )


  
  }
}
