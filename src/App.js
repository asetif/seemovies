

import React, { Component } from "react";
import './App.css';
import requests from './Requests';
import Row from './Row';
import Banner from './Banner';
import Nav from './Nav';
import { Route, Switch } from "react-router-dom";
import { Login } from "./components/Login/Login.js";
import { Signup } from "./components/Signup/Signup.js";
import { PrivateRoute } from "./components/PrivateRoute.js";

/**
 * Render the content of the whole page
 */
class App extends Component {
  render() {
  return (
    <div className="app">
      <Nav/> 
     <Banner/>
      <Row 
        title = {["NETFLIX Trending", "NETFLIX Originals", "Action movies", "Comedy movies", "Horror movies", "Romances", "Documentaries"]}
        fetchUrl={requests}
        isLargeRow={true}
        />
     </div>
     
    );
  }
}

export default App;