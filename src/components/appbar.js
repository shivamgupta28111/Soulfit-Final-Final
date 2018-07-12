import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import logo from '../images/Soulfit_logo.svg'
import fulllogo from '../images/Soulfit_white.svg'
import MenuItem from '@material-ui/core/MenuItem';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { mailFolderListItems, otherMailFolderListItems } from './tileData';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import "../App.css"

const drawerWidth = 240;

const theme = createMuiTheme({
  overrides: {
    palette: {
      primary: {
        // light: will be calculated from palette.primary.main,
        main: '#00ffff',
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contast with palette.primary.main
      },
      secondary: {
        light: '#0066ff',
        main: '#00ffff',
        // dark: will be calculated from palette.secondary.main,
        contrastText: '#ffcc00',
      },
      // error: will use the default color
    },
    // Name of the component ⚛️ / style sheet    
    MuiAppBar: {
      // Name of the rule
      root: {
        // Some CSS
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: '#263238',
        colorBackground: 'Yellow',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      },
    },
},
});


const styles = {
  root: {
   // flexGrow: 1,
  },
  appFrame: {
    height: 430,
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
  flex: {
    flex: 1,
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
  hide: {
    display: 'none',
  },
  drawerPaper: {
    backgroundColor:"#3bc1f4",
    position: 'relative',
    width: drawerWidth,
  },
  drawerHeader: {
    
    backgroundColor:"#3bc1f4",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor:"#3f50b5",
    height: 1,
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
};


class ABar extends Component  {
  
    state = {
        open: false,
        anchor: 'left',
      };
    
      handleDrawerOpen = () => {
        this.setState({ open: true });
      };
    
      handleDrawerClose = () => {
        this.setState({ open: false });
      };
    
      handleChangeAnchor = event => {
        this.setState({
          anchor: event.target.value,
        });
      };

      
render() {
    const { classes, theme } = this.props;
    const { anchor, open } = this.state;
    const drawer = (
        <Drawer
          variant="persistent"
          anchor={anchor}
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader} >
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>{mailFolderListItems}</List>
          <Divider />
        </Drawer>
      );
  
      let before = null;
      let after = null;
  
      if (anchor === 'left') {
        before = drawer;
      } else {
        after = drawer;
      }


return (
    <div>
      <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <div className={classes.appFrame}>
        <AppBar className={classNames(classes.appBar, {
              [classes.appBarShift]: open,
              [classes[`appBarShift-${anchor}`]]: open,
            })}  >
        <Toolbar disableGutters={!open}>
        <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
          <Typography variant="title" color="secondary" className={classes.flex} align="centre" >
          <img src={logo} alt= "logo" height="30" width="40"/>
            SOULFIT
            
          </Typography>
          
      
        </Toolbar>
      </AppBar>
          {before}
          <main
            className={classNames(classes.content, classes[`content-${anchor}`], {
              [classes.contentShift]: open,
              [classes[`contentShift-${anchor}`]]: open,
            })}
          >
            <div className={classes.drawerHeader} />
            <img src={fulllogo} alt="logo" height={300} width={1350} />
          </main>
          {after}
        </div>
      </div>
    </MuiThemeProvider>
      </div>
  );
}
}

ABar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ABar);
