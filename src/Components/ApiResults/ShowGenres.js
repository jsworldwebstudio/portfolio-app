import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  aboutHeading: {
    paddingBottom: '20px',
    color: 'white'
  }
});

const ShowGenres = ({ classes, genres }) => {
  let movieGenres = '';
  if (genres && genres.length) {
    genres.map(movieGenre => {
      //console.log("Movie Genre Name = ", movieGenre.name);
      movieGenres += (movieGenre.name + '   ');
    });
  };
  return (
    <span>
      {movieGenres}
    </span>
  );
}

ShowGenres.propTypes = {
  classes: PropTypes.object.isRequired,
  genres: PropTypes.array.isRequired,
};

export default withStyles(styles)(ShowGenres);