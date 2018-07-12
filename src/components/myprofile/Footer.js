import React, { Fragment } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
//import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Firebase from '../../firebase';
import firebase from 'firebase'
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from './Button'
import {NavLink} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
Firebase;



var user = firebase.auth().currentUser;


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

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
   
  },
  textField: {
    color:"primary",
    textColor:"primary",

    fontsize: 25,
    marginLeft: theme.spacing.unit*30
    ,
    marginRight: theme.spacing.unit*15,
    marginTop: theme.spacing.unit*5,
    width: 300,
  },
  menu: {
    width: 300,
  },
  
});

const Genders = [
  {
    value: 'Male',
    label: 'Male',
  },
  {
    value: 'Female',
    label: 'Female',
  },
 
];

//const userReducer = modelReducer('user', initialUser);

class TextFields extends React.Component {

  state = { isSignedIn: false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }
  
  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
  }




  state = {
    name: '',
    age: '',
    Number:'',
    Gender: ' ',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
      
    });
  };
  

  render() {
    firebase.auth().onAuthStateChanged(function(user) {
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
      if (user) {
        console.log({user})
        user.providerData.forEach(function () {
          console.log("Sign-in provider: " + user.providerId);
          console.log("  Provider-specific UID: " + user.uid);
          console.log("  Name: " + user.displayName);
          console.log("  Email: " + user.email);
          console.log("  Photo URL: " + user.photoURL);
        });
      } 
    });

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
    

    const { classes } = this.props;

    return (
      <Fragment>
      <div className="App">
        {this.state.isSignedIn ? (
          <Fragment>
          <span>
          <Typography variant="display2" color="secondary" align="center" style={{marginTop: 0}} backgroundcolor="secondary" >
              MY PROFILE
          </Typography>
          <Typography variant="display2"  align="center">
          <img
              alt="profile picture"
              src={firebase.auth().currentUser.photoURL}
              width="300" height="300"
            />
           </Typography> 
            <Typography varient="display1" align="center" > <h4>
            Hey!, {firebase.auth().currentUser.displayName} Welcome To Soulfit! </h4></Typography>

            <Typography varient="display1" align="center" >
            <h4>
             You're Signed In!</h4></Typography>
             <Typography  varient="display1" align="center" style={{marginTop: 4}} >
            <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
            </Typography>
          </span>
        
    <Paper>
      <form className={classes.container} noValidate autoComplete="off">
        <TextField

      
          id="name"
          label="Name"
          className={classes.textField}
          value={firebase.auth().currentUser.displayName}
          onChange={this.handleChange('name')}
          margin="normal"
          
        />
       

        

         <TextField
          id="Email id"
          label="Email id"
          defaultValue={firebase.auth().currentUser.email}
          className={classes.textField}
          margin="normal"
        />

        
        

         <TextField
          id="Age"
          label="Age"
          value={this.state.age}
          onChange={this.handleChange('age')}
          type="number"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
         <TextField
          id=" Mobile number"
          label=" Mobile Number"
          value={this.state.Number}
          onChange={this.handleChange('Number')}
          type="number"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
          </form>
      </Paper>
          < Button />
          </Fragment>
        )  : (
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
            />
          )}
        </div >
      
      </Fragment>
          
    );
  }
}

 
  
TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);
