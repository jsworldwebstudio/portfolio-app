import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

const styles = theme => ({
  root: {
    padding: 0,
  },
  slideRoot: {
    height: '600px',
    width: '100%',
    transition: 'background-image .3s ease-in-out'
  },
  slideMedia: {
    height: '150px',
    paddingTop: '56.25%', // 16:9
  }
});

const ImageSlide = ({ classes, url }) => {
  console.log('slide', classes);

  return (
    <Fragment>
      <Grid container spacing={24} className={classes.root}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Card>
            <CardMedia
              className={classes.slideRoot}
              image={url}
            />
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default withStyles(styles)(ImageSlide);