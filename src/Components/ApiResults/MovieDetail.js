import React, { Component, Fragment } from 'react';
import axios from 'axios-jsonp-pro';
import axiosReg from 'axios';
import fetchJsonp from 'fetch-jsonp';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import GridListTile from '@material-ui/core/GridListTile';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import ShowGenres from './ShowGenres';

const styles = theme => ({
  aboutHeading: {
    paddingBottom: '20px',
    color: 'white'
  },
  aboutAppBar: {
    position: 'static',
    content: '',
    bottom: 0,
    left: 0,
    display: 'block',
    width: '35px',
    height: '2px',
    background: '#ed393a',
    marginBottom: '30px'
  },
  aboutBottom: {
    marginBottom: '1.5em'
  },
  aboutIcon: {
    color: '#ed393a'
  },
  aboutListText: {
    color: '#c1c1c1'
  },
  aboutLisItemGuttersFirst: {
    paddingTop: '0px',
    paddingLeft: '0px'
  },
  aboutLisItemGutters: {
    paddingLeft: '0px'
  },
  aboutListPadding: {
    paddingTop: '0px'
  },
  aboutCard: {
    //maxWidth: 652,
  },
  aboutMedia: {
    height: '670px',
    width: '548px'
    //paddingTop: '56.25%', // 16:9
  }
});

const showGenres = (genres) => {
  <span>genres[0].name</span>
};
/*
let showGenres1 = (genres) => {
  return 
    (
      <span>
        {genres.map(genre => (
          <span key={genre.id}>{genre.name}  </span>
        ))}
      </span>
    );
};
*/
class MovieDetail extends Component {
  state = {
    movie: ''
  };

  componentDidMount = () => {
    const { movie } = this.state;
    const { params } = this.props.match;
    console.log("Props = ", this.props);
    const apiMovieUrl = 'https://api.themoviedb.org/3/movie/';
    const apiKey = '81afbda1d68d879477495f66a71bde7f';

    //now retrieve the Movie Detail Data
    console.log("URL for Movie Detail: ", `${apiMovieUrl}${params.id}?callback=JSONP_CALLBACK&api_key=${apiKey}`);
    /*
    axios.jsonp(`${apiMovieUrl}${params.id}?callback=JSONP_CALLBACK&api_key=${apiKey}`)
    .then((res) => {
      const movie = res.data;
      this.setState({ movie });
      console.log("movie = ", movie);
    })
    .catch(err => console.log(err));
    axios.jsonp(`${apiMovieUrl}${params.id}?callback=JSONP_CALLBACK&api_key=${apiKey}`)
    .then(({ data: movie }) => {
      console.log('movie', movie);
      this.setState({ movie });
    })
    .catch(function (error) {
      console.log(error);
      });
    */
    axiosReg.get(`${apiMovieUrl}${params.id}?api_key=${apiKey}`)
      .then(({ data: movie }) => {
        console.log('movie', movie);
        this.setState({ movie });
      })
      .catch(function (error) {
        console.log(error);
      });
    /*
    axios.jsonp(`${apiMovieUrl}${params.id}?callback=JSONP_CALLBACK&api_key=${apiKey}`)
      .then(function (response) {
        console.log("response = ", response);
      })
      .catch(function (error) {
        console.log(error);
      });
      */
    /*
    axios.jsonp(`${apiMovieUrl}${params.id}?callback=JSONP_CALLBACK&api_key=${apiKey}`)
      .then(function (response) {
        console.log("response = ", response);
      })
      .catch(function (error) {
        console.log(error);
      });
      */
    /*
    fetchJsonp(`${apiMovieUrl}${params.id}?callback=JSONP_CALLBACK&api_key=${apiKey}`)
      .then(function (response) {
        return response.json()
      }).then(function (json) {
        console.log('parsed json', json)
      }).catch(function (ex) {
        console.log('parsing failed', ex)
      });
      //.then(data => {this.setState({ movie: data.poster_path }); console.log("movie = ", movie);})
    // .then((res) => { this.setState({ movie: res }); console.log("movie = ", movie); });
    // .then(function (response) { console.log("response = ", response); this.setState({ movie: response });})
    */
  };
  /*
  componentDidMount = () => {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }
  */

  showGenres1 = (genres) => {
    <span>genres[0].name</span>
  };
/*
  showGenres = (genres) => {
    <span>
      {genres.map(genre => (
        <span key={genre.id}>{genre.name}  </span>
      ))}
    </span>
  };
*/
  render() {
    const { classes } = this.props;
    //console.log("Movie Detail", this.state.movie);
    return (
      <Fragment>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography
              variant="headline"
              align="center"
              //color="white"
              classes={{
                root: classes.aboutHeading
              }}
            >
              {this.state.movie.title}
            </Typography>
          </Grid>
          <Grid item xs={0} sm={0} md={2} lg={2}>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Card>
              <CardMedia
                className={classes.aboutMedia}
                image={`http://image.tmdb.org/t/p/w500/${this.state.movie.poster_path}`}
                title="Movie Detail Image"
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <List classes={{ padding: classes.aboutListPadding }}>
              <ListItem classes={{ gutters: classes.aboutLisItemGuttersFirst }}>
                <ListItemText
                  disableTypography
                  classes={{ root: classes.aboutListText }}
                >Genres: {<ShowGenres genres={this.state.movie.genres} />}
              </ListItemText>
              </ListItem>
              <ListItem classes={{ gutters: classes.aboutLisItemGutters }}>
                <ListItemText
                  disableTypography
                  classes={{ root: classes.aboutListText }}
                  primary={`Release Date: ${this.state.movie.release_date}`} />
              </ListItem>
              <ListItem classes={{ gutters: classes.aboutLisItemGutters }}>
                <ListItemText
                  disableTypography
                  classes={{ root: classes.aboutListText }}
                  primary={`Synopsis: ${this.state.movie.overview}`} />
              </ListItem>
            </List>
            {this.state.movie.homepage ? (
              <Button variant="contained" color="primary"
                classes={{ containedPrimary: classes.buttonPlacement }}
                href={this.state.movie.homepage}
                target="_blank"
              >
                Visit Movie Website
              </Button>)
            : null
            }
          </Grid>
          <Grid item xs={0} sm={0} md={2} lg={2}>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

MovieDetail.propTypes = {
  classes: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired
};

export default withStyles(styles)(MovieDetail);