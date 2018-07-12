import React, { Component, Fragment } from "react"
import "../App.css"
import * as firebase from 'firebase'
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
//import PropTypes from 'prop-types';
//import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Image from 'react-image-resizer';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import logo from '../images/Soulfit.svg';
import Grid from '@material-ui/core/Grid';
//import Paper from '@material-ui/core/Paper';
import Firebase from '../firebase';
import ABar from './appbar.js'
import {NavLink} from 'react-router-dom';



Firebase;

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
  container : {
    textAlign: "centre",
    textColor: "#004444"
    
},
  p: {
      color: "#000000",
  },
 
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



class Home extends Component {
  

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
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
      this.setState({ isSignedIn: !!user })
    })
  }

  render() {
    return (
        <Fragment>
        
        <ABar />
        
      
 
        
      
    

      <NavLink to="/myprofile">
        <Typography varient="display1" align="center" >
           <Button variant="extendedFab" aria-label="add" color="primary"  size="large" style={{marginTop: 2}} >
              Click Here To View Your Profile!
           </Button>
        </Typography>
      </NavLink>
      
    </Fragment>


      
    )
  }
}

export default Home;
