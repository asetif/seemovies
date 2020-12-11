

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

  constructor(props) {
    super(props)

    this.updateSearchedMovie = this.updateSearchedMovie.bind(this)
  }

  state = {
    searchedMovie: []
  }

  updateSearchedMovie(newBackdrop){
    this.setState({
      searchedMovie: newBackdrop
    })
  }

  getSearchedMovie(){
    console.log(this.state.searchedMovie)
    return Object.entries(this.state.searchedMovie);
  }

  render() {
  return (
    <div className="app">
      <Nav
        requests = {requests}
        updateSearchedMovie = {this.updateSearchedMovie.bind(this)}
      /> 
     <Banner
        newBackDrop = {this.state.searchedMovie}
     />
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