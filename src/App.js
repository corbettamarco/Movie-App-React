import { Box, Center, ChakraProvider } from '@chakra-ui/react';
import './App.css';
import Griglia from './components/Griglia.js';
import Navbar from './components/Navbar.js';

function App() {



  return (
    <ChakraProvider>
      <Center>
        <Box bg="#1A1C28" h="100%" w="100%" >
          <Navbar />
          <Griglia />
        </Box>
      </Center>
    </ChakraProvider>
  );
}

export default App;
