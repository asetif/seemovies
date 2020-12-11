const API_KEY = "dc57c5ab022fcc26f0c3cd702f97e8f2";

/**
 * get the movies in API depending of criteria
 * @type {{fetchTrending: string, fetchNetflixOriginals: string, fetchComedyMovies: string, fetchActionMovies: string, fetchRomenceMovies: string, fetchHoroorMovies: string, fetchDocumentaries: string, fetchTopRated: string}}
 */
const requests = {
    fetchTrending : `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals : `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated : `/movies/top-rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHoroorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomenceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
    
}

export default requests;