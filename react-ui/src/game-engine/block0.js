import React, { Component } from 'react'

export default class Block0 extends Component {
    constructor(props) {
      super(props)
      this.height = this.props.height
      this.top = this.props.top,
         this.width=this.props.width,

      this.state = {
         
      }
    }
    
  render() {
      
    const styles = {
        ball: {
            height:this.props.height,
            width:this.props.width,
            top:this.props.top,
            backgroundColor:'blue',
            position:"fixed"
        }
  
      };
    return (
      <div style={styles.ball}>
        
      </div>
    )
  }
}
