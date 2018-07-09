import React, { Component } from "react";
//import "./App.css"
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from './components/home';
import Error from './components/error';
import Navigation from './components/navigation';
import MyProfile from './components/myprofile/myprofile';
import BMI from './components/bmi/bmi'
import Dietplan from './components/dietplan/diet_plan';
import BackgroundSlideshow from 'react-background-slideshow'
import bg from './images/bg.jpg'
import bg2 from './images/bg2.jpg'
import bg3 from './images/bg3.jpg'
import bg4 from './images/bg4.jpg'
import bg5 from './images/bg5.jpg'
import bg6 from './images/bg6.jpg'



class App extends Component {
 
  render() {
    return (
        <BrowserRouter>
        <div>
        
         <Switch >
      
          <Route exact path="/" component={Home}  />
          <Route path="/myprofile" component={MyProfile} />
          <Route path="/BMI" component={BMI} />
          <Route path="/dietplan" component={Dietplan} />
          <Route component={Error} />
            
         </Switch>
        </div>
        </BrowserRouter>

    );
  }
};

export default App;
