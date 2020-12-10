/*import React, {useEffect, useState} from 'react'
import axios from './axios';
import requests from './Requests';
import './Banner.css';
import API from "./utils/API.js";

function handleClick(){    
    if (API.isAuth() === false) {
    axios.get("http://localhost:8800/favoris/fav").then(response => {
        console.log(response.data)
      })

function handleClick(){    
    
    axios.get("http://localhost:8800/favoris/fav").then(response => {
        console.log(response.data)
      })

    axios
        .post("http://localhost:8800/favoris/fav", {
          nameMovies: 'theo',
          user_id: '2',
        })
        .then(() => {
          console.log("Post successful!")
        })
        .catch(() => {
          console.log("Oops, request failed!")
        })
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
                    <button className="banner__button">Play</button>
                    <button className="banner__button" onClick={()=>handleClick()}>My List</button>
                </div>

                <h2 className="banner__description">
                    {truncate(movie?.overview, 150)}
                </h2>

            </div>
       </header>
    )
}
}
}
export default Banner*/
import React, {useEffect, useState} from 'react'
import axios from './axios';
import requests from './Requests';
import './Banner.css';
import API from "./utils/API.js";

function handleClick(movies){    
    console.log(movies);
    if (API.isAuth() === false) {
    axios.get("http://localhost:8800/favoris/fav").then(response => {
        console.log(response.data)
      })

    axios
        .post("http://localhost:8800/favoris/fav", {
          nameMovies: movies,
        })
        .then(() => {
          console.log("Post successful!")
        })
        .catch(() => {
          console.log("Oops, request failed!")
        })
    }else{
        console.log("tu n'es pas connecter")
    }
}


function Banner({ newBackDrop }) {
    const [movie, setMovie]= useState([]);
    let [searchedMov, setSearchedMov] = useState()

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

    useEffect(()=>{

        const test = ()=>{
            if (newBackDrop.length != 0){
                console.log("c'est cool");
                setSearchedMov(newBackDrop);
            }
        }
        test();

    })

    /*const test = ()=>{
        if (newBackDrop.length != 0){
            console.log("c'est cool");
            setSearchedMov(false);
        }
    }*/
    //test();

    console.log(searchedMov);
   


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
            <h1>{searchedMov}</h1>
            <div className="banner__contents">

                <h2 className="banner__title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h2>
                
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button" onClick={()=>handleClick(movie?.title || movie?.name || movie?.original_name)}>My List</button>
                </div>

                <h2 className="banner__description">
                    {truncate(movie?.overview, 150)}
                </h2>

            </div>
       </header>
    )
}

export default Banner