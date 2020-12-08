import React, {useState, useEffect} from 'react';
import axios from "./axios";
import "./Row.css";
import Youtube from "react-youtube";
import ReactPlayer from "react-player";


const base_url = "http://image.tmdb.org/t/p/original/"

function Row ({title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    //const [trailerUrl, setTrailerUrl] =useState("");
    const [videoURL, setTrailerURL] = useState('');

    // snippet of code whith runs bases on a spesific condition/variable
    useEffect(() => { 
    // if [], run once when the row loads, and dont run again
    async function fetchData(){
        const request = await axios.get(fetchUrl);    
        setMovies(request.data.results);
        return request;
    }
    fetchData();
    }, [fetchUrl]);
    

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            //https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        }
    };

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
        const newName = movieStrID.toString().replace(/ /g, '_');
        const request = axios.get("https://www.googleapis.com/youtube/v3/search?key=AIzaSyAgusoGBmu9n985bgDid0WBwT28dXelZu4&type=video&part=snippet&maxResults=1&q="+newName+"_trailer")
            .then(response => {
                for (let i in response.data.items){
                    let item = response.data.items[i];
                    console.log("videoId : ", item.id.videoId);
                    const fullURL = "https://www.youtube.com/watch?v="+item.id.videoId
                    setTrailerURL(fullURL);
                    return (item.id.videoId);
                }
            })
            .catch(error =>{
                console.log(error);
            });
    }

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
            />
            </div>
    );
}

export default Row;