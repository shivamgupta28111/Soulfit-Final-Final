import React, { Fragment, Component } from "react";
import Paper from '@material-ui/core/Paper';
//import Tabs from '@material-ui/core/Tabs';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import '../../App.css'

import { Typography } from "@material-ui/core";


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
    margin: theme.spacing.unit,
    flexWrap: 'wrap',
    color: "#ffffff",
   
  },
  input: {
    display: 'Sign In!',
  },
};

class Footer extends Component {
 
  
  state = {
    weight: '',
    height: '',
    bmi_value:'',
    bmi_analysis:'',
  };

  handleChange = prop => event => {
    this.setState({ 
      [prop]: event.target.value 
    });
  };

  render() {
  

    const { classes } = this.props;
    let bmi_value = (this.state.weight*this.state.weight)/this.state.height;
    
    if (bmi_value<18.5 ) {
     this.state.bmi_analysis="Underweight"
    } 
      else {

      if (bmi_value>25 && bmi_value<30 ) {
        this.state.bmi_analysis="Overweight"
       }

       else {

        if (bmi_value>30 ) {
          this.state.bmi_analysis="Obese"
         }

       else {
         
        this.state.bmi_analysis="Healthy"

       }   
      }
      
    }
    const analysis = this.state.bmi_analysis;

  return (
    
<Fragment>
<MuiThemeProvider theme={theme}>
    <Fragment>
    
    <form className={classes.container} noValidate autoComplete="off">
      <Input
          id="weight"
          label="Enter Weight"
          placeholder="Enter Weight(In Kgs)"
          className={classes.textField}
          value={this.state.weight}
          onChange={this.handleChange('weight')}
          
          margin="normal"
        />
        <bigger>
        <Input
          id="height"
          label="Enter Height"
          placeholder="Enter Height(In cm)"
          className={classes.textField}
          value={this.state.height}
          onChange={this.handleChange('height')}
          margin="normal"
        />
        </bigger>
      </form>
   
    </Fragment>
    <Fragment>
     
      
      <form className={classes.container} noValidate autoComplete="off">
      <TextField
          id="BMI-Value"
          label="BMI Index Value"
          defaultValue=""
          value={bmi_value}
          className={classes.textField}
          margin="normal"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="BMI-Analysis"
          label="BMI  Analysis"
          defaultValue=""
          className={classes.textField}
          value={this.state.bmi_analysis}
          margin="normal"
          InputProps={{
            readOnly: true,
          }}
        />  
      
      </form>
    

          <Typography align="center">
      <Link to={`/${analysis}dietplan`} >
          <Button variant="extendedFab" aria-label="add" color="secondary"  size="large" style={{marginTop: 2}} className={classes.button}>
         
            Click Here To View Your Personalized Diet Plans!
          </Button>
      </Link>
      </Typography>



      </Fragment>
    </MuiThemeProvider >
</Fragment>

  );
}
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};



export default withStyles(styles)(Footer);

/* <Typography align="center">
      <Link to={`/${analysis}dietplan`} >
          <Button variant="extendedFab" aria-label="add" color="secondary"  size="large" style={{marginTop: 2}} className={classes.button}>
         
            Click Here To View Your Diet Plans!
          </Button>
      </Link>
      </Typography>
   */