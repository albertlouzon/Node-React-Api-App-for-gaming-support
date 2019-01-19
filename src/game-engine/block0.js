import React, { Component } from 'react'
import blockImage from './../giletjaune2.png'

export default class Block0 extends Component {
    constructor(props) {
      super(props)
      this.height = this.props.height
      this.yPosition = this.props.yPosition
      this.xPosition = this.props.xPosition
        this.width=this.props.width

      this.state = {
         
      }
    }
    
  render() {
    const styles = {
        ball: {
            height:this.props.height,
            width: this.props.width,
            bottom:this.props.yPosition,
            backgroundColor:'yellow',
            position:"fixed",
            backgroundImage: `url(${ blockImage })`,
            backgroundRepeat  : 'repeat',
            backgroundPosition: 'left',
            BackgroundSize:'contain',
            left:this.props.xPosition
        },
  
  
      };
    return (
      <div style={styles.ball}>
    
      </div>
    )
  }
}
