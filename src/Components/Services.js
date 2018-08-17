import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SecurityIcon from '@material-ui/icons/Security';

const styles = theme => ({
  root: {
    flexGrow: 1,
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

const Services = ({ classes }) => {
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
            Services
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
              gutterBottom: classes.aboutBottom
            }}>
            Welcome to the website for JSWORLD Web Development Studio! Below are some of the services that I offer.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <List classes={{ padding: classes.aboutListPadding }}>
            <ListItem classes={{ gutters: classes.aboutLisItemGuttersFirst }}>
              <ListItemIcon classes={{ root: classes.aboutIcon }}>
                <SecurityIcon />
              </ListItemIcon>
              <ListItemText
                primary={<Typography variant="subheading" style={{ fontSize: '20px' }}>Mobile Design</Typography>}
                secondary={<Typography variant="body2" color="textSecondary">Full design of mobile application using leading-edge software.</Typography>}
              />
            </ListItem>
            <ListItem classes={{ gutters: classes.aboutLisItemGutters }}>
              <ListItemIcon classes={{ root: classes.aboutIcon }}>
                <SecurityIcon />
              </ListItemIcon>
              <ListItemText
                primary={<Typography variant="subheading" style={{ fontSize: '20px' }}>Web Design</Typography>}
                secondary={<Typography variant="body2" color="textSecondary">Full design of eCommerce, brochure or informational website using leading-edge software.</Typography>}
              />
            </ListItem>
            <ListItem classes={{ gutters: classes.aboutLisItemGutters }}>
              <ListItemIcon classes={{ root: classes.aboutIcon }}>
                <SecurityIcon />
              </ListItemIcon>
              <ListItemText
                primary={<Typography variant="subheading" style={{ fontSize: '20px' }}>Logo Design</Typography>}
                secondary={<Typography variant="body2" color="textSecondary">Need a custom logo to distinguish your brand? This is done using a highly-rated graphics software application.</Typography>}
              />
            </ListItem>
            <ListItem classes={{ gutters: classes.aboutLisItemGutters }}>
              <ListItemIcon classes={{ root: classes.aboutIcon }}>
                <SecurityIcon />
              </ListItemIcon>
              <ListItemText
                primary={<Typography variant="subheading" style={{ fontSize: '20px' }}>Application Prototyping</Typography>}
                secondary={<Typography variant="body2" color="textSecondary">A working high-level model will be created for your mobile application or website. This is used to reduce questions and increase your confidence with the finished product.</Typography>}
              />
            </ListItem>
            <ListItem classes={{ gutters: classes.aboutLisItemGutters }}>
              <ListItemIcon classes={{ root: classes.aboutIcon }}>
                <SecurityIcon />
              </ListItemIcon>
              <ListItemText
                primary={<Typography variant="subheading" style={{ fontSize: '20px' }}>Complete Application Development</Typography>}
                secondary={<Typography variant="body2" color="textSecondary">Full Development of Websites, Mobile Apps and Logos using leading-edge software and application development frameworks (React, React Native and Sketch specifically). If you need existing maintenance or upgrades using other technologies, that can be discussed as well.</Typography>}
              />
            </ListItem>
            <ListItem classes={{ gutters: classes.aboutLisItemGutters }}>
              <ListItemIcon classes={{ root: classes.aboutIcon }}>
                <SecurityIcon />
              </ListItemIcon>
              <ListItemText
                primary={<Typography variant="subheading" style={{ fontSize: '20px' }}>Project Satisfaction</Typography>}
                secondary={<Typography variant="body2" color="textSecondary">Your finished project will work as agreed upon and as you expect it to work. We’ll continue to work together through the project deployment phase.</Typography>}
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default withStyles(styles)(Services);