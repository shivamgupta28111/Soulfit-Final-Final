import React, { Component } from "react";
//import "./App.css"
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from './components/home';
import Error from './components/error';
import Navigation from './components/navigation';
import MyProfile from './components/myprofile/myprofile';
import BMI from './components/bmi/bmi'
import Underweightdietplan from './components/dietplan/Underweightdietplan';
import Overweightdietplan from './components/dietplan/Overweightdietplan';
import Obesedietplan from './components/dietplan/Obesedietplan';
import Healthydietplan from './components/dietplan/Healthydietplan';


class App extends Component {
 
  render() {
    return (
        <BrowserRouter>
        <div>
        
         <Switch >
      
          <Route exact path="/" component={Home}  />
          <Route path="/myprofile" component={MyProfile} />
          <Route path="/BMI" component={BMI} />
          <Route path="/Underweightdietplan" component={Underweightdietplan} />
          <Route path="/Healthydietplan" component={Healthydietplan} />
          <Route path="/Overweightdietplan" component={Overweightdietplan} />
          <Route path="/Obesedietplan" component={Obesedietplan} />
          <Route component={Error} />
            
         </Switch>
        </div>
        </BrowserRouter>

    );
  }
};

export default App;
