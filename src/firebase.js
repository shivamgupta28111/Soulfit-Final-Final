import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyB-ahMKItpXJaJI5AvXFFYpTudEm8F6ozA",
    authDomain: "inhouse-59fc6.firebaseapp.com",
    databaseURL: "https://inhouse-59fc6.firebaseio.com",
    projectId: "inhouse-59fc6",
    storageBucket: "inhouse-59fc6.appspot.com",
    messagingSenderId: "1084986622867"
  };

  var FbApp = firebase.initializeApp(config);
  
     export default FbApp;