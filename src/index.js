import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./Components/Home";
import MusicGenerator from "./Components/MusicGenerator";
import Error from "./Components/Error"
import Navigation from "./Components/Navigation";
import Research from "./Components/Research";
import AboutUs from "./Components/AboutUs";

ReactDOM.render(
    <BrowserRouter basename={window.location.pathname || ''}>
      <div>
          <Navigation />
          <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/MusicGenerator" component={MusicGenerator}/>
              <Route path="/Research" component={Research} exact />
              <Route path="/AboutUs" component={AboutUs} exact />
              <Route component={Error}/>
          </Switch>
      </div>
  </BrowserRouter>,
  document.getElementById('root')
);