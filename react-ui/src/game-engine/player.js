import React, { Component } from 'react'
export const playerSize = { height: 40, width: 40 };

export default class Player extends Component {
constructor(props) {
  super(props)
    this.bottom = this.props.bottom
  this.state = {
     
  }
}

componentWillUpdate(nextProps, nextState) {
    if (
        nextProps.bottom ===
      this.props.bottom
    ) {

    } else {
      console.log('ya du mouvement')
      this.player.scrollIntoView()
    }
  }

    render() {
     
        const styles = {
            ball: {
              left: 400,
              height: playerSize.height,
              width: playerSize.width,
              borderRadius: "50%",
              backgroundColor: "yellow",
              position: "relative",
              bottom: this.props.bottom
            },
      
          };
    return (
      <div>
        
        <div
          style={styles.ball}
          ref={el => {
            this.player = el;
          }}
        ></div>
      </div>
    )
  }
}
