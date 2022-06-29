import { Center, Divider, SimpleGrid } from '@chakra-ui/react';
import Carte from './Carte.js';
import Risultati from './Risultati';



const Griglia = (props) => {
    const { movies } = props;
    return (
        <>
            {
                <Risultati numeroFilm={movies}/>
            }
            <Center >
                <Divider orientation='horizontal' m="5" w="100%" />
            </Center>
            <Center>
                <SimpleGrid  minH="100vh" minChildWidth='250px' gap={6} width="80%" p="10px">
                    {
                        movies.map((movie,index) => <Carte currentMovie={movie} key={index} />)
                    }
                </SimpleGrid>
            </Center>
        </>
    )
}



export default Griglia;