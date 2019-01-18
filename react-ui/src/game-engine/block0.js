import React, { Component } from 'react'

export default class Block0 extends Component {
    constructor(props) {
      super(props)
      this.height = this.props.height
      this.bottom = this.props.bottom,
         this.width=this.props.width,

      this.state = {
         
      }
    }
    
  render() {
      
    const styles = {
        ball: {
            height:this.props.height,
            width:this.props.width,
            bottom:this.props.bottom,
            backgroundColor:'blue',
            position:"relative"
        }
  
      };
    return (
      <div style={styles.ball}>
        
      </div>
    )
  }
}
