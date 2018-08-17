import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
//import Mailto from 'react-mailto';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CheckIcon from '@material-ui/icons/Check';
import DoneIcon from '@material-ui/icons/Done';

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
    height: '150px',
    paddingTop: '56.25%', // 16:9
  }
});

const About = ({ classes }) => {
  return (
    <Fragment>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Card>
            <CardMedia
              className={classes.aboutMedia}
              image="https://picsum.photos/802/578?image=9"
              title="Laptop and Notebook"
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography
            variant="headline"
            //color="white"
            classes={{
              root: classes.aboutHeading
            }}
          >
            About
          </Typography>
          <AppBar classes={{ root: classes.aboutAppBar }}>
            <Toolbar>
              <Typography>
              </Typography>
            </Toolbar>
          </AppBar>
          <Typography variant="subheading" color="textSecondary" gutterBottom
            classes={{
              gutterBottom: classes.aboutBottom
            }}>
            Hello! Let me introduce myself. My name is James Slaughter and this is my website for JSWORLD Web Development Studio. I am a Designer and Developer Professional and Enthusiast with over 20 years experience in the Information Technology field and over 7 years specifically in the Mobile and Web development areas.
          </Typography>
          <Typography variant="body2" color="textSecondary" gutterBottom
            classes={{
              gutterBottom: classes.aboutBottom
            }}>
            I’ve performed a number of roles during my 20+ year professional journey. Now I want to put that knowledge to work for you in helping you build your online presence. Whether that’s a logo, mobile application or website, we can work together to build the finished product you want to establish or enhance your presence in the digital world.
          </Typography>
          <Typography variant="body2" color="textSecondary" gutterBottom
            classes={{
              gutterBottom: classes.aboutBottom
            }}>
            By closely collaborating through the early discovery and design phases of your project I can develop and deliver the following projects for you, your company or your startup business:
          </Typography>
          <List classes={{ padding: classes.aboutListPadding }}>
            <ListItem classes={{ gutters: classes.aboutLisItemGuttersFirst }}>
              <ListItemIcon classes={{ root: classes.aboutIcon }}>
                <CheckIcon />
              </ListItemIcon>
              <ListItemText
                disableTypography
                classes={{ root: classes.aboutListText }}
                primary="Brochure/Informational Websites" />
            </ListItem>
            <ListItem classes={{ gutters: classes.aboutLisItemGutters }}>
              <ListItemIcon classes={{ root: classes.aboutIcon }}>
                <CheckIcon />
              </ListItemIcon>
              <ListItemText
                disableTypography
                classes={{ root: classes.aboutListText }}
                primary="eCommerce Websites" />
            </ListItem>
            <ListItem classes={{ gutters: classes.aboutLisItemGutters }}>
              <ListItemIcon classes={{ root: classes.aboutIcon }}>
                <DoneIcon />
              </ListItemIcon>
              <ListItemText
                disableTypography
                classes={{ root: classes.aboutListText }}
                primary="Mobile Applications" />
            </ListItem>
            <ListItem classes={{ gutters: classes.aboutLisItemGutters }}>
              <ListItemIcon classes={{ root: classes.aboutIcon }}>
                <DoneIcon />
              </ListItemIcon>
              <ListItemText
                disableTypography
                classes={{ root: classes.aboutListText }}
                primary="Progressive Web Applications" />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default withStyles(styles)(About);