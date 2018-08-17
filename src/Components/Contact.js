import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
//import Mailto from 'react-mailto';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MailIcon from '@material-ui/icons/Mail';
import PublicIcon from '@material-ui/icons/Public';

const styles = theme => ({
  contactHeading: {
    paddingBottom: '20px',
    color: 'white'
  },
  contactAppBar: {
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
  contactIcon: {
    color: '#c1c1c1'
  },
  contactListText: {
    color: '#c1c1c1'
  },
  contactLisItemGuttersFirst: {
    paddingTop: '0px',
    paddingLeft: '0px'
  },
  contactLisItemGutters: {
    paddingLeft: '0px'
  },
  contacListPadding:{
    paddingTop: '0px'
  }
});

const Contact = ({ classes }) => {
  return (
    <Fragment>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography
            variant="title"
            //color="white"
            classes={{
              root: classes.contactHeading
            }}
          >
            About
          </Typography>
          <AppBar classes={{ root: classes.contactAppBar }}>
            <Toolbar>
              <Typography>
              </Typography>
            </Toolbar>
          </AppBar>
          <Typography variant="body1" color="textSecondary">
            Designer and Developer Professional and Enthusiast with over 20 years experience in the Information Technology field and over 7 years specifically in the Mobile and Web development areas.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography
            variant="title"
            //color="white"
            classes={{
              root: classes.contactHeading
            }}
          >
            Address
          </Typography>
          <AppBar classes={{ root: classes.contactAppBar }}>
            <Toolbar>
              <Typography>
              </Typography>
            </Toolbar>
          </AppBar>
          <List classes={{ padding: classes.contacListPadding }}>
            <ListItem classes={{ gutters: classes.contactLisItemGuttersFirst }}>
              <ListItemIcon classes={{ root: classes.contactIcon }}>
                <PhoneIcon />
              </ListItemIcon>
              <ListItemText
                disableTypography
                classes={{ root: classes.contactListText }}
                primary="Greater Chicagoland Area" />
            </ListItem>
            <ListItem classes={{ gutters: classes.contactLisItemGutters }}>
              <ListItemIcon classes={{ root: classes.contactIcon }}>
                <LocationOnIcon />
              </ListItemIcon>
              <ListItemText
                disableTypography
                classes={{ root: classes.contactListText }}
                primary="Please use the email link below:" />
            </ListItem>
            <ListItem button component="a" href="mailto:jsworldwebstudio@gmail.com"
            classes={{ gutters: classes.contactLisItemGutters }}>
              <ListItemIcon classes={{ root: classes.contactIcon }}>
                <MailIcon />
              </ListItemIcon>
              <ListItemText
                disableTypography
                classes={{ root: classes.contactListText }}
                primary="jsworldwebstudio@gmail.com" />
            </ListItem>
            <ListItem button component="a" href="https://www.jsworldwebstudio.com"
            classes={{ gutters: classes.contactLisItemGutters }}>
              <ListItemIcon classes={{ root: classes.contactIcon }}>
                <PublicIcon />
              </ListItemIcon>
              <ListItemText
                disableTypography
                classes={{ root: classes.contactListText }}
                primary="www.jsworldwebstudio.com" />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default withStyles(styles)(Contact);
