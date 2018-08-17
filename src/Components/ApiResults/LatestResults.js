import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  aboutHeading: {
    paddingBottom: '20px',
    color: 'white'
  },
  gridRoot: {
    width: '260px'
  },
  cardMedia: {
    height: '300px'
  },
  cardContent: {
    height: '130px'
  },
  cardTitle: {
    height: '72px'
  },
  cardGutterBottom: {
    marginBottom: '0.75em'
  },
  buttonPlacement: {
    marginRight: 'auto',
    marginLeft: 'auto'
  }
});

const LatestResults = ({ classes, latestMovies }) => {
  return (
    <Fragment>
      <Grid
        container
        spacing={24}
        className={classes.demo}
        alignItems="center"
        direction="row"
        justify="center"
      >
        {latestMovies.map((movie, index) => (
          (index < 5) ? (
            <Grid key={movie.id} className={classes.gridRoot} item>
              <Card>
                <CardMedia
                  className={classes.cardMedia}
                  image={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="title" component="h2"
                    classes={{ title: classes.cardTitle, gutterBottom: classes.cardGutterBottom }}
                  >
                    {movie.title}
                  </Typography>
                  <Typography variant="subheading">Release Date:</Typography>
                  <Typography variant="subheading">{movie.release_date}</Typography>
                </CardContent>
                <CardActions>
                  <Button variant="contained" color="primary"
                    classes={{ containedPrimary: classes.buttonPlacement }}
                    component={Link} to={'/movie/' + movie.id}
                  >
                    View Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ) : null
        ))}
      </Grid>
    </Fragment>
  );
}

LatestResults.propTypes = {
  classes: PropTypes.object.isRequired,
  latestMovies: PropTypes.array.isRequired,
};

export default withStyles(styles)(LatestResults);