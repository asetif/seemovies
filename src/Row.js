import React, {useState, useEffect} from 'react';
import axios from "./axios";
import "./Row.css";
import Youtube from "react-youtube";
import ReactPlayer from "react-player";
import requests from './Requests';


const base_url = "http://image.tmdb.org/t/p/original/"

function Row ({title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    //const [trailerUrl, setTrailerUrl] =useState("");
    var [videoURL, setTrailerURL] = useState('');

    // snippet of code whith runs bases on a spesific condition/variable
    useEffect(() => { 
    // if [], run once when the row loads, and dont run again
 
    

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


    /**
     * use the selected movie to get or not the trailer
     * @param movieTitle // Netflix originals
     * @param movieName // others
     */
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
        const request = axios.get("https://www.googleapis.com/youtube/v3/search?key=AIzaSyBAf3iuq-7jHcVQKrKq_M2zBv_vcAtt5qM&type=video&part=snippet&maxResults=1&q="+newName+"_trailer")
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

    /**
     * Displays the trailer movie but only if a movie is selected in rows
     * @returns {JSX.Element|undefined}
     */
    function testRowPlayer() {
        if (videoURL !== "") {
            return (
                <div>
                    <ReactPlayer
                        url={videoURL}
                        width="100%"
                    />
                </div>
            );
        } else {
            return undefined
        }
    }

    /**
     * Displays the different movie rows + trailer
     */
    return (
        <div>
            { testRowPlayer() }
            <div>
                {movies.map((movieArray, i)=>{
                    return (
                        <div className="row">
                            {title[i]}
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
        </div>

     
    );
}

export default Row;