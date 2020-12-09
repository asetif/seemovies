/*/import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Dashboard } from "./components/Dashboard/Dashboard.js";
import { Login } from "./components/Login/Login.js";
import { Signup } from "./components/Signup/Signup.js";
import { PrivateRoute } from "./components/PrivateRoute.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-content">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </div>
    );
  }
}
export default App;/*/

import React, { Component } from "react";
import './App.css';
import requests from './Requests';
import Row from './Row';
import Banner from './Banner';
import Nav from './Nav';
import { Route, Switch } from "react-router-dom";
import { Dashboard } from "./components/Dashboard/Dashboard.js";
import { Login } from "./components/Login/Login.js";
import { Signup } from "./components/Signup/Signup.js";
import { PrivateRoute } from "./components/PrivateRoute.js";

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
       
      {/*<Row title = "Trending Now" fetchUrl={requests.fetchTrending}
       isLargeRow={true}/>
      
      <Row title=  "Action movies" fetchUrl = {requests.fetchActionMovies}/>
      <Row title=  "Comedy movies" fetchUrl = {requests.fetchComedyMovies}/>
      <Row title=  "horror movies" fetchUrl = {requests.fetchHoroorMovies}/>
      <Row title=  "Romance movies" fetchUrl = {requests.fetchRomenceMovies}/>
      <Row title=  "Documentaries" fetchUrl = {requests.fetchDocumentaries}/>*/}  
    
     </div>
     
    );
  }
}

export default App;