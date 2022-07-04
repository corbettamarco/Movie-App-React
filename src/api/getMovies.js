import axios from "axios";


export const searchMovies = async (keywords,tipology) => {


    const response = await axios.get(
        `http://www.omdbapi.com/?apikey=4bc01fe7&s=${keywords}&type=${tipology}`
    );
    return response.data.Response === 'False' ? [] : response.data.Search;
}


export const searchSingleMovie = async (id) => {


    const response2 = await axios.get(
        `http://www.omdbapi.com/?apikey=4bc01fe7&i=${id}&plot=short`
    );
    return response2.data ;
    
}

