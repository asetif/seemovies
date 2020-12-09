import React, {useState, useEffect} from 'react';
import axios from "./axios";
import "./Row.css";
import Youtube from "react-youtube";
import ReactPlayer from "react-player";
import requests from './Requests';


const base_url = "http://image.tmdb.org/t/p/original/"

function Row ({title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [style, setStyle] = useState("display: none")
    const [videoURL, setTrailerURL] = useState('');

    // snippet of code whith runs bases on a spesific condition/variable
    useEffect(() => { 
    // if [], run once when the row loads, and dont run again
    /*async function fetchData(){
        const request = await axios.get(fetchUrl);    
        setMovies(request.data.results);
        return request;
    }*/
    /*async function fetchData(){
        console.log(fetchUrl);
        const arrayObj = Object.values(fetchUrl);
        console.log(arrayObj);
        arrayObj.forEach((element)=>{
            console.log(element);
        })
        //setMovies(request.data.results);
        //return request;

    }
    fetchData();
    }, [fetchUrl]);*/

    async function fetchData() {
        const arrayObj = Object.values(fetchUrl);
        const arrayResults = [];
        for (let element of arrayObj){
            try {
                var result = await axios.get(element);
                arrayResults.push(result.data.results);
            }
            catch(e){
                console.log(e.message);
            }
        }
        setMovies(arrayResults);
    }
    fetchData();
    }, []);


    function displayTrailer(movieTitle, movieName) {
        let movieStrID;
        if (movieName !== undefined) {
            movieStrID = movieName
        } else if (movieTitle !== undefined) {
            movieStrID = movieTitle;
        } else {
            console.log("c'est vide");
            return;
        }
        console.log(movieStrID)
<<<<<<< HEAD
            const newName = movieStrID.toString().replace(/ /g, '_');
            const request = axios.get("https://www.googleapis.com/youtube/v3/search?key=AIzaSyCBM5qMqMryNfzGMvNW2ICKiPCMY3Z2ZY4&type=video&part=snippet&maxResults=1&q="+newName+"_trailer")
            .then(response => {
                for (var i in response.data.items){
                var item = response.data.items[i];
                console.log("videoId : ", item.id.videoId);
                const fullURL = "https://www.youtube.com/watch?v="+item.id.videoId
                setTrailerURL(fullURL);
                setStyle("display: block") 
                //document.getElementById("player").classList.add('block');
                return (item.id.videoId);
=======
        const newName = movieStrID.toString().replace(/ /g, '_');
        const request = axios.get("https://www.googleapis.com/youtube/v3/search?key=AIzaSyBAf3iuq-7jHcVQKrKq_M2zBv_vcAtt5qM&type=video&part=snippet&maxResults=1&q="+newName+"_trailer")
            .then(response => {
                for (let i in response.data.items){
                    let item = response.data.items[i];
                    console.log("videoId : ", item.id.videoId);
                    const fullURL = "https://www.youtube.com/watch?v="+item.id.videoId
                    setTrailerURL(fullURL);
                    return (item.id.videoId);
>>>>>>> f5f3ab468a46f846b52dac4b282b1ecdd25ab975
                }
            })
            .catch(error =>{
                console.log(error);
            });
    }

    //console.log(movies);

    /*const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('');
        }else {
            movieTrailer(movie?.name && "")
                .then((url) => {
                    //https://www.youtube.com/watch?v=XtMThy8QKqU
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v'));
                    console.log(url, setTrailerUrl)
                })
                .catch((error) => console.log(error));
;        }
    };*/
    return (
        <div>
            <div>
                <ReactPlayer
                    url={videoURL}
                    width="100%"
                    style = {style}
                />
            </div>
                {movies.map((movieArray, i)=>{
                    return (
                        <div id="row">
                            <h1>{title[i]}</h1>
                            <div className="row__posters">
                                {movieArray.map((movie)=>{
                                    return <img
                                            key={movie.id}
                                            onClick = {()=>displayTrailer(movie.name, movie.title)}
                                            className={`row__poster ${isLargeRow && "row_posteLarge"}`} 
                                            src = {`${base_url}${ isLargeRow ? movie.poster_path: movie.backdrop_path}`} 
                                            alt={movie.name}
                                            >
                                            </img>
                                })}
                            </div>
                        </div>
                    )
                })}
        </div>
        /*
        <div className="row">
           <h2>{title}</h2>

           <div className="row__posters">
                {movies.map((movie) => (
                    <img
                      key={movie.id}
                      //onClick = {() => handleClick(movie)}
                      onClick = {()=>displayTrailer(movie.title, movie.name)}
                      className={`row__poster ${isLargeRow && "row_posteLarge"}`} 
                      src = {`${base_url}${ isLargeRow ? movie.poster_path: movie.backdrop_path}`} 
                      alt={movie.title}
                    />
            ))}
            </div>
            <ReactPlayer
                url={videoURL}
                width="100%"
            />
            
            </div>
                */
    );
}

export default Row;