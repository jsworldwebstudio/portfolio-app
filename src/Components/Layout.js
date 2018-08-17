import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import classNames from 'classnames';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import { withStyles } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { compose } from 'recompose';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appFrame: {
    // height: 430,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    position: 'absolute',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'appBarShift-left': {
    marginLeft: drawerWidth,
  },
  'appBarShift-right': {
    marginRight: drawerWidth,
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  indicator: {
    color: 'black'
  },
  tabFloat: {
    marginLeft: 'auto'
  },
  tabIndicator: {
    backgroundColor: '#fff'
  },
  drawer: {
    backgroundColor: '#424242'
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
    /*height: '100%'*/
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  'content-left': {
    marginLeft: -drawerWidth,
  },
  'content-right': {
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'contentShift-left': {
    marginLeft: 0,
  },
  'contentShift-right': {
    marginRight: 0,
  },
});

class Layout extends Component {
  state = {
    open: false,
    tabValue: '0'
  };

  /*
  componentWillMount = () => {
    let urlPath = window.location.pathname;
    let currentTab = urlPath.split('/').pop();
    // you can add more validations here
    this.setState({ tabValue: currentTab || 'default' });
  }
  */
  componentWillReceiveProps(nextProps) {
    //console.log("In componentWillReceiveProps, props = ", this.props);
    //console.log("In componentWillReceiveProps, nextProps = ", nextProps);
    let oldURL = this.props.location.pathname;
    let newURL = nextProps.location.pathname;

    if (oldURL !== newURL) {
      switch (newURL) {
        case "/":
          this.setState({ tabValue: '0' });
          break;
        case "/about":
          this.setState({ tabValue: '1' });
          break;
        case "/services":
          this.setState({ tabValue: '2' });
          break;
        case "/fun-page":
          this.setState({ tabValue: '3' });
          break;
        case "/contact":
          this.setState({ tabValue: '4' });
          break;
        default:
          this.setState({ tabValue: '3' });
          break;
      }
    }
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleTabChange = (event, tabValue) => {
    this.setState({ tabValue });
  };

  render() {
    //console.log("All props = ", this.props);
    const { classes, location: { pathname }, children } = this.props;
    const { open, tabValue } = this.state;
    const anchor = 'left';

    const drawer = (
      <Drawer
        variant="persistent"
        anchor={anchor}
        open={open}
        classes={{
          docked: classes.drawer,
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={this.handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <MenuList>
          <MenuItem component={Link} to="/" selected={'/' === pathname}>
            Home
          </MenuItem>
          <MenuItem component={Link} to="/about" selected={'/about' === pathname}>
            About
          </MenuItem>
          <MenuItem component={Link} to="/services" selected={'/services' === pathname}>
            Services
          </MenuItem>
          <MenuItem component={Link} to="/fun-page" selected={'/fun-page' === pathname}>
            Fun Page
          </MenuItem>
          <MenuItem component={Link} to="/contact" selected={'/contact' === pathname}>
            Contact
          </MenuItem>
        </MenuList>
      </Drawer>
    );

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar
            className={classNames(classes.appBar, {
              [classes.appBarShift]: open,
              [classes[`appBarShift-${anchor}`]]: open,
            })}
          >
            <Toolbar disableGutters={!open}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit" noWrap>
                JSWORLD Web Studio
              </Typography>
              <Hidden smDown>
                <Tabs value={tabValue}
                  onChange={this.handleTabChange}
                  //indicatorColor="secondary"
                  //className={classes.tabFloat}
                  classes={{
                    root: classes.tabFloat,
                    indicator: classes.tabIndicator,
                  }}
                >
                  <Tab value="0" label="Home" component={Link} to="/" />
                  <Tab value="1" label="About" component={Link} to="/about" />
                  <Tab value="2" label="Services" component={Link} to="/services" />
                  <Tab value="3" label="Fun Page" component={Link} to="/fun-page" />
                  <Tab value="4" label="Contact" component={Link} to="/contact" />
                </Tabs>
              </Hidden>
            </Toolbar>
          </AppBar>
          {drawer}
          <main
            className={classNames(classes.content, classes[`content-${anchor}`], {
              [classes.contentShift]: open,
              [classes[`contentShift-${anchor}`]]: open,
            })}
          >
            <div className={classes.drawerHeader} />
            {children}
          </main>
        </div>
      </div>
    );
  }
}

export default compose(
  withRouter,
  withStyles(styles)
)(Layout);