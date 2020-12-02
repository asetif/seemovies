import React from 'react';
import './App.css';
import requests from './Requests';
import Row from './Row';
import Banner from './Banner';
import Nav from './Nav';

function App () {
  return (
    <div className="app">
      <Nav/>
     <Banner/>
      <Row 
        title = "NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals} 
        isLargeRow={true}
        />
      <Row title = "Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title=  "Action movies" fetchUrl = {requests.fetchActionMovies}/>
      <Row title=  "Comedy movies" fetchUrl = {requests.fetchComedyMovies}/>
      <Row title=  "horror movies" fetchUrl = {requests.fetchHoroorMovies}/>
      <Row title=  "Romance movies" fetchUrl = {requests.fetchRomenceMovies}/>
      <Row title=  "Documentaries" fetchUrl = {requests.fetchDocumentaries}/>
    </div>

  );
}

export default App;
