import React, { Fragment } from "react";
import Paper from '@material-ui/core/Paper';
//import Tabs from '@material-ui/core/Tabs';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {NavLink} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

const theme = createMuiTheme({
    overrides: {
      palette: {
        primary: {
          // light: will be calculated from palette.primary.main,
          main: '#ff4400',
          // dark: will be calculated from palette.primary.main,
          // contrastText: will be calculated to contast with palette.primary.main
        },
        secondary: {
          light: '#0066ff',
          main: '#0044ff',
          // dark: will be calculated from palette.secondary.main,
          contrastText: '#ffcc00',
        },
        // error: will use the default color
      },
    },
  });
  
  const styles =  {
  
   container : { 
    textAlign: "center",
      marginleft: theme.spacing.unit*10,
      marginTop: theme.spacing.unit*10,
      
      padding: '0 30px',
    },
    input: {
      display: 'Sign In!',
    },
  };
  
  export function abut (props) {
    const { classes } = props;
    return (
  <Fragment>
  <MuiThemeProvider theme={theme}>
      <div>
        <Grid >
        <Grid item >
        <Typography varient="display1" align="center" >
        <NavLink to="/BMI">
        <Button variant="extendedFab" aria-label="add" color="secondary"  size="large" style={{marginTop: 10}} className={classes.button}>
          Know Your BMI!
        </Button>
        </NavLink>
        </Typography>
        </Grid>
        </Grid>
      </div>
      </MuiThemeProvider >
  </Fragment>
    );
  }
  abut.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  /* <Button  variant="contained" size="large" color="primary" className={classes.button}>
         Calculate BMI
        </Button>*/
  
  export default withStyles(styles)(abut);