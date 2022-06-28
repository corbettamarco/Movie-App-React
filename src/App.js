import './App.css';
import { Center, ChakraProvider, Button, Box, Text } from '@chakra-ui/react'

import Navbar from './Navbar.js';
import { Input } from '@chakra-ui/react'

import Carte from './Carte';
import { movies } from './Carte.js';

function App() {

  return (
    <ChakraProvider >
      
      <Box bg="grey" h="100vw">
        <Navbar>
        </Navbar>

        <Box >
          <Input placeholder='Cerca' w="200" m="4" h="10" bg="white" style={{ marginTop: "20px" }} />
          <Button colorScheme='red' m="2" marginTop="1" h="11" p="5">Cerca</Button>
          <Center>
            <Text p="10px" style={{ font: "caption", fontSize: "2rem", fontWeight: "bold" }}>Risultati: {movies.length}</Text>
          </Center>

        </Box>

        <Center>

          <Carte />
        </Center>
      </Box>
      
    </ChakraProvider>
  );
}

export default App;
