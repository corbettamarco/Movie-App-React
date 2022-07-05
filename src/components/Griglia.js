import { Center, Divider, SimpleGrid } from '@chakra-ui/react';
import Carta from './Carta.js';
import EseguiRicerca from './EseguiRicerca.js';
import InsertFilm from './InsertFIlm.js';
import NoResults from './NoResults.js';
import Risultati from './Risultati';


const Griglia = (props) => {

    const { movies } = props;


    return (
        <>
            {
                movies && movies.length !== 0
                    ? <Risultati numeroFilm={movies} />
                    : <EseguiRicerca />
            }

            <Center >
                <Divider orientation='horizontal' m="5" w="100%" />
            </Center>
            <Center>
                <SimpleGrid minH="100vh" minChildWidth='250px' gap={6} width="80%" p="10px" >
                    {
                        movies && movies.length === 0 &&
                        <>
                            <NoResults />
                            <InsertFilm movies={movies}/>
                        </>
                    }

                    {

                        movies && movies.length > 0 &&
                        <InsertFilm movies={movies} />
                    }
                    {

                        movies && movies.length > 0 &&
                        movies.map((movie, index) => <Carta currentMovie={movie} key={index} />)

                    }


                </SimpleGrid>
            </Center>
        </>
    )
}



export default Griglia;