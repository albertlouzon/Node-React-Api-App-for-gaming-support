import React, { Component } from 'react'
import blockImage from './../oil1.png'
import blockImageForIphone from './../giletjaune3.png'

const screenWidth = window.screen.width
export default class Oil extends Component {
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
        url:`url(${ blockImage })`
      })
    }
  }
  render() {
    const styles = {
        oil: {
            height:this.props.height,
            width: this.props.width,
            bottom:this.props.yPosition,
            position:"fixed",
            backgroundImage: this.state.url,
            backgroundRepeat  : 'no-repeat',
            backgroundPosition: 'center',
            BackgroundSize:'cover',
            left:this.props.xPosition
        },
  
  
      };
    return (
      <div style={styles.oil}>
    
      </div>
    )
  }
}
