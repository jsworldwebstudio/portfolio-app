import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const styles = theme => ({
  arrowleft1: {
    color: 'white',
    cursor: 'pointer',
    fontSize: '2rem',
    position: 'fixed',
    top: '50%',
    left: '1rem'
  },
  arrowright1: {
    color: 'white',
    cursor: 'pointer',
    fontSize: '2rem',
    position: 'fixed',
    top: '50%',
    right: '1rem'
  }
});


const arrowleft = {
    color: 'white',
    cursor: 'pointer',
    fontSize: '2rem',
    position: 'fixed',
    top: '50%',
    left: '1rem'
  }

const arrowright = {
    color: 'white',
    cursor: 'pointer',
    fontSize: '2rem',
    position: 'fixed',
    top: '50%',
    right: '1rem'
  };

const Arrow = ({ classes, direction, clickFunction }) => {
  console.log('arrow', classes);

  return (
    <Fragment>
      <div
        style={direction === 'left' ? arrowleft : arrowright}
        onClick={clickFunction}
      >
        {direction === 'left' ? <NavigateBeforeIcon /> : <NavigateNextIcon />}
      </div>
    </Fragment>
  );
}

export default withStyles(styles)(Arrow);