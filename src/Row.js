import React, {useState, useEffect} from 'react';
import axios from "./axios";
import "./Row.css";

const base_url = "http://image.tmdb.org/t/p/original/"

function Row ({title,fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);

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
    
    console.table (movies)
    return (
        <div className="row">
           <h2>{title}</h2>

           <div className="row__posters">
               {/** serveral row__posters */}

            {movies.map(movie => (
                <img
                    key={movie.id}
                   className={`row__poster ${isLargeRow && "row_posteLarge"}`} 
                   src = {`${base_url}${ isLargeRow ? movie.poster_path: movie.backdrop_path}`} 
                   alt={movie.name}
                />
            ))}

           </div>
        </div>
    )
}

export default Row