import { StarIcon } from '@chakra-ui/icons';
import { Box, Center, Image } from '@chakra-ui/react';
import Modale from './Modale';


const Carte = (props) => {

  const { currentMovie } = props;


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
            {currentMovie.Year} &bull; {currentMovie.imdbRating} <StarIcon fontSize="sm" mb="1" />
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

export default Carte;