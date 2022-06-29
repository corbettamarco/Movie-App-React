import { arrMovies } from "../mocks/mockMovies"

export const getMovies = () => {
    return arrMovies.Search;
}

export const filterMovies = (keywords) => {
  
    if (keywords === "") {
        return [];
    }

    const filteredMovies = getMovies().filter((movie) => movie.Title.toLowerCase().includes(keywords));
       
   
    return filteredMovies;

}
