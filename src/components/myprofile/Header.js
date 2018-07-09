import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import ABar from '../appbar'



import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
//import logo from '../../../src/SoleFIT_logo.jpg'



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
    // Name of the component ⚛️ / style sheet    
    MuiAppBar: {
      // Name of the rule
      root: {
        // Some CSS
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
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
    flexGrow: 1,
  },
     
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};



export function abar (props) {
  const { classes } = props;
  
   

return (
  <Fragment>
    <ABar />
   

<Grid container >
    <Grid item sm>
    
    </Grid>
</Grid>
</Fragment>
   

  );
}

abar.propTypes = {
  classes: PropTypes.object.isRequired,

};





export default withStyles(styles)(abar);
 /*        <Typography variant="title" color="inherit" className={classes.flex}>
            Title
            <img src={logo} height="30" width="40" />
          </Typography> */
         // <Button color="inherit">Login</Button>