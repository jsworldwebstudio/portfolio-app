import React, { Component, Fragment } from 'react';
import axios from 'axios-jsonp-pro';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PopularResults from './ApiResults/PopularResults';
import LatestResults from './ApiResults/LatestResults';
import SearchResults from './ApiResults/SearchResults';
import moment from 'moment';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  fpSectionTitle: {
    marginBottom: '30px'
  },
  aboutAppBar: {
    position: 'static',
    //bottom: 0,
    //left: 0,
    textAlign: 'center',
    display: 'block',
    width: '385px',
    height: '2px',
    background: '#ed393a',
    marginBottom: '30px',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  aboutBottom: {
    marginBottom: '1.5em'
  },
  aboutIcon: {
    color: '#ed393a',
    fontSize: '50px',
    position: 'absolute',
    top: '0',
    left: '0'
  },
  fpCenter: {
    width: '900px',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  aboutListText: {
    //color: '#c1c1c1'
  },
  servicesListTextPrimary: {
    fontSize: '18px'
  },
  servicesListTextSecondary: {
    fontSize: '14px'
  },
  aboutLisItemGuttersFirst: {
    marginTop: '50px',
    paddingTop: '0px',
    paddingLeft: '50px',
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      width: '33.33%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%%',
    }
  },
  aboutLisItemGutters: {
    marginTop: '50px',
    paddingLeft: '50px',
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      width: '33.33%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%%',
    }
  },
  aboutListPadding: {
    paddingTop: '0px',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap'
  },
  aboutCard: {
    //maxWidth: 652,
  },
  aboutMedia: {
    height: '150px',
    paddingTop: '56.25%', // 16:9
  }
});

class FunPage extends Component {
  state = {
    searchText: '',
    amount: 15,
    apiKey: '81afbda1d68d879477495f66a71bde7f',
    searchMovies: [],
    popularMovies: [],
    latestMovies: []
  };

  componentDidMount = () => {
    const { apiKey, popularMovies, latestMovies } = this.state;
    const apiPopularUrl = 'https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc&api_key=';
    const apiLatestUrl = 'https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&primary_release_date.gte=';
    const now = moment();
    const nowDisplay = now.format('YYYY-MM-DD');
    const oneWeekPastDisplay = now.subtract(1, 'weeks').format('YYYY-MM-DD');
    //console.log("URL to Execute: ", `${apiPopularUrl}${apiKey}` );
    
    //Retrieve the Popular Movies Data
    axios.jsonp(`${apiPopularUrl}${apiKey}`)
      .then(res => this.setState({ popularMovies: res.results }))
      .catch(err => console.log(err));

    //now retrieve the Latest Movies In Theatres Data
    //console.log("URL to Execute Latest: ", `${apiLatestUrl}${oneWeekPastDisplay}&primary_release_date.lte=${nowDisplay}&api_key=${apiKey}`);
    axios.jsonp(`${apiLatestUrl}${oneWeekPastDisplay}&primary_release_date.lte=${nowDisplay}&api_key=${apiKey}`)
      .then(res => this.setState({ latestMovies: res.results }))
      .catch(err => console.log(err));
  };

  onTextChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    // get our form data out of state
    const { apiKey, searchText, searchMovies } = this.state;
    const val = searchText;
    //console.log("In OnSubmit Function, val= ", val);
    const apiSearchUrl = 'https://api.themoviedb.org/3/search/movie?callback=JSONP_CALLBACK&query=';
    this.setState({ [e.target.name]: val },
      () => {
        if (val) {
          //now retrieve the Latest Movies In Theatres Data
          //console.log("URL to Execute Search: ", `${apiSearchUrl}${val}&sort_by=popularity.desc&api_key=${apiKey}`);
          axios.jsonp(`${apiSearchUrl}${val}&sort_by=popularity.desc&api_key=${apiKey}`)
            .then(res => this.setState({ searchMovies: res.results }))
            .catch(err => console.log(err));
        } else {
          this.setState({ searchMovies: [] });
        }
      });
  };

  render() {
    const { classes } = this.props;
    //console.log("1st Search Movie", this.state.searchMovies[0]);
    return (
      <Fragment>
        <Grid container spacing={24} className={classes.root}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography
              variant="headline"
              align="center"
              classes={{
                root: classes.aboutHeading
              }}
            >
              Use the Fun Page to Browse Movies
            </Typography>
            <AppBar classes={{ root: classes.aboutAppBar }}>
              <Toolbar>
                <Typography>
                </Typography>
              </Toolbar>
            </AppBar>
            <Typography variant="subheading" color="textSecondary" gutterBottom
              align="center"
              classes={{
                gutterBottom: classes.aboutBottom,
                alignCenter: classes.fpCenter
              }}>
              This page is included to provide a closer look into movies that may interest you and to show the versatility of applications that can be developed for you. Specifically, this pages communicates with an external movie database to show the information seen on this page and show information on movies you search for individually.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography
              variant="headline"
              classes={{headline: classes.fpSectionTitle}}
            >
              Find A Movie
            </Typography>
            <Typography variant="subheading" color="textSecondary" gutterBottom
              align="left"
            >
              Search for a movie using the form below:
            </Typography>
            <form className={classes.container} onSubmit={this.onSubmit}>
              <TextField
                id="search"
                type="text"
                name="searchText"
                label="Movie Name"
                className={classes.textField}
                value={this.state.searchText}
                onChange={this.onTextChange}
                margin="normal"
              />
              <Button variant="contained" color="primary"
                size="small"
                type="submit"
                classes={{ containedPrimary: classes.buttonPlacement }}
              >
                Find It
                  </Button>
            </form>
            {this.state.searchMovies.length ? (<SearchResults searchMovies={this.state.searchMovies} />) : null}
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography
              variant="headline"
              classes={{ headline: classes.fpSectionTitle }}
            >
              Popular Movies
            </Typography>
            {this.state.popularMovies.length ? (<PopularResults popularMovies={this.state.popularMovies} />) : null}
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography
              variant="headline"
              classes={{ headline: classes.fpSectionTitle }}
            >
              Latest Movies In Theaters
            </Typography>
            {this.state.latestMovies.length ? (<LatestResults latestMovies={this.state.latestMovies} />) : null}
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default withStyles(styles)(FunPage);