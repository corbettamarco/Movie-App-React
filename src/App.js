import { Box, Center, ChakraProvider } from '@chakra-ui/react';
import { filterMovies } from './api/getMovies';
import './App.css';
import Griglia from './components/Griglia.js';
import Navbar from './components/Navbar.js';
import { useState } from 'react';


function App() {

  const [movies, setMovies] = useState([]); //variabile di stato dichiarata con funzione di hook//
  //useState ritorna un array//
  const searchMovies = (keywords) => {
    setMovies(filterMovies(keywords));
  }

  return (
    <ChakraProvider>
      <Center>
        <Box bg="#1A1C28" h="100%" w="100%" >
          <Navbar searchCallback={searchMovies} />
          <Griglia movies={movies} />
        </Box>
      </Center>
    </ChakraProvider>
  );
}

export default App;
