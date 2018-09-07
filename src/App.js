import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch }from 'react-router-dom'
import './App.scss';
import Home from './view/Home';
import Becentral from './view/Becentral';
import Wibicom from './view/Wibicom';
import Hive from './view/Hive';
import 'animation.gsap';
import 'debug.addIndicators';
import 'TimelineLite';





class App extends Component {
  render() {
    return (
      <Router>     
      <div className="app">       
      <Route render={({location})=>(
          <Switch location={location}>
            <Route exact path="Portfolio/" component={Home} />
            <Route exact path="Portfolio/becentral" component={Becentral} />
            <Route exact path="Portfolio/wibicom" component={Wibicom} />
            <Route exact path="Portfolio/hive" component={Hive} />
          </Switch>
            )}/>
            </div>
      </Router>
    );
  }
}

export default App;
