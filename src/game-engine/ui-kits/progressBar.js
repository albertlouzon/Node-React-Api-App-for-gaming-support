import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = {
  root: {
    width:250,
    heigth:60,
  },
};

//Calcul de la diff a enlever par shot : diff = damage/N * 100 avec damage le nbe de pt de vie enlevé par shot, et N le nombre total de hp
let shotDamage = 1

class ProgressBar extends React.Component {
 constructor(props) {
   super(props)
    this.hp = this.props.hp
    this.hpMax = this.props.hpMax
    this.shouldUpdate = this.props.shouldUpdate

 }
 
  state = {
    completed: 100,
  };
200
  componentDidMount() {  
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
componentWillUpdate(nextProps,nextState){
    if(nextProps.hp<=0){
        nextState.completed = 100
    }
    else if(this.props.hp === nextProps.hp){

    }else{
        const { completed } = this.state;
        let diff = shotDamage/this.props.hpMax*100
        this.state.completed = this.state.completed -diff
   
    }
}
 

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <LinearProgress color="secondary" variant="determinate" value={this.state.completed} />
      </div>
    );
  }
}

ProgressBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProgressBar);