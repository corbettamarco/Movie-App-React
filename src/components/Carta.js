import { StarIcon } from '@chakra-ui/icons';
import { Box, Center, Image } from '@chakra-ui/react';
import Modale from './Modale';
import { searchSingleMovie } from '../api/getMovies'; 
import { useState, useEffect } from 'react';

const Carta =  (props) => {

  const { currentMovie } = props;
  const [movieDetails, setMovieDetails] = useState([]);

  const onLoad = async () => {
    const movie = await searchSingleMovie(currentMovie.imdbID);
    setMovieDetails(movie);
}
useEffect(() => { onLoad() })


  return (<>

    <Box maxW='sm' borderWidth='2px' borderRadius='lg' overflow='hidden' bg="black" maxH="650px">
      <Center>  
        <Image src={currentMovie.Poster} alt={currentMovie.Title} h="425px" w="100%" />
      </Center>
      <Box p='6'>
        <Box display='flex' alignItems='baseline'>

          <Box
            color='gray.400'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='s'
            textTransform='uppercase'

          >
              {movieDetails.imdbRating } <StarIcon fontSize="sm" mb="1" /> &bull; {currentMovie.Year} 
          </Box>
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h3'
          fontSize='lg'
          lineHeight='tight'
          noOfLines={1}
          textColor="white"
        >
          {currentMovie.Title}
        </Box>

        <Box
          color='gray.400'
          fontWeight='semibold'
          letterSpacing='wide'
          fontSize='s'
          textTransform='uppercase'

          mt="2">
          {currentMovie.Type}
          <Box as='span' color='gray.600' fontSize='sm'>

          </Box>
        </Box>
        <Box display='flex' mt='2' alignItems='center'>

        </Box>
      </Box>
      {
      <Modale currentMovie={currentMovie}/>
      }
 
    </Box>

  </>)
}

export default Carta;