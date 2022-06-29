import { Center, Divider, SimpleGrid } from '@chakra-ui/react';
import { getMovies } from '../api/getMovies';
import Carte from './Carte.js';
import Risultati from './Risultati';

const movies = getMovies();


const Griglia = () => {
    return (

        <>
            {
                <Risultati />
            }
            <Center >
                <Divider orientation='horizontal' m="5" w="100%" />
            </Center>
            <Center>
                <SimpleGrid minChildWidth='250px' gap={6} width="80%" p="10px">
                    {
                        movies.Search.map(movie => <Carte currentMovie={movie} />)
                    }
                </SimpleGrid>
            </Center>
        </>
    )
}



export default Griglia;