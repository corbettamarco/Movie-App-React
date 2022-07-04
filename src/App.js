import { Box, Center, ChakraProvider, VStack } from '@chakra-ui/react';
import { searchMovies } from './api/getMovies';
import './App.css';
import Griglia from './components/Griglia.js';
import Navbar from './components/Navbar.js';
import { useState } from 'react';


function App() {

  const [movies, setMovies] = useState(undefined); //variabile di stato dichiarata con funzione di hook//
  //useState ritorna un array//

  const searchCallback = async (keywords,tipology) => {
    if (keywords === "") return;
    const movies = await searchMovies(keywords,tipology);
    setMovies(movies); /*rendering delle cards*/
  }

  return (
    <ChakraProvider >
      <Center>
        <VStack w='100%' h='100%' >
          <Box bg="#1A1C28" h="100%" w="100%" >
            <Navbar searchCallback={searchCallback} />
            <Griglia movies={movies}  />
          </Box>
        </VStack>
      </Center>
    </ChakraProvider>
  );
}

export default App;
