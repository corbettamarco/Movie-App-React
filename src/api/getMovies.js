import axios from "axios";


export const searchMovies = async (keywords) => {

    
        const response = await axios.get(
            `http://www.omdbapi.com/?i=tt3896198&apikey=4bc01fe7&s=${keywords}`
        );

        if (response.data.Response === 'False') {
            return [];
        } else {
            return response.data.Search; /*al posto di response.json.Search*/
        }

    } 
    
