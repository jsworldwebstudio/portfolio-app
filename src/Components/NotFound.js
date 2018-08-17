import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';

const NotFound = () => {
  return (
    <Fragment>
      <Typography variant="headline" color="textSecondary">
        Page Not Found. Please select a menu choice from the left or above.
      </Typography>
    </Fragment>
  );
}

export default NotFound;