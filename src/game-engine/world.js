import React, { Component } from "react";
import Player from './player'
import Block0 from './block0'
import { generateNextLevel } from "./randomization/blocks-generator";
import ProgressBar from './ui-kits/progressBar'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import Song from './../sonGilet.mp3'
import RoadImage from './../road.png'
import ReactAudioPlayer from 'react-audio-player'
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const speed = 2;
const initialWorldHeight = 500
const playerSize = { height: 110, width: 60 };
const heightFactor = 4000
const initialHP = 400
export default class World extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isGameOver: false,
      openTuto:false,
      yPosition: 50,
      worldHeight: initialWorldHeight,
      xPosition: 300,
      hp: initialHP,
      points: 0,
      score: 0


    };
    this.blockObj = {}
    this.blockRulesObj = {}
    this.heightControl = initialWorldHeight
    this.url = Song;
    this.audio = new Audio(Song)
  }

  setColisionRules() {
    for (var i = 0; i < Object.keys(this.blockObj).length; i++) {
      const Yblock = -this.blockObj[i].yPosition + initialWorldHeight
      const XblockMin = this.blockObj[i].xPosition - playerSize.width
      const XblockMax = this.blockObj[i].xPosition + this.blockObj[i].width
      this.blockRulesObj[i] = { Y: Yblock, XMin: XblockMin, Xmax: XblockMax }
    }
    // console.log('new RuleOBj: ',   this.blockRulesObj)
  }
  // handleClickTuto = () => {
  //   this.setState({ open: true });
  // };

 
  handleCloseTuto = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ openTuto: false });
  };


  handleClickOpen = () => {
    this.setState({ isGameOver: true });
  };
handleClose = ()=>{
  this.setState({isGameOver:false})
  this.interval = setInterval(() => {
    this.setState({ yPosition: this.state.yPosition - speed, worldHeight: this.state.worldHeight + speed, points: this.state.points + 1 });
  }, 1);
}
  componentDidMount() {
    this.setState({ openTuto: true });

    this.setColisionRules()
    this.interval = setInterval(() => {
      this.setState({ yPosition: this.state.yPosition - speed, worldHeight: this.state.worldHeight + speed, points: this.state.points + 1 });
    }, 1);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  componentWillUpdate(nextProps, nextState) {

    if (nextState.hp <= 0) {
      nextState.score = this.state.points
      nextState.isGameOver = true
      this.stopGame()
      this.state.hp = initialHP
      nextState.points = 0
    }

    if (this.state.worldHeight === this.heightControl) {
      // console.log('generating new blocks. World height' , this.state.worldHeight, ' = Hightcontrol ',this.heightControl)
      this.heightControl = this.state.worldHeight + heightFactor
      this.blockObj = generateNextLevel(12, this.state.worldHeight, this.heightControl)
      this.setColisionRules()

    }

    for (let i = 0; i < Object.keys(this.blockObj).length; i++) {
      if (nextState.yPosition <= this.blockRulesObj[i].Y) {
        if (nextState.yPosition < this.blockRulesObj[i].Y - this.blockObj[i].height) {
        }
        else {
          // console.log('Y COLISION detected with block number ',this.blockObj[i].key,'playerY: ', nextState.yPosition,'blockY: ',this.blockRulesObj[i].Y )
          if (nextState.xPosition >= this.blockRulesObj[i].XMin && nextState.xPosition <= this.blockRulesObj[i].Xmax) {
            // console.log('colision detected with block number ',this.blockObj[i].key,'Xposition: ', nextState.xPosition ,
            //  ' Block starting pos: ',this.blockObj[i].xPosition  ,' Xmin:',this.blockRulesObj[i].XMin,
            // ' xMax:', this.blockRulesObj[i].XMax )
            nextState.hp = this.state.hp - 1

            return;
          }
        }




      }



    }
  }

  handleXposition = e => {
    if (this.state.xPosition > 100) {

    }



    switch (e.key) {
      case "ArrowRight":
        this.setState({
          xPosition: this.state.xPosition + 22
        });
        break;
      case "ArrowLeft":
        this.setState({
          xPosition: this.state.xPosition - 22
        });
        break;
      default:
        break;
    }
  };

  stopGame() {
    clearInterval(this.interval);


  }

  render() {
    const styles = {
      bigBox: {
        height: this.state.worldHeight,
        width: "100vw",
        backgroundColor: "lightblue",
        position: 'absolute',
       
      },



    };
    return (
      <div style={styles.bigBox} tabIndex="0" onKeyDown={e => this.handleXposition(e)}>

        <Player yPosition={this.state.yPosition} xPosition={this.state.xPosition} playerSize={playerSize} hp={this.state.hp} />

        {Object.keys(this.blockObj).map((obj, i) => {

          return (
            <Block0 key={i} height={this.blockObj[obj].height} width={this.blockObj[obj].width} yPosition={this.blockObj[obj].yPosition + this.state.yPosition} xPosition={this.blockObj[obj].xPosition}>
              <h3>{this.blockObj[obj].key}</h3>
            </Block0>


          )
        })}


        {/* <button onClick={() => { this.stopGame() }} style={{ position: 'fixed', top: 0, left: 0 }}>STOP</button> */}
        <h3 style={{ position: 'fixed', top: 10, left: 0 }}>Points {this.state.points}</h3>
        <div style={{ position: 'fixed', top: 50, left: 0 }}>
          <h3>HP BAR</h3>
          <ProgressBar hp={this.state.hp} hpMax={initialHP} />
        </div>
        <div style={{ position: 'fixed', bottom: 25, left: 0 }}>
          {<div style={{ position: 'fixed', bottom: 25, left: 0 }}>

            <ReactAudioPlayer
              src={this.url}
              autoPlay
              controls
            />
          </div>}

        </div>


        <Dialog
          open={this.state.isGameOver}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
           <span style={{fontSize:28,color:'green'}}>{this.state.score} POINTS ! </span> Pas de quoi faire le plein....
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
             <span style={{fontSize:16}}>Les condés t'ont trop caillassé. Va payer ton essence mon prolo !!</span> 
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Rejouer
            </Button>

          </DialogActions>
        </Dialog>



        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          open={this.state.openTuto}
          autoHideDuration={6000}
          onClose={this.handleCloseTuto}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id"           style={{color:'yellow'}}
          >
          Move left and right key arrows to move your yellow vest !<br/>
          Click on the screen if it doesnt work
          </span>}
          action={[
           
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={this.handleCloseTuto}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </div>
    );
  }
}

