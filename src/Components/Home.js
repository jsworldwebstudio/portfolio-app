import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './ReactAnimatedSliderStyles/slider-animations.css';
import './ReactAnimatedSliderStyles/styles.css';

const styles = theme => ({
  root: {
    flexGrow: 1,
    position: 'relative',
    width: '100%',
    height: '100%',
    zIndex: '0',
    margin: '0'
  },
  aboutHeading: {
    paddingBottom: '20px',
    color: 'white'
  },
  aboutAppBar: {
    position: 'static',
    //bottom: 0,
    //left: 0,
    textAlign: 'center',
    display: 'block',
    width: '90px',
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

const content = [
  {
    title: 'JSWORLD',
    description:
      'Hi, my name is James Slaughter and I’m a UI/UX Designer and Developer of Mobile and Web applications, and this is my website for JSWORLD Web Development Studio. Click the button below to get more details about the services I offer.',
    button: 'Services Offered',
    image: 'https://i.imgur.com/ZXBtVw7.jpg',
    user: 'Luan Gjokaj',
    userProfile: 'https://i.imgur.com/JSW6mEk.png',
    linkpage: '/services'
  },
  {
    title: 'My Story',
    description:
      'I have over 20 years experience in the Information Technology field and over 7 years specifically in the Mobile and Web development areas. Click the button below to view my background page.',
    button: 'Explore My Journey',
    image: 'https://picsum.photos/1600/600?random',
    user: 'Erich Behrens',
    userProfile: 'https://i.imgur.com/0Clfnu7.png',
    linkpage: '/about'
  },
  {
    title: 'Working Together',
    description:
      'Do you have an idea for a mobile application? Are you working on a startup business and need a mobile and web presence? Or just need a website? If you answered “Yes” to any of those questions, click the button below and let’s discuss how your ideas can grow into real world applications!',
    button: 'Let\'s Talk',
    image: 'https://i.imgur.com/DvmN8Hx.jpg',
    user: 'Bruno Vizovskyy',
    userProfile: 'https://i.imgur.com/4KeKvtH.png',
    linkpage: '/contact'
  }
];

const Home = ({ classes }) => {
  return (
    <Fragment>
      <Grid container spacing={24} className={classes.root}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Slider
          autoplay={10000}
          previousButton={<img src="https://img.icons8.com/icon/85459/back-arrow/ED393A" />}
          nextButton={<img src="https://img.icons8.com/icon/85463/right-pointing-arrow/ED393A" />}
          className="slider-wrapper"
          >
            {content.map((item, index) => (
              <div
                key={index}
                className="slider-content"
                style={{ background: `url('${item.image}') no-repeat center center` }}
              >
                <div className="inner">
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                  <Button variant="contained" color="primary" component={Link} to={item.linkpage}>
                  {item.button}
                  </Button>
                </div>
              </div>
            ))}
          </Slider>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default withStyles(styles)(Home);