import React, { Component } from 'react'
import blockImage from './../giletjaune2.png'
import blockImageForIphone from './../giletjaune3.png'

const screenWidth = window.screen.width
export default class Block0 extends Component {
    constructor(props) {
      super(props)
      this.height = this.props.height
      this.yPosition = this.props.yPosition
      this.xPosition = this.props.xPosition
      this.width=this.props.width
      this.isIphone=this.props.isIphone

      this.state = {
         url:`url(${ blockImage })`
      }
    }
  componentDidMount(){
    if(screenWidth<=500){
      this.setState({
        url:`url(${ blockImageForIphone })`
      })
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
            backgroundImage: this.state.url,
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
