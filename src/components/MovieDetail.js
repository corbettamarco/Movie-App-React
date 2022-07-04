import { ModalBody, Text, ModalHeader } from "@chakra-ui/react"
import { StarIcon } from "@chakra-ui/icons"
import { searchSingleMovie } from "../api/getMovies";
import { useState, useEffect } from 'react';

const MovieDetail = (props) => {
    const { currentMovie } = props;
    const [movieDetails, setMovieDetails] = useState([]);
    
    const onLoad = async () => {
        const movie = await searchSingleMovie(currentMovie.imdbID);
        setMovieDetails(movie);
    }
    useEffect(() => { onLoad() }, [])


    return (
        <>
            {movieDetails ? (
                <>
                    <ModalHeader>{movieDetails.Title}</ModalHeader>
                    <ModalBody>
                        <Text fontWeight='bold' mb='1rem'>
                            {movieDetails.Plot}
                        </Text>
                        <Text><b>Anno: </b>{movieDetails.Year}</Text>
                        <Text><b>Cast: </b>{movieDetails.Actors}</Text>
                        <Text><b>Rating: </b>{movieDetails.imdbRating}  <StarIcon fontSize="sm" mb="1" /></Text>
                        <Text><b>Durata: </b>{movieDetails.Runtime}</Text>
                        <Text textTransform='uppercase'><b>Tipo: </b>{movieDetails.Type}</Text>
                        <Text count={2} />
                    </ModalBody>
                </>) : null};
        </>
    )
}

export default MovieDetail

/*

const MovieDetail = (movieId) => {

    const[movieDetails, setMovieDetails] = useState([]);
    
    const onLoad=async () =>{
        const movie=await searchSingleMovie(movieId);
        setMovieDetails(movie);
        console.log(movieDetails);
    }
useEffect(()=>{onLoad()},[])


    return (
        <>
            
            {movieDetails ?(
            <ModalBody>
                 <ModalHeader>{movieDetails.Title}</ModalHeader>
                <Text fontWeight='bold' mb='1rem'>
                    {movieDetails.Plot}
                </Text>
                <Text><b>Anno: </b>{movieDetails.Year}</Text>
                <Text><b>Cast: </b>{movieDetails.Actors}</Text>
                <Text><b>Rating: </b>{movieDetails.imdbRating}  <StarIcon fontSize="sm" mb="1" /></Text>
                <Text><b>Durata: </b>{movieDetails.Runtime}</Text>
                <Text textTransform='uppercase'><b>Tipo: </b>{movieDetails.Type}</Text>
                <Text count={2} />
            </ModalBody>   ) : null}; 
        </>
    )
}*/
