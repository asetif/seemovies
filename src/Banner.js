import React, {useEffect, useState} from 'react'
import axios from './axios';
import requests from './Requests';
import './Banner.css';


function handleClick(){
 
}
function Banner() {
    const [movie, setMovie]= useState([]);

    useEffect(() =>{
    async function fetchDtata(){
        const request = await axios.get(requests.fetchNetflixOriginals)
        setMovie(
            request.data.results[
                Math.floor(Math.random() * request.data.results.length)
            ]
        );
    }
    fetchDtata();
},[])

    console.log(movie)
   
    function truncate(str, n) {
        return str?.length>n ? str.substr(0, n, -1) + "..." : str;
    }
    return(
       <header className= "banner"
           style={{
               backgroundSize: "cover",
               backgroundImage: `url(
                   "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
               )`,
               backgroundPosition:"center center",
           }}
        >
            <div className="banner__contents">
                <h2 className="banner__title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h2>
                
                <div className="banner__buttons">
                    <button className="banner__button banner__button__left">Play</button>
                    <button className="banner__button" onClick={handleClick}>My List</button>
                </div>

                <h2 className="banner__description">
                    {truncate(movie?.overview, 150)}
                </h2>

            </div>
            <div className="banner--fadeBottom"/>
       </header>
    )
}

export default Banner